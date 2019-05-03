import React from "react";
const FormPage = props => (
  <div
    style= {{width: 400, marginLeft: "auto", marginRight: "auto", marginTop: 200}} 
  >
    <form onSubmit={e=>props.handleNextClick(e,  props.idx)}>
      <input onChange={props.handleChange} 
      style= {{ width: 800, height: 200, fontSize: 60, textAlign: "center"}}
      type={props.displayField(props.formFields[props.idx]).type} 
      name={props.displayField(props.formFields[props.idx]).name} 
      placeholder={props.displayField(props.formFields[props.idx]).placeholder} />
      <button
      style={{marginTop: 20, marginRight: 10, height: 50, width: 100}}
      type="submit"
      value="next"
      >
        Next
      </button>
    
      <button
        style={{height: 50, width: 100}}
        onClick={e => props.handleSubmit(e)}
      >
      Submit
      </button>
    </form>
  </div>
);
export default FormPage;
