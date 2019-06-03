import React, { Component } from "react";
import Button from "../Button";

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
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
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
              onChange={this.props.onChange}
              name="zip2"
              type="text"
              placeholder="zip"
              value={this.props.zip2}
            />
          </div>
        </div>

        <Button
          handleNextClick={this.props.handleNextClick}
          idx={this.props.idx}
        />
      </React.Fragment>
    );
  }
}

export default Address2;
