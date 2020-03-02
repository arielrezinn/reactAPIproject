//map layout
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { geolocated } from "react-geolocated";
import './index.css';


function getLocation() {
    function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  }

  function error() {
    // spit out error message and choose a random location
  }

  if (!navigator.geolocation) {
    // spit out error message and choose a random location
  } else {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 43.077783,
      lng: -89.411236
    },
    zoom: 12
  };


  render() {
    return (
      // you must set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyC-FNgVzK38CFoYC6E4-olIUu418f90H2I'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={43.077783}
            lng={-89.411236}
            text="You are here!"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
