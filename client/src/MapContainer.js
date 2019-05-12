import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps"
import key from "./config";
import DeleteEntry from "./DeleteEntry";

const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props => {

  return (
    <GoogleMap defaultZoom={11} defaultCenter={{ lat: 37.8032914, lng: -122.2710491 }}>
      {props.markers.map(marker => {
        const onClick = props.onClick.bind(this, marker)
        return (
          <Marker
            key={marker.entryId}
            onClick={onClick}
            position={{ lat: marker.location.latitude, lng: marker.location.longitude }}
          >
            {props.selectedMarker === marker &&
              <InfoWindow>
                <div>
                <DeleteEntry item={marker.entryId} />
                    {marker.claimantName}
                    <br></br>
                    {marker.image  && (
                    
                      <img
                        style={{ height: 150, maxWidth: 300 }}
                        alt="display form"
                        src={`data:image/jpeg;base64,${marker.image}`}
                      />
                    )}
                </div>
              </InfoWindow>}
            }
          </Marker>
        )
      })}
    </GoogleMap>
  )
})

export default class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedMarker: false
    }
  }
  handleClick = (marker, event) => {
    this.setState({ selectedMarker: marker })
  }
  render() {
    const googleMap =`https://maps.googleapis.com/maps/api/js?key=${key}&v=3.exp&libraries=geometry,drawing,places`
    return (
      <MapWithAMarker
        selectedMarker={this.state.selectedMarker}
        markers={this.props.items}
        onClick={this.handleClick}
        googleMapURL= {googleMap}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `800px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}