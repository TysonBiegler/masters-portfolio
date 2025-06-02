const projects = [
  {
    id: 4,
    title: "Data Acquisition - D205",
    category: "sql",
    type: "Database Project",
    description:
      "Designed and implemented a database for efficient data acquisition, focusing on PostgreSQL, data modeling, and robust query construction for various data sources.",
    date: "2024",
    tools: ["PostgreSQL", "SQL", "Database Design"],
    fileType: "SQL Scripts",
    preview: "💾 Database Design • 🔗 Data Integration • ⚡ Efficient Queries",
    highlights: [
      "Normalized database schema",
      "Optimized data extraction scripts",
      "Ensured data integrity",
    ],
    icon: "🗄️",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Data%20Acquisition%20-%20D205",
    demoLink: null,
  },
  {
    id: 5,
    title: "Data Cleaning - D206",
    category: "r_statistics",
    type: "Data Preprocessing & Analysis",
    description:
      "Addressed real-world data quality issues using SQL and R, including handling missing values, outliers, and inconsistencies. Applied Principal Component Analysis (PCA) for dimensionality reduction.",
    date: "2024",
    tools: ["SQL", "R", "PCA", "Data Transformation"],
    fileType: "Jupyter Notebook / R Scripts",
    preview:
      "🧹 Data Transformation • 📉 Dimensionality Reduction • ✨ Data Quality",
    highlights: [
      "Improved data accuracy by 20%",
      "Identified key data inconsistencies",
      "Enhanced model performance through clean data",
    ],
    icon: "🧼",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Data%20Cleaning%20-%20D206",
    demoLink: null,
  },
  {
    id: 6,
    title: "Exploratory Data Analysis - D207",
    category: "r_statistics",
    type: "Statistical Analysis",
    description:
      "Conducted in-depth exploratory data analysis using R, applying parametric tests like ANOVA, Chi-Square, and T-tests to uncover significant patterns and relationships within datasets.",
    date: "2024",
    tools: ["R", "Statistical Testing", "Data Visualization"],
    fileType: "R Scripts / Report",
    preview:
      "📈 Statistical Inference • 📊 Data Patterns • 🔍 Hypothesis Testing",
    highlights: [
      "Identified statistically significant relationships",
      "Generated insightful visualizations",
      "Informed subsequent predictive modeling",
    ],
    icon: "🔎",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Exploratory%20Data%20Analysis%20-%20D207",
    demoLink: null,
  },
  {
    id: 7,
    title: "Predictive Modeling – D208",
    category: "machine_learning",
    type: "Machine Learning Model Development",
    description:
      "Developed and evaluated predictive models using Linear and Logistic Regression. Focused on model selection, training, validation, and interpreting performance metrics.",
    date: "2024",
    tools: [
      "Python",
      "Scikit-learn",
      "Linear Regression",
      "Logistic Regression",
    ],
    fileType: "Jupyter Notebook",
    preview:
      "🤖 Predictive Analytics • 🎯 Model Evaluation • 📊 Performance Metrics",
    highlights: [
      "Achieved high prediction accuracy",
      "Robust model validation techniques",
      "Insights into feature importance",
    ],
    icon: "🧠",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Predictive%20Modeling%20%E2%80%93%20D208",
    demoLink: null,
  },
  {
    id: 8,
    title: "Data Mining 1 - D209",
    category: "machine_learning",
    type: "Classification & Clustering",
    description:
      "Implemented k-Nearest Neighbor and Decision Tree algorithms for classification and explored their application in data mining. Focused on understanding model behavior and tuning.",
    date: "2024",
    tools: ["Python", "Scikit-learn", "k-NN", "Decision Trees"],
    fileType: "Jupyter Notebook",
    preview:
      "🌳 Classification Models • 🌲 Decision Trees • 🤝 k-Nearest Neighbor",
    highlights: [
      "Built effective classification models",
      "Compared model performance across algorithms",
      "Understood algorithmic strengths and weaknesses",
    ],
    icon: "⛏️",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Data%20Mining%20I%20-%20D209",
    demoLink: null,
  },
  {
    id: 9,
    title: "Representation and Reporting - D210",
    category: "tableau_bi",
    type: "Data Visualization & BI",
    description:
      "Created compelling data visualizations and interactive dashboards using SQL and Tableau. Focused on effective data storytelling and conveying insights to stakeholders.",
    date: "2024",
    tools: ["SQL", "Tableau", "Dashboard Design", "Data Storytelling"],
    fileType: "Tableau Workbook",
    preview:
      "📊 Interactive Dashboards • 📈 Visual Insights • 🗣️ Data Storytelling",
    highlights: [
      "Designed executive-level dashboards",
      "Improved data accessibility",
      "Supported strategic decision-making",
    ],
    icon: "📈",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Representation%20and%20Reporting%20-%20D210",
    demoLink:
      "https://public.tableau.com/views/Dashboard_D210_v2/ExecutiveDashboard", // Found an example Tableau Public link from previous data
  },
  {
    id: 10,
    title: "Advanced Data Acquisition - D211",
    category: "sql",
    type: "Advanced Data Engineering",
    description:
      "Explored advanced techniques for data acquisition and integration, including complex SQL queries, API data retrieval, and preparing data for large-scale analysis in Tableau.",
    date: "2024",
    tools: ["SQL", "APIs", "Data Integration", "Tableau Prep"],
    fileType: "SQL Scripts / Documentation",
    preview: "⚙️ ETL Pipelines • 📦 Complex Data Sources • 🌐 API Integration",
    highlights: [
      "Automated data pipelines",
      "Managed diverse data formats",
      "Ensured data quality for BI tools",
    ],
    icon: "🔗",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Advanced%20Data%20Acquisition%20-%20D211",
    demoLink: null,
  },
  {
    id: 11,
    title: "Data Mining 2 - D212",
    category: "machine_learning",
    type: "Advanced Data Mining",
    description:
      "Applied advanced data mining techniques including K-Means Clustering, Principal Component Analysis (PCA) for feature extraction, and Market Basket Analysis to discover hidden patterns.",
    date: "2024",
    tools: [
      "Python",
      "Scikit-learn",
      "K-Means",
      "PCA",
      "Market Basket Analysis",
    ],
    fileType: "Jupyter Notebook",
    preview: "🛒 Market Basket • 🧩 Clustering • 📈 Feature Engineering",
    highlights: [
      "Segmented customer behavior effectively",
      "Identified optimal product placements",
      "Reduced data dimensionality for insights",
    ],
    icon: "💎",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Data%20Mining%20II%20-%20D212",
    demoLink: null,
  },
  {
    id: 12,
    title: "Advanced Data Analytics - D213",
    category: "machine_learning", // Can also be 'r_statistics' depending on implementation
    type: "Time Series & Text Analysis",
    description:
      "Engaged in time series modeling for forecasting and sentiment analysis using neural networks. Focused on predictive accuracy and interpreting complex model outputs.",
    date: "2024",
    tools: [
      "Python",
      "TensorFlow",
      "Time Series",
      "Sentiment Analysis",
      "Neural Networks",
    ],
    fileType: "Jupyter Notebook / Report",
    preview: "⏱️ Time Series • 💬 Sentiment Analysis • 🧠 Neural Networks",
    highlights: [
      "Developed robust forecasting models",
      "Analyzed text data for sentiment trends",
      "Applied deep learning techniques",
    ],
    icon: "🔮",
    downloadLink:
      "https://github.com/TysonBiegler/WGU_MSDA_Portfolio/tree/main/Advanced%20Data%20Analytics%20-%20D213",
    demoLink: null,
  },
  {
    id: 13,
    title: "Data Analytics Graduate Capstone - D214",
    category: "foundations", // Placeholder, change once details are known
    type: "Capstone Project",
    description:
      "**Coming Soon:** The culminating project of the Master's program, integrating all learned skills into a comprehensive data analytics solution. (Details to be updated upon completion).",
    date: "Expected 2025",
    tools: ["Various tools based on project scope"],
    fileType: "Project Report / Presentation",
    preview:
      "🎓 Comprehensive Solution • 🚀 Real-world Application • ✨ Innovation",
    highlights: [
      "Integrates all core competencies",
      "Addresses a complex business problem",
      "Delivers actionable insights",
    ],
    icon: "🌟",
    downloadLink: null, // Placeholder, will be updated
    demoLink: null, // Placeholder, will be updated
  },
];

