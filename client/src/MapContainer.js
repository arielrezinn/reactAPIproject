//map layout
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import axios from 'axios';
import './index.css';
// import { yelp } from 'yelp-fusion';
// maps api key 'AIzaSyC-FNgVzK38CFoYC6E4-olIUu418f90H2I'
// yelp api key 'TQl-ldodqDuIn-Wi3xJ5xkB-nsuPgeUvlti5NCOhIJPKTssK0BA5EjYWnwasmMSca20hq1UxyNSYPLL1c1URFMrztx4w9VfRXcOiP8f0XlWgSxZMRvIKQYlO6htPXnYx'

const mapStyles = {
  width: '68.7%',
  height: '97.2%'
};

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {},          //Shows the infoWindow to the selected place upon a marker
    places: null,
    center: {lat: null, lng: null}
  };

  // constructor(props) {
  //   super(props);
  //     this.state = {
  //       center: [{latitude: 44.0377, longitude: -90.5477}],
  //       places: [{latitude: 47.9, longitude: -122.14}]
  //     };
  // }

  getPlaces(searchterm) {
    fetch('../server/routes/search')
      .then(places => this.setState({ places })
    )
  };




    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    // const url = 'https://api.yelp.com/v3/businesses/search';
    // const testParameters = '?term=ice+cream&latitude=43.071&longitude=-89.398&radius=10000';
    // axios.get(url + testParameters, config)
    //   .then(response => {
    //     this.setState({ places: response.data });
    //     console.log(response)
    //   });

    // 'use strict';
    //
    // const yelp = require('yelp-fusion');
    // const client = yelp.client('AIzaSyC-FNgVzK38CFoYC6E4-olIUu418f90H2I');
    //
    // client.search({
    //   term: 'Four Barrel Coffee',
    //   location: 'san francisco, ca',
    // }).then(response => {
    //   console.log(response.jsonBody.businesses[0].name);
    // }).catch(e => {
    //   console.log(e);
    // });
    //}

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

  displayMarkers = () => {
    return (this.state.places.map((store, index) => {
      return (
        <Marker
        key={index}
        id={index}
        position={{
         lat: store.latitude,
         lng: store.longitude
       }}/>
      );
   }));
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords
        this.setState({
          center: {
            lat: coords.latitude,
            lng: coords.longitude
          }
        });
    })
  }

  render() {
    this.getPlaces(this.props.craving)
    return (
      <div>
        <Map
          google={this.props.google}
          center={this.state.center}
          style={mapStyles}
          zoom={13}
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
