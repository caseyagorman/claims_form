import React, { Component } from "react";
// import FormPage from "./FormPage"
// import {Form, FormGroup, input className="form-control", Label} from "react-bootstrap"
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./EntryForm.css";
import Address1 from "./FormFields/Address1";
import Phone1 from "./FormFields/Phone1";
import Address2 from "./FormFields/Address2";
import Phone2 from "./FormFields/Phone2";
import Incident from "./FormFields/Incident";
import Witness from "./FormFields/Witness";
import Personal from "./FormFields/Personal";
import Picture from "./FormFields/Picture";
import Items from "./FormFields/Items";

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
      state1: "",
      zip1: "",
      dayPhone1: "",
      evePhone1: "",
      cellPhone1: "",
      address2: "",
      city2: "",
      state2: "",
      zip2: "",
      dayPhone2: "",
      evePhone2: "",
      cellPhone2: "",
      dateOfBirth: null,
      ssn: "",
      dateOfIncident: null,
      timeOfIncident: null,
      locationOfIncident: "",
      vehicleType: "",
      vehicleLicenseNumber: "",
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
      witnessPhone2: ""

      // isDisabled: false,
      //   super(props)
      //   this.state ={
      //     formValid: false
      //     }
      // }

      // formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.displayField = this.displayField.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    // this.checkInput = this.checkInput.bind(this)
  }

  componentDidMount() {
    this.props.locationActions.getLocation();
  }

  handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    let formText = {};
    let stateObject = this.state;
    for (let key in stateObject) {
      if (key !== "picture" && key !== "idx") {
        formText[key] = stateObject[key];
      }
    }
    let location = this.props.location;
    formText["location"] = location;
    formText = JSON.stringify(formText);
    formData.append("formText", formText);
    const picture = this.state.picture;
    formData.append("picture", picture);
    const blob = new Blob([formText], {
      type: "application/json"
    });
    formData.append("document", blob);
    this.props.itemsActions.addItem(formData);
    this.props.history.push("/map");
  }

  handleCheckboxChange() {
    const newState = this.state.consentToUse === false ? true : false;
    this.setState({ consentToUse: newState });
  }

  handleNextClick(e, idx) {
    e.preventDefault();
    console.log("handle next click", e, idx);
    if (e.target.value === "next") {
      let new_idx = idx + 1;
      this.setState({ idx: new_idx });
    } else if (e.target.value === "back") {
      let new_idx = idx - 1;
      this.setState({ idx: new_idx });
    }
  }

  handleChange(event) {
    const name = event.target.name;
    if (name === "picture") {
      this.setState({ picture: event.target.files[0] });
    } else if (name !== "picture") {
      this.setState({ [name]: event.target.value });
    }
  }

  displayField(formFields) {
    if (formFields !== undefined) {
      return formFields;
    } else if (formFields === undefined) {
      this.setState({ formDisplaying: false });
    }
  }

  render() {
    console.log(this.state);
    const formFields = [
      <React.Fragment>
        <Address1
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          idx={this.state.idx}
          claimantName={this.state.claimantName}
          address1={this.state.address1}
          city1={this.state.city1}
          state1={this.state.state1}
          zip1={this.state.zip1}
        />
        <Phone1
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          dayPhone1={this.state.dayPhone1}
          evePhone1={this.state.evePhone1}
          cellPhone1={this.state.cellPhone1}
        />
        <Address2
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          address2={this.state.address2}
          city2={this.state.city2}
          state2={this.state.state2}
          zip2={this.state.zip2}
        />
        <Phone2
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          dayPhone2={this.state.dayPhone2}
          evePhone2={this.state.evePhone2}
          cellPhone2={this.state.cellPhone2}
        />
        <Personal
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          dateOfBirth={this.state.dateOfBirth}
          ssn={this.state.ssn}
        />
        <Incident
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          dateOfIncident={this.state.dateOfIncident}
          timeOfIncident={this.state.timeOfIncident}
          locationOfIncident={this.state.locationOfIncident}
          vehicleLicenseNumber={this.state.vehicleLicenseNumber}
          vehicleType={this.state.vehicleType}
          basisOfClaim={this.state.basisOfClaim}
          cityEmployee={this.state.cityEmployee}
          description={this.state.description}
          showErrors={this.state.showErrors}
        />
        <Items
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          item1={this.state.item1}
          amount1={this.state.amount1}
          item2={this.state.item2}
          amount2={this.state.amount2}
          item3={this.state.item3}
          amount3={this.state.amount3}
          item4={this.state.item4}
          amount4={this.state.amount4}
          showErrors={this.state.showErrors}
        />
        <Witness
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          witness1={this.state.witness1}
          witnessAddress1={this.state.witnessAddress1}
          witnessPhone1={this.state.witnessPhone1}
          witness2={this.state.witness2}
          witnessAddress2={this.state.witnessAddress2}
          witnessPhone2={this.state.witnessPhone2}
        />
        <Picture
          handleChange={event => this.handleChange(event)}
          handleNextClick={event => this.handleNextClick(event, this.state.idx)}
          handleCheckboxChange={this.handleCheckboxChange}
        />
      </React.Fragment>
    ];

    return (
      <div className="container" style={{ marginTop: 50 }}>
        <form style={{ width: 900 }}>
          {this.state.formDisplaying &&
          this.state.idx < formFields[0].props.children.length ? (
            <div>
              {this.displayField(formFields[0].props.children[this.state.idx])}
              <br />
              {/* {this.state.idx > 0 ? (
              <button
                className="btn btn-danger btn-lg"
                type="submit"
                value="back"
                onClick={e=>this.handleNextClick(e,  this.state.idx)}
                style={{marginRight: 5}}
                >
                Back
            </button>
            ) : <div></div>} */}
            </div>
          ) : (
            <div>
              <h1 style={{ textAlign: "center" }}>
                Press submit to send to Coalition on Homelessness
              </h1>
              <button
                style={{
                  fontSize: 18,
                  margin: 10,
                  backgroundColor: "rgb(224, 78, 78)",
                  borderRadius: 5,
                  border: "1px solid rgb(224, 78, 78)",
                  height: 40,
                  width: 120,
                  color: "white"
                }}
                onClick={e => this.handleSubmit(e)}
              >
                Submit Form
              </button>
            </div>
          )}
        </form>
      </div>
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
