import "./portfolio.css";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";

function Portfolio() {
  const baseUrl = "../images/";
  return (
    <div className="portfoliopage" id="portfolio">
      <div className="content container horizontal-scrollable ">
        <div className="gird-container row ml-auto">
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
      </div>
    </div>
  );
}

export default Portfolio;
