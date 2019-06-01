import React from "react";

const Button = props => (
    <button
        className="btn btn-primary btn-lg"
        type="submit"
        value="next"
        onClick={e=>props.handleNextClick(e,  props.idx)}
        disabled={props.isDisabled}
        onMouseEnter={props.displayError}
    >
        Next
    </button>  
)
export default Button