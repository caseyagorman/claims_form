import React, { Component } from "react";
import Button from "../Button";

class Phone1 extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Telephone</h4>
        <div className="row">
          <div className="col">
            <label>Daytime phone number</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="dayPhone1"
              type="tel"
              placeholder="daytime phone"
              value={this.props.dayPhone1}
            />
          </div>
          <div className="col">
            <label>Evening phone number</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="evePhone1"
              type="tel"
              placeholder="evening phone"
              value={this.props.evePhone1}
            />
          </div>
          <div className="col">
            <label>Cell phone number</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
              name="cellPhone1"
              type="tel"
              placeholder="cell phone"
              value={this.props.cellPhone1}
            />
          </div>
        </div>
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
        {/* <Button
          handleNextClick={this.props.handleNextClick}
          idx={this.props.idx}
        /> */}
      </React.Fragment>
    );
  }
}
export default Phone1;
