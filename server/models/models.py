"""
Database models.
"""
from ..extensions import get_uuid, db

owners_pets = db.Table(
    "owners_pets",
    db.Column("user_id", db.ForeignKey("users.id")),
    db.Column("pet_id", db.ForeignKey("pets.id")),
    db.Column("time_stamp", db.DateTime(timezone=True), default=db.func.now()),
)


class User(db.Model):
    __tablename__ = "users"
    id = db.Column(db.String(256), primary_key=True, default=get_uuid)
    public_id = db.Column(db.String(256), unique=True, nullable=False)
    user_name = db.Column(db.String(256), unique=True, nullable=False)
    email = db.Column(db.String(256), unique=True, nullable=False)
    password = db.Column(db.String(256), unique=False, nullable=False)
    first_name = db.Column(db.String(256), unique=False, nullable=False)
    last_name = db.Column(db.String(256), unique=False, nullable=False)
    avatar = db.Column(db.String(256), unique=False, nullable=True)

    pets = db.relationship("Pet", secondary=owners_pets, back_populates="owners")
    houses = db.relationship("Address", back_populates="home_owner")
    posted_by = db.relationship("Post", back_populates="poster")

    def __init__(
        self,
        public_id,
        user_name,
        email,
        password,
        first_name,
        last_name,
        avatar,
    ):
        self.public_id = public_id
        self.user_name = user_name
        self.email = email
        self.password = password
        self.first_name = first_name
        self.last_name = last_name
        self.avatar = avatar

    def __repr__(self):
        return f'User("{self.id}")'

    def serialize(self):
        return {
            "user": self.user_name,
            "email": self.email,
            "avatar": self.avatar,
        }

    def serialize_address(self):
        return {
            "id": self.id,
            "user": self.user_name,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "avatar": self.avatar,
            "addresses": [house.serialize() for house in self.houses],
        }

    def serialize_pet(self):
        return {
            "id": self.id,
            "user": self.user_name,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "avatar": self.avatar,
            "pets": [pet.serialize() for pet in self.pets],
        }

    def serialize_post(self):
        return {
            "id": self.id,
            "user": self.user_name,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "avatar": self.avatar,
            "messages": [post.serialize for post in self.posted_by],
        }

    def serialize_extended(self):
        return {
            "id": self.id,
            "user": self.user_name,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "avatar": self.avatar,
            "pets": [pet.serialize() for pet in self.pets],
            "addresses": [house.serialize() for house in self.houses],
            "messages": [post.serialize() for post in self.posted_by],
        }


class Pet(db.Model):
    __tablename__ = "pets"
    id = db.Column(db.String(256), primary_key=True, default=get_uuid)
    name = db.Column(db.String(256), unique=False, nullable=True)
    specie = db.Column(db.String(256), unique=False, nullable=True)
    age = db.Column(db.String(256), unique=False, nullable=True)
    size = db.Column(db.String(256), unique=False, nullable=True)
    need_backyard = db.Column(db.Boolean, unique=False, nullable=True)
    for_adoption = db.Column(db.Boolean, unique=False, nullable=True)

    owners = db.relationship("User", secondary=owners_pets, back_populates="pets")
    photos = db.relationship("Photo", back_populates="pets")
    posts = db.relationship("Post", back_populates="answers")

    def __init__(self, name, specie, age, size, need_backyard, for_adoption):
        self.name = name
        self.specie = specie
        self.age = age
        self.size = size
        self.need_backyard = need_backyard
        self.for_adoption = for_adoption

    def __repr__(self):
        return f'Pet("{self.name}","{self.specie})'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "specie": self.specie,
            "size": self.size,
            "age": self.age,
            "need_backyard": self.need_backyard,
            "for_adoption": self.for_adoption,
            "photos": [photo.serialize() for photo in self.photos],
            "owners": [owner.serialize() for owner in self.owners],
            "messages": [post.serialize() for post in self.posts],
        }

    def serialize_id(self):
        return {"id": self.id}

    def add_owner(self, user):
        self.owners.append(user)

    def add_post(self, post):
        self.posts.append(post)


class Address(db.Model):
    __tablename__ = "addresses"
    id = db.Column(db.String(256), primary_key=True, default=get_uuid)
    street = db.Column(db.String(256), unique=False, nullable=False)
    building_number = db.Column(db.String(256), unique=False, nullable=False)
    department_number = db.Column(db.String(256), unique=False, nullable=True)
    commune = db.Column(db.String(256), unique=False, nullable=False)
    region = db.Column(db.String(256), unique=False, nullable=True)
    has_backyard = db.Column(db.Boolean, unique=False, nullable=True)
    habitant = db.Column(
        db.String(256), db.ForeignKey("users.id"), unique=False, nullable=True
    )

    home_owner = db.relationship("User", back_populates="houses")

    def __init__(
        self,
        street,
        building_number,
        department_number,
        commune,
        region,
        has_backyard,
        habitant,
    ):
        self.street = street
        self.building_number = building_number
        self.department_number = department_number
        self.commune = commune
        self.region = region
        self.has_backyard = has_backyard
        self.habitant = habitant

    def __rep__(self):
        return f'Address("{self.street}","{self.building_number}","{self.commune}")'

    def serialize(self):
        return {
            "id": self.id,
            "street": self.street,
            "number": self.building_number,
            "department_number": self.department_number,
            "commune": self.commune,
            "region": self.region,
            "has_backyard": self.has_backyard,
        }


class Photo(db.Model):
    __tablename__ = "photos"
    id = db.Column(db.String(256), primary_key=True, default=get_uuid)
    url = db.Column(db.String(256), unique=True, nullable=False)
    pet_id = db.Column(
        db.String(256), db.ForeignKey("pets.id"), unique=False, nullable=True
    )
    pets = db.relationship("Pet", back_populates="photos")

    def __init__(self, url, pet_id):
        self.url = url
        self.pet_id = pet_id

    def __repr__(self):
        return f'Photo("{self.url}")'

    def serialize(self):
        return {"id": self.id, "url": self.url}


class Post(db.Model):
    __tablename__ = "posts"
    id = db.Column(db.String(256), primary_key=True, default=get_uuid)
    reference_post_id = db.Column(db.String(256), unique=False, nullable=True)
    message = db.Column(db.String(512), unique=False, nullable=False)
    pet_id = db.Column(db.String(256), db.ForeignKey("pets.id"))
    user_id = db.Column(db.String(256), db.ForeignKey("users.id"))

    answers = db.relationship("Pet", back_populates="posts")
    poster = db.relationship("User", back_populates="posted_by")

    def __init__(self, reference_post_id, message, user_id):
        self.reference_post_id = reference_post_id
        self.message = message
        self.user_id = user_id

    def __repr__(self):
        return f'Post("{self.message}","{self.pet_id}, "{self.user_id}")'

    def serialize(self):
        return {
            "id": self.id,
            "reference_post_id": self.reference_post_id,
            "message": self.message,
            "pet_id": self.pet_id,
            "user_id": self.user_id,
            "user": self.poster.serialize(),
        }
