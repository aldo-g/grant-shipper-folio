import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { SocialLinks } from "@/components/SocialLinks";
import profilePhoto from "@/assets/profile-photo.jpg";

const projects = [
  {
    title: "SQLCore",
    description: "A powerful SQL database engine designed for high-performance data processing and analysis. Features advanced query optimization and scalable architecture.",
    technologies: ["SQL", "Database", "Performance Optimization"],
    githubUrl: "https://github.com/aldo-g/SQLCore",
    websiteUrl: "https://sqlcore-demo.com",
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
    title: "No Public Purpose",
    description: "Intelligent document analysis tool that compares and analyzes text chunks for similarities, differences, and patterns using advanced algorithms.",
    technologies: ["Text Analysis", "Algorithms", "Data Processing"],
    githubUrl: "https://github.com/aldo-g/NoPublicPurpose",
    websiteUrl: "https://www.nopublicpurpose.com",
    type: "Analysis Tool",
    image: "src/assets/no-public-purpose-logo.png"
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
    title: "Rota Boat",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/rota-boat",
    websiteUrl: "https://rota-boat.web.app",
    type: "AI Experiment",
    image: "src/assets/rota-boat-photo.png"
  },
  {
    title: "EPI Conflict map",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/conflict-map",
    websiteUrl: "https://conflict-map.vercel.app",
    type: "AI Experiment",
    image: "src/assets/conflict-map.png"
  },
  {
    title: "Compile Context Extension",
    description: "Experimental integration testing framework for Large Language Models within the Obsidian ecosystem. Explores AI-powered knowledge management.",
    technologies: ["LLM", "Obsidian", "AI Integration", "Testing"],
    githubUrl: "https://github.com/aldo-g/compile-context-ext",
    type: "AI Experiment",
    image: "src/assets/compile-context-ext.png"
  }
];

interface CardPosition {
  row: number;
  col: number;
}

const Index = () => {
  const [expandingCardIndex, setExpandingCardIndex] = useState<number | null>(null);
  const [expandStage, setExpandStage] = useState<'row' | 'fullscreen' | null>(null);
  const [cardPositions, setCardPositions] = useState<Record<number, CardPosition>>({});

  // Calculate all card positions when a card expands
  const calculateCardPositions = (expandingIndex: number): Record<number, CardPosition> => {
    const positions: Record<number, CardPosition> = {};
    
    // Calculate original positions for all cards
    for (let i = 0; i < projects.length; i++) {
      positions[i] = {
        row: Math.floor(i / 2) + 1,
        col: (i % 2) + 1
      };
    }

    // If no card is expanding, return original positions
    if (expandingIndex === -1) return positions;

    const expandingRow = positions[expandingIndex].row;
    
    // Find the sibling (other card in same row)
    const siblingIndex = expandingIndex % 2 === 0 ? expandingIndex + 1 : expandingIndex - 1;
    
    // Only proceed if sibling exists
    if (siblingIndex < projects.length) {
      const siblingOriginalCol = positions[siblingIndex].col;
      
      // Check if this is the last row (no cards below the expanding row)
      const isLastRow = !projects.some((_, i) => {
        const cardRow = Math.floor(i / 2) + 1;
        return cardRow > expandingRow;
      });
      
      if (isLastRow) {
        // If it's the last row, sibling moves to column 2 of the same row
        positions[siblingIndex] = {
          row: expandingRow,
          col: 2
        };
      } else {
        // If not the last row, sibling moves down one row but stays in its original column
        positions[siblingIndex] = {
          row: expandingRow + 1,
          col: siblingOriginalCol
        };

        // Find all cards that need to slide down:
        // Cards in the same column as the sibling, below the expanding row
        for (let i = 0; i < projects.length; i++) {
          if (i === expandingIndex || i === siblingIndex) continue;
          
          const originalPos = {
            row: Math.floor(i / 2) + 1,
            col: (i % 2) + 1
          };

          // If card is in same column as sibling and below the expanding row, slide it down
          if (originalPos.col === siblingOriginalCol && originalPos.row > expandingRow) {
            positions[i] = {
              row: originalPos.row + 1,
              col: originalPos.col
            };
          }
        }
      }
    }

    return positions;
  };

  const handleCardExpand = (index: number) => {
    const newPositions = calculateCardPositions(index);
    setCardPositions(newPositions);
    setExpandingCardIndex(index);
    setExpandStage('row');
    
    // After row expansion, transition to fullscreen
    setTimeout(() => {
      setExpandStage('fullscreen');
    }, 600);
  };

  const handleCardClose = () => {
    setExpandStage(null);
    // Reset positions to original layout
    const originalPositions = calculateCardPositions(-1);
    setCardPositions(originalPositions);
    
    setTimeout(() => {
      setExpandingCardIndex(null);
    }, 300);
  };

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
            {projects.map((project, index) => {
              const isExpanding = expandingCardIndex === index;
              const siblingIndex = index % 2 === 0 ? index + 1 : index - 1;
              const isSibling = expandingCardIndex === siblingIndex && siblingIndex < projects.length;
              const targetPosition = cardPositions[index];
              
              return (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubUrl={project.githubUrl}
                  websiteUrl={project.websiteUrl}
                  type={project.type}
                  image={project.image}
                  index={index}
                  isExpanding={isExpanding}
                  isSibling={isSibling}
                  expandStage={expandStage}
                  targetPosition={targetPosition}
                  onExpand={() => handleCardExpand(index)}
                  onClose={handleCardClose}
                />
              );
            })}
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