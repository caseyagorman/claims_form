import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EntryForm from "./EntryForm.js";
import Entries from "./Entries";
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";

class Main extends Component {
  componentDidMount() {
    this.props.itemsActions.fetchItems();
    this.props.locationActions.getLocation();
  }
  


  displayEntries(items){
    if (!items) {
      return <div>No items</div>
    }
    items = Object.values(items)
    return <Entries items={items} />
  }
  //   for (let i=0; i<items.length; i++){
  //     if (items[i].img){
  //       return  <img style= {{height: 200}}src={`data:image/jpeg;base64,${items[i].img.data}`} />
  //     }
  //   }
  // }



  
  render() {
    return (
      <div className="container">
      <EntryForm/>
        <h1 style={{ textAlign: "center" }}>Confiscated Items</h1>
        {this.displayEntries(this.props.items)}
        <br /> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch),
    locationActions: bindActionCreators(locationActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
