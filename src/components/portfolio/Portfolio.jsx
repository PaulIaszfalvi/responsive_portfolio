import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";
import Carousel from "react-material-ui-carousel";

function Portfolio() {
  const baseUrl = "../images/";

  return (
    <div className="portfoliopage" id="portfolio">
      {/* <div className="project-statement">
        <p>
          All of these projects were build by me without the use of tutorials.
        </p>
      </div> */}

      <div className="portfolio-content ">
        {/* 
        <div id="scroll" className="sliding-cards container snap-inline"> */}

        <Carousel className="carousel-container mx-auto">
          {projectsData.map((data, i) => (
            <div key={i}>
              <GridItem
                title={data.title}
                image={baseUrl + data.image}
                description={data.description}
                goToLink={data.goToLink}
                link={data.link}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Portfolio;
