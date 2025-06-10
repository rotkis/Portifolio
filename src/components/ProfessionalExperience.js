import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const ProfessionalExperience = () => {
  const { content } = usePortfolio();

  return (
    <section className="professional-experience">
      <h3>{content.experience}</h3>
      <div className="experience-list">
        {content.experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <h4>{exp.title}</h4>
              <div className="experience-meta">
                <span className="company">{exp.company}</span>
                <span className="period">{exp.period}</span>
              </div>
            </div>
            <ul className="experience-description">
              {exp.description.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
