import React, { Component } from "react";
// import FormPage from "./FormPage"
import {Form} from "react-bootstrap"
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


class Address extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="claimantName"
      type="text"
      placeholder="name"
      label="Claimant's Name"/>
      
    <input 
      onChange={this.props.onChange}
      name="address1"
      type="text"
      placeholder="address"
      label="address"/>

      <input 
      onChange={this.props.onChange}
      name="city1"
      type="text"
      placeholder="city"
      label="city"/>

      <input 
      onChange={this.props.onChange}
      name="state1"
      type="text"
      placeholder="state"
      label="state"/>
      </React.Fragment>
      
 )
}
}

class Phone extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="dayPhone1"
      type="tel"
      placeholder="daytime phone"
      label="phone"/>

      <input 
      onChange={this.props.onChange}
      name="evePhone1"
      type="tel"
      placeholder="evening phone"
      label="evening phone"/>

      <input 
      onChange={this.props.onChange}
      name="cellPhone1"
      type="tel"
      placeholder="cell phone"
      label="cell phone"/>
      </React.Fragment>
 )
}
}
class Address2 extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="address2"
      type="text"
      placeholder="address"
      label="address"/>

      <input 
      onChange={this.props.onChange}
      name="city2"
      type="text"
      placeholder="city"
      label="city"/>

      <input 
      onChange={this.props.onChange}
      name="state2"
      type="text"
      placeholder="state"
      label="state"/>
      </React.Fragment>
 )
}
}
class Phone2 extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="dayPhone2"
      type="tel"
      placeholder="daytime phone"
      label="phone"/>

      <input 
      onChange={this.props.onChange}
      name="evePhone2"
      type="tel"
      placeholder="evening phone"
      label="evening phone"/>

      <input 
      onChange={this.props.onChange}
      name="cellPhone2"
      type="tel"
      placeholder="cell phone"
      label="cell phone"/>
      </React.Fragment>
 )
}
}

class Incident extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="dateOfIncident"
      type="date"
      placeholder="date of incident"
      label="date"/>

      <input 
      onChange={this.props.onChange}
      name="timeOfIncident"
      type="time"
      placeholder="time"
      label="time"/>

    <input 
      onChange={this.props.onChange}
      name="location"
      type="text"
      placeholder="location"
      label="location"/>
    
    <input 
      onChange={this.props.onChange}
      name="basisOfClaim"
      type="text"
      placeholder="basis of claim"
      label="basisOfClaim"/>
    
    <input 
      onChange={this.props.onChange}
      name="description"
      type="text"
      placeholder="description"
      label="description"/>
    
    <input 
      onChange={this.props.onChange}
      name="cityEmployee"
      type="text"
      placeholder="City Employee"
      label="city employee"/>
    
    <input 
      onChange={this.props.onChange}
      name="vehicle"
      type="text"
      placeholder="vehicle"
      label="vehicle"/>
      </React.Fragment>
 )
}
}

class Personal extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="dateOfBirth"
      type="date"
      placeholder="date of birth"
      label="date"/>

      <input 
      onChange={this.props.onChange}
      name="ssn"
      type="password"
      placeholder="ssn"
      label="ssn"/>

      </React.Fragment>
 )
}
}

class Items extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="item1"
      type="text"
      placeholder="item 1"
      label="item"/>

      <input 
      onChange={this.props.onChange}
      name="amount1"
      type="text"
      placeholder="amount 1"
      label="amount"/>

      <input 
      onChange={this.props.onChange}
      name="item2"
      type="text"
      placeholder="item 2"
      label="item"/>

      <input 
      onChange={this.props.onChange}
      name="amount2"
      type="text"
      placeholder="amount 2"
      label="amount"/>

      <input 
      onChange={this.props.onChange}
      name="item3"
      type="text"
      placeholder="item 3"
      label="item"/>

      <input 
      onChange={this.props.onChange}
      name="amount3"
      type="text"
      placeholder="amount 3"
      label="amount"/>

      <input 
      onChange={this.props.onChange}
      name="item4"
      type="text"
      placeholder="item 4"
      label="item"/>

      <input 
      onChange={this.props.onChange}
      name="amount4"
      type="text"
      placeholder="amount 4"
      label="amount"/>


      <input 
      onChange={this.props.onChange}
      name="total"
      type="text"
      placeholder="total"
      label="total"/>
      </React.Fragment>
 )
}
}
class Witness extends Component{
  render(){
  return (<React.Fragment>
    <input 
      onChange={this.props.onChange}
      name="witness1"
      type="text"
      placeholder="witness 1"
      label="witness"/>

      <input 
      onChange={this.props.onChange}
      name="witnessAddress1"
      type="text"
      placeholder="witness address 1"
      label="witness address"/>

      <input 
      onChange={this.props.onChange}
      name="witnessPhone1"
      type="text"
      placeholder="witness phone 1"
      label="witness phone"/>

      <input 
      onChange={this.props.onChange}
      name="witness2"
      type="text"
      placeholder="witness 2"
      label="witness"/>

      <input 
      onChange={this.props.onChange}
      name="witnessAddress2"
      type="text"
      placeholder="witness address 2"
      label="witness address"/>

      <input 
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
    <input 
      onChange={this.props.onChange}
      name="picture"
      type="file"
      placeholder="picture"
      label="picture"/>
      </React.Fragment>
  )}}


class EntryForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        formDisplaying: true, 
        idx: 0,
        picture: [],
        claimantName: "",
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
      this.displayField = this.displayField.bind(this)
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

    }

    handleNextClick(event, idx) {
      event.preventDefault();
      let new_idx = idx + 1;
      console.log(idx, "handle next click")

      this.setState({ idx: new_idx });
      event.target.reset()
}

    handleChange(event) {
      console.log("changing state")
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
          <Address onChange={this.handleChange}/>
          <Phone onChange={this.handleChange}/>
          <Address2 onChange={this.handleChange} />
          <Phone2 onChange={this.handleChange}/>
          <Personal onChange={this.handleChange}/>
          <Incident onChange={this.handleChange}/>
          <Items onChange={this.handleChange}/>
          <Witness onchange={this.handleChange}/>
          <Picture onChange={this.handleChange}/>
        </React.Fragment>
      ]
      console.log(this.state)
      return ( 
            <form style={{width:750}}onSubmit={e=>this.handleNextClick(e,  this.state.idx)}>
            {this.state.formDisplaying && this.state.idx < formFields[0].props.children.length ? (
            this.displayField(formFields[0].props.children[this.state.idx])
            ) : <h1 style={{textAlign: "center"}} >Press submit to send to Coalition on Homelessness</h1>} 
            <button
              type="submit"
              value="next"
            >
              Next
            </button>
          
            <button
              onClick={e => this.handleSubmit(e)}
            >
            Submit Form
            </button>
            </form>

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
