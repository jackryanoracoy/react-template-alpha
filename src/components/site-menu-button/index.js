import React, { Component } from 'react';

import './index.scss';

class MenuButton extends Component {
  state = {
    isActive: false,
  }

  render() {
    return (
      <button className={ this.state.isActive ? "menu is-active" : "menu"}
      onClick={ () => this.setState({isActive: !this.state.isActive})}>
        <span className="menu-box">
          <span className="menu-inner"></span>
        </span>
      </button>
    );
  }
}

export default MenuButton;
