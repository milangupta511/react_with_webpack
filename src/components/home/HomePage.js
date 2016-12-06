import React, {Component} from 'react';
import {Link} from 'react-router';

export default class HomePage extends Component {
  render(){
    return (
      <div className="jumbotron">
        <h1>Administration Page</h1>
        <p>React, redux and React Router in ES6 for responsive web pages</p>
        <Link to="about" activeClassName="active" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}