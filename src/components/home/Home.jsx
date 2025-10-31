import "./home.css";
import mySelfie from "../images/selfie-removebg.png";

const Home = () => {
  return (
    <div className="homepage p-5 mx-1 mx-md-auto" id="home">
      <div className="home-content-container content row">
        <div className="photo-container col-md-6 col-12 order-md-2 order-1">
          <img
            src={mySelfie}
            className="photo img-responsive center-block bg-blk-o bd-white"
            alt="Paul Iaszfalvi Portrait"
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
          <p className="home-paragraph p-10 pt-5">
            I am a motivated Fullstack Developer, passionate about
            problem-solving, determined to grow both as a reliable and
            results-driven team player and developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
