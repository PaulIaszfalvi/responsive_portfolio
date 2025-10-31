import "./portfolio.css";
import { useState, useRef } from "react";
import GridItem from "./gridItem";
import projectsData from "./projectsData.json";
import Carousel from "react-material-ui-carousel";

const CAROUSEL_CONFIG = {
  interval: 12000,
  animation: "slide",
  indicators: false,
  stopAutoPlayOnHover: true,
  swipe: true,
  navButtonsAlwaysVisible: false,
};

const ProjectThumbnail = ({ project, index, isActive, onClick }) => (
  <div
    className={`project-thumbnail ${isActive ? "active" : ""}`}
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyPress={(e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
    aria-label={`Go to project ${index + 1}: ${project.title}`}
  >
    <img
      src={`../images/${project.image}`}
      alt={`${project.title} thumbnail`}
      className="thumbnail-image"
    />
    <div className="thumbnail-overlay">
      <span className="thumbnail-number">{index + 1}</span>
    </div>
  </div>
);

const CarouselSlide = ({ children }) => (
  <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
    {children}
  </div>
);

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef();
  const baseUrl = "../images/";

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    carouselRef.current?.set(index);
  };

  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="portfoliopage" id="portfolio">
      <div className="portfolio-content">
        <Carousel
          ref={carouselRef}
          className="carousel-container mx-auto"
          index={activeIndex}
          onChange={handleCarouselChange}
          {...CAROUSEL_CONFIG}
        >
          {projectsData.map((project, index) => (
            <CarouselSlide key={project.title || index}>
              <GridItem
                title={project.title}
                image={baseUrl + project.image}
                description={project.description}
                github={project.github}
              />
            </CarouselSlide>
          ))}
        </Carousel>
      </div>

      {/* Project Thumbnails Navigation */}
      <div className="carousel-thumbnails">
        <div className="thumbnails-container">
          {projectsData.map((project, index) => (
            <ProjectThumbnail
              key={`thumbnail-${index}`}
              project={project}
              index={index}
              isActive={activeIndex === index}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
