import React from 'react';
import Branding from '../site-branding/';
import MenuButton from '../site-menu-button/';
import Navigation from '../site-navigation/';

import './index.scss';

function Header() {
  return (
    <header className="header">
      <div className="header-content bg-primary flex is-jus-spbetween is-alt-center">
        <div className="header-branding">
          <Branding />
        </div>
        <div className="header-menu hidden-lg-min">
          <MenuButton />
        </div>
      </div>

      <div className="header-content bg-secondary">
        <nav className="header-navigation">
          <Navigation />
        </nav>
      </div>
    </header>
  );
}

export default Header;
