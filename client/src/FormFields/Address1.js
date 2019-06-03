import React, { Component } from "react";
import Button from "../Button";

class Address1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {
        claimantName: false,
        address1: false
      },
      claimantNameValid: false,
      address1Valid: false,
      touched: {
        claimantName: false,
        address1: false
      }
    };
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleBlur(event) {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({ touched: { ...this.state.touched, [field]: true } }, () =>
      this.checkInput(field, value)
    );
  }

  checkInput(field, value) {
    let validField = field + "Valid";
    if (!value.length) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: true },
        [validField]: false
      }));
    } else if (value.length) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: false },
        [validField]: true
      }));
    }
  }

  displayError() {
    const fieldArray = [
      { address1: this.props.address1 },
      { claimantName: this.props.claimantName }
    ];
    fieldArray.forEach(fieldObj => {
      Object.keys(fieldObj).forEach(key => {
        this.checkInput(key, fieldObj[key]);
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        <h4> Claimant’s Name and Home Address</h4>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <label>Name</label>
              <input
                onChange={event => this.props.handleChange(event)}
                name="claimantName"
                type="text"
                placeholder="name"
                required="true"
                value={this.props.claimantName}
                className={
                  this.state.formErrors.claimantName
                    ? "form-control errors"
                    : "form-control"
                }
                onBlur={this.handleBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>Address</label>
              <input
                onChange={event => this.props.handleChange(event)}
                name="address1"
                type="text"
                placeholder="address"
                required="true"
                className={
                  this.state.formErrors.address1
                    ? "form-control errors"
                    : "form-control"
                }
                value={this.props.address1}
                onBlur={this.handleBlur}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <label>City</label>
              <input
                className="form-control"
                onChange={event => this.props.handleChange(event)}
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
                onChange={event => this.props.handleChange(event)}
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
                onChange={event => this.props.handleChange(event)}
                name="zip1"
                type="text"
                placeholder="zip"
                value={this.props.zip1}
              />
            </div>
          </div>
        </div>

        <button
          className="btn btn-primary btn-lg"
          type="submit"
          value="next"
          onClick={this.props.handleNextClick}
          idx={this.props.idx}
          disabled={!this.state.address1Valid || !this.state.claimantNameValid}
          onMouseEnter={
            !this.state.address1Valid || !this.state.claimantNameValid
              ? () => this.displayError()
              : ""
          }
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default Address1;
