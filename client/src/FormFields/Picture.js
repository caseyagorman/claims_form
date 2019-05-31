import React, { Component } from "react";


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


export default Picture