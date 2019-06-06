from datetime import datetime
from flask_sqlalchemy import SQLAlchemy


db = SQLAlchemy()


class Entry(db.Model):
    """table of form"""

    __tablename__ = "entries"

    entry_id = db.Column(db.Integer, autoincrement=True, primary_key=True)
    claimant_name = db.Column(db.String(25), nullable=False)
    address1 = db.Column(db.String(100), nullable=True)
    city1 = db.Column(db.String(25), nullable=True)
    state1 = db.Column(db.String(25), nullable=True)
    zip1 = db.Column(db.String(25), nullable=True)
    address2 = db.Column(db.String(100), nullable=True)
    city2 = db.Column(db.String(25), nullable=True)
    state2 = db.Column(db.String(25), nullable=True)
    zip2 = db.Column(db.String(25), nullable=True)
    day_phone1 = db.Column(db.String(25), nullable=True)
    eve_phone1 = db.Column(db.String(25), nullable=True)
    cell_phone1 = db.Column(db.String(25), nullable=True)
    day_phone2 = db.Column(db.String(25), nullable=True)
    eve_phone2 = db.Column(db.String(25), nullable=True)
    cell_phone2 = db.Column(db.String(25), nullable=True)
    date_of_birth = db.Column(db.DateTime, nullable=True)
    ssn = db.Column(db.String(9), nullable=True)
    date_of_incident = db.Column(
        db.DateTime, nullable=True, default=datetime.today)
    time_of_incident = db.Column(
        db.TIME, nullable=False, default=datetime.time)
    location_of_incident = db.Column(db.String(100), nullable=True)
    vehicle_type = (db.Column(db.String(25), nullable=True))
    vehicle_license_number = (db.Column(db.String(25), nullable=True))
    basis_of_claim = db.Column(db.String(25), nullable=True)
    city_employee = db.Column(db.String(25), nullable=True)
    description = db.Column(db.String(1000), nullable=True)
    item1 = db.Column(db.String(25), nullable=True)
    amount1 = db.Column(db.String(25), nullable=True)
    item2 = db.Column(db.String(25), nullable=True)
    amount2 = db.Column(db.String(25), nullable=True)
    item3 = db.Column(db.String(25), nullable=True)
    amount3 = db.Column(db.String(25), nullable=True)
    item4 = db.Column(db.String(25), nullable=True)
    amount4 = db.Column(db.String(25), nullable=True)
    total = db.Column(db.String(25), nullable=True)
    witness_address_1 = db.Column(db.String(25), nullable=True)
    witness_phone_1 = db.Column(db.String(25), nullable=True)
    witness_address_2 = db.Column(db.String(25), nullable=True)
    witness_phone_2 = db.Column(db.String(25), nullable=True)
    latitude = db.Column(db.Float, nullable=True)
    longitude = db.Column(db.Float, nullable=True)
    image = db.Column(db.LargeBinary, nullable=True)


def connect_to_db(app):
    """Connect the database to our Flask app."""
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql:///entries'  # rename jrg
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.app = app
    db.init_app(app)


if __name__ == "__main__":
    from server import app
    connect_to_db(app)
    print("Connected to DB.")
