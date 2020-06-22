import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Navigation extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
        <li className="nav-item"><Link to="/contact">Contact</Link></li>
      </ul>
    );
  }
}

export default Navigation;
