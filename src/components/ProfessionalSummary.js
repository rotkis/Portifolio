import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const ProfessionalSummary = () => {
  const { content } = usePortfolio();

  return (
    <section className="professional-summary" id="professional-summary">
      <h3>{content.professionalSummary}</h3>
      <p>{content.summaryText}</p>
    </section>
  );
};

export default ProfessionalSummary;
