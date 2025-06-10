import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Projects = () => {
  const { content } = usePortfolio();

  return (
    <section className="projects">
      <h3>{content.projects}</h3>
      <div className="project-list">
        {content.projectsList.map((project, index) => (
          <div key={index} className="project-item">
            <h4>{project.title}</h4>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
