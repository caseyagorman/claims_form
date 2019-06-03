import React, { Component } from "react";

class Witness extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>12.Witnesses (if any) Name</h4>
        <div className="row">
          <div className="col">
            <label>1.</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witness1"
              type="text"
              placeholder="witness 1"
              value={this.props.witness1}
            />
          </div>
          <div className="col">
            <label>Address </label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witnessAddress1"
              type="text"
              placeholder="witness address 1"
              value={this.props.witnessAddress1}
            />
          </div>
          <div className="col">
            <label>Phone </label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witnessPhone1"
              type="text"
              placeholder="witness phone 1"
              label="witness phone"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>2.</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witness2"
              type="text"
              placeholder="witness 2"
              value={this.props.witness2}
            />
          </div>
          <div className="col">
            <label />
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witnessAddress2"
              type="text"
              placeholder="witness address 2"
              value={this.props.witnessAddress2}
            />
          </div>
          <div className="col">
            <label />
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="witnessPhone2"
              type="text"
              placeholder="witness phone 2"
              value={this.props.witnessPhone2}
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

export default Witness;
