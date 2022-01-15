from pymongo import MongoClient

def connectionDB(host, port, database):
    try:
        client = MongoClient(host, port)
        db = client.get_database(database)
        return db
    except:
        raise

_host_db_autos = 'localhost'
_port_db_autos = 27017
_db_autos = 'autos'

db_autos = connectionDB(_host_db_autos, _port_db_autos, _db_autos)