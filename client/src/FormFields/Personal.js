import React, { Component } from "react";


class Personal extends Component{
    render(){
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <label>Date of Birth</label>
            <input className="form-control" 
              onChange={this.props.onChange}
              name="dateOfBirth"
              type="date"
              placeholder="date of birth"
              value={this.props.dateOfBirth}
            />
          </div>
          <div className="col">
            <label>Social Security Number</label>
            <input className="form-control" 
              onChange={this.props.onChange}
              name="ssn"
              type="password"
              placeholder="ssn"
              value={this.props.ssn}
              />
          </div>
        </div>
      </React.Fragment>
   )
    }
  }

  export default Personal