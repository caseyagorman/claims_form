import React, { Component } from "react";

class Personal extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <label>Date of Birth</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="dateOfBirth"
              type="date"
              placeholder="date of birth"
              value={this.props.dateOfBirth}
            />
          </div>
          <div className="col">
            <label>Social Security Number</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="ssn"
              type="password"
              placeholder="ssn"
              value={this.props.ssn}
            />
          </div>
        </div>
        <br />
        <button
          className="btn btn-danger btn-lg"
          type="submit"
          value="back"
          onClick={e => this.props.handleNextClick(e, this.props.idx)}
          style={{ marginRight: 5 }}
        >
          Back
        </button>
        <button
          className="btn btn-primary btn-lg"
          type="submit"
          value="next"
          onClick={e => this.props.handleNextClick(e, this.props.idx)}
          style={{ marginRight: 5 }}
        >
          Next
        </button>
      </React.Fragment>
    );
  }
}

export default Personal;
