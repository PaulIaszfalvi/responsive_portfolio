import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";

function Portfolio() {
  const baseUrl = "../images/";
  return (
    <div className="portfoliopage" id="portfolio">
      <div className="project-statement">
        <p>
          All of these projects were build by me without the use of tutorials.
        </p>
      </div>

      <div className="portfolio-content container horizontal-scrollable ">
        <div className="gird-container row mx-auto">
          <div className="cards">
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
          <div className="cards-buttons">
            <div className="button-left">
              <p>Arrow</p>
            </div>
            <div className="button-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
