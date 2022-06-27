import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
        <MdChevronLeft className="chevrons" />

        <div className="sliding-cards container">
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
        </div>

        <MdChevronRight className="chevrons" />
      </div>
    </div>
  );
}

export default Portfolio;
