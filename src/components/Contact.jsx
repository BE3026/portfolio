import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [successMessage, setSuccessMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccessMessage("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_6bt38e8",
        "template_cxeuote",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "H2fyBCuJ9vjMUylEK"
      );
      setSuccessMessage("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Let's Connect</h2>

      <p className="contact-subtitle">
        Have an opportunity or want to discuss a project? Feel free to reach
        out.
      </p>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="contact-card">
            <h3>📧 Email</h3>
            <p>bharatheswar20112001@gmail.com</p>
          </div>

          <div className="contact-card">
            <h3>📍 Location</h3>
            <p>Chennai, Tamil Nadu</p>
          </div>

          <div className="contact-card">
            <h3>💼 LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/bharath-eswar-a-a34ba6204/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/bharath-eswar-a-a34ba6204
            </a>
          </div>

          <div className="contact-card">
            <h3>💻 GitHub</h3>
            <a
              href="https://github.com/BE3026"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/BE3026
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {errors.name && (
            <span className="error">{errors.name}</span>
          )}

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error">{errors.email}</span>
          )}

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />

          {errors.subject && (
            <span className="error">{errors.subject}</span>
          )}

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {errors.message && (
            <span className="error">{errors.message}</span>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {successMessage && (
            <span className="success">{successMessage}</span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;