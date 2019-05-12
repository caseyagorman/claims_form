from flask import Flask, request, jsonify
from model import Entry,connect_to_db, db
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from werkzeug.datastructures import ImmutableMultiDict
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
    print(file)
    image = file.get('picture')
    print("image", image)
    data = file['document'].read()
    data = json.loads(data)
    location = data.get("location")
    print("location", location)
    latitude = location["latitude"]
    longitude = location["longitude"]
    claimant_name =data.get("claimantName")
    address1 =data.get("address1")
    city1 =data.get("city1")
    state1 =data.get("state1")
    day_phone_1 =data.get("dayPhone1")
    eve_phone_1 =data.get("evePhone1")
    cell_phone_1 =data.get("cellPhone1")
    day_phone_2 =data.get("dayPhone2")
    eve_phone_2 =data.get("evePhone2")
    cell_phone_2 =data.get("cellPhone2")
    date_of_birth =data.get("dateOfBirth")
    ssn =data.get("ssn")
    date_of_incident =data.get("dateOfIncident")
    time_of_incident =data.get("timeOfIncident")
    vehicle =data.get("vehicle")
    basis_of_claim =data.get("basisOfClaim")
    city_employee =data.get("cityEmployee")
    description =data.get("description")
    item1 =data.get("item1")
    amount1 =data.get("amount1")
    item2 =data.get("item2")
    amount2 =data.get("amount2")
    item3 =data.get("item3")
    amount3 =data.get("amount3")
    item4 =data.get("item4")
    amount4 =data.get("amount4")
    total =data.get("total")
    witness_address_1 =data.get("witnessAddress1")
    witness_phone_1 =data.get("witnessPhone1")
    witness_address_2 =data.get("witnessAddress2")
    witness_phone_2 =data.get("witnessPhone2")
    if image:
        image = image.read()
        new_entry = Entry(claimant_name = claimant_name,
                                # address1 = address1,
                                # city1 = city1,
                                # state1 = state1,
                                # day_phone1 = day_phone_1,
                                # eve_phone1 = eve_phone_1,
                                # cell_phone1 = cell_phone_1,
                                # day_phone2 = day_phone_2,
                                # eve_phone2 = eve_phone_2,
                                # cell_phone2 = cell_phone_2,
                                # date_of_birth = date_of_birth,
                                # ssn = ssn,
                                # date_of_incident = date_of_incident,
                                # time_of_incident = time_of_incident,
                                # vehicle = vehicle,
                                # basis_of_claim = basis_of_claim,
                                # city_employee = city_employee,
                                # description = description,
                                # item1 = item1,
                                # amount1 = amount1,
                                # item2 = item2, 
                                # amount2 = amount2,
                                # item3 = item3,
                                # amount3 = amount3,
                                # item4 = item4,
                                # amount4 = amount4,
                                # total = total,
                                # witness_address_1 = witness_address_1,
                                # witness_phone_1 = witness_phone_1,
                                # witness_address_2 = witness_address_2,
                                # witness_phone_2 = witness_phone_2,
                                latitude = latitude,
                                longitude = longitude,
                                image = image)
    else:
        new_entry = Entry(claimant_name = claimant_name,
                                # address1 = address1,
                                # city1 = city1,
                                # state1 = state1,
                                # day_phone1 = day_phone_1,
                                # eve_phone1 = eve_phone_1,
                                # cell_phone1 = cell_phone_1,
                                # day_phone2 = day_phone_2,
                                # eve_phone2 = eve_phone_2,
                                # cell_phone2 = cell_phone_2,
                                # date_of_birth = date_of_birth,
                                # ssn = ssn,
                                # date_of_incident = date_of_incident,
                                # time_of_incident = time_of_incident,
                                # vehicle = vehicle,
                                # basis_of_claim = basis_of_claim,
                                # city_employee = city_employee,
                                # description = description,
                                # item1 = item1,
                                # amount1 = amount1,
                                # item2 = item2, 
                                # amount2 = amount2,
                                # item3 = item3,
                                # amount3 = amount3,
                                # item4 = item4,
                                # amount4 = amount4,
                                # total = total,
                                # witness_address_1 = witness_address_1,
                                # witness_phone_1 = witness_phone_1,
                                # witness_address_2 = witness_address_2,
                                # witness_phone_2 = witness_phone_2,
                                latitude = latitude,
                                longitude = longitude)
        
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
        item = {
            "entryId": entry.entry_id,
            "claimantName": entry.claimant_name,
        }
        if entry.image:
            item['image'] = base64.encodestring(entry.image).decode('ascii')
        if entry.latitude:
            item['location'] = {'latitude': entry.latitude, 'longitude': entry.longitude}

        items.append(item)
    print("getting items", items)
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
