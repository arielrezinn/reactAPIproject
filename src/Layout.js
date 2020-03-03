import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import MapContainer from './MapContainer'
import Options from './Options'
import './index.css';

import { Column, Row } from "simple-flexbox";

class Layout extends Component {

  render() {
    return (
        <Row>
          <Column
            className="options">
            <Options></Options>
          </Column>
          <Column
            className="map">
            <MapContainer></MapContainer>
          </Column>
        </Row>
    );
  }
}


export default Layout
