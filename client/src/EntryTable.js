import React, { Component } from "react";
import EntryPage from "./EntryPage"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./redux/actions/itemsActions";
import _ from "underscore"
class EntryTable extends Component {
  componentDidMount() {
    this.props.itemsActions.fetchItems();
  }

  displayEntries(items){
    console.log("initial items", items)
    if (!items) {
      return <div>No items</div>
    }
    // let newObject = {}
    // let newItems = []
    // for (let i=0; i< items.length; i++){
    //   for (let key in items[i]){
    //     if(items[i][key]===""){
    //       newObject[key] = "not entered"
    //     }
    //     else{
    //       newObject[key] = items[i][key]
    //     }
    //   }
    //   newItems.push(newObject)
    //   newObject = {}
    // }
    let newItems = []
    let newObject = {}
    items.forEach(obj => {
      Object.keys(obj).forEach(key => {
        if(obj[key]===null || !obj[key].length){
          newObject[key] = "not entered"
        }
        else {
          newObject[key] = obj[key] 
        }
      });
      newItems.push(newObject)
      newObject = {}
    });

    console.log("items now", newItems)
    // return <div></div>
    return <EntryPage items={newItems} />
  }

  render() {
    return this.displayEntries(this.props.items)
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    itemsActions: bindActionCreators(itemsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EntryTable);
