from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__) # App instance
CORS(app) # Allow Cross origin resource sharing

@app.route("/api/home", methods=['GET'])
def get_home():
    print("get_home() was called.")
    return jsonify({
        "msg": "Velkommen!"
    })

if __name__ == "__main__":
    app.run(debug=True, port=8080)