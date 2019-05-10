import React from "react";
import {Form} from "react-bootstrap"
const FormPage = props => (
  <div className="container" style={{fontFamily: "source sans pro"}}>
  <div
    style= {{marginLeft: "25%", marginRight: "25%", marginTop: 30}} 
  >
    <form style={{width:750}}onSubmit={e=>props.handleNextClick(e,  props.idx)}>
      {props.formDisplaying && props.idx < props.formFields.length ? (
      <input onChange={props.handleChange} 
      style= {{height: 250, fontSize: 60, textAlign: "center", borderRadius: 5}}
      type={props.displayField(props.formFields[props.idx]).type} 
      name={props.displayField(props.formFields[props.idx]).name} 
      placeholder={props.displayField(props.formFields[props.idx]).placeholder} />
      ) : <h1 style={{textAlign: "center"}} >Press submit to send to Coalition on Homelessness</h1>}
     
      <div style= {{marginTop: 20}}>
      <button
      style={{ 
      border: "2px solid rgb(70, 152, 252)", 
      borderRadius: 5, 
      backgroundColor: "white", 
      color: "rgb(70, 152, 252)",
      fontSize: 20, 
     
      height: 50, 
      width: 200}}
      type="submit"
      value="next"
      >
        Next
      </button>
    
      <button
        style={{
          float: "right",
          fontSize: 20,
           borderRadius: 5,  
           border: "2px solid rgb(221, 79, 86",
           height: 50, 
           width: 200, 
           backgroundColor: "rgb(221, 79, 86", 
           color: "white"}}
        onClick={e => props.handleSubmit(e)}
      >
      Submit Form
      </button>
      </div>
    </form>
  </div>
  </div>
);
export default FormPage;
