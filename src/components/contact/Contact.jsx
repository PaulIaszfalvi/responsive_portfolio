import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_e1p8c5c",
  TEMPLATE_ID: "template_jg7l49p",
  PUBLIC_KEY: "5iYIJYv2EO5uBVpU5",
};

const PORTFOLIO_REPO = "https://github.com/PaulIaszfalvi/responsive_portfolio";
const CURRENT_YEAR = new Date().getFullYear();

const InputField = ({ type = "text", placeholder, name, required = true }) => (
  <div className="mb-3 pt-0">
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required={required}
    />
  </div>
);

const TextAreaField = ({ placeholder, name, required = true }) => (
  <div className="mb-3 pt-0">
    <textarea
      placeholder={placeholder}
      name={name}
      className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required={required}
    />
  </div>
);

const ContactForm = ({ onSuccess }) => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        form.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )
      .then(
        () => {
          onSuccess();
        },
        (error) => {
          console.error("Email send failed:", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit} method="POST" target="_blank">
      <InputField type="text" placeholder="Your name" name="name" />
      <InputField type="email" placeholder="E-mail" name="email" />
      <TextAreaField placeholder="Your message" name="message" />
      <div className="mb-3 pt-0 text-center">
        <button className="submit-button btn btn-primary" type="submit">
          Send a message
        </button>
      </div>
    </form>
  );
};

const SuccessMessage = () => (
  <div className="sentForm">Thank you, your message has been sent.</div>
);

const Copyright = () => (
  <p className="portfolio-copyright text-white">
    Copyright © {CURRENT_YEAR} - Paul Iaszfalvi |{" "}
    <a
      href={PORTFOLIO_REPO}
      className="btn-outlined-light mt-3 text-white"
      target="_blank"
      rel="noreferrer"
    >
      View this portfolio's source code
    </a>
  </p>
);

const Contact = () => {
  const [showForm, setShowForm] = useState(true);

  const handleSuccess = () => setShowForm(false);

  return (
    <div className="contactpage p-5" id="contact">
      <div className="formbox container">
        {showForm ? (
          <ContactForm onSuccess={handleSuccess} />
        ) : (
          <SuccessMessage />
        )}
      </div>

      <Copyright />
    </div>
  );
};

export default Contact;
