import React, { Component } from "react";

class Phone1 extends Component{
    render(){
    return (
      <React.Fragment>
        <h4>Telephone</h4>
        <div className="row">
          <div className="col">
            <label>Daytime phone number</label>
            <input 
                className="form-control" 
                onChange={this.props.onChange}
                name="dayPhone1"
                type="tel"
                placeholder="daytime phone"
                value={this.props.dayPhone1}
              />
          </div>
          <div className="col">
            <label>Evening phone number</label>
              <input 
                className="form-control" 
                onChange={this.props.onChange}
                name="evePhone1"
                type="tel"
                placeholder="evening phone"
                value={this.props.evePhone1}
              />
          </div>
          <div className="col">
            <label>Cell phone number</label>
              <input 
                className="form-control" 
                onChange={this.props.onChange}
                name="cellPhone1"
                type="tel"
                placeholder="cell phone"
                value={this.props.cellPhone1}
              />
          </div>
        </div>
      </React.Fragment>
   )
  }
  }
  export default Phone1