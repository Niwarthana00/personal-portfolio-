import React, { useState } from "react";
import '../styles/contact.css';
import axios from "axios";

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const handleSubmit = (e) => {
    e.preventDefault();
    backgroundApiCall();
  };

  const backgroundApiCall = async () => {
    const apiPrimaryUrl = `https://niwaaa.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;
    setFormData({ name: "", email: "", message: "" });

    try {
      const response = await axios.post(apiPrimaryUrl);

      if (response.status === 200) {
        showToastMessage("success", "Email sent successfully");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.log("Primary API call failed, attempting fallback API...");

      try {
        await delay(30000);

        const fallbackResponse = await axios.post(apiPrimaryUrl);

        if (fallbackResponse.status === 200) {
          showToastMessage("success", "Email sent successfully");
        } else {
          throw new Error("Failed to send message via fallback API");
        }
      } catch (fallbackError) {
        console.log(fallbackError);
        showToastMessage("error", "Failed to send message after retrying");
      }
    }
  };

  const showToastMessage = (type, message) => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 3000);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-form">
        <div className="form-header">
          <div>
            <h2>Quick Contact</h2>
            <h1>Leave a Message</h1>
            <p>
              We'd love to hear from you! Please leave your message below, and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Your Message"
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>

        {toast.show && (
          <div className={`toast-message ${
            toast.type === "success" ? "toast-success" : 
            toast.type === "info" ? "toast-info" : "toast-error"
          }`}>
            {toast.type === "success" ? "✓" : 
             toast.type === "info" ? "ℹ️" : "⚠️"} {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}