import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Portfolio() {
  const baseUrl = "../images/";

  const scrollLeft = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft = slider.scrollLeft - 300;
  };

  const scrollRight = () => {
    var slider = document.getElementById("scroll");
    slider.scrollLeft = slider.scrollLeft + 300;
  };

  return (
    <div className="portfoliopage" id="portfolio">
      {/* <div className="project-statement">
        <p>
          All of these projects were build by me without the use of tutorials.
        </p>
      </div> */}

      <div className="portfolio-content ">
        <MdChevronLeft
          className="chevrons hvr-pop rounded-circle"
          onClick={scrollLeft}
        />

        <div id="scroll" className="sliding-cards container snap-inline">
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

        <MdChevronRight
          className="chevrons hvr-pop rounded-circle"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
}

export default Portfolio;
