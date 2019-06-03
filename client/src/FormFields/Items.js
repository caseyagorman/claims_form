import React, { Component } from "react";

class Items extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            <label>Item 1</label>
            <input
              onChange={this.props.onChange}
              name="item1"
              type="text"
              placeholder="item 1"
              value={this.props.item1}
              className={
                this.props.showErrors ? "form-control errors" : "form-control"
              }
            />
          </div>

          <div className="col">
            <label>Amount 1</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="amount1"
              type="text"
              placeholder="amount 1"
              required="true"
              value={this.props.amount1}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Item 2</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="item2"
              type="text"
              placeholder="item 2"
              value={this.props.item2}
            />
          </div>

          <div className="col">
            <label>Amount 2</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="amount2"
              type="text"
              placeholder="amount 2"
              value={this.props.amount2}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Item 3</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="item3"
              type="text"
              placeholder="item 3"
              value={this.props.item3}
            />
          </div>

          <div className="col">
            <label>Amount 3</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="amount3"
              type="text"
              placeholder="amount 3"
              value={this.props.amount3}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Item 4</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="item4"
              type="text"
              placeholder="item 4"
              value={this.props.item4}
            />
          </div>

          <div className="col">
            <label>Amount 4</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="amount4"
              type="text"
              placeholder="amount 4"
              value={this.props.amount4}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6" />
          <div className="col-6">
            <label>Total</label>
            <input
              className="form-control"
              onChange={this.props.onChange}
              name="total"
              type="text"
              placeholder="total"
              value={this.props.total}
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

export default Items;
