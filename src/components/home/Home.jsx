import "./home.css";
import mySelfie from "../images/selfie-removebg.png";
import resume from "../resume/PaulIaszfalviResume2022.docx";

const Home = () => {
  return (
    <div className="homepage p-5 mx-1 mx-md-auto" id="home">
      <div className="home-content-container content row">
        <div className="photo-container col-md-6 col-12 order-md-2 order-1">
          <img
            src={mySelfie}
            className="photo img-responsive center-block "
            alt=""
            id="mySelfie"
          />
        </div>
        <div className="statement-container col-md-6 col-12 order-md-1 order-2">
          <h1 className="text-name text-center display-1">Paul Iaszfalvi</h1>
          <div className="title-background">
            <h1 className="text-job-title text-center display-3">
              Software Developer
            </h1>
          </div>

          <br />
          <p className="paragraph p-10 pt-5 ">
            I am a motivated Fullstack Developer, passionate about
            problem-solving, determined to grow both as a reliable and
            results-driven team player and developer.
          </p>
          <div className="resume text-center btn-container order-3 pt-5">
            <a
              href={resume}
              download
              className="btn-outlined-light mt-3 "
              target="_blank"
              rel="noreferrer"
            >
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
