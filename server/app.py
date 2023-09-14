"""
Application
"""
from flask import Flask, jsonify
from flask_cors import CORS
from flask_migrate import Migrate
from .extensions import db, generate_sitemap, APIException
from .models.models import *
from .routes.routes import bp
from .admin import setup_admin

# Create Flask instance
app = Flask(__name__)

# Instance of Migrate
migrate = Migrate(app, db)

# Strict slashes fot the URL
app.url_map.strict_slashes = False

# Load configuration from .env file


app.config.from_prefixed_env()

# Initialize database
db.init_app(app)

# Initialize admin
setup_admin(app)

# Allow CORS requests
CORS(app)


@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


@app.route("/")
def sitemap():
    return generate_sitemap(app)


app.register_blueprint(bp, url_prefix="/")

if __name__ == "__main__":
    app.run(debug=True)
