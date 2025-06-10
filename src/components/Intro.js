import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Intro = () => {
  const { content, emailCopied } = usePortfolio();

  return (
    <section className="intro">
      <div className="intro-content">
        <h1>{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <p className="location">{content.location}</p>
        <div className="social-icons">
          {content.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.url !== "#" ? "_blank" : ""}
              rel="noopener noreferrer"
              title={link.text}
              onClick={link.onClick || undefined}
              download={link.download} // <- isso aqui faz a mágica
            >
              <i className={link.icon}></i>
              <span>{link.text}</span>
            </a>
          ))}
        </div>
        <p id="message">{emailCopied ? content.emailMessage : ""}</p>
      </div>
    </section>
  );
};

export default Intro;
