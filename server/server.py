from flask import Flask, request, jsonify
from model import Entry,connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
from datetime import datetime
import json
import base64

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
api = Api(app)
app.debug = True
app.config['SECRET_KEY'] = 'super-secret'

@app.route("/api/form", methods=['POST'])
@cross_origin()
def add_entry():
    file = request.files
    print("file", type(file))
    print("document", type(file["document"]))
    image = file.get('picture', " ")
    print("first image", image)
    # image = json.loads(image.read())
    print("image", type(image))
    data = file['document'].read()
    data = json.loads(data)
    location = data.get("location", " ")
    latitude = location["latitude"]
    longitude = location["longitude"]
    claimant_name =data.get("claimantName", " ")
    address1 =data.get("address1", " ")
    city1 =data.get("city1"," ")
    state1 =data.get("state1", " ")
    zip1 =data.get("zip1", " ")
    address2 =data.get("address2", " ")
    city2 =data.get("city2"," ")
    state2 =data.get("state2", " ")
    zip2 =data.get("zip2", " ")
    day_phone1 =data.get("dayPhone1"," ")
    eve_phone1 =data.get("evePhone1", " ")
    cell_phone1 =data.get("cellPhone1"," ")
    day_phone2 =data.get("dayPhone2"," ")
    eve_phone2 =data.get("evePhone2", " ")
    cell_phone2 =data.get("cellPhone2", " ")
    date_of_birth =data.get("dateOfBirth", None)
    ssn =data.get("ssn", " ")
    date_of_incident =data.get("dateOfIncident", None)
    time_of_incident =data.get("timeOfIncident",  None)
    location_of_incident =data.get("locationOfIncident",  " ")
    vehicle =data.get("vehicle", " ")
    basis_of_claim =data.get("basisOfClaim", " ")
    city_employee =data.get("cityEmployee", " ")
    description =data.get("description", " ")
    item1 =data.get("item1", " ")
    amount1 =data.get("amount1", " ")
    item2 =data.get("item2", " ")
    amount2 =data.get("amount2", " ")
    item3 =data.get("item3", " ")
    amount3 =data.get("amount3", " ")
    item4 =data.get("item4", " ")
    amount4 =data.get("amount4", " ")
    total =data.get("total", " ")
    witness_address_1 =data.get("witnessAddress1", " ")
    witness_phone_1 =data.get("witnessPhone1", " ")
    witness_address_2 =data.get("witnessAddress2", " ")
    witness_phone_2 =data.get("witnessPhone2", " ")
    if time_of_incident:
        time_of_incident = datetime.strptime(date_of_incident + " " + time_of_incident,'%Y-%m-%d %H:%M')
    if date_of_birth:
        date_of_birth = datetime.strptime(date_of_birth, '%Y-%m-%d')
    if date_of_incident:
        date_of_incident = datetime.strptime(date_of_incident, '%Y-%m-%d')
    
    if image:
        print(type(image))
        # image = base64.b64decode(image)
        print("adding image", image)
        # image = psycopg2.Binary(image.read())
        image = image.read()
        new_entry = Entry(claimant_name = claimant_name,
                                address1 = address1,
                                city1 = city1,
                                state1 = state1,
                                zip1 = zip1,
                                address2 = address2,
                                city2 = city2,
                                state2 = state2,
                                zip2 = zip2,
                                day_phone1 = day_phone1,
                                eve_phone1 = eve_phone1,
                                cell_phone1 = cell_phone1,
                                day_phone2 = day_phone2,
                                eve_phone2 = eve_phone2,
                                cell_phone2 = cell_phone2,
                                date_of_birth = date_of_birth,
                                ssn = ssn,
                                date_of_incident = date_of_incident,
                                time_of_incident = time_of_incident,
                                location_of_incident = location_of_incident,
                                vehicle = vehicle,
                                basis_of_claim = basis_of_claim,
                                city_employee = city_employee,
                                description = description,
                                item1 = item1,
                                amount1 = amount1,
                                item2 = item2, 
                                amount2 = amount2,
                                item3 = item3,
                                amount3 = amount3,
                                item4 = item4,
                                amount4 = amount4,
                                total = total,
                                witness_address_1 = witness_address_1,
                                witness_phone_1 = witness_phone_1,
                                witness_address_2 = witness_address_2,
                                witness_phone_2 = witness_phone_2,
                                latitude = latitude,
                                longitude = longitude,
                                image = image)
        print(new_entry)
    else:
        new_entry = Entry(claimant_name = claimant_name,
                                address1 = address1,
                                city1 = city1,
                                state1 = state1,
                                zip1 = zip1,
                                address2 = address2,
                                city2 = city2,
                                state2 = state2,
                                zip2 = zip2,
                                day_phone1 = day_phone1,
                                eve_phone1 = eve_phone1,
                                cell_phone1 = cell_phone1,
                                day_phone2 = day_phone2,
                                eve_phone2 = eve_phone2,
                                cell_phone2 = cell_phone2,
                                date_of_birth = date_of_birth,
                                ssn = ssn,
                                date_of_incident = date_of_incident,
                                time_of_incident = time_of_incident,
                                location_of_incident = location_of_incident,
                                vehicle = vehicle,
                                basis_of_claim = basis_of_claim,
                                city_employee = city_employee,
                                description = description,
                                item1 = item1,
                                amount1 = amount1,
                                item2 = item2, 
                                amount2 = amount2,
                                item3 = item3,
                                amount3 = amount3,
                                item4 = item4,
                                amount4 = amount4,
                                total = total,
                                witness_address_1 = witness_address_1,
                                witness_phone_1 = witness_phone_1,
                                witness_address_2 = witness_address_2,
                                witness_phone_2 = witness_phone_2,
                                latitude = latitude,
                                longitude = longitude)
    print(new_entry)
    db.session.add(new_entry)
    print(new_entry)
    db.session.commit()
    return jsonify({"response": "success"})


