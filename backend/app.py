from flask_cors import CORS
from DB.mongo import db_autos
from DB.cars import cars
from DB.clients import clients
from DB.history import services
from DB.transactions import transactions
from flask import Flask, jsonify, request
import json
from bson.json_util import dumps

app = Flask(__name__)
CORS(app)

@app.before_first_request
def initialize_database_default():
    db_autos.cars.drop()
    db_autos.cars.insert_many(cars)
    db_autos.clientes.drop()
    db_autos.clientes.insert_many(clients)
    db_autos.transactions.drop()
    db_autos.transactions.insert_many(transactions)
    db_autos.history.drop()
    db_autos.history.insert_many(services)
    
initialize_database_default()

@app.route('/getAllClients', methods = ['GET'])
def listarTodo():
    try:        
        res = []
        for i in db_autos.clientes.find({}):
            i["_id"] = str(i["_id"])
            res.append(i)
        return jsonify (res)
    except (Exception) as err:
        return str(err), 500

@app.route('/obtenerVehiculo', methods = ['POST'])
def obtener():
    try:
        if request.method == 'POST':           
            id = request.json['idprop']
            res = db_autos.cars.find({"idprop": str(id)})                   
            return dumps(res)
    except (Exception) as err:
        return str(err), 500

@app.route('/cargarUsuario', methods = ['POST'])
def cargarUsuario():
    try:
        if request.method == 'POST':           
            idprop = request.json['idprop']
            nombre = request.json['nombre']
            apellido = request.json['apellido']
            telefono = request.json['telefono']
            AUX = {
                "idprop" : idprop,
                "nombre": nombre,
                "apellido": apellido,
                "telefono": telefono
            }
            db_autos.clientes.insert_one(AUX)                  
            return "OK"
    except (Exception) as err:
        return str(err), 500

@app.route('/cargarVehiculo', methods = ['POST'])
def cargarVehiculo():
    try:
        if request.method == 'POST':           
            idprop = request.json['idprop']
            color = request.json['color']
            marca = request.json['marca']
            modelo = request.json['modelo']
            patente = request.json['patente']
            AUX = {
                "idprop" : idprop,
                "color": color,
                "marca": marca,
                "modelo": modelo,
                "patente" : patente
            }
            db_autos.cars.insert_one(AUX)                  
            return "OK"
    except (Exception) as err:
        return str(err), 500

@app.route('/agregarHistorial', methods=['POST'])
def agregar():
    try:        
        services = request.json ["services"]
        presu = request.json ["presu"]
        fecha = request.json ["fecha"]
        idprop = request.json ["idprop"]
        AUX = {
                "services":services,
                "presu":presu,
                "fecha":fecha,
                "idprop":idprop,                
            }  
        db_autos.history.insert_one(AUX)
        return "OK"
    except (Exception) as err:
        return str(err), 500

@app.route('/cargarHistoriales', methods = ['POST'])
def obtenerHistoriales():
    try:
        if request.method == 'POST':           
            id = request.json['idprop']
            res = db_autos.history.find({"idprop": str(id)}, {"_id": 0})                   
            return dumps(res)
    except (Exception) as err:
        return str(err), 500

if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)
