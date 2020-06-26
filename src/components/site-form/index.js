import React, { Component } from 'react';

import './index.scss';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { FormInputClass } = this.props;
    const { FormInputName } = this.props;
    const { FormInputType } = this.props;
    const { FormInputPlaceholder } = this.props;
    return (
      <input
      className={FormInputClass ? FormInputClass : ''}
      name={FormInputName ? FormInputName : ''}
      type={FormInputType ? FormInputType : 'text'}
      placeholder={FormInputPlaceholder ? FormInputPlaceholder : 'Input text here...'}
      value={this.state.value}
      onChange={this.handleChange} />
    );
  }
}

class FormButton extends Component {
  render() {
    return <input type="submit" value={this.props.ButtonText ? this.props.ButtonText : 'Submit'} />
  }
}

export { FormInput, FormButton }