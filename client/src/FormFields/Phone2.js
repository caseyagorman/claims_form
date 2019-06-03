import React, { Component } from "react";

class Phone2 extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Telephone</h4>
        <p>Leave blank if same as previous telephone</p>
        <div className="row">
          <div className="col">
            <label>Daytime</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="dayPhone2"
              type="tel"
              placeholder="daytime phone"
              value={this.props.dayPhone2}
            />
          </div>
          <div className="col">
            <label>Evening</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="evePhone2"
              type="tel"
              placeholder="evening phone"
              value={this.props.evePhone2}
            />
          </div>
          <div className="col">
            <label>Cellular</label>
            <input
              className="form-control"
              onChange={event => this.handleChange(event)}
              name="cellPhone2"
              type="tel"
              placeholder="cell phone"
              value={this.props.cellPhone2}
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

export default Phone2;
