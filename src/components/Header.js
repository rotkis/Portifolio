import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Header = () => {
  const { language, setLanguage } = usePortfolio();

  return (
    <header>
      <nav>
        <button
          className={`language-btn ${language === "pt" ? "active" : ""}`}
          onClick={() => setLanguage("pt")}
          aria-label="Mudar para Português"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg"
            alt="Bandeira Brasil"
          />
        </button>
        <button
          className={`language-btn ${language === "en" ? "active" : ""}`}
          onClick={() => setLanguage("en")}
          aria-label="Switch to English"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            alt="USA Flag"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
