import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1p8c5c",
        "template_jg7l49p",
        form.current,
        "5iYIJYv2EO5uBVpU5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    clicked();
  };

  const clicked = () => setShowForm(false);

  return (
    <div className="contactpage p-5 " id="contact">
      <div className="formbox container">
        {showForm ? (
          <form
            ref={form}
            onSubmit={handleSubmit}
            method="POST"
            target="_blank"
          >
            <div className="mb-3 pt-0">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <input
                type="email"
                placeholder="E-mail"
                name="email"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0">
              <textarea
                placeholder="Your message"
                name="message"
                className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                required
              />
            </div>
            <div className="mb-3 pt-0 text-center">
              <button className="submit-button btn btn-primary" type="submit">
                Send a message
              </button>
            </div>
          </form>
        ) : (
          <div className="sentForm">Thank you, your message has been sent.</div>
        )}
      </div>

      <p className="portfolio-copyright text-white">
        Copyright © 2022 - Paul Iaszfalvi |{" "}
        <a
          href="https://github.com/PaulIaszfalvi/responsive_portfolio"
          className="btn-outlined-light mt-3 text-white"
          target="_blank"
          rel="noreferrer"
        >
          Click here to this portfolio code base
        </a>
      </p>
    </div>
  );
};

export default Contact;
