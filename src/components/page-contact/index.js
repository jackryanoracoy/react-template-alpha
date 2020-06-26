import React, { useEffect, useState } from 'react';
import ContactForm from '../app-contact/';

import './index.scss';

function Contact() {

  useEffect(() => {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=2');
    const items = await data.json();
    setItems(items);
  }

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
            <h3 className="mb-20">Contact Form</h3>
            <ContactForm />
          </section>
          
          <section className="section">
            <h3 className="mb-20">Contact Information</h3>
            {items.map(item => (
              <p className="mb-40 mb-sm-20" key={item}>{item}</p>
            ))}
          </section>
        </div>
      </article>
    </main>
  );
}

export default Contact;

