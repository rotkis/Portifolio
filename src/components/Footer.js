import React from "react";
import { usePortfolio } from "../context/PortfolioContext";

const Footer = () => {
  const { content } = usePortfolio();
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <p>
        © {year} Arthur Carvalho Rotkis - {content.footerText}
      </p>
    </footer>
  );
};

export default Footer;
