import React, { useState } from "react";
import '../styles/contact.css';
import CallApi from "./CallApi";

export default function Contactus() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    CallApi(formData.name, formData.email, formData.message);
  };
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
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name"  name="name" required value={formData.name} onChange={handleInputChange}/>
          <input type="email" placeholder="Your Email" name="email" required value={formData.email} onChange={handleInputChange}/>
          <textarea placeholder="Your Message" name="message" required value={formData.message} onChange={handleInputChange}/>
          <button type="submit" onClick={() => callApi()}>Submit</button>
        </form>
      </div>
    </div>
  );
}
