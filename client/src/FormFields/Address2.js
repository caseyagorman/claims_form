import React, { Component } from "react";

class Address2 extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Send official notices and correspondence to</h4>
        <p>Leave blank if same as address</p>
        <div className="row">
          <div className="col">
            <label>Address</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="address2"
              type="text"
              placeholder="address"
              value={this.props.address2}
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>City</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="city2"
              type="text"
              placeholder="city"
              value={this.props.city2}
            />
          </div>

          <div className="col">
            <label>State</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="state2"
              type="text"
              placeholder="state"
              value={this.props.state2}
            />
          </div>

          <div className="col">
            <label>Zipcode</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="zip2"
              type="text"
              placeholder="zip"
              value={this.props.zip2}
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

export default Address2;
