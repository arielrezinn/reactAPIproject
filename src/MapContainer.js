//map layout
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './Locations.js';
import './index.css';
// my maps api key 'AIzaSyC-FNgVzK38CFoYC6E4-olIUu418f90H2I'

const mapStyles = {
  width: '67.2%',
  height: '97.8%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };

  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       center: [{latitude: 44.0377, longitude: -90.5477}],
  //       places: [{latitude: 47.9, longitude: -122.14}]
  //     };
  // }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  // displayMarkers = () => {
  //   return this.state.places.map((store, index) => {
  //     return <Marker key={index} id={index} position={{
  //      lat: store.latitude,
  //      lng: store.longitude
  //    }}
  //    onClick={() => console.log("You clicked me!")} />
  //   })
  // }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coords = pos.coords;
        this.setState({
          center: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
      },
      error => console.log(error)
    );
  }

  render() {
    return (
      // you must set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <Map
          google={this.props.google}
          center={this.state.center}
          style={mapStyles}
          zoom={14}
        >
          <Marker
            id={'user-location'}
            onClick={this.onMarkerClick}
            name={'You are here'}
            position={this.state.center}
            color="blue"
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC-FNgVzK38CFoYC6E4-olIUu418f90H2I'
})(MapContainer);
