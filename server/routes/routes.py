import os
from ..models.models import *
from flask import Blueprint, jsonify, request
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
from datetime import datetime
from functools import wraps
from ..extensions import get_uuid


bp = Blueprint("bp", __name__)

db_key = os.getenv("FLASK_SECRET_KEY")


def token_required(f):
    @wraps(f)
    def decorator(*args, **kwargs):
        token = None
        if "Authorization" in request.headers:
            token = request.headers["Authorization"].split(" ")[1]
        if not token:
            return jsonify({"response": "No tiene un token valido"}), 401
        try:
            data = jwt.decode(token, db_key, algorithms=["HS256"])
            active_user = User.query.filter_by(public_id=data["public_id"]).first()
        except Exception as e:  # Capture the exception
            return jsonify({"response": "No tiene un token valido"}), 401
        return f(active_user, *args, **kwargs)

    return decorator


@bp.route("/users", methods=["GET"])
def handle_hello():
    users = User.query.all()
    response_body = jsonify([user.serialize_extended() for user in users])
    return (response_body), 200


@bp.route("/pets", methods=["GET"])
def get_available_pets():
    pets = Pet.query.filter(Pet.for_adoption == True).all()
    return jsonify([pet.serialize() for pet in pets]), 200


@bp.route("/register", methods=["GET", "POST"])
def register_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data["password"], method="sha256")
    new_user = User(
        public_id=get_uuid(),
        user_name=data["user_name"],
        email=data["email"],
        password=hashed_password,
        first_name=data["first_name"],
        last_name=data["last_name"],
        avatar=data["avatar"],
    )
    db.session.add(new_user)
    db.session.commit()
    return (
        jsonify(
            {"response": "Registro exitoso", "user": new_user.serialize_extended()}
        ),
        200,
    )


@bp.route("/login", methods=["GET", "POST"])
def login_user():
    auth = request.get_json()
    if not auth["user_name"] or not auth["password"]:
        return jsonify({"response": "No hay datos para validar el logueo"}), 401

    user = User.query.filter_by(user_name=auth["user_name"]).first()
    if check_password_hash(user.password, auth["password"]):
        token = jwt.encode(
            {
                "public_id": user.public_id,
                "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            },
            db_key,
        )
        return (
            jsonify(
                {
                    "response": "Logueo correcto",
                    "user": user.serialize_extended(),
                    "token": token,
                }
            ),
            200,
        )
    return jsonify({"response": "Usuario o Contraseña no valida"}), 401


@bp.route("/address", methods=["GET", "POST"])
@token_required
def manage_address(active_user):
    data = request.get_json()
    new_house = Address(
        street=data["street"],
        building_number=data["building_number"],
        department_number=data["department_number"],
        commune=data["commune"],
        region=data["region"],
        has_backyard=data["has_backyard"],
        habitant=active_user.id,
    )
    db.session.add(new_house)
    db.session.commit()
    return (
        jsonify(
            {"response": "Registro exitoso", "user": active_user.serialize_extended()}
        ),
        200,
    )


@bp.route("/pet/<string:id>", methods=["GET"])
def get_pet(searched_id):
    searched_pet = Pet.query.filter(Pet.id == searched_id).first()
    return (
        jsonify({"response": "Registro exitoso", "pet": searched_pet.serialize()}),
        200,
    )


@bp.route("/pet", methods=["GET", "POST"])
@token_required
def manage_pet(active_user):
    data = request.get_json()
    new_pet = Pet(
        name=data["name"],
        specie=data["specie"],
        age=data["age"],
        size=data["size"],
        need_backyard=data["need_backyard"],
        for_adoption=data["for_adoption"],
    )
    new_pet.add_owner(active_user)
    new_post = Post(
        reference_post_id=None, message=data["message"], user_id=active_user.id
    )
    new_pet.add_post(new_post)
    db.session.add(new_pet)
    db.session.commit()
    return (
        jsonify(
            {
                "response": "Registro exitoso",
                "pet": new_pet.serialize(),
                "user": active_user.serialize_extended(),
            }
        ),
        200,
    )


@bp.route("/photo", methods=["GET", "POST"])
@token_required
def manage_pictures(active_user):
    data = request.get_json()
    new_photo = Photo(url=data["url"], pet_id=data["pet_id"])
    db.session.add(new_photo)
    db.session.commit()
    return (
        jsonify(
            {
                "response": "Registro exitoso",
                "photo": new_photo.serialize(),
                "user": active_user.serialize_extended(),
            }
        ),
        200,
    )


@bp.route("/post", methods=["GET", "POST"])
@token_required
def manage_post(active_user):
    data = request.get_json()
    pet = Pet.query.filter(Pet.id == data["pet_id"]).first()
    new_post = Post(
        reference_post_id=data["reference_post_id"],
        message=data["message"],
        user_id=active_user.id,
    )
    pet.add_post(new_post)
    db.session.add(new_post)
    db.session.commit()
    return jsonify({"response": "Registro exitoso", "post": new_post.serialize()}), 200
