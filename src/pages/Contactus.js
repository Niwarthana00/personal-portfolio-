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
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendToApi = async (url) => {
    const response = await axios.post(url, formData);
    return response.status === 200;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstApiUrl = `https://niwaaa.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;
    const secondApiUrl = `https://backupapi.onrender.com/api/v1/?name=${formData.name}&email=${formData.email}&message=${formData.message}`;

    try {
      const firstApiSuccess = await sendToApi(firstApiUrl);
      
      if (firstApiSuccess) {
        showToastMessage("success", "Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      const secondApiSuccess = await sendToApi(secondApiUrl);
      
      if (secondApiSuccess) {
        showToastMessage("success", "Email sent successfully");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      throw new Error("Both APIs failed");
    } catch (error) {
      showToastMessage("error", "Failed to send email, try again");
    }
  };

  const showToastMessage = (type, message) => {
    setToast({
      show: true,
      message,
      type,
    });
    setTimeout(() => {
      setToast({
        show: false,
        message: "",
        type: "",
      });
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
              We'd love to hear from you! Please leave your message below, and
              we'll get back to you as soon as possible.
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
          <div
            className={`toast-message ${
              toast.type === "success" ? "toast-success" : "toast-error"
            }`}
          >
            {toast.type === "success" ? "✓" : "⚠️"} {toast.message}
          </div>
        )}
      </div>
    </div>
  );
}