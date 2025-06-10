import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Technologies = () => {
  const { content } = usePortfolio();

  return (
    <section className="technologies">
      <h3>{content.technologies}</h3>
      <div className="tech-list">
        {content.techList.map((tech, index) => (
          <span key={index}>
            <i className={tech.icon}></i> {tech.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
