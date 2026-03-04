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
    "title": "Prediction Agent",
    "description": "Prediction Agent is an autonomous Manifold prediction-market trading system built around a two-phase LangChain agent flow: a Plan phase that researches markets and creates a structured trade plan, and an Execution phase that only executes the approved actions. It runs on a schedule, logs runs/trades, tracks portfolio performance, and serves a live dashboard/API.",
    "detailedDescription": "Prediction Agent separates decision quality from order execution with a strict two-phase architecture. In Plan phase, the LangChain agent uses research and portfolio tools to produce JSON trade actions with rationale, sizing, and catalysts. In Execution phase, a second LangChain run consumes that approved plan and uses trade tools only, without inventing new positions. The system persists results to JSONL and optional Postgres, supports local Docker workflows, and deploys to AWS via Terraform (EC2, ECR, SSM, CloudWatch, optional ALB/ACM/Route53).",
    "technologies": [
      "Python",
      "LangChain",
      "OpenAI API",
      "Manifold API",
      "PostgreSQL",
      "Docker",
      "Terraform",
      "AWS EC2",
      "AWS SSM",
      "CloudWatch",
      "JavaScript"
    ],
    "size": "small",
    "category": "AI Platform",
    "githubUrl": "https://github.com/aldo-g/Agent-Time",
    "type": "Autonomous Trading Agent",
    websiteUrl: "https://predictionagent.alastairgrant.dev",
    image: "src/assets/predictionagent.png"
  },
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
    websiteUrl: "https://www.vuxi.ai/reports",
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
    title: "Contour Map Studio",
    description: `Route Art (Contour Map Studio) turns your runs, rides, and hikes into minimalist contour-map posters. Upload a GPX or pull recent Strava activities, explore auto-detected landmarks, tweak styling (dark mode, water shading, markers, orientation), edit route stats, and export a high-resolution PNG that’s ready to print or share.`,
    detailedDescription: `Features:
• GPX upload and Strava OAuth import with activity selection
• Auto-detected landmarks with add/remove, custom landmarks, and selection tools
• Design controls for dark/light mode, water shading, start/end markers, and portrait/landscape ratios
• Editable stats (route name, location, distance, gain/loss, dates) with overrides
• Optional flag/custom image badge and high-resolution PNG export
• Session persistence so in-progress edits survive refreshes

Tech stack:
• Next.js 16 (App Router) + React 19
• Tailwind CSS 4
• Map/geo helpers: @turf/turf, @mapbox/polyline, osmtogeojson
• Rendering/export: jspdf, pngjs`,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Mapbox",
      "Strava API",
      "Turf.js",
      "GeoJSON",
      "GPX"
    ],
    size: "small",
    category: "Visualization",
    githubUrl: "https://github.com/aldo-g/route-art",
    websiteUrl: "https://route-art.vercel.app",
    type: "Route Art Studio",
    image: "/assets/contour-wooduct.png"
  },
  {
    title: "Selectr",
    description: `Selectr is a Tinder-style curation app for your music library and playlists. It lets you quickly review and clean up tracks from connected streaming services using a fast, swipe-based interface.

Each card includes a 30-second preview with a generated waveform plus key metadata like popularity, genres, and explicit status. I built it with a clean, layered SwiftUI architecture and a focus on smooth playback and extensibility for more providers beyond Spotify.`,
    detailedDescription: `Key features:
• Swipe-to-sort flow for keeping or removing tracks from liked songs and playlists
• Contextual previews with waveform rendering and rich track metadata
• Reliable 30-second audio playback with throttled waveform updates and fallback preview resolution
• SwiftUI-based layered architecture (App → UI → Core) for clear separation of concerns
• Future-ready provider integrations (Spotify today, Apple Music/Deezer/YouTube Music next)

Technical implementation:
• Swift concurrency with async/await and actors for networking, persistence, and waveform generation
• @MainActor ObservableObject state in App/Stores and UI/ViewModels consuming Core actors
• Secure token handling via KeychainSecureStore with resilient review/history storage`,
    technologies: ["Swift", "SwiftUI", "iOS", "Async/Await", "Actors", "Spotify API", "Keychain"],
    size: "small",
    category: "Mobile",
    githubUrl: "https://github.com/aldo-g/SpotifySort",
    websiteUrl: "https://apps.apple.com/nl/app/selectr/id6755160110?l=en-GB",
    type: "iOS App",
    image: "/assets/Selectr-1024.png"
  },
  {
    title: "Ticktr",
    description: `Ticktr is a minimalist Apple Wallet pass generator that uses Gemini AI to turn any ticket or PDF into a clean, functional pass for iPhone.

It extracts event details from uploads, preserves QR/barcodes, and generates a signed .pkpass file ready for Apple Wallet, with artistic, high-contrast backgrounds based on the original ticket's vibe.`,
    detailedDescription: `Highlights:
• Gemini 2.5 Flash parsing to extract event names, dates, times, and locations
• Automatic visual styling to create high-contrast pass designs
• Cryptographically signed .pkpass generation for native Wallet compatibility
• QR/barcode detection with preservation of original ticket codes
• Privacy-first handling with in-memory caching and immediate deletion after download

Implementation:
• Vite + React + TypeScript frontend with Tailwind CSS and Lucide icons
• Node.js + Express signing server using passkit-generator
• Gemini integration via @google/genai`,
    technologies: ["Vite", "React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "Gemini", "PassKit", "Gen AI", "Vision Model"],
    size: "small",
    category: "Application",
    githubUrl: "https://github.com/aldo-g/Ticketr",
    websiteUrl: "https://ticktr.info",
    type: "Web App",
    image: "/assets/ticktr-photo.png"
  },
  {
    title: "All Around Australia",
    description: `An interactive map visualization tracking my journey around Australia, powered by Strava data and built with modern web technologies.

It renders daily route segments on a Leaflet map with amber hover effects, a glassmorphic timeline sidebar, and smart interactions that focus the map and sidebar on the selected day.`,
    detailedDescription: `Highlights:
• Leaflet map using Esri World Ocean Base tiles with smooth hover glow effects
• Click-to-focus interactions that sync the map and timeline sidebar
• Glassmorphic, collapsible sidebar with accordion-based day detail
• Auto-scroll to the active journey segment for quick context
• Geotagged photo clustering with an interactive carousel
• Strava data synced to local JSON via Node.js scripts

Implementation:
• React 19 + TypeScript with Vite
• React Leaflet + Leaflet for map rendering
• CSS Modules for custom dark/glassmorphism styling
• Lucide React icons`,
    technologies: ["React", "TypeScript", "Vite", "Leaflet", "React Leaflet", "CSS Modules", "Strava API", "Lucide"],
    size: "small",
    category: "Visualization",
    githubUrl: "https://github.com/aldo-g/all-around-australia",
    websiteUrl: "https://aldo-g.github.io/all-around-australia/",
    type: "Interactive Map",
    image: "/assets/australia-photo.png"
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
    technologies: ["React", "Firebase", "Firestore", "CSS", "JavaScript", "Mobile"],
    size: "small",
    category: "Application",
    githubUrl: "https://github.com/aldo-g/rota-boat",
    websiteUrl: "https://rota-boat.web.app",
    type: "Web Application",
    image: "/assets/rota-boat-photo.png"
  }
];
