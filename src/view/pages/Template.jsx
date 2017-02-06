import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Match, Miss} from 'react-router'
import logo from '../../logo.svg';
import '../../App.css'
import UnderConstruction from "./UnderConstruction.jsx"
import Picross from "./Picross.jsx"


export default class Template extends Component{
  render(){
    return <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <div>
            <ul>
              <li><Link to="/" activeOnlyWhenExact activeClassName="active">Home</Link></li>
              <li><Link to="/picross" activeClassName="active">Picross</Link></li>
              <li><Link to="/profile" activeClassName="active">Profile</Link></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
            <Match exactly pattern="/" component={UnderConstruction} />
            <Match pattern="/picross" component={Picross} />
            <Match pattern="/profile" component={UnderConstruction} />
            <Match pattern="/about" component={UnderConstruction} />

          </div>
        </Router>
      </div>
  }
}
