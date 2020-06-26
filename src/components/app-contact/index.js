import React from 'react';
import {FormInput, FormButton} from '../site-form/';

import './index.scss';

function ContactForm() {
  return (
    <form>
      <label>Name</label>
      <FormInput FormInputClass="width-100 mb-20" FormInputPlaceholder="Your Name" />
      <label>Email</label>
      <FormInput FormInputClass="width-100 mb-20" FormInputPlaceholder="Your Email" FormInputType="email" />
      <label>Number</label>
      <FormInput FormInputClass="width-100 mb-20" FormInputPlaceholder="Your Number" FormInputType="number" />
      <label>Testing</label>
      <FormInput FormInputClass="width-100 mb-20" />
      <FormButton ButtonText="Send Form" />
    </form>
  );
}

export default ContactForm;
