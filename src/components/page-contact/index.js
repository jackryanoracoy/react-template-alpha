import React from 'react';
import Form from '../site-form/';

import './index.scss';

function About() {

  return (
    <main className="contact">
      <header className="contact-header bg-grey-300">
        <div className="container">
          <div className="section">
            <h2 className="text-center">CONTACT</h2>
          </div>
        </div>
      </header>

      <article className="contact-article">
        <h2 className="sr-only">Contact Page</h2>
        <div className="container">
          <section className="section">
            <Form />
          </section>
        </div>
      </article>
    </main>
  );
}

export default About;

