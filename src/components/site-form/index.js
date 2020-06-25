import React, { Component } from 'react';

import './index.scss';

class Form extends Component {
  render() {
    return (
      <form className="form">
        <input className="width-100 mb-20" type="text" placeholder="Input box 1" />
        <input className="width-100 mb-20" type="text" placeholder="Input box 2" />
        <input className="width-100 mb-20" type="text" placeholder="Input box 3" />
        <button>Dummy Button</button>
      </form>
    );
  }
}

export default Form;
