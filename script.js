// Project data
const projects = [
  {
    id: 1,
    title: "Advanced Statistical Analysis Report",
    category: "pdf",
    type: "Research Paper",
    description:
      "Comprehensive analysis of market trends using advanced statistical methods including regression analysis, time series forecasting, and hypothesis testing.",
    date: "2024",
    tools: ["R", "Python", "SPSS"],
    fileType: "PDF",
    preview: "📊 Statistical Models • 📈 Data Visualization • 📋 Methodology",
    highlights: [
      "95% prediction accuracy",
      "Published findings",
      "Peer reviewed",
    ],
    icon: "📄",
  },
  {
    id: 2, //https://public.tableau.com/views/Dashboard_D210_v2/ExecutiveDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link
    title: "Financial Data Analysis Dashboard",
    category: "tableau",
    type: "Data Visualization",
    description:
      "Interactive Tableau dashboard analyzing quarterly financial performance across multiple business units with KPI tracking and trend analysis.",
    date: "2024",
    tools: ["Tableau", "SQL", "Excel"],
    fileType: "Tableau",
    preview: "💹 Interactive Charts • 🎯 KPI Tracking • 📊 Performance Metrics",
    highlights: [
      "Real-time data",
      "Executive presentation",
      "Cost reduction insights",
    ],
    icon: "📊",
  },
  {
    id: 3,
    title: "Database Design & Implementation",
    category: "sql",
    type: "Database Project",
    description:
      "Complete database design for inventory management system including ERD, normalization, stored procedures, and performance optimization.",
    date: "2024",
    tools: ["PostgreSQL", "MySQL", "Database Design"],
    fileType: "SQL",
    preview:
      "🗄️ Schema Design • ⚡ Query Optimization • 🔐 Security Implementation",
    highlights: ["99.9% uptime", "50% faster queries", "ACID compliance"],
    icon: "🗄️",
  },
  {
    id: 4,
    title: "Market Research Analysis",
    category: "spreadsheet",
    type: "Excel Analysis",
    description:
      "Comprehensive market analysis using advanced Excel functions, pivot tables, and VBA automation for data processing and reporting.",
    date: "2024",
    tools: ["Excel", "VBA", "Power Query"],
    fileType: "Excel",
    preview: "📈 Pivot Analysis • 🔄 VBA Automation • 📊 Dynamic Charts",
    highlights: [
      "Automated reporting",
      "Data validation",
      "Executive dashboard",
    ],
    icon: "📈",
  },
  {
    id: 5,
    title: "Machine Learning Model Implementation",
    category: "pdf",
    type: "Technical Report",
    description:
      "Development and evaluation of machine learning models for predictive analytics, including model selection, validation, and performance metrics.",
    date: "2024",
    tools: ["Python", "Scikit-learn", "TensorFlow"],
    fileType: "PDF",
    preview: "🤖 ML Algorithms • 📊 Model Validation • 🎯 Accuracy Metrics",
    highlights: ["89% accuracy", "Cross-validation", "Feature engineering"],
    icon: "📄",
  },
  {
    id: 6,
    title: "Business Intelligence Dashboard",
    category: "tableau",
    type: "BI Solution",
    description:
      "End-to-end business intelligence solution with data integration, ETL processes, and interactive dashboards for strategic decision making.",
    date: "2024",
    tools: ["Tableau", "SQL Server", "Power BI"],
    fileType: "Tableau",
    preview: "🔄 ETL Pipeline • 📊 Executive Dashboard • 🎯 Strategic Insights",
    highlights: [
      "Multi-source integration",
      "Real-time updates",
      "Mobile responsive",
    ],
    icon: "📊",
  },
];

// State management
let selectedCategory = "all";
let selectedProject = null;

// DOM elements (will be set after DOM loads)
let projectsGrid;
let categoryFilter;
let modal;
let modalClose;

// Initialize the application
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded, initializing portfolio...");

  // Get DOM elements
  projectsGrid = document.getElementById("projectsGrid");
  categoryFilter = document.getElementById("categoryFilter");
  modal = document.getElementById("projectModal");
  modalClose = document.getElementById("modalClose");

  // Check if elements exist
  if (!projectsGrid || !categoryFilter || !modal) {
    console.error("Required DOM elements not found");
    return;
  }

  // Initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Render initial projects
  renderProjects();

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
    });
  }
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

  // Re-render projects
  renderProjects();
}

// Render projects based on selected category
function renderProjects() {
  if (!projectsGrid) {
    console.error("Projects grid not found");
    return;
  }

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  console.log(
    `Rendering ${filteredProjects.length} projects for category: ${selectedCategory}`
  );

  projectsGrid.innerHTML = filteredProjects
    .map((project) => createProjectCard(project))
    .join("");

  // Re-initialize Lucide icons for new content
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }

  // Add event listeners to project cards
  addProjectCardListeners();
}

// Add event listeners to project cards
function addProjectCardListeners() {
  document.querySelectorAll(".btn-view").forEach((btn) => {
    btn.addEventListener("click", function () {
      const projectId = parseInt(this.dataset.projectId);
      openModal(projectId);
    });
  });

  document.querySelectorAll(".btn-download").forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("Download functionality would be implemented here");
    });
  });

  document.querySelectorAll(".btn-external").forEach((btn) => {
    btn.addEventListener("click", function () {
      alert("External link functionality would be implemented here");
    });
  });
}

// Create project card HTML
function createProjectCard(project) {
  return `
    <div class="project-card">
      <div class="project-card-content">
        <div class="project-header">
          <div class="project-info">
            <h3 class="project-title">${project.title}</h3>
            <div class="project-meta">
              <span class="project-type">${project.type}</span>
              <span class="project-date">${project.date}</span>
            </div>
          </div>
          <div class="project-icon">${project.icon}</div>
        </div>

        <p class="project-description">${project.description}</p>

        <div class="preview-section">
          <div class="preview-label">Preview:</div>
          <div class="preview-content">${project.preview}</div>
        </div>

        <div class="highlights-section">
          <div class="preview-label">Key Highlights:</div>
          <div class="highlights-grid">
            ${project.highlights
              .map(
                (highlight) => `<span class="highlight-tag">${highlight}</span>`
              )
              .join("")}
          </div>
        </div>

        <div class="tools-section">
          <div class="preview-label">Tools Used:</div>
          <div class="tools-grid">
            ${project.tools
              .map((tool) => `<span class="tool-tag">${tool}</span>`)
              .join("")}
          </div>
        </div>

        <div class="project-actions">
          <button class="btn btn-sm btn-view" data-project-id="${project.id}">
            <i data-lucide="eye"></i>
            View Details
          </button>
          <button class="btn btn-sm btn-download">
            <i data-lucide="download"></i>
            Download
          </button>
          <button class="btn btn-sm btn-external">
            <i data-lucide="external-link"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Open modal with project details
function openModal(projectId) {
  const project = projects.find((p) => p.id === projectId);
  if (!project) return;

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

  // Show modal
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  // Re-initialize Lucide icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Close modal
function closeModal() {
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  }
  selectedProject = null;
}

// Initialize scroll animations
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Observe project cards for scroll animations
  setTimeout(() => {
    document.querySelectorAll(".project-card").forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });
  }, 500);
}

// Error handling
function handleError(error) {
  console.error("Error:", error);
  if (projectsGrid) {
    projectsGrid.innerHTML =
      '<div style="text-align: center; padding: 2rem; color: #ef4444;">Error loading projects. Please try again.</div>';
  }
}

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
