import React from 'react';
import '../styles/contact.css';

export default function Contactus() {
  return (
    
    <div className="contact-container" id="contact">

        
      <div className="contact-form">
        <div className="form-header">
          <div>
          
            <h2>Quick Contact</h2>
            <h1>Leave a Message</h1>
            <p>
              Labore accusan in modo compungi, iacentem substanti ales um se sed
              esse haec.
            </p>
          </div>
        </div>
        <form>
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" placeholder="Your Email" name="email" required />
          <textarea placeholder="Your Message" name="message" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
