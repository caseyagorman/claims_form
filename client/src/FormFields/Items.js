import React, { Component } from "react";

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formErrors: {
        item1: false,
        amount1: false,
        total: false
      },
      item1Valid: false,
      amount1Valid: false,
      totalValid: false,
      touched: {
        item1: false,
        amount1: false,
        total: false
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
    console.log(value);
    let validField = field + "Valid";
    if (!value.length) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: true },
        [validField]: false
      }));
    } else if (value.length || value !== null) {
      this.setState(state => ({
        formErrors: { ...state.formErrors, [field]: false },
        [validField]: true
      }));
    }
  }

  displayError() {
    const fieldArray = [
      { item1: this.props.item1 },
      { amount1: this.props.amount1 },
      { total: this.props.total }
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
        <div className="row">
          <div className="col">
            <label>Item 1</label>
            <input
              onChange={event => this.props.handleChange(event)}
              name="item1"
              type="text"
              placeholder="item 1"
              required={true}
              value={this.props.item1}
              className={
                this.state.formErrors.item1
                  ? "form-control errors"
                  : "form-control"
              }
              onBlur={this.handleBlur}
            />
          </div>

          <div className="col">
            <label>Amount 1</label>
            <input
              className={
                this.state.formErrors.amount1
                  ? "form-control errors"
                  : "form-control"
              }
              onChange={event => this.props.handleChange(event)}
              name="amount1"
              type="text"
              placeholder="amount 1"
              required={true}
              value={this.props.amount1}
              onBlur={this.handleBlur}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Item 2</label>
            <input
              className="form-control"
              onChange={event => this.props.handleChange(event)}
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
              onChange={event => this.props.handleChange(event)}
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
              onChange={event => this.props.handleChange(event)}
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
              onChange={event => this.props.handleChange(event)}
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
              onChange={event => this.props.handleChange(event)}
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
              onChange={event => this.props.handleChange(event)}
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
              className={
                this.state.formErrors.total
                  ? "form-control errors"
                  : "form-control"
              }
              onChange={event => this.props.handleChange(event)}
              name="total"
              type="text"
              placeholder="total"
              value={this.props.total}
              onBlur={this.handleBlur}
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
          disabled={
            !this.state.item1Valid ||
            !this.state.amount1Valid ||
            !this.state.totalValid
          }
          className="btn btn-primary btn-lg"
          type="submit"
          value="next"
          onClick={e => this.props.handleNextClick(e, this.props.idx)}
          style={{ marginRight: 5 }}
          onMouseEnter={
            !this.state.item1Valid ||
            !this.state.amount1Valid ||
            !this.state.total
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

export default Items;
