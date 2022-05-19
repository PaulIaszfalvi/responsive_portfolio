import "./home.css";
import mySelfie from "../images/selfie-removebg.png";

const Home = () => {
  return (
    <div className="homepage p-5 mx-xs-1 mx-md-auto" id="home">
      <div className="content row">
        <div className="photo-container col-md-6 col-xs-12 order-md-2 order-xs-1">
          <img
            src={mySelfie}
            className="photo img-responsive center-block rounded-circle"
            alt=""
            id="mySelfie"
          />
        </div>
        <div className="statement-container col-md-6 col-xs-12 order-md-1">
          <h1 className="text-name text-center display-1">Paul Iaszfalvi</h1>
          <div className="title-background">
            <h1 className="text-job-title text-center display-3">
              Software Developer
            </h1>
          </div>

          <br />
          <p className="paragraph p-10 ">
            I am a motivated Fullstack Developer, passionate about
            problem-solving with creative solutions and a keen eye for visual
            aesthetics that follow good design principles. Presently determined
            to grow as a reliable and results-driven team player that delivers
            with a growth mindset and commitment to success.
          </p>
          <div className="resume text-center btn-container order-xs-3 order-md-3 order-s-3">
            <a
              href="src/components/resume/PaulIaszfalviResume2022.docx"
              className="btn-outlined-light mt-3"
              target="_blank"
              download
            >
              Download My Resume
            </a>
          </div>
        </div>

        {/* <div className="buttons col-md-6 col-xs-12 order-md-3">
          <a
            href="../files/PaulIaszfalviResume.docx/"
            className="btn btn-primary active"
          >
            Download CV
          </a>
          <a href="#Contact" className="p-10">
            Contact
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
