import React from "react";
import { PortfolioProvider, usePortfolio } from "./context/PortfolioContext";
import Header from "./components/Header";
import Intro from "./components/Intro";
import ProfessionalSummary from "./components/ProfessionalSummary";
import ProfessionalExperience from "./components/ProfessionalExperience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Technologies from "./components/Technologies";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "./index.css";
import "./dark-mode.css";
import "./responsive.css";

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  );
}

// Componente separado para acessar o contexto
const AppContent = () => {
  const { darkMode } = usePortfolio();

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <Header />
      <main>
        <Intro />
        <ProfessionalSummary />
        <ProfessionalExperience />
        <Projects />
        <Education />
        <AboutMe />
        <Technologies />
      </main>
      <Footer />
    </div>
  );
};

export default App;
