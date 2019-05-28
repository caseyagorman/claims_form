import React, { Component } from "react";

class Address1 extends Component{
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       errors: {
    //         claimantName: false,
    //         address1: false
    //       },
    //         touched: {
    //           claimantName: false,
    //           address1: false
    //       }
    //     }
    //     // this.doSomething = this.doSomething.bind(this)
    //     // this.handleBlur = this.handleBlur.bind(this)
    // }

    render(){
    // console.log(this.props)
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
              value={this.props.claimantName}
              className={this.props.errors.claimantName ? "form-control errors": "form-control"}
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
              className={this.props.errors.address1 ? "form-control errors": "form-control"}
              value={this.props.address1}
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
              value={this.props.city1}
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
              value={this.props.state1}
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
              value={this.props.zip1}
              />
          </div>
        </div>
      </div>
        
      

  
    </React.Fragment>
        
   )
  }
  }

  export default Address1