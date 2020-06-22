import React from 'react';
import Header from '../app-header/';
import Footer from '../app-footer/';
import Home from '../page-home/';
import About from '../page-about/';
import Contact from '../page-contact/';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/contact" exact component={ Contact } />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
