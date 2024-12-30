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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiPrimaryUrl = `https://niwaaa.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;

    try {
      const response = await axios.post(apiPrimaryUrl);

      if (response.status === 200) {
        showToastMessage("success", "Email send successfully");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      const fallbackUrl = `https://backupapi.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;
      try {
        const fallbackResponse = await axios.post(fallbackUrl);

        if (fallbackResponse.status === 200) {
          showToastMessage("success", "Email send successfully");
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error("Failed to send message via fallback API");
        }
      } catch (fallbackError) {
        showToastMessage("error", "Failed to send email, try again");
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
            We’d love to hear from you! Please leave your message below, and we’ll get back to you as soon as possible.
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
        
        {/* Toast Message */}
        {toast.show && (
          <div className={`toast-message ${
            toast.type === "success" ? "toast-success" : "toast-error"
          }`}>
            {toast.type === "success" ? "✓" : "⚠️"} {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}