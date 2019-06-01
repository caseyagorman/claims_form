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
        claimantNameValid: false,
        address1Valid: false,
        touched: {
          claimantName: false,
          address1: false
        },
      }
      this.handleBlur = this.handleBlur.bind(this)
    }

    handleBlur(event){
      let field = event.target.name
      let value = event.target.value
      
      this.setState({ touched: {...this.state.touched, [field]: true},
      }, () => this.checkInput(field,value))
    }
    
    checkInput(field, value){
      let validField = field + "Valid"
      if(!value.length){
        this.setState({ formErrors: {...this.state.formErrors, [field]: true}}, this.setState({[validField]: false}))
      }
      else if(value.length){
        this.setState({ formErrors: {...this.state.formErrors, [field]: false}}, this.setState({[validField]: true}))
      }   
    }
    displayError(){
      const fieldArray = [{"claimantName": this.props.idxFields0.claimantName.value}, {"address1": this.props.idxFields0.address1.value}]
      for (let i =0; i<fieldArray.length; i++) {
        for (let key in fieldArray[i]){
         this.checkInput(key, fieldArray[i][key])
        }
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
                  onChange={this.props.handleChange}
                  name="claimantName"
                  type="text"
                  placeholder="name"
                  required="true"
                  value={this.props.idxFields0.claimantName.value}
                  className={this.state.formErrors.claimantName ? "form-control errors": "form-control"}
                  onBlur={this.handleBlur}
      
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Address</label>
                <input 
                  onChange={this.props.handleChange}
                  name="address1"
                  type="text"
                  placeholder="address"
                  required="true"
                  className={this.state.formErrors.address1 ? "form-control errors": "form-control"}
                  value={this.props.idxFields0.address1.value}
                  onBlur={this.handleBlur}
                  />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>City</label>
                <input 
                  className="form-control"
                  onChange={this.props.handleChange}
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
                  onChange={this.props.handleChange}
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
                  onChange={this.props.handleChange}
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
            isDisabled={!this.state.address1Valid || !this.state.claimantNameValid}
            displayError={!this.state.address1Valid || !this.state.claimantNameValid ? () => this.displayError() : ""}
          
          />
        </React.Fragment>
      )
    }
  }

  export default Address1