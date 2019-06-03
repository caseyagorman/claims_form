import React, { Component } from "react";
import "../EntryForm.css";

class Incident extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {
        dateOfIncident: false,
        locationOfIncident: false,
        basisOfClaim: false
      },
      dateOfIncidentValid: false,
      locationOfIncidentValid: false,
      basisOfClaimValid: false,
      touched: {
        dateOfIncident: false,
        locationOfIncident: false,
        basisOfClaim: false
      }
    };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({ touched: { ...this.state.touched, [field]: true } }, () =>
      this.checkInput(field, value)
    );
  }

  checkInput(field, value) {
    let validField = field + "Valid";
    if (value === null || !value.length) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: true },
        [validField]: false
      }));
    } else if (value.length || value !== null) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: false },
        [validField]: true
      }));
    }
  }

  displayError() {
    const fieldArray = [
      { dateOfIncident: this.props.dateOfIncident },
      { locationOfIncident: this.props.locationOfIncident },
      { basisOfClaim: this.props.basisOfClaim }
    ];
    fieldArray.forEach(fieldObj => {
      Object.keys(fieldObj).forEach(key => {
        this.checkInput(key, fieldObj[key]);
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <label>Date of Incident</label>
            <input
              onChange={event => this.props.handleChange(event)}
              name="dateOfIncident"
              type="date"
              placeholder="date of incident"
              value={this.props.dateOfIncident}
              required={true}
              className={
                this.state.formErrors.dateOfIncident
                  ? "form-control errors"
                  : "form-control"
              }
              onBlur={this.handleBlur}
            />
          </div>
          <div className="col">
            <label>Time of Incident</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="timeOfIncident"
              type="time"
              placeholder="time"
              value={this.props.timeOfIncident}
            />
          </div>
          <div className="col">
            <label>Location of Incident</label>
            <input
              onChange={event => this.props.handleChange(event)}
              name="locationOfIncident"
              type="text"
              placeholder="location of incident"
              value={this.props.locationOfIncident}
              className={
                this.state.formErrors.locationOfIncident
                  ? "form-control errors"
                  : "form-control"
              }
              onBlur={this.handleBlur}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label>Basis of Claim</label>
            <p>
              State in detail all facts and circumstances of the incident.
              Identify all persons, entities, property and City departments
              involved. State why you believe the City is responsible for the
              alleged injury, property damage or loss.
            </p>

            <textarea
              onChange={event => this.props.handleChange(event)}
              name="basisOfClaim"
              type="text"
              placeholder="basis of claim"
              value={this.props.basisOfClaim}
              required={true}
              className={
                this.state.formErrors.basisOfClaim
                  ? "form-control errors"
                  : "form-control"
              }
              onBlur={this.handleBlur}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label>City Employee</label>
            <p>
              Name, I.D. Number and City Department of City Employee who
              allegedly caused injury or loss
            </p>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="cityEmployee"
              type="text"
              placeholder="City Employee"
              value={this.props.cityEmployee}
            />
          </div>
          <br />
          <div className="col">
            <label>Vehicle Type</label>
            <p>Type of City Vehicle</p>
            <br />
            <br />
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="vehicleType"
              type="text"
              placeholder="vehicle"
              value={this.props.vehicleType}
            />
          </div>
          <div className="col">
            <label>License Number</label>
            <p>Vehicle License Number and Bus or Train Number</p>
            <br />
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="vehicleLicenseNumber"
              type="text"
              placeholder="vehicle"
              value={this.props.vehicleLicenseNumber}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <label>Description</label>
            <textarea
              onChange={event => this.props.handleChange(event)}
              name="description"
              type="text"
              placeholder="description"
              required={true}
              value={this.props.description}
              className={
                this.props.showErrors ? "form-control errors" : "form-control"
              }
            />
          </div>
        </div>
        <br />
        <button
          className="btn btn-danger btn-lg"
          type="submit"
          value="back"
          onClick={e => this.props.handleNextClick(e, this.props.idx)}
          style={{ marginRight: 5 }}
        >
          Back
        </button>
        <button
          disabled={
            !this.state.dateOfIncidentValid ||
            !this.state.locationOfIncidentValid ||
            !this.state.basisOfClaimValid
          }
          className="btn btn-primary btn-lg"
          type="submit"
          value="next"
          onClick={e => this.props.handleNextClick(e, this.props.idx)}
          style={{ marginRight: 5 }}
          onMouseEnter={
            !this.state.address1Valid || !this.state.claimantNameValid
              ? () => this.displayError()
              : ""
          }
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default Incident;
