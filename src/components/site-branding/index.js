import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Branding extends Component {
  render() {
    return (
      <h1 className="branding">
        <Link className="branding-title" to="/">SITE TITLE</Link>
      </h1>
    );
  }
}

export default Branding;
