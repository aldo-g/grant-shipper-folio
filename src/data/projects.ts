// src/data/projects.ts - Update all image and video paths

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
    title: "SQLCore",
    description: `A lightweight Python package for managing synchronous and asynchronous database connections with SQL Server.

Features connection pooling, raw SQL execution, stored procedures, and table-valued functions support for seamless database interactions.

Built to solve the common problem of database connection management in Python applications while maintaining high performance and reliability.`,
    detailedDescription: `SQLCore provides both synchronous and asynchronous database operations, making it perfect for modern Python applications.

Key technical features:
• Automatic connection pooling with configurable pool sizes
• Support for both raw SQL queries and stored procedures  
• Table-valued function integration
• Comprehensive error handling and logging
• Type-safe query parameters and results

The package uses pyodbc under the hood but abstracts away the complexity of connection management, making it easier for developers to focus on their business logic rather than database connection concerns.

Performance optimizations include intelligent connection reuse, query result caching, and efficient resource cleanup to prevent memory leaks in long-running applications.`,
    technologies: ["Python", "SQL Server", "ODBC", "Async/Await", "Connection Pooling", "pyodbc"],
    size: "small",
    category: "Database",
    githubUrl: "https://github.com/aldo-g/SQLCore",
    websiteUrl: "https://pypi.org/project/sqlcore/",
    type: "Python Database Library",
    image: "/assets/sql-core-photo.png" // Updated path
  },
  {
    title: "Vuxi",
    description: `AI-powered UX analysis platform that provides comprehensive website evaluation through automated screenshot capture, expert-level AI analysis, and detailed reporting.

Features multi-step analysis wizard, real-time progress tracking, professional reports with actionable insights, and microservices architecture for scalable analysis workflows.

This platform democratizes UX expertise by making professional-level website analysis accessible to anyone, from small business owners to enterprise development teams.`,
    detailedDescription: `Vuxi combines multiple AI models to provide comprehensive UX analysis that rivals human expert evaluation.

Architecture Overview:
• Next.js frontend with TypeScript for type safety and optimal performance
• Microservices backend using Node.js and Express for scalable processing
• Multiple AI providers (Anthropic Claude, Google AI) for diverse analysis perspectives
• Automated screenshot capture with headless browser technology
• Google Lighthouse integration for performance metrics and Core Web Vitals

Analysis Pipeline:
1. URL validation and automated screenshot capture across multiple device sizes
2. Multi-model AI analysis covering visual design, user experience, accessibility compliance
3. Performance testing with detailed optimization recommendations
4. Comprehensive report generation with actionable insights and priority rankings
5. Professional PDF export functionality for client presentations and documentation

The platform processes websites through a sophisticated analysis pipeline that evaluates everything from visual hierarchy and color theory to accessibility compliance and mobile responsiveness. Each analysis provides specific, actionable recommendations ranked by impact and implementation difficulty.

Security and privacy are built-in from the ground up, with all analysis happening server-side and no permanent storage of user websites or sensitive data.`,
    technologies: ["Next.js", "TypeScript", "React", "AI/ML Analysis", "Microservices", "Node.js", "Express", "Anthropic AI", "Google AI", "Lighthouse"],
    size: "large",
    category: "AI Platform",
    githubUrl: "https://github.com/aldo-g/Vuxi",
    type: "UX Analysis Platform",
    image: "/assets/vuxi-photo.png" // Updated path
  },
  {
    title: "No Public Purpose",
    description: `Amsterdam-based music collective hosting intimate electronic music events and parties throughout the city's underground scene.

Features event countdown timers, photo galleries from past events, integrated audio player with SoundCloud tracks, and contact information for booking inquiries.

A creative project that combines my technical skills with my passion for the Amsterdam electronic music scene, showcasing the intersection of technology and artistic expression.`,
    detailedDescription: `This project showcases the intersection of web development and creative expression, serving as both a functional business website and a piece of digital art.

Technical Implementation:
• React with TypeScript for robust component architecture and type safety
• Framer Motion for smooth, music-inspired animations that respond to user interaction
• SoundCloud API integration for seamless audio streaming and playlist management
• Responsive design optimized for mobile event discovery and on-the-go browsing
• Custom countdown timers with dynamic event scheduling and timezone handling

Creative Features:
• Interactive photo galleries showcasing event atmosphere and community
• Dynamic audio player with curated electronic music sets from collective members
• Event management system for upcoming parties with RSVP functionality
• Contact integration for booking inquiries and collaboration opportunities
• Social media integration for real-time event updates and community engagement

Design Philosophy:
The site reflects the underground electronic music aesthetic while maintaining professional functionality for event promotion and community building. Dark, immersive visuals combined with subtle animations create an atmosphere that mirrors the intimate, underground events the collective hosts.

The project demonstrates how technical skills can serve creative communities, providing a platform that enhances the cultural ecosystem of Amsterdam's electronic music scene.`,
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "SoundCloud API", "Vite"],
    size: "medium",
    category: "Entertainment",
    githubUrl: "https://github.com/aldo-g/NoPublicPurpose",
    websiteUrl: "https://www.nopublicpurpose.com",
    type: "Music Collective Website",
    image: "/assets/no-public-purpose-logo.png" // Updated path
  },
  {
    title: "Obsidian LLM Test",
    description: `Experimental integration testing framework for Large Language Models within the Obsidian ecosystem, exploring AI-powered knowledge management.

This project demonstrates the integration of LLMs directly into note-taking workflows, enabling seamless AI assistance without leaving the Obsidian environment.

Features multimodal capabilities, local LLM support, and advanced JSON processing for structured knowledge extraction and generation.`,
    detailedDescription: `This experimental project pushes the boundaries of AI-powered knowledge management by integrating Large Language Models directly into Obsidian's note-taking environment.

Core Capabilities:
• Direct LLM integration within Obsidian's plugin architecture
• Support for multiple model providers (OpenAI, Anthropic, local models)
• Multimodal processing including text, images, and document analysis
• Advanced JSON processing for structured data extraction
• Custom prompt engineering for knowledge management tasks

Technical Innovation:
The plugin demonstrates several innovative approaches to AI-powered note-taking:
- Real-time content generation and analysis
- Context-aware suggestions based on existing notes
- Automated tagging and categorization of content
- Cross-reference generation and knowledge graph enhancement

Use Cases:
• Research assistance with automatic source synthesis
• Content generation based on existing knowledge base
• Note enhancement with AI-powered insights and connections
• Automated organization and structuring of information

This project serves as a proof-of-concept for the future of AI-assisted knowledge work, showing how LLMs can be seamlessly integrated into existing workflows to enhance rather than replace human creativity and critical thinking.

The experimental nature allows for rapid iteration and testing of new AI capabilities as they emerge, making it a valuable testbed for exploring the frontiers of AI-powered productivity tools.`,
    technologies: ["obsidian-plugin", "llm-integration", "typescript", "multimodal", "local-llms", "json-processing"],
    size: "small",
    category: "Experiment",
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "/assets/obsidian-llm-test.png", // Updated path
    video: "/assets/LLM-test-gen.mov" // Updated path
  },
  {
    title: "Rota Boat",
    description: `A simple one-page React application for managing boat bookings among friends, featuring an intuitive drag-and-drop calendar interface.

Users can easily assign group members to specific days, view current bookings at a glance, and manage shared boat access through a clean, mobile-friendly interface.

Built to solve the real-world problem of coordinating boat usage among a group of friends during summer seasons.`,
    detailedDescription: `Rota Boat demonstrates how simple solutions can solve real-world coordination problems effectively.

Technical Implementation:
• React with modern hooks for state management
• Firebase integration for real-time data synchronization
• Firestore database for persistent booking storage
• Responsive CSS design optimized for mobile usage
• Drag-and-drop functionality for intuitive booking management

Key Features:
• Visual calendar interface showing availability at a glance
• Real-time updates when bookings are made or changed
• User assignment system with color-coded identification
• Mobile-optimized design for on-the-go booking management
• Conflict resolution for overlapping booking attempts

User Experience:
The application prioritizes simplicity and ease of use. The drag-and-drop interface makes booking as simple as dragging a name to a date, while the visual calendar provides immediate feedback about availability and current assignments.

Real-World Impact:
This project solved an actual coordination problem for a group of friends sharing a boat. The simple interface and real-time updates eliminated the back-and-forth messaging that previously occurred when trying to coordinate boat usage.

The success of this project demonstrates the value of technology solutions that directly address specific, real-world problems with minimal complexity and maximum usability.`,
    technologies: ["React", "Firebase", "Firestore", "CSS", "JavaScript"],
    size: "small",
    category: "Application",
    githubUrl: "https://github.com/aldo-g/rota-boat",
    websiteUrl: "https://rota-boat.web.app",
    type: "Web Application",
    image: "/assets/rota-boat-photo.png" // Updated path
  },
  {
    title: "EPI Global Conflict Map",
    description: `Interactive world map visualizing real-time global conflicts with detailed analytics and comprehensive filtering capabilities.

Features conflict categorization by type and intensity, geographic clustering, trend analysis, and advanced filtering for conflict research and journalistic analysis.

Built to provide researchers, journalists, and policy makers with accessible, visual insights into global conflict patterns and trends.`,
    detailedDescription: `The EPI Global Conflict Map transforms complex geopolitical data into accessible, interactive visualizations for research and analysis.

Data Visualization Features:
• Interactive world map with zoom and pan capabilities
• Conflict categorization by type (armed conflict, terrorism, civil unrest, etc.)
• Intensity mapping with color-coded severity indicators
• Geographic clustering for region-specific analysis
• Temporal filtering to track conflicts over time
• Trend analysis with statistical overlays

Technical Architecture:
• D3.js for sophisticated data visualization and map rendering
• Custom algorithms for conflict intensity calculation
• Efficient data processing for real-time map updates
• Responsive design ensuring usability across all device types
• Performance optimization for handling large datasets

Research Applications:
The platform serves multiple use cases:
- Academic research on conflict patterns and trends
- Journalistic investigation and story development
- Policy analysis and decision support
- Educational resources for understanding global conflicts
- NGO planning and resource allocation

Data Processing:
The system processes multiple data sources to create a comprehensive view of global conflicts:
• Real-time news feeds and conflict databases
• Government and international organization reports
• Social media monitoring for emerging conflicts
• Historical conflict data for trend analysis

This project demonstrates the power of data visualization in making complex geopolitical information accessible and actionable for decision-makers across multiple domains.`,
    technologies: ["D3.js", "JavaScript", "CSS", "Data Visualization", "Geospatial Analysis"],
    size: "large",
    category: "Visualization",
    githubUrl: "https://github.com/aldo-g/conflict-map",
    websiteUrl: "https://conflict-map.vercel.app",
    type: "Data Visualization",
    image: "/assets/conflict-map.png" // Updated path
  },
  {
    title: "Compile Context Extension",
    description: `VSCode extension that generates comprehensive context files containing project file trees and contents for enhanced LLM code assistance.

Designed to provide Large Language Models with complete codebase context, enabling better code assistance, documentation generation, and project analysis.

Features intelligent file filtering, customizable output formats, and seamless integration with popular AI coding assistants.`,
    detailedDescription: `The Compile Context Extension bridges the gap between modern AI coding assistants and comprehensive codebase understanding.

Core Functionality:
• Automated generation of complete project context files
• Intelligent file tree representation with hierarchical structure
• Content aggregation with syntax preservation and formatting
• Customizable filtering to exclude unnecessary files (node_modules, build artifacts, etc.)
• Multiple output formats optimized for different LLM providers

Integration Features:
• Seamless VSCode integration with command palette support
• Configurable keyboard shortcuts for rapid context generation
• Project-specific settings and filter configurations
• Integration with popular AI coding assistants (GitHub Copilot, CodeWhisperer, etc.)
• Batch processing for large codebases

Technical Implementation:
• TypeScript for robust extension development
• VSCode API utilization for deep editor integration
• Node.js file system operations for efficient file processing
• Custom parsing algorithms for intelligent content extraction
• Performance optimization for large project handling

Use Cases:
• Enhanced AI code assistance with full project context
• Documentation generation based on complete codebase understanding
• Code review assistance with comprehensive project knowledge
• Onboarding new team members with automatically generated project overviews
• Legacy code analysis and modernization planning

Developer Productivity Impact:
This extension significantly improves the quality of AI-assisted coding by providing LLMs with the full context they need to make informed suggestions, generate accurate documentation, and understand complex project relationships.

The tool represents a practical solution to one of the key limitations of current AI coding assistants: the lack of comprehensive project context.`,
    technologies: ["TypeScript", "VSCode API", "Node.js", "File System"],
    size: "small",
    category: "Developer Tools",
    githubUrl: "https://github.com/aldo-g/compile-context-ext",
    type: "VSCode Extension",
    image: "/assets/compile-context-ext.png" // Updated path
  }
];