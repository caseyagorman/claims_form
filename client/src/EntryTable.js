import React, { Component } from "react";
import EntryPage from "./EntryPage"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./redux/actions/itemsActions";
class EntryTable extends Component {
  componentDidMount() {
    this.props.itemsActions.fetchItems();
  }

  displayEntries(items){
    if (!items) {
      return <div>No items</div>
    }
    items = Object.values(items)
    return <EntryPage items={items} />
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
