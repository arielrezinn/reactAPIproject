import React, { Component } from "react";
//import ReactDOM from 'react-dom';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import { AwesomeButton } from "react-awesome-button";
import MapContainer from './MapContainer'
import './index.css';

import { Column, Row } from "simple-flexbox";



class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {searchterm: null};
  }

  Button(craving) {
    return (
      <AwesomeButton
        type="primary"
        ripple
        onPress={() => {
          this.setState({searchterm: craving})
          console.log(craving + 'button pressed and state set!')
        }}>
        {craving}
      </AwesomeButton>
    );
  }

  render() {
    return (
        <Row id="layout">
          <Column style={{"width" : "30%"}}>
            <div id="options">
              <div className="prompt">{'What are you craving?'}</div>
              {this.Button('Coffee')}
              {this.Button('Tea')}
              {this.Button('Bubble Tea')}
              {this.Button('Cheese Curds')}
              {this.Button('Ice Cream')}
            </div>
          </Column>
          <Column style={{"width" : "70%"}}>
            <MapContainer
            craving={this.state.searchterm}>
            </MapContainer>
          </Column>
        </Row>
    );
  }
}


export default Layout
