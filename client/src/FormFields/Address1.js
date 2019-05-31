import React, { Component } from "react";
import Button from "../Button"

class Address1 extends Component{
    constructor(props){
      super(props)
      this.state ={
        formErrors: {
          claimantName: "",
          address1: ""
          },
        formValid: false
        }
    }


    render(){
      return (
        <React.Fragment>
          <h4> Claimant’s Name and Home Address</h4>
          <div class="form-group">
            <div className="row">
              <div className="col">
                <label>Name</label>
                <input 
                  onChange={this.props.onChange}
                  name="claimantName"
                  type="text"
                  placeholder="name"
                  required="true"
                  value={this.props.idxFields0.claimantName.value}
                  className={this.state.formErrors.claimantName ? "form-control errors": "form-control"}
                  onBlur={this.props.handleBlur}
      
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Address</label>
                <input 
                  onChange={this.props.onChange}
                  name="address1"
                  type="text"
                  placeholder="address"
                  required="true"
                  className={this.state.formErrors.address1 ? "form-control errors": "form-control"}
                  value={this.props.idxFields0.address1.value}
                  onBlur={this.props.handleBlur}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>City</label>
                <input 
                  className="form-control"
                  onChange={this.props.onChange}
                  name="city1"
                  type="text"
                  placeholder="city"
                  value={this.props.idxFields0.city1.value}
                  />
              </div>
              <div className="col">
                <label>State</label>
                <input 
                  className="form-control"
                  onChange={this.props.onChange}
                  name="state1"
                  type="text"
                  placeholder="state"
                  value={this.props.idxFields0.state1.value}
                  />
              </div>
              <div className="col">
                <label>Zipcode</label>
                <input 
                  className="form-control"
                  onChange={this.props.onChange}
                  name="zip1"
                  type="text"
                  placeholder="zip"
                  value={this.props.idxFields0.zip1.value}
                  />
              </div>
            </div>
          </div>
          
          <Button 
            handleNextClick={this.props.handleNextClick} 
            idx={this.props.idx} 
            isDisabled={!this.state.formValid}
            displayError={!this.state.formValid ? e=> this.props.displayError(e) : ""}
          />
        </React.Fragment>
      )
    }
  }

  export default Address1