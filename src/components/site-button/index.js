import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Button extends Component {
  render() {
    const { buttonPath } = this.props;
    const { buttonText } = this.props;
    const { buttonClass } = this.props;

    return (
      <Link className={buttonClass ? `button ${buttonClass}` : 'button'}
      to={buttonPath ? buttonPath : '/'}>
        {buttonText ? buttonText : 'Button'}
      </Link>
    );
  }
}

export default Button;
