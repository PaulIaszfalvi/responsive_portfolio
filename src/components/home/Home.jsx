import "./home.css";
import mySelfie from "../images/selfie-removebg.png";

const Home = () => {
  return (
    <div className="homepage p-5 mx-xs-1 mx-md-auto" id="home">
      <div className="row">
        <div className="col-md-6 col-xs-12 order-md-2">
          <img
            src={mySelfie}
            className="photo img-responsive center-block rounded-circle"
            alt=""
            id="mySelfie"
          />
        </div>
        <div className="statement col-md-6 col-xs-12 order-md-1">
          <h1 className="text-name text-center display-1">Paul Iaszfalvi</h1>
          <h1 className="text-job-title text-center display-3">
            Software Developer
          </h1>
          <br />
          <p className="paragraph p-10 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sit
            voluptatem maiores cupiditate illum laboriosam consequatur, quisquam
            dolores facilis, doloremque adipisci voluptatibus. Corporis
            praesentium voluptates, tenetur nesciunt reprehenderit maxime
            molestias amet ratione unde esse optio quaerat accusamus laborum
            itaque tempore voluptatem sint laudantium vero nulla placeat
            incidunt deleniti, eaque molestiae!
          </p>
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
