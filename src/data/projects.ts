export interface Project {
  title: string;
  description: string;
  technologies: string[];
  size: string;
  category: string;
  githubUrl: string;
  websiteUrl?: string;
  type?: string;
  image?: string;
  video?: string;
  detailedDescription?: string;
}

export const projects: Project[] = [

  {
    title: "Vuxi",
    description: `Vuxi is a Software-as-a-Service (SaaS) platform that provides UX analysis for websites using vision models and LLM analysis. I created Vuxi after working with a number of charities and small organizations to provide analysis of their websites. I was curious to see how accurately LLMs could provide that service.

    Vuxi is currently in a closed beta. If you would like a demo, please contact me at alastairegrant@pm.me.

    The platform features a multi-step analysis wizard. It first uses Playwright's browser capabilities to capture a series of screenshots of the website to be analyzed. It then presents those screenshots to the user for review before sending them to an LLM with vision capabilities. These screenshots, combined with user input about the site's purpose, allow the LLM to create a UX and mission analysis of the website. This analysis is then sent to another LLM to format the content for our Next.js frontend.

Vuxi also includes real-time progress tracking, professional reports with actionable insights, and a microservices architecture for scalable analysis workflows.

This platform democratizes UX expertise by making professional-level website analysis accessible to anyone, from small business owners to enterprise development teams.`,
    detailedDescription: `Vuxi combines multiple AI models to provide comprehensive UX analysis that is more affordable than a human expert evaluation.

Architecture Overview:
• Next.js frontend with TypeScript for type safety and optimal performance
• Multiple backend services running on an Express.js REST API server for automated screenshot capture with headless browser technology and LLM analysis
• Google Lighthouse integration for performance metrics and Core Web Vitals

Analysis Pipeline:
1. URL validation and automated screenshot capture across multiple device sizes
2. Multi-model AI analysis covering visual design, user experience, and accessibility compliance
3. Performance testing with detailed optimization recommendations
4. Comprehensive report generation with actionable insights and priority rankings
5. Professional PDF export functionality for client presentations and documentation

The platform processes websites through a sophisticated analysis pipeline that evaluates everything from visual hierarchy and color theory to accessibility and mobile responsiveness. Each analysis provides specific, actionable recommendations ranked by impact and implementation difficulty.

Security and privacy are built-in from the ground up, with all analysis happening server-side and no permanent storage of user websites or sensitive data.`,
    technologies: ["Next.js", "TypeScript", "React", "AI/ML Analysis", "Microservices", "Node.js", "Express", "Anthropic AI", "Lighthouse"],
    size: "large",
    category: "AI Platform",
    githubUrl: "https://github.com/aldo-g/Vuxi",
    type: "UX Analysis Platform",
    image: "/assets/vuxi-photo.png"
  },
    {
    title: "SQLCore",
    description: `I created SQLCore in my early days as a software engineer at Rabobank. While developing a FastAPI application, I found that the commonly used SQL Alchemy was not compliant with our bank's standards. Furthermore, our team was full of data engineers and people who were well versed in SQL, which made me question the need for SQL Alchemy at all.

    This led to the birth of SQLCore, a Python library that provides a simple, compliant interface for SQL Server database operations. This means SQL queries, TVFs, and stored procedures can be called with simple functions and SQL syntax.

Features include connection pooling, raw SQL execution, and support for stored procedures and table-valued functions for seamless database interactions.

This project is available on PyPI.`,
    detailedDescription: `SQLCore provides both synchronous and asynchronous database operations, making it suitable for any Python application.

Key technical features:
• Automatic connection pooling with configurable pool sizes
• Support for both raw SQL queries and stored procedures
• Table-valued function integration
• Comprehensive error handling and logging
• Type-safe query parameters and results

The package uses pyodbc under the hood but abstracts away the complexity of connection management, making it easier for developers to focus on their business logic rather than database connection concerns.

Performance optimizations include connection reuse, query result caching, and efficient resource cleanup to prevent memory leaks in long-running applications.`,
    technologies: ["Python", "SQL Server", "ODBC", "Async/Await", "Connection Pooling", "pyodbc"],
    size: "small",
    category: "Database",
    githubUrl: "https://github.com/aldo-g/SQLCore",
    websiteUrl: "https://pypi.org/project/sqlcore/",
    type: "Python Database Library",
    image: "/assets/sql-core-photo.png"
  },
    {
    title: "Obsidian LLM Test",
    description: `While studying for an Azure exam, I wanted to see how well Large Language Models (LLMs) could assist with testing my knowledge. Therefore, I created this Obsidian plugin that takes a note file and generates a series of questions with different difficulty levels based on the note's content. Once the questions are generated, it takes your answers and scores them, providing feedback on where you went wrong.

    For this, I set up multiple LLM providers, including OpenAI, Anthropic, and local models. This allows the plugin to be used with a variety of models and gives users the flexibility to choose their preferred provider.`,
    detailedDescription: `Core Capabilities:
• Direct LLM integration within Obsidian's plugin architecture
• Support for multiple model providers (OpenAI, Anthropic, local models)
• Multimodal processing including text, images, and document analysis
• Advanced JSON processing for structured data extraction
• Custom prompt engineering for knowledge management tasks`,
    technologies: ["obsidian-plugin", "llm-integration", "typescript", "multimodal", "local-llms", "json-processing"],
    size: "small",
    category: "Experiment",
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "/assets/obsidian-llm-test.png",
    video: "/assets/LLM-test-gen.mov"
  },
    {
    title: "Compile Context Extension",
    description: `I built compile-context-ext as a tool to enhance interactions with LLMs. In my early days of coding, I realized that when I used an LLM to help understand code, I often didn't have the whole flow captured when I sent a single file for analysis.

    This VSCode extension helps with that by allowing a user to select multiple files, then generate a context that prints the file tree and contents of those files. This captures the relationships between files and allows me to send one comprehensive file to an LLM instead of copying and pasting multiple files.`,
    detailedDescription: `Core Functionality:
• Automated generation of complete project context files
• File tree representation with a hierarchical structure
• Content aggregation with syntax preservation and formatting
• Customizable filtering to exclude unnecessary files (e.g., node_modules, build artifacts)
• Multiple output formats optimized for different LLM providers

Integration Features:
• VSCode integration with command palette support
• Project-specific settings and filter configurations
• Batch processing for large codebases
• TypeScript for robust extension development`,
    technologies: ["TypeScript", "VSCode API", "Node.js", "File System"],
    size: "small",
    category: "Developer Tools",
    githubUrl: "https://github.com/aldo-g/compile-context-ext",
    type: "VSCode Extension",
    image: "/assets/compile-context-ext.png"
  },
  {
    title: "No Public Purpose",
    description: `I made this website for No Public Purpose, a music collective based in Amsterdam. This project gave me the opportunity to try new web development and frontend technologies like Lovable.ai.

    This was one of my first "vibe coded" projects, where I wanted to test how well these technologies could be used to create a functional and good-looking website. While it was an interesting experiment, and I do sometimes still use Lovable today to create a framework for websites, this is the only project I have done where I solely relied on AI tools.

    I also used this project as a reason to try hosting with Vercel, which I now use for multiple personal projects to quickly set up web hosting.`,
    technologies: ["Loveable", "Vibe Coding", "SoundCloud API", "Vite"],
    size: "small",
    category: "Entertainment",
    githubUrl: "https://github.com/aldo-g/NoPublicPurpose",
    websiteUrl: "https://www.nopublicpurpose.com",
    type: "Music Collective Website",
    image: "/assets/no-public-purpose-logo.png"
  },
  {
    title: "Rota Boat",
    description: `This is a simple one-page React application that I made for myself and my friends to manage our boat bookings during the summer. It's a basic React application that uses Firebase for real-time data storage and retrieval. It provided me with a great opportunity to learn about Firebase and how to use it in a React application, as well as how to deploy a web application to Firebase Hosting.

    The application is a simple one-page React app for managing boat bookings among friends, featuring an intuitive drag-and-drop calendar interface.

Users can easily assign group members to specific days, view current bookings at a glance, and manage shared boat access through a clean, mobile-friendly interface. It was built to solve the real-world problem of coordinating boat usage among a group of friends during summer seasons.`,
    detailedDescription: `Technical Implementation:
• React with modern hooks for state management
• Firebase integration for real-time data synchronization
• Firestore database for persistent booking storage
• Responsive CSS design optimized for mobile usage
• Drag-and-drop functionality for intuitive booking management
• Visual calendar interface showing availability at a glance
• Real-time updates when bookings are made or changed`,
    technologies: ["React", "Firebase", "Firestore", "CSS", "JavaScript"],
    size: "small",
    category: "Application",
    githubUrl: "https://github.com/aldo-g/rota-boat",
    websiteUrl: "https://rota-boat.web.app",
    type: "Web Application",
    image: "/assets/rota-boat-photo.png"
  },
  {
    title: "EPI Global Conflict Map",
    description: `This is an interactive world map I created for the Edinburgh Peace Institute (EPI) to visualize global conflicts in real-time. It uses the Armed Conflict Location and Event Data (ACLED) API to fetch data about real-world conflicts.

    The map is built with D3.js and uses a custom algorithm to calculate the intensity of each conflict based on the number of events and their severity. It allows users to filter conflicts by type, intensity, and location, and provides a detailed view of each conflict when clicked.

This tool was built to provide EPI with a way to visualize global conflicts on the front end of their website.`,
    detailedDescription: `Data Visualization Features:
• Interactive world map with zoom and pan capabilities
• Conflict categorization by type (armed conflict, terrorism, civil unrest, etc.)
• Intensity mapping with color-coded severity indicators
• Geographic clustering for region-specific analysis
• Temporal filtering to track conflicts over time

Technical Architecture:
• D3.js for sophisticated data visualization and map rendering
• Custom algorithms for conflict intensity calculation
• Efficient data processing for real-time map updates
• Responsive design ensuring usability across all device types
• Performance optimization for handling large datasets

This project demonstrates the power of data visualization in making complex geopolitical information accessible and actionable for decision-makers across multiple domains.`,
    technologies: ["D3.js", "JavaScript", "CSS", "Data Visualization", "Geospatial Analysis"],
    size: "large",
    category: "Visualization",
    githubUrl: "https://github.com/aldo-g/conflict-map",
    websiteUrl: "https://conflict-map.vercel.app",
    type: "Data Visualization",
    image: "/assets/conflict-map.png"
  }
];