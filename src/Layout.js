import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Map from './Map'
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
            <Map></Map>
          </Column>
        </Row>
    );
  }
}


export default Layout