// State management
let selectedCategory = "all";
let selectedProject = null;

// DOM elements
let projectsGrid;
let categoryFilter;
let modal;
let modalClose;
let modalDownloadBtn;
let modalDemoBtn;
let allProjectCards; // Stores all project cards for filtering

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing portfolio...");

  // Get DOM elements
  projectsGrid = document.getElementById("projectsGrid");
  categoryFilter = document.getElementById("categoryFilter");
  modal = document.getElementById("projectModal");
  modalClose = document.getElementById("modalClose");
  modalDownloadBtn = document.getElementById("modalDownloadBtn");
  modalDemoBtn = document.getElementById("modalDemoBtn");
  allProjectCards = document.querySelectorAll(".project-card"); // Get all project cards

  // Check if elements exist
  if (!projectsGrid || !categoryFilter || !modal || !allProjectCards.length) {
    console.error(
      "One or more required DOM elements not found or no project cards present."
    );
    return;
  }

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Initial filter application (to ensure all are shown by default)
  filterProjects();

  // Setup event listeners
  setupEventListeners();

  // Initialize scroll animations
  initializeScrollAnimations();

  console.log("Portfolio initialized successfully");
});

// Setup event listeners
function setupEventListeners() {
  // Category filter buttons
  if (categoryFilter) {
    categoryFilter.addEventListener("click", handleCategoryFilter);
  }

  // Modal close
  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modal && modal.classList.contains("active")) {
      closeModal();
    }
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

  // Hero buttons
  const viewProjectsBtn = document.getElementById("viewProjectsBtn");
  const downloadResumeBtn = document.getElementById("downloadResumeBtn");

  if (viewProjectsBtn) {
    viewProjectsBtn.addEventListener("click", function () {
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }

  if (downloadResumeBtn) {
    downloadResumeBtn.addEventListener("click", function () {
      alert("Resume download would be implemented here");
      // window.open('path/to/your/resume.pdf', '_blank'); // Uncomment and update path
    });
  }

  // Add event listeners to project cards (for 'View Details' buttons)
  addProjectCardListeners();
}

// Handle category filter clicks
function handleCategoryFilter(e) {
  const filterBtn = e.target.closest(".filter-btn");
  if (!filterBtn) return;

  // Update active state
  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));
  filterBtn.classList.add("active");

  // Update selected category
  selectedCategory = filterBtn.dataset.category;

  // Filter projects
  filterProjects();
}

// Filter projects based on selected category (now showing/hiding static HTML)
function filterProjects() {
  if (!allProjectCards || allProjectCards.length === 0) {
    console.warn("No project cards found to filter.");
    return;
  }

  allProjectCards.forEach((card) => {
    const cardCategory = card.dataset.category;
    if (selectedCategory === "all" || cardCategory === selectedCategory) {
      card.style.display = "block"; // Show the card
    } else {
      card.style.display = "none"; // Hide the card
    }
  });

  // Re-run scroll animations for visible cards if needed
  initializeScrollAnimations();
}

// Add event listeners to project cards (for 'View Details' buttons)
function addProjectCardListeners() {
  document.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", function () {
      const projectId = parseInt(this.dataset.projectId);
      openModal(projectId);
    });
  });
}

// Open modal with project details
function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    console.error(`Project with ID ${projectId} not found.`);
    return;
  }

  selectedProject = project;

  // Populate modal content
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalType = document.getElementById("modalType");
  const modalDate = document.getElementById("modalDate");
  const modalFileType = document.getElementById("modalFileType");
  const modalTools = document.getElementById("modalTools");
  const modalHighlights = document.getElementById("modalHighlights");

  if (modalTitle) modalTitle.textContent = project.title;
  if (modalDescription) modalDescription.textContent = project.description;
  if (modalType) modalType.textContent = project.type;
  if (modalDate) modalDate.textContent = project.date;
  if (modalFileType) modalFileType.textContent = project.fileType;

  // Tools
  if (modalTools) {
    modalTools.innerHTML = project.tools
      .map((tool) => `<span class="modal-tool">${tool}</span>`)
      .join("");
  }

  // Highlights
  if (modalHighlights) {
    modalHighlights.innerHTML = project.highlights
      .map(
        (highlight) =>
          `<li class="modal-highlight">
            <i data-lucide="chevron-right"></i>
            ${highlight}
          </li>`
      )
      .join("");
  }

  // Update modal action buttons
  if (modalDownloadBtn) {
    if (project.downloadLink) {
      modalDownloadBtn.style.display = "inline-flex";
      modalDownloadBtn.onclick = () =>
        window.open(project.downloadLink, "_blank");
    } else {
      modalDownloadBtn.style.display = "none";
    }
  }

  if (modalDemoBtn) {
    if (project.demoLink) {
      modalDemoBtn.style.display = "inline-flex";
      modalDemoBtn.onclick = () => window.open(project.demoLink, "_blank");
    } else {
      modalDemoBtn.style.display = "none";
    }
  }

  // Show modal
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }

  // Re-initialize Lucide icons for new content in modal
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Close modal
function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = ""; // Restore background scrolling
  }
  selectedProject = null;
}

// Initialize scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the element is visible
    rootMargin: "0px 0px -50px 0px", // Reduce trigger point slightly from bottom
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        // Optionally, unobserve after animation if it's a one-time animation
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply initial hidden state and observe only currently visible cards
  // Delay slightly to allow DOM rendering before observing
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      // Only apply animation if the card is currently visible (not filtered out)
      if (card.style.display !== "none") {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(card);
      } else {
        // Ensure hidden cards don't have animation styles applied or observe them
        card.style.opacity = "";
        card.style.transform = "";
        card.style.transition = "";
        observer.unobserve(card); // Ensure we're not observing hidden cards
      }
    });
  }, 100); // Small delay
}
