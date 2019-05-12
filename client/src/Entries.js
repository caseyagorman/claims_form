import React, { Component } from "react";
import EntryPage from "./EntryPage"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as itemsActions from "./redux/actions/itemsActions";
import * as locationActions from "./redux/actions/locationActions";
import MapContainer from "./MapContainer";
class Entries extends Component {
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
  displayMap(items){
    if (!items) {
      return <div>No items</div>
    }

    items = Object.values(items)
    return <MapContainer items={items} />
  }
  //   items = Object.values(items)
  //   let locations = []
  //   for (let i = 0; i<items.length; i++){
  //     console.log('locations', items[i].location.latitude)
  //     locations.push({'latitude': items[i].location.latitude, 'longitude': items[i].location.longitude})
  //   }
  //   return <MapContainer locations={locations}/>
  // }

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
)(Entries);
