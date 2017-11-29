import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import DataProfile from './components/DataProfile.js';
import {Bootstrap, Grid, Row, Col} from 'react-bootstrap';

import PropertyProfile from './components/PropertyProfile.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Smart-house"/>
        <div className="container">
          <div className="jumbotron">
          <Row className="show-grid">
            <Col xs={3} md={3} >
                <PropertyProfile />
            </Col>
            <Col xs={9} md={9}>
              <DataProfile />
            </Col>
          </Row>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
