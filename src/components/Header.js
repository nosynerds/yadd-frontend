import React from 'react';
import './Styles/header.css'
import { BrowserRouter as Router, Link } from "react-router-dom";

class Header extends React.Component {
    render() {
      return (
        <div id="pageHeader">
            <div>
              <h1>YADD <span style={{fontSize:'16px'}}>v0.01</span></h1>
            </div>
            {/* <Router> */}
            <ul className="mainMenu">
              <li><Link to="/">Schema</Link></li>
              <li><Link to="/table">Table</Link></li>
              <li><Link to="/column">Column</Link></li>
            </ul>
            {/* </Router> */}
        </div>
      );
    }
  };
  export default Header;