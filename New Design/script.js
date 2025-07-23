// Project data matching the academic focus
const projects = [
  {
    id: 1,
    title: "Data Acquisition - D205",
    type: "Database Design | 2024",
    description:
      "Designed and implemented a database for efficient data acquisition, focusing on PostgreSQL, data modeling, and robust query construction for various data sources.",
    technologies: ["SQl", "pgadmin", "PostgreSQL"],
    github:
      "https://raw.githubusercontent.com/TysonBiegler/WGU_MSDA_Portfolio/master/03%20Data%20Acquisition%20-%20D205/TysonBiegler_D205_PA.docx",
    demo: "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/master/03%20Data%20Acquisition%20-%20D205",
    icon: "🗃️",
  },
  {
    id: 2,
    title: "Data Cleaning - DA506",
    type: "Data Preprocessing & Analytics | DA506",
    description:
      "Advanced data cleaning techniques using SQL and R, including handling missing values, outlier detection and treatment, data transformation for analytical readiness.",
    technologies: ["sql", "r"],
    github: "https://github.com/tysonblaeier/data-cleaning-da506",
    demo: "https://data-cleaning-portfolio.com",
    icon: "🧹",
  },
  {
    id: 3,
    title: "Exploratory Data Analysis - DA507",
    type: "Statistical Analysis | DA507",
    description:
      "Comprehensive exploratory data analysis project using advanced statistical methods, identifying patterns and insights, correlation analysis and interactive visualizations.",
    technologies: ["r", "tableau"],
    github: "https://github.com/tysonblaeier/eda-da507",
    demo: "https://eda-analysis-demo.com",
    icon: "📊",
  },
  {
    id: 4,
    title: "Customer Segmentation Analysis",
    type: "Business Analytics",
    description:
      "K-means clustering analysis for customer segmentation using RFM analysis, behavioral patterns identification, and strategic recommendations for targeted marketing campaigns.",
    technologies: ["python", "machine-learning"],
    github: "https://github.com/tysonblaeier/customer-segmentation",
    demo: "https://segmentation-dashboard.com",
    icon: "👥",
  },
  {
    id: 5,
    title: "Sales Performance Dashboard",
    type: "Business Intelligence",
    description:
      "Interactive Tableau dashboard analyzing multi-year sales performance with KPI tracking, regional comparisons, trend analysis, and executive-level reporting capabilities.",
    technologies: ["tableau", "sql"],
    github: "https://github.com/tysonblaeier/sales-dashboard",
    demo: "https://public.tableau.com/sales-performance",
    icon: "📈",
  },
  {
    id: 6,
    title: "Predictive Analytics Model",
    type: "Machine Learning",
    description:
      "End-to-end machine learning pipeline for predictive analytics including feature engineering, model selection, hyperparameter tuning, and performance evaluation.",
    technologies: ["python", "machine-learning"],
    github: "https://github.com/tysonblaeier/predictive-analytics",
    demo: "https://predictive-model-demo.com",
    icon: "🤖",
  },
  {
    id: 7,
    title: "Time Series Forecasting",
    type: "Advanced Analytics",
    description:
      "Implementation of ARIMA, exponential smoothing, and Prophet models for business forecasting with seasonal decomposition and confidence interval analysis.",
    technologies: ["r", "python"],
    github: "https://github.com/tysonblaeier/time-series-forecast",
    demo: "https://forecasting-app.herokuapp.com",
    icon: "⏰",
  },
  {
    id: 8,
    title: "Healthcare Data Analytics",
    type: "Applied Research",
    description:
      "Statistical analysis of healthcare outcomes data using survival analysis, logistic regression, and clinical research methodologies with HIPAA-compliant practices.",
    technologies: ["r", "sql"],
    github: "https://github.com/tysonblaeier/healthcare-analytics",
    demo: "https://healthcare-insights.netlify.app",
    icon: "🏥",
  },
  {
    id: 9,
    title: "Text Mining & Sentiment Analysis",
    type: "Natural Language Processing",
    description:
      "Advanced text analytics project using NLP techniques for sentiment analysis, topic modeling, and text classification with real-world social media data.",
    technologies: ["python", "machine-learning"],
    github: "https://github.com/tysonblaeier/text-mining-nlp",
    demo: "https://sentiment-analyzer.streamlit.app",
    icon: "📝",
  },
  {
    id: 10,
    title: "Database Performance Optimization",
    type: "Database Management",
    description:
      "Comprehensive database optimization project involving query performance tuning, index optimization, and database design improvements for enterprise-scale systems.",
    technologies: ["sql"],
    github: "https://github.com/tysonblaeier/db-optimization",
    demo: "https://db-performance-report.com",
    icon: "⚡",
  },
  {
    id: 11,
    title: "Statistical Modeling Project",
    type: "Applied Statistics",
    description:
      "Advanced statistical modeling using multiple regression, ANOVA, and non-parametric methods for hypothesis testing and inference in business contexts.",
    technologies: ["r"],
    github: "https://github.com/tysonblaeier/statistical-modeling",
    demo: "https://stats-modeling.shinyapps.io/app",
    icon: "📐",
  },
  {
    id: 12,
    title: "Business Intelligence Suite",
    type: "Capstone Project",
    description:
      "Comprehensive BI solution integrating multiple data sources, automated reporting, executive dashboards, and self-service analytics for organizational decision-making.",
    technologies: ["tableau", "sql", "python"],
    github: "https://github.com/tysonblaeier/bi-suite-capstone",
    demo: "https://bi-suite-demo.com",
    icon: "💼",
  },
];

// DOM elements
const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");

// Render projects
function renderProjects(projectsToRender = projects) {
  projectsGrid.innerHTML = "";

  projectsToRender.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.setAttribute(
      "data-technologies",
      project.technologies.join(" ")
    );

    projectCard.innerHTML = `
                    <div class="project-header">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-type">${project.type}</p>
                        <p class="project-description">${
                          project.description
                        }</p>
                    </div>
                    <div class="project-content">
                        <div class="project-tech">
                            ${project.technologies
                              .map(
                                (tech) =>
                                  `<span class="tech-tag ${tech}">${formatTechName(
                                    tech
                                  )}</span>`
                              )
                              .join("")}
                        </div>
                        <div class="project-links">
                            <a href="${
                              project.github
                            }" class="project-link" target="_blank">View Details</a>
                            <a href="${
                              project.demo
                            }" class="project-link secondary" target="_blank">GitHub Repo</a>
                        </div>
                    </div>
                `;

    projectsGrid.appendChild(projectCard);
  });
}

// Format technology names
function formatTechName(tech) {
  const techNames = {
    python: "Python",
    r: "R",
    sql: "SQL",
    tableau: "Tableau",
    "machine-learning": "Machine Learning",
    "deep-learning": "Deep Learning",
  };
  return techNames[tech] || tech;
}

// Filter functionality
function filterProjects(filterValue) {
  const projectCards = document.querySelectorAll(".project-card");

  projectCards.forEach((card) => {
    const technologies = card.getAttribute("data-technologies");

    if (filterValue === "all" || technologies.includes(filterValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Event listeners
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to clicked button
    button.classList.add("active");

    // Filter projects
    const filterValue = button.getAttribute("data-filter");
    filterProjects(filterValue);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Initialize
renderProjects();
