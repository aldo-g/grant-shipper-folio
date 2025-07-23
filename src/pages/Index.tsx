import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import profilePhoto from "@/assets/profile-photo.jpg";

const projects = [
  {
    title: "SQLCore",
    description: "A powerful SQL database engine designed for high-performance data processing and analysis. Features advanced query optimization and scalable architecture.",
    technologies: ["SQL", "Database", "Performance Optimization"],
    githubUrl: "https://github.com/aldo-g/SQLCore",
    type: "Database Engine",
    image: "src/assets/sql-core-photo.png"
  },
  {
    title: "Vuxi",
    description: "Modern Vue.js framework extension providing enhanced UI components and developer experience. Streamlines frontend development with elegant abstractions.",
    technologies: ["Vue.js", "TypeScript", "Component Library"],
    githubUrl: "https://github.com/aldo-g/Vuxi",
    type: "Frontend Framework",
    image: "src/assets/vuxi-photo.png"
  },
  {
    title: "Chunk Comparator",
    description: "Intelligent document analysis tool that compares and analyzes text chunks for similarities, differences, and patterns using advanced algorithms.",
    technologies: ["Text Analysis", "Algorithms", "Data Processing"],
    githubUrl: "https://github.com/aldo-g/Chunk-comparator",
    type: "Analysis Tool",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop"
  },
  {
    title: "Obsidian LLM Test",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "src/assets/obsidian-llm-test.png"
  },
  {
    title: "Obsidian LLM Test",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "src/assets/obsidian-llm-test.png"
  },
  {
    title: "Obsidian LLM Test",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "src/assets/obsidian-llm-test.png"
  },
  {
    title: "Obsidian LLM Test",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/obsidian-llm-test",
    type: "AI Experiment",
    image: "src/assets/obsidian-llm-test.png"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <div className="relative inline-block">
            <img
              src={profilePhoto}
              alt="Alastair Grant"
              className="w-32 h-32 rounded-full object-cover mx-auto hero-glow border-2 border-accent/20"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl font-bold text-foreground">
              Alastair Grant
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              GenAI Developer exploring the frontiers of artificial intelligence, 
              database systems, and modern web technologies. Building tools that 
              bridge the gap between complex AI and practical applications.
            </p>
          </div>

          <SocialLinks />
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
            <p className="text-muted-foreground">
              A collection of experiments, tools, and frameworks I've built
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
                <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                type={project.type}
                image={project.image}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
