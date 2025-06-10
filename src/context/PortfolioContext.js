import React, { createContext, useState, useContext } from "react";

// Criando o contexto para o tema e idioma
export const PortfolioContext = createContext();

// Provider que envolverá a aplicação
export const PortfolioProvider = ({ children }) => {
  const [language, setLanguage] = useState("pt");
  const [darkMode, setDarkMode] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  // Função para copiar email
  const handleEmailClick = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText("rotkisarthur@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  // Conteúdo em português
  const ptContent = {
    title: "Arthur Carvalho Rotkis",
    subtitle: "Desenvolvedor de Software | Especialista em Back-end",
    location: "Jardim City, Guarulhos, São Paulo | (55) 11 94003-6340",
    technologies: "Tecnologias",
    professionalSummary: "Resumo Profissional",
    experience: "Experiência Profissional",
    projects: "Projetos Relevantes",
    education: "Educação",
    aboutMe: "Sobre Mim",
    aboutText:
      "Um jovem apaixonado por tecnologia, programação e resolução de problemas complexos. Sempre em busca de novos desafios e oportunidades para expandir meus conhecimentos.",
    aboutExtra:
      "Um jovem apaixonado por música japonesa e por animes. Um guitarrista em horas vagas.",
    emailMessage: "Email copiado!",
    footerText: "Todos os direitos reservados",
    socialLinks: [
      {
        icon: "fab fa-github",
        text: "GitHub",
        url: "https://github.com/rotkis",
      },
      {
        icon: "fas fa-envelope",
        text: "Email",
        url: "#",
        onClick: handleEmailClick,
      },
      {
        icon: "fab fa-linkedin",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/arthur-carvalho-rotkis-028812234/",
      },
      {
        icon: "fas fa-file",
        text: "Currículo",
        url: "/curriculo/Arthur_Rotkis_Desenvolvedor.pdf",
        download: true, // <- adiciona essa propriedade
      },
    ],
    summaryText:
      "Desenvolvedor de Software com experiência em desenvolvimento Back-end e conhecimentos sólidos em algoritmos e estruturas de dados. Estudante bolsista de Ciência da Computação com formação técnica em Automação Industrial. Experiência comprovada em resolução de problemas complexos através de participação em maratonas de programação. Atualmente desenvolvendo o Back-end do site do Diretório Acadêmico de Ciência da Computação (DACC) utilizando C# e realizando Iniciação Científica em IoT com foco em integração de máquinas operatrizes com tecnologia 5G. Autodidata com forte domínio do ecossistema GNU/Linux e habilidades avançadas em múltiplas linguagens de programação.",
    experiences: [
      {
        title: "Monitor da Maratona de Programação",
        company: "Centro Universitário FEI - SBC",
        period: "07/2023 – 05/2024",
        description: [
          "Contribuí para o objetivo de conquistar a vitória na etapa regional da Maratona de Programação",
          "Desenvolvi proficiência técnica em C++ com foco em estruturas de dados e teoria dos grafos",
          "Ministrei sessões de treinamento para calouros em programação competitiva",
          "Criei repositório no GitHub com mais de 50 soluções documentadas",
        ],
      },
      {
        title: "Estagiário de Sistemas Elétricos",
        company: "Marte Updates & Avionics",
        period: "07/2022 – 11/2022",
        description: [
          "Adquiri conhecimento especializado em sistemas elétricos de aeronaves executivas",
          "Realizei configuração e testes de 15+ caixas ELT (Emergency Locator Transmitter)",
          "Participei de manutenção preventiva de sistemas elétricos",
          "Documentei procedimentos técnicos para configuração de equipamentos",
        ],
      },
    ],
    projectsList: [
      {
        title: "Back-end do site do DACC",
        description:
          "Desenvolvimento do sistema back-end completo utilizando C# e ASP.NET Core, implementando autenticação, autorização e integração com banco de dados",
      },
      {
        title: "Iniciação Científica em IoT",
        description:
          "Pesquisa aplicada para integração de máquinas operatrizes antigas com tecnologia 5G, desenvolvendo interfaces de comunicação e protocolos de transmissão de dados",
      },
      {
        title: "Sistema de Controle de Acesso RFID",
        description:
          "Implementação de catraca automatizada com autenticação via RFID, utilizando microcontroladores e desenvolvimento de software embarcado",
      },
    ],
    educationList: [
      {
        degree: "Bacharelado em Ciência da Computação",
        institution: "Centro Universitário FEI - SBC",
        period: "2023 – 2027 (Previsão)",
        details: [
          "Bolsista de mérito acadêmico",
          "Participante ativo da Maratona de Programação",
          "Pesquisador em Iniciação Científica na área de IoT e tecnologia 5G",
        ],
      },
      {
        degree: "Técnico em Automação Industrial",
        institution: "Liceu de Artes e Ofícios de São Paulo",
        period: "2020 – 2022",
        details: [
          "Projeto de conclusão: Desenvolvimento de sistema de controle de acesso utilizando tecnologia RFID",
          "Implementação de sistemas automatizados com foco em eficiência e segurança",
        ],
      },
    ],
    techList: [
      { name: "Java", icon: "fab fa-java" },
      { name: "C/C++", icon: "fas fa-code" },
      { name: "C#", icon: "fab fa-microsoft" },
      { name: "Python", icon: "fab fa-python" },
      { name: "GO", icon: "fas fa-code" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "HTML/CSS", icon: "fab fa-html5" },
      { name: "NodeJs", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-server" },
      { name: "React.js", icon: "fab fa-react" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "Firebase", icon: "fas fa-fire" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "GNU/Linux", icon: "fab fa-linux" },
    ],
  };

  // Conteúdo em inglês
  const enContent = {
    title: "Arthur Carvalho Rotkis",
    subtitle: "Software Developer | Back-end Specialist",
    location: "Jardim City, Guarulhos, São Paulo | +55 11 94003-6340",
    technologies: "Technologies",
    professionalSummary: "Professional Summary",
    experience: "Professional Experience",
    projects: "Relevant Projects",
    education: "Education",
    aboutMe: "About Me",
    aboutText:
      "A young man passionate about technology, programming, and solving complex problems. Always looking for new challenges and opportunities to expand my knowledge.",
    aboutExtra:
      "A young man passionate about Japanese music and anime. A guitarist in his spare time.",
    emailMessage: "Email copied!",
    footerText: "All rights reserved",
    socialLinks: [
      {
        icon: "fab fa-github",
        text: "GitHub",
        url: "https://github.com/rotkis",
      },
      {
        icon: "fas fa-envelope",
        text: "Email",
        url: "#",
        onClick: handleEmailClick,
      },
      {
        icon: "fab fa-linkedin",
        text: "LinkedIn",
        url: "https://www.linkedin.com/in/arthur-carvalho-rotkis-028812234/",
      },
      {
        icon: "fas fa-file",
        text: "Resume",
        url: "/curriculo/Arthur_Rotkis_Resume_English.pdf",
        download: true, // <- adiciona essa propriedade
      },
    ],
    summaryText:
      "Software Developer with experience in Back-end development and solid knowledge in algorithms and data structures. Scholarship student in Computer Science with a technical background in Industrial Automation. Proven experience in solving complex problems through participation in programming marathons. Currently developing the Back-end of the Computer Science Academic Directory (DACC) website using C# and conducting Scientific Initiation in IoT with a focus on integrating machine tools with 5G technology. Self-taught with strong command of the GNU/Linux ecosystem and advanced skills in multiple programming languages.",
    experiences: [
      {
        title: "Programming Marathon Monitor",
        company: "FEI University Center - SBC",
        period: "07/2023 – 05/2024",
        description: [
          "Contributed to the goal of winning the regional stage of the Programming Marathon",
          "Developed technical proficiency in C++ with focus on data structures and graph theory",
          "Conducted training sessions for freshmen in competitive programming",
          "Created GitHub repository with 50+ documented competition solutions",
        ],
      },
      {
        title: "Electrical Systems Intern",
        company: "Marte Updates & Avionics",
        period: "07/2022 – 11/2022",
        description: [
          "Acquired specialized knowledge in executive aircraft electrical systems",
          "Performed configuration and testing of 15+ ELT (Emergency Locator Transmitter) units",
          "Participated in preventive maintenance of electrical systems",
          "Documented technical procedures for equipment configuration",
        ],
      },
    ],
    projectsList: [
      {
        title: "DACC Website Back-end",
        description:
          "Full back-end system development using C# and ASP.NET Core, implementing authentication, authorization and database integration",
      },
      {
        title: "Scientific Initiation in IoT",
        description:
          "Applied research for integrating legacy machine tools with 5G technology, developing communication interfaces and data transmission protocols",
      },
      {
        title: "RFID Access Control System",
        description:
          "Implementation of automated turnstile with RFID authentication using microcontrollers and embedded software development",
      },
    ],
    educationList: [
      {
        degree: "Bachelor in Computer Science",
        institution: "FEI University Center - SBC",
        period: "2023 – 2027 (Expected)",
        details: [
          "Academic merit scholarship holder",
          "Active participant in Programming Marathon",
          "Researcher in Scientific Initiation in IoT and 5G technology",
        ],
      },
      {
        degree: "Industrial Automation Technician",
        institution: "Liceu de Artes e Ofícios de São Paulo",
        period: "2020 – 2022",
        details: [
          "Final project: Development of access control system using RFID technology",
          "Implementation of automated systems focused on efficiency and security",
        ],
      },
    ],
    techList: [
      { name: "Java", icon: "fab fa-java" },
      { name: "C/C++", icon: "fas fa-code" },
      { name: "C#", icon: "fab fa-microsoft" },
      { name: "Python", icon: "fab fa-python" },
      { name: "GO", icon: "fas fa-code" },
      { name: "JavaScript", icon: "fab fa-js" },
      { name: "HTML/CSS", icon: "fab fa-html5" },
      { name: "NodeJs", icon: "fab fa-node-js" },
      { name: "Express", icon: "fas fa-server" },
      { name: "React.js", icon: "fab fa-react" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "Firebase", icon: "fas fa-fire" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "GNU/Linux", icon: "fab fa-linux" },
    ],
  };

  const content = language === "pt" ? ptContent : enContent;

  return (
    <PortfolioContext.Provider
      value={{
        language,
        setLanguage,
        darkMode,
        setDarkMode,
        emailCopied,
        content,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

// Hook personalizado para usar o contexto
export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error(
      "usePortfolio deve ser usado dentro de um PortfolioProvider",
    );
  }
  return context;
};
