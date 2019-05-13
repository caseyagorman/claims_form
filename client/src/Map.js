import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./redux/actions/itemsActions";
import MapContainer from "./MapContainer";
class Map extends Component {
  componentDidMount() {
    this.props.itemsActions.fetchItems();
  }


  displayMap(items){
    if (!items) {
      return <div>No items</div>
    }

    items = Object.values(items)
    return <MapContainer items={items} />
  }

  render() {
    return this.displayMap(this.props.items)
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
)(Map);
