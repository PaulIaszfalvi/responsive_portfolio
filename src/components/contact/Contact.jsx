import "./contact.css";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = () => {
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
  // }

  return (
    <div className="contactpage" id="contact">
      <div className="formbox container">
        <form
          action={FORM_ENDPOINT}
          // onSubmit={handleSubmit}
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

      {/* <div className="other text-center justify-content-center row gap-10">
        <div className="email col-xs-12 col-md-3">
          <button className="text-center">
            <div className="row ">
              <BsEnvelopeFill size="1.5em" className="" />
              Paul.Iaszfalvi@gmail.com
            </div>
          </button>
        </div>
        <div className="linkedin col-xs-12 col-md-3">
          <button>
            Linked
            <i className="devicon-linkedin-plain colored"> </i>
          </button>
        </div>
        <div className="phone col-xs-12 col-md-3">(954) 647-9813</div>
      </div> */}
    </div>
  );
};

export default Contact;
