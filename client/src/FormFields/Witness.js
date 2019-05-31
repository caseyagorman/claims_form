import React, { Component } from "react";

class Witness extends Component{
    render(){
    return (
    <React.Fragment>
      <h4>12.Witnesses (if any) Name</h4>
      <div className="row">
        <div className="col">
          <label>1.</label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="witness1"
            type="text"
            placeholder="witness 1"
            value={this.props.witness1}
            />
        </div>
        <div className="col">
          <label>Address </label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="witnessAddress1"
            type="text"
            placeholder="witness address 1"
            value={this.props.witnessAddress1}
            />
        </div>
        <div className="col">
          <label>Phone </label> 
          <input className="form-control" 
          onChange={this.props.onChange}
          name="witnessPhone1"
          type="text"
          placeholder="witness phone 1"
          label="witness phone"
          />
        </div>
      </div>
  
      <div className="row">
        <div className="col">
          <label>2.</label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="witness1"
            type="text"
            placeholder="witness 2"
            value={this.props.witness1}
            />
        </div>
        <div className="col">
          <label></label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="witnessAddress1"
            type="text"
            placeholder="witness address 2"
            value={this.props.witnessAddress1}
            />
        </div>
        <div className="col">
          <label></label> 
          <input 
            className="form-control" 
            onChange={this.props.onChange}
            name="witnessPhone1"
            type="text"
            placeholder="witness phone 2"
            value={this.props.witnessPhone2}
          />
        </div>
      </div>
    </React.Fragment>
   )
  }
  }

  export default Witness