import React, { Component } from "react";

class Incident extends Component{
    render(){
    return (
    
    <React.Fragment>
      <div className="row">
        <div className="col">
          <label>Date of Incident</label>
          <input 
            onChange={this.props.onChange}
            name="dateOfIncident"
            type="date"
            placeholder="date of incident"
            value={this.props.dateOfIncident}
            required="true"
            className={this.props.showErrors ? "form-control errors": "form-control"}
  
            />
        </div>
        <div className="col">
          <label>Time of Incident</label>
          <input 
            className="form-control"  
            onChange={this.props.onChange}
            name="timeOfIncident"
            type="time"
            placeholder="time"
            value={this.props.timeOfIncident}
            />
        </div>
        <div className="col">
          <label>Location of Incident</label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="locationOfIncident"
            type="text"
            placeholder="location of incident"
            value={this.props.locationOfIncident}
            />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col">
        <label>Basis of Claim</label>
        <p>State in detail all facts and circumstances of 
          the incident. Identify all persons, entities, property and City
           departments involved. State why you believe the City is responsible 
           for the alleged injury, property damage or loss.</p>
          
          <textarea 
              onChange={this.props.onChange}
              name="basisOfClaim"
              type="text"
              placeholder="basis of claim"
              value={this.props.basisOfClaim}
              required="true"
              className={this.props.showErrors ? "form-control errors": "form-control"}
  
              />
        </div>
      </div>
      <br></br>
      <div className="row">
        <div className="col">
        <label>City Employee</label>
          <p>Name, I.D. Number and City Department
            of City Employee who allegedly caused injury or 
            loss</p>
          <input 
            className="form-control"
            onChange={this.props.onChange}
            name="cityEmployee"
            type="text"
            placeholder="City Employee"
            value={this.props.cityEmployee}
            />
        </div>
        <br></br>
        <div className="col">
        
          <label>Vehicle Type</label>
          <p>Type of City Vehicle</p>
          <br></br>
          <br></br>
          <input 
            className="form-control" 
            onChange={this.props.onChange}
            name="vehicle"
            type="text"
            placeholder="vehicle"
            value={this.props.vehicleType}
            />
        </div>
        <div className="col">
          <label>License Number</label>
          <p>Vehicle License Number and Bus or Train Number</p>
          <br></br>
          <input 
            className="form-control" 
            onChange={this.props.onChange}
            name="vehicle"
            type="text"
            placeholder="vehicle"
            value={this.props.vehicleLicenseNumber}
            />
        </div>
       
      </div>
      <br></br>
      <div className="row">
        <div className="col">
          <label>Description</label>
          <textarea 
            onChange={this.props.onChange}
            name="description"
            type="text"
            placeholder="description"
            required="true"
            value={this.props.description}
            className={this.props.showErrors ? "form-control errors": "form-control"}
  
          />
        </div>  
      </div>
        </React.Fragment>
   )
  }
  }

  export default Incident