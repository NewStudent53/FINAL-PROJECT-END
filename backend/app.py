import os
from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__, static_folder='../frontend/build', static_url_path='/')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'your_secret_key'

db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

from backend import routes

if __name__ == '__main__':
    app.run(debug=True)
