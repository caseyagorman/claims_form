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
    if (!items) {
      return <div>No items</div>
    }
    let newObject = {}
    let newItems = []
    for (let i=0; i< items.length; i++){
      for (let key in items[i]){
        if(items[i][key]===""){
          newObject[key] = "not entered"
        }
        else{
          newObject[key] = items[i][key]
        }
      }
      newItems.push(newObject)
      newObject = {}
    }


  
  
    // items = Object.values(items)
    
    return <EntryPage items={newItems} />
  }

  // displayEntries(items){
  //   if (!items) {
  //     return <div>No items</div>
  //   }
  //   items = Object.values(items)
  //   let newItems = []
  //   for (key in items)
  //   // for (let i=0; i < items.length; i++){
  //   //   console.log("in for loop", items[i])
  //   // }
    
  //   return <EntryPage items={items} />
  // }
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
