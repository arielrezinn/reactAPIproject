//options class
import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './index.css';


class Layout extends Component {

  render() {
    let prompt = 'What are you craving?'
    return (
      <div>
        <div className="prompt">{prompt}</div>
      </div>

    );
  }
}

export default Layout;
