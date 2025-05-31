import React, { useState } from "react";
import {
  ChevronRight,
  Download,
  ExternalLink,
  FileText,
  BarChart3,
  Database,
  Grid3x3,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Eye,
} from "lucide-react";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data - replace with your actual projects
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
    },
    {
      id: 2,
      title: "Financial Data Analysis Dashboard",
      category: "tableau",
      type: "Data Visualization",
      description:
        "Interactive Tableau dashboard analyzing quarterly financial performance across multiple business units with KPI tracking and trend analysis.",
      date: "2024",
      tools: ["Tableau", "SQL", "Excel"],
      fileType: "Tableau",
      preview:
        "💹 Interactive Charts • 🎯 KPI Tracking • 📊 Performance Metrics",
      highlights: [
        "Real-time data",
        "Executive presentation",
        "Cost reduction insights",
      ],
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
      preview:
        "🔄 ETL Pipeline • 📊 Executive Dashboard • 🎯 Strategic Insights",
      highlights: [
        "Multi-source integration",
        "Real-time updates",
        "Mobile responsive",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Grid3x3 },
    { id: "pdf", name: "Research Papers", icon: FileText },
    { id: "tableau", name: "Dashboards", icon: BarChart3 },
    { id: "sql", name: "Database Projects", icon: Database },
    { id: "spreadsheet", name: "Data Analysis", icon: BarChart3 },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const ProjectCard = ({ project }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                {project.type}
              </span>
              <span className="text-gray-500 text-sm">{project.date}</span>
            </div>
          </div>
          <div className="text-2xl">
            {project.category === "pdf" && "📄"}
            {project.category === "tableau" && "📊"}
            {project.category === "sql" && "🗄️"}
            {project.category === "spreadsheet" && "📈"}
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.description}
        </p>

        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-2">Preview:</div>
          <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg">
            {project.preview}
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-500 mb-2">Key Highlights:</div>
          <div className="flex flex-wrap gap-2">
            {project.highlights.map((highlight, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-sm text-gray-500 mb-2">Tools Used:</div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setSelectedProject(project)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download
          </button>
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">
              {project.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>

              <h3 className="text-lg font-semibold mb-3">Technical Details</h3>
              <div className="space-y-2">
                <div>
                  <strong>Type:</strong> {project.type}
                </div>
                <div>
                  <strong>Date:</strong> {project.date}
                </div>
                <div>
                  <strong>File Format:</strong> {project.fileType}
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <h3 className="text-lg font-semibold mb-3">Key Achievements</h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4" />
                Download Project
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                View Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Your Name</h1>
                <p className="text-sm text-gray-600">
                  Master's Degree Portfolio
                </p>
              </div>
            </div>
            <nav className="flex items-center gap-6">
              <a
                href="#projects"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Academic Excellence in
            <span className="text-blue-600"> Data Science</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore my master's degree coursework showcasing advanced analytics,
            database design, statistical modeling, and business intelligence
            solutions.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
              View Projects
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg font-medium">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Academic Projects
            </h2>
            <p className="text-lg text-gray-600">
              A comprehensive collection of coursework demonstrating technical
              expertise
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category.id
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About My Studies
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Currently pursuing a Master's degree with a focus on data
                science and analytics. My coursework encompasses statistical
                analysis, machine learning, database design, and business
                intelligence solutions.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This portfolio showcases practical applications of theoretical
                concepts, demonstrating proficiency in modern data tools and
                methodologies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">3.8</div>
                  <div className="text-sm text-gray-600">GPA</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
              <div className="space-y-3">
                {[
                  "Statistical Analysis & Modeling",
                  "Database Design & SQL",
                  "Data Visualization & BI",
                  "Machine Learning",
                  "Research Methodology",
                  "Business Analytics",
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Interested in discussing my work or potential opportunities?
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">your.email@university.edu</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">(555) 123-4567</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="w-8 h-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-gray-600">University City, State</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p>&copy; 2024 Your Name. All rights reserved.</p>
          <p className="text-gray-400 mt-2">Master's Degree Portfolio</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Portfolio;
