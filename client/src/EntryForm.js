import React, { Component } from "react";

import * as itemsActions from "./redux/actions/itemsActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class EntryForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        file: []
      };

      this.handleChange = this.handleChange.bind(this);
      this.submitForm = this.submitForm.bind(this);
    }
  
    submitForm(event) {
      event.preventDefault();
      let file = this.state.file;
      console.log(file)
      const formData = new FormData();
      formData.append('file', file)
      console.log(formData.get("file"))
      this.props.itemsActions.addItem(formData);

    }

    handleChange(event) {
        console.log(event.target.files[0])
      this.setState({ [event.target.name]: event.target.files[0] });
    }



    render() {

      return (
        <form>
      <input onChange={this.handleChange} type="file" name="file" 
      />
      <button
        onClick={this.submitForm}
      >
      Submit
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
      itemsActions: bindActionCreators(itemsActions, dispatch)
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(EntryForm);
