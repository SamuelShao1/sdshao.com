# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

import json
import psutil
from flask import Flask, request
from firebase_functions import https_fn, firestore_fn
from firebase_admin import firestore, initialize_app


app = Flask(__name__)
initialize_app()

@app.route('recieveData', methods=['Post'])
def recieve_data():
    data = request.json
    data['timestmap'] = firestore.SERVER_TIMESTAMP
    firestore.client().collection('systemData').add(data)
    return 'Data recieved', 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)
#@https_fn.on_request()
# def on_request_example(req: https_fn.Request) -> https_fn.Response:
#     return https_fn.Response("Hello world!")python