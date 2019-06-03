import React, { Component } from "react";

class Picture extends Component {
  render() {
    return (
      <React.Fragment>
        <h4>Upload Image for use by Coalition on Homelessness </h4>
        <input
          onChange={this.props.onChange}
          name="picture"
          type="file"
          placeholder="picture"
          label="picture"
        />
        <br />
        <p>
          {" "}
          I agree to allow Coalition on Homelessness to use this photo for map
          project
          <input
            style={{ marginLeft: 5 }}
            onChange={this.props.handleCheckboxChange}
            type="checkbox"
          />
        </p>
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

export default Picture;
