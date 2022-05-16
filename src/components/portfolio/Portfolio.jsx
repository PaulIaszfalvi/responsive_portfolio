import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";

function Portfolio() {
  const baseUrl = "../images/";
  return (
    <div className="portfoliopage" id="portfolio">
      <div className="container horizontal-scrollable">
        <div className="row text-center">
          {projectsData.map((data) => (
            <div className="col-xs-12 col-md-4">
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
      </div>
    </div>
  );
}

export default Portfolio;
