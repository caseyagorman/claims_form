import React, { Component } from "react";
// import FormPage from "./FormPage"
// import {Form, FormGroup, input className="form-control", Label} from "react-bootstrap"
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Address extends Component{
  render(){
  return (
  <React.Fragment>
    <div class="form-group">
      <div className="row">
        <div className="col">
          <label>Claimant's Name</label>
          <input className="form-control"
            onChange={this.props.onChange}
            name="claimantName"
            type="text"
            placeholder="name"
            value={this.props.claimantName}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <label>Address</label>
          <input className="form-control"
            onChange={this.props.onChange}
            name="address1"
            type="text"
            placeholder="address"
            value={this.props.address1}
            />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>City</label>
          <input className="form-control"
          onChange={this.props.onChange}
          name="city1"
          type="text"
          placeholder="city"
          value={this.props.city1}
          />
        </div>

        <div className="col">
          <label>State</label>
          <input className="form-control"
          onChange={this.props.onChange}
          name="state1"
          type="text"
          placeholder="state"
          value={this.props.state1}
          />
        </div>

        <div className="col">
          <label>Zipcode</label>
          <input className="form-control"
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

class Phone extends Component{
  render(){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <label>Daytime phone number</label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="dayPhone1"
            type="tel"
            placeholder="daytime phone"
            value={this.props.dayPhone1}
            />
        </div>
        <div className="col">
          <label>Evening phone number</label>
            <input className="form-control" 
            onChange={this.props.onChange}
            name="evePhone1"
            type="tel"
            placeholder="evening phone"
            value={this.props.evePhone1}
            />
        </div>
        <div className="col">
          <label>Cell phone number</label>
            <input className="form-control" 
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
class Address2 extends Component{
  render(){
  return (<React.Fragment>
  <div className="row">
        <div className="col">
          <label>Address</label>
          <input className="form-control"
            onChange={this.props.onChange}
            name="address2"
            type="text"
            placeholder="address"
            value={this.props.address2}
            />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <label>City</label>
          <input className="form-control"
          onChange={this.props.onChange}
          name="city2"
          type="text"
          placeholder="city"
          value={this.props.city2}
          />
        </div>

        <div className="col">
          <label>State</label>
          <input className="form-control"
          onChange={this.props.onChange}
          name="state2"
          type="text"
          placeholder="state"
          value={this.props.state2}
          />
        </div>

        <div className="col">
          <label>Zipcode</label>
          <input className="form-control"
          onChange={this.props.onChange}
          name="zip2"
          type="text"
          placeholder="zip"
          value={this.props.zip2}
          />
        </div>
      </div>

      </React.Fragment>
 )
}
}
class Phone2 extends Component{
  render(){
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <label>Daytime phone number</label>
          <input className="form-control" 
            onChange={this.props.onChange}
            name="dayPhone2"
            type="tel"
            placeholder="daytime phone"
            value={this.props.dayPhone2}
            />
        </div>
        <div className="col">
          <label>Evening phone number</label>
            <input className="form-control" 
            onChange={this.props.onChange}
            name="evePhone2"
            type="tel"
            placeholder="evening phone"
            value={this.props.evePhone2}
            />
        </div>
        <div className="col">
          <label>Cell phone number</label>
            <input className="form-control" 
            onChange={this.props.onChange}
            name="cellPhone2"
            type="tel"
            placeholder="cell phone"
            value={this.props.cellPhone2}
            />
        </div>
      </div>
    </React.Fragment>
 )
}
}

class Incident extends Component{
  render(){
  return (
  
  <React.Fragment>
    <div className="row">
      <div className="col">
        <label>Date of Incident</label>
        <input className="form-control"  
          onChange={this.props.onChange}
          name="dateOfIncident"
          type="date"
          placeholder="date of incident"
          value={this.props.dateOfIncident}
          />
      </div>
      <div className="col">
        <label>Time of Incident</label>
        <input className="form-control"  
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
    <div className="row">
      <div className="col">
        <label>Basis of Claim</label>
        <textarea className="form-control" 
            onChange={this.props.onChange}
            name="basisOfClaim"
            type="text"
            placeholder="basis of claim"
            value={this.props.basisOfClaim}
            />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>City Employee</label>
        <input className="form-control"
          onChange={this.props.onChange}
          name="cityEmployee"
          type="text"
          placeholder="City Employee"
          value={this.props.cityEmployee}
          />
      </div>
      <div className="col">
        <label>Vehicle</label>
        <input className="form-control" 
          onChange={this.props.onChange}
          name="vehicle"
          type="text"
          placeholder="vehicle"
          value={this.props.vehicle}
          />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>Description</label>
        <textarea 
          className="form-control" 
          onChange={this.props.onChange}
          name="description"
          type="text"
          placeholder="description"
          value={this.props.description}
        />
      </div>  
    </div>
      </React.Fragment>
 )
}
}

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

class Items extends Component{
  render(){
  return (
  <React.Fragment>
    <div className="row">
      <div className="col">
        <label>Item 1</label>
        <input 
          className="form-control" 
          onChange={this.props.onChange}
          name="item1"
          type="text"
          placeholder="item 1"
          value={this.props.item1}
        />
      </div>

      <div className="col">
        <label>Amount 1</label>
        <input 
          className="form-control"
          onChange={this.props.onChange}
          name="amount1"
          type="text"
          placeholder="amount 1"
          value={this.props.amount1}
          />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>Item 2</label>
        <input 
          className="form-control" 
          onChange={this.props.onChange}
          name="item2"
          type="text"
          placeholder="item 2"
          value={this.props.item2}
        />
      </div>

      <div className="col">
        <label>Amount 2</label>
        <input 
          className="form-control"
          onChange={this.props.onChange}
          name="amount2"
          type="text"
          placeholder="amount 2"
          value={this.props.amount2}
          />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>Item 3</label>
        <input 
          className="form-control" 
          onChange={this.props.onChange}
          name="item3"
          type="text"
          placeholder="item 3"
          value={this.props.item3}
        />
      </div>

      <div className="col">
        <label>Amount 3</label>
        <input 
          className="form-control"
          onChange={this.props.onChange}
          name="amount3"
          type="text"
          placeholder="amount 3"
          value={this.props.amount3}
          />
      </div>
    </div>
    <div className="row">
      <div className="col">
        <label>Item 4</label>
        <input 
          className="form-control" 
          onChange={this.props.onChange}
          name="item4"
          type="text"
          placeholder="item 4"
          value={this.props.item4}
        />
      </div>

      <div className="col">
        <label>Amount 4</label>
        <input 
          className="form-control"
          onChange={this.props.onChange}
          name="amount4"
          type="text"
          placeholder="amount 4"
          value={this.props.amount4}
          />
      </div>
    </div>
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <label>Total</label>
        <input className="form-control" 
        onChange={this.props.onChange}
        name="total"
        type="text"
        placeholder="total"
        value={this.props.total}
        />
      </div>
    </div>
      </React.Fragment>
 )
}
}
class Witness extends Component{
  render(){
  return (<React.Fragment>
    Witness 1
    <input className="form-control" 
      onChange={this.props.onChange}
      name="witness1"
      type="text"
      placeholder="witness 1"
      label="witness"/>
      <br></br>
    Witness Address
      <input className="form-control" 
      onChange={this.props.onChange}
      name="witnessAddress1"
      type="text"
      placeholder="witness address 1"
      label="witness address"/>
      <br></br>
    Witness Phone 
      <input className="form-control" 
      onChange={this.props.onChange}
      name="witnessPhone1"
      type="text"
      placeholder="witness phone 1"
      label="witness phone"/>
      <br></br>
    Witness 2
      <input className="form-control" 
      onChange={this.props.onChange}
      name="witness2"
      type="text"
      placeholder="witness 2"
      label="witness"/>
      <br></br>
    Witness 2 Address
      <input className="form-control" 
      onChange={this.props.onChange}
      name="witnessAddress2"
      type="text"
      placeholder="witness address 2"
      label="witness address"/>
      <br></br>
    Witness 2 Phone
      <input className="form-control" 
      onChange={this.props.onChange}
      name="witnessPhone2"
      type="text"
      placeholder="witness phone"
      label="witness phone"/>
      </React.Fragment>
 )
}
}
class Picture extends Component{
  render(){
  return (<React.Fragment>
    <h4>Upload Image for use by Coalition on Homelessness </h4>
    <input 
      onChange={this.props.onChange}
      name="picture"
      type="file"
      placeholder="picture"
      label="picture"/>
      <br></br>
   <p> I agree to allow Coalition on Homelessness to use this photo for map project
    <input
      style={{marginLeft: 5}}
      onChange={this.props.handleCheckboxChange}
      type="checkbox"
    /></p>
      </React.Fragment>
  )}}


class EntryForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formDisplaying: true,
        consentToUse: false,  
        idx: 0,
        picture: [],
        claimantName: "",
        address1: "",
        city1: "",
        state1:"",
        zip1: "",
        dayPhone1: "",
        evePhone1: "",
        cellPhone1: "",
        address2: "",
        city2: "",
        state2:"",
        zip2: "",
        dayPhone2: "",
        evePhone2: "",
        cellPhone2: "",
        dateOfBirth: "",
        ssn: "",
        dateOfIncident: "",
        timeOfIncident: "",
        locationOfIncident: "",
        vehicle: "",
        basisOfClaim: "",
        cityEmployee: "",
        description: "",
        item1: "",
        amount1: "",
        item2: "",
        amount2: "",
        item3: "",
        amount3: "",
        item4: "",
        amount4: "",
        total: "",
        witness1: "",
        witnessAddress1: "",
        witnessPhone1: "",
        witness2: "",
        witnessAddress2: "",
        witnessPhone2: "",
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleNextClick = this.handleNextClick.bind(this);
      this.displayField = this.displayField.bind(this)
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
      }
      
    componentDidMount(){
      this.props.locationActions.getLocation();
    }

    handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData();
      let formText = {}
      let stateObject = this.state
      for (let key in stateObject){
        if (key !== "picture" && key !== "idx"){

                formText[key] = stateObject[key]
        }
      }
      let location = this.props.location
      formText["location"] = location
      formText = JSON.stringify(formText);
      formData.append("formText", formText);
      const picture = this.state.picture;
      formData.append('picture', picture)
      const blob = new Blob([formText], {
        type: "application/json"
      });
      formData.append("document", blob);
      this.props.itemsActions.addItem(formData);
      this.props.history.push("/map")

    }

    handleCheckboxChange(){
      const newState = this.state.consentToUse === false? true : false 
      this.setState({consentToUse: newState})
    }

    handleNextClick(e, idx) {
      e.preventDefault();
      console.log("handleNextClick", e.target.value)
      if (e.target.value === "next"){
        let new_idx = idx + 1;
        this.setState({ idx: new_idx });
      }
      else if (e.target.value === "back"){
        let new_idx = idx - 1;
        this.setState({ idx: new_idx });
      }
        // e.target.reset()
}

    handleChange(event) {
        if (event.target.name === "picture"){
        this.setState({ picture: event.target.files[0] });
        }
        else if (event.target.name !== "picture") {
        this.setState({ [event.target.name]: event.target.value });
        }
      }

    displayField(formFields) {
        if (formFields !== undefined) {
            return formFields
        }
        else if (formFields === undefined) {
        this.setState({ formDisplaying: false })
      }
    }


    render() {
      const formFields =  [
        <React.Fragment>
          <Address 
            onChange={this.handleChange} 
            claimantName={this.state.claimantName} 
            address1={this.state.address1} 
            city1={this.state.city1} 
            state1={this.state.state1} 
            zip1={this.state.zip1}
            />
          <Phone 
            onChange={this.handleChange}
            dayPhone1={this.state.dayPhone1}
            evePhone1={this.state.evePhone1}
            cellPhone1={this.state.cellPhone1}
          />
          <Address2 
            onChange={this.handleChange} 
            address2={this.state.address2} 
            city2={this.state.city2} 
            state2={this.state.state2} 
            zip2={this.state.zip2}
          
          />
          <Phone2 
            onChange={this.handleChange}
            dayPhone2={this.state.dayPhone2}
            evePhone2={this.state.evePhone2}
            cellPhone2={this.state.cellPhone2}
          />
          <Personal 
            onChange={this.handleChange}
            dateOfBirth={this.state.dateOfBirth}
            ssn={this.state.ssn}
          />
          <Incident 
            onChange={this.handleChange}
            dateOfIncident={this.state.dateOfIncident}
            timeOfIncident={this.state.timeOfIncident}
            locationOfIncident={this.state.locationOfIncident}
            vehicle={this.state.vehicle}
            basisOfClaim={this.state.basisOfClaim}
            cityEmployee={this.state.cityEmployee}
            description={this.state.description}
            />
          <Items 
            onChange={this.handleChange}
            item1={this.state.item1}
            amount1={this.state.amount1}
            item2={this.state.item2}
            amount2={this.state.amount2}
            item3={this.state.item3}
            amount3={this.state.amount3}
            item4={this.state.item4}
            amount4={this.state.amount4}
            />
          <Witness 
            onchange={this.handleChange}
            witness1={this.state.witness1}
            witnessAddress1={this.state.witnessAddress1}
            witnessPhone1={this.state.witnessPhone1}
            witness2={this.state.witness2}
            witnessAddress2={this.state.witnessAddress2}
            witnessPhone2={this.state.witnessPhone2}
            />
          <Picture 
            onChange={this.handleChange} 
            handleCheckboxChange={this.handleCheckboxChange}  />
        </React.Fragment>
      ]
      console.log(this.state)
      return ( 
        <div className="container" style={{marginTop: 50}}>
          <form style={{width:900}}>
            {this.state.formDisplaying && this.state.idx < formFields[0].props.children.length ? (
            <div>
              {this.displayField(formFields[0].props.children[this.state.idx])}
              <br></br>
              {this.state.idx > 0 ? (
                <button
                  className="btn btn-danger btn-lg"
                  type="submit"
                  value="back"
                  onClick={e=>this.handleNextClick(e,  this.state.idx)}
                  style={{marginRight: 5}}
                  >
                  Back
              </button>
              ) : <div></div>}
         
            <button
                className="btn btn-primary btn-lg"
                type="submit"
                value="next"
                onClick={e=>this.handleNextClick(e,  this.state.idx)}
              
              >
            Next
            </button>
          
          </div>
            ) : 
          <div>
            <h1 style={{textAlign: "center"}} >Press submit to send to Coalition on Homelessness</h1> 
              <button
                style={{ fontSize: 18, margin: 10, backgroundColor: "rgb(224, 78, 78)",  borderRadius: 5, border: "1px solid rgb(224, 78, 78)", height: 40, width: 120, color: "white"}}
                onClick={e => this.handleSubmit(e)}
              >
              Submit Form
            </button>
          </div> 
        } 
              
        </form>
      `</div>

      );
    }
  }


function mapStateToProps(state) {
    return {
      items: state.items,
      location: state.location
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      itemsActions: bindActionCreators(itemsActions, dispatch),
      locationActions: bindActionCreators(locationActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EntryForm);