@app.route("/api/items", methods=['GET'])
@cross_origin()
def get_entries():
    entries = Entry.query.all()

    items = []
    for entry in entries:
        print("new entry", entry)
        item = {
            "entryId": entry.entry_id,
            "claimantName": entry.claimant_name,
            "address1": entry.address1,
            "city1" : entry.city1,
            "state1" : entry.state1,
            "zip1": entry.zip1,
            "dayPhone1" : entry.day_phone1,
            "evePhone1" : entry.eve_phone1,
            "cellPhone1" : entry.cell_phone1,
            "address2": entry.address2,
            "city2" : entry.city2,
            "state2" : entry.state2,
            "zip2": entry.zip2,
            "dayPhone2" : entry.day_phone2,
            "evePhone2" : entry.eve_phone2,
            "cellPhone2" : entry.cell_phone2,
            "dateOfBirth" : entry.date_of_birth,
            "ssn" : entry.ssn,
            "dateOfIncident" : entry.date_of_incident,
            "timeOfIncident" : entry.time_of_incident,
            "locationOfIncident" : entry.location_of_incident,
            "vehicle" : entry.vehicle,
            "basisOfClaim" : entry.basis_of_claim,
            "cityEmployee" : entry.city_employee,
            "description" : entry.description,
            "item1" : entry.item1,
            "amount1" : entry.amount1,
            "item2" : entry.item2, 
            "amount2" : entry.amount2,
            "item3" : entry.item3,
            "amount3" : entry.amount3,
            "item4" : entry.item4,
            "amount4" : entry.amount4,
            "total" : entry.total,
            "witnessAddress1" : entry.witness_address_1,
            "witnessPhone1" : entry.witness_phone_1,
            "witnessAddress2" : entry.witness_address_2,
            "witnessPhone2" : entry.witness_phone_2,
            "latitude" : entry.latitude,
            "longitude" : entry.longitude
        }
        if entry.image:
            print("image", type(entry.image))
            item['image'] = base64.encodestring(entry.image).decode('ascii')
        if entry.latitude:
            item['location'] = {'latitude': entry.latitude, 'longitude': entry.longitude}

        items.append(item)
    return jsonify(items)


@app.route("/api/delete-entry", methods=['POST'])
def delete_entry():
    entry_id = request.get_json()
    print("entry_id", entry_id)
    entry = Entry.query.filter_by(
        entry_id=entry_id).first()
    print("found entry", entry)
    db.session.delete(entry)
    db.session.commit()
    return jsonify({"response": "success"})



if __name__ == "__main__":
    app.debug = True
    app.jinja_env.auto_reload = app.debug
    connect_to_db(app)
    app.run(port=5000, host='0.0.0.0')
