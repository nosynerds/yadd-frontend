import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Schema from './containers/SchemaContainer';
import Table from './containers/TableContainer';
import Column from './containers/ColumnContainer';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div id="rootContainer">
      <Router>
      <div>
          <Route path="/" exact component={Schema} />
          <Route path="/table/" component={Table} />
          <Route path="/column/" component={Column} />
        </div> 
      </Router>
        
      </div>
    );
  }
}

export default App;
