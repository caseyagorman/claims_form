import React, { Component } from "react";
import EntryPage from "./EntryPage"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";
class Entries extends Component {
  componentDidMount() {
    this.props.itemsActions.fetchItems();
    this.props.locationActions.getLocation();
  }

  displayEntries(items){
    if (!items) {
      return <div>No items</div>
    }
    items = Object.values(items)
    return <EntryPage items={items} />
  }

  render() {
    return this.displayEntries(this.props.items);
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
)(Entries);
