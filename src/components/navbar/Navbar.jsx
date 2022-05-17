import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar ">
        <div className="nav-items row align-items-center">
          <div className="links">
            <div className="email">
              <p className="email-text">Paul.Iaszfalvi@gmail.com</p>
            </div>
            <div className="github hvr-pop">
              <a
                href="https://github.com/PaulIaszfalvi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-github-original"></i>
              </a>
            </div>
            <div className="linkedin hvr-pop">
              <a
                href="https://www.linkedin.com/in/paul-iaszfalvi-46a25819a/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="devicon-linkedin-plain colored"></i>
              </a>
            </div>
          </div>
          <div className="pages">
            <a className="home hvr-pop pt-xs-5 pt-md-0" href="#home">
              Home
            </a>
            <a className="about hvr-pop pt-xs-5 pt-md-0" href="#about">
              About
            </a>
            <a className="portfolio hvr-pop pt-xs-5 pt-md-0" href="#portfolio">
              Portfolio
            </a>
            <a
              className="contact hvr-pop pt-xs-5 pt-md-0 mobile-border"
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
