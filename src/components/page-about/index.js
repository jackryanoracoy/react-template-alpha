import React, { useEffect, useState } from 'react';
import Button from '../site-button/';

import './index.scss';

const Title = 'About Page Testing';

function About() {

  useEffect(() => {
    fetchItems()
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
    const items = await data.json();
    setItems(items);
  }

  return (
    <main className="about">
      <header className="about-header bg-grey-300">
        <div className="container">
          <div className="section">
            <h2 className="text-center">ABOUT</h2>
          </div>
        </div>
      </header>

      <article className="about-article">
        <h2 className="sr-only">About Page</h2>
        <div className="container">
          <section className="section">
            <h3 className="mb-20">This is a dummy content</h3>
            {items.map(item => (
              <p className="mb-40 mb-sm-20" key={item}>{item}</p>
            ))}

            <div className="flex gap-10">
              <div className="flex-item-12 flex-item-sm">
                <Button buttonClass="is-danger is-block" buttonText="Back To Home Page" />
              </div>
              <div className="flex-item-12 flex-item-sm">
                <Button buttonClass="is-primary is-block" buttonPath="/about/" buttonText="Visit About Page" />
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default About;
