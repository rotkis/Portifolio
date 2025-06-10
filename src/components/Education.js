import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Education = () => {
  const { content } = usePortfolio();

  return (
    <section className="education">
      <h3>{content.education}</h3>
      <div className="education-list">
        {content.educationList.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h4>{edu.degree}</h4>
              <div className="education-meta">
                <span className="institution">{edu.institution}</span>
                <span className="period">{edu.period}</span>
              </div>
            </div>
            <ul className="education-details">
              {edu.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
