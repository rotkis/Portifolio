import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const AboutMe = () => {
  const { content, language } = usePortfolio();

  return (
    <section className="about-me" id="about-me">
      <h3>{content.aboutMe}</h3>
      <p>{content.aboutText}</p>
      {content.aboutExtra && (
        <p className="about-extra">
          {content.aboutExtra}
          {language === "pt" && (
            <img
              src="/img.jpg"
              alt="Beck mongolian chop squad meu anime favorito"
            />
          )}
        </p>
      )}
    </section>
  );
};

export default AboutMe;
