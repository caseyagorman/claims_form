import React, { Component } from "react";
import FormPage from "./FormPage"
import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";



const formFields = [
  {name:"name", type: "text",  placeholder: "name", label: "Claimant's Name"},
  {name: "file", type: "file",  placeholder: "picture", label: "file"},
  {name: "address1", type: "text",  placeholder: "address", label: "Claimant's Home Address"},
  {name: "city1",type: "text", placeholder: "city", label: "City" }, 
  {name: "state1", type: "text", placeholder: "state", label: "State"},
  {name: "dayPhone1", type:"tel", placeholder: "daytime phone",  label: "Telephone"},
  {name: "evePhone1", type:"tel", placeholder: "evening phone",  label: "Telephone"},
  {name: "cellPhone1", type:"tel", placeholder: "cellular phone",  label: "Telephone"},
  {name: "address2", type: "textArea", placeholder: "address", label: "Send Official Notices and Correspondence to:"},
  {name: "city2",type: "text", placeholder: "city", label: "City" }, 
  {name: "state2", type: "text", placeholder: "state", label: "State"},
  {name: "dayPhone2", type:"tel", placeholder: "daytime phone",  label: "Telephone"},
  {name: "evePhone2", type:"tel", placeholder: "evening phone",  label: "Telephone"},
  {name: "cellPhone2", type:"tel", placeholder: "cellular phone",  label: "Telephone"},
  {name: "dateOfBirth", type: "date", placeholder: "date of birth", label: "Date of Birth"},
  {name: "ssn", type: "password", placeholder: "social security number", label: "Social Security Number"},
  {name: "dateOfIncident", type: "date", placeholder: "date of incident", label: "Date of Incident"},
  {name: "timeOfIncident", type: "time", placeholder:"time of incident", label: "Time of Incident"},
  {name: "location", type: "text", placeholder: "location", label:"Location of Incident or Accident"},
  {name: "vehicle", type: "text", placeholder:"license plate #, type, mileage, and year ", label: "Claimant Vehicle License Plate #, Type, Mileage, and Year"},
  {name: "basisOfClaim", type: "textArea", placeholder: "State in detail all the facts and circumstances of the incident. Identify all persons, property, and City departments involved.  State why you believe the City is responsible for the alleged injury, property damage, or loss", label: "Basis of Claim"},
  {name: "cityEmployee", type: "text", placeholder: "", label: "Name, I.D, Number and City Department of City Employee who allegedly caused injury or loss"},
  {name: "description", type: "textArea", placeholder: "description", label: "Description of Claimant's injury damage or loss"},
  {name: "item1", type: "text", placeholder: "item", label:"item"},
  {name: "amount1", type: "text", placeholder: "amount", label:"$"},
  {name: "item2", type: "text", placeholder: "item", label:"item"},
  {name: "amount2", type: "text", placeholder: "amount", label:"$"},
  {name: "item3", type: "text", placeholder: "item", label:"item"},
  {name: "amount3", type: "text", placeholder: "amount", label:"$"},
  {name: "item4", type: "text", placeholder: "item", label:"item"},
  {name: "amount4", type: "text", placeholder: "amount", label:"$"},
  {name: "total", type: "text", placeholder: "total", label:"$"},
  {name: "witness1", type: "text", placeholder: "witness 1", label: "Witnesses (if any) Name"},
  {name: "witnessAddress1", type: "text", placeholder: "witness address", label: ""},
  {name: "witnessPhone1", type: "tel", placeholder: "witness phone", label: ""},
  {name: "witness2", type: "text", placeholder: "witness 2", label: "Witnesses (if any) Name"},
  {name: "witnessAddress2", type: "text", placeholder: "witness address", label: ""},
  {name: "witnessPhone2", type: "tel", placeholder: "witness phone", label: ""}
]
class EntryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        idx: 0,
        file: [],
        fname: "",
        address1: "",
        city1: "",
        state1:"",
        dayPhone1: "",
        evePhone1: "",
        cellPhone1: "",
        address2: "",
        city2: "",
        state2:"",
        dayPhone2: "",
        evePhone2: "",
        cellPhone2: "",
        dateOfBirth: "",
        ssn: "",
        dateOfIncident: "",
        timeOfIncident: "",
        location: "",
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
      }
  
    handleSubmit(event) {
      event.preventDefault();
      const formData = new FormData();
      let formText = {}
      let stateObject = this.state
      for (let key in stateObject){
        if (key !== "file" && key !== "idx"){

                formText[key] = stateObject[key]
        }
      }
      formText = JSON.stringify(formText);
      formData.append("formText", formText);
      const file = this.state.file;
      formData.append('file', file)
      this.props.itemsActions.addItem(formData);

    }

    handleNextClick(event, idx) {
      event.preventDefault();
      let new_idx = idx + 1;
      this.setState({ idx: new_idx });
      event.target.reset()
}

    handleChange(event) {
        if (event.target.name === "file"){
        this.setState({ file: event.target.files[0] });
        }
     

        else if (event.target.name !== "file") {
        this.setState({ [event.target.name]: event.target.value });
        }
      }

    displayField(formFields) {
        if (!formFields) {
          return (
            <div className="test-complete-message">
            Press submit to complete form 
            </div>
          );
        }
    
        return formFields;
      }


    render() {
      const idx = this.state.idx;
      return (
        <FormPage
          idx={idx}
          displayField = {this.displayField}
          formFields={formFields}
          handleNextClick={this.handleNextClick}
          handleChange={this.handleChange}
          incrementIdx={this.incrementIdx}
          handleSubmit={this.handleSubmit}
        />

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
      itemsActions: bindActionCreators(itemsActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EntryForm);
