import "./contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const form = useRef();

  const [submitted, setSubmitted] = useState(false);
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

    //   setTimeout(() => {
    //     setSubmitted(true);
    //   }, 100);
    // };

    // if (submitted) {
    //   return (
    //     <>
    //       <div className="text-2xl">Thank you!</div>
    //       <div className="text-md">We'll be in touch soon.</div>
    //     </>
    //   );
  };

  return (
    <div className="contactpage p-5 mx-xs-1 mx-md-auto" id="contact">
      <div className="formbox container">
        <form
          ref={form}
          action={FORM_ENDPOINT}
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
              placeholder="Email"
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
            <button
              className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Send a message
            </button>
          </div>
        </form>
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
