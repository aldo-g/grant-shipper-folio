import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";

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

// Easing function for a more natural scroll animation
const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

const smoothScrollTo = (element: HTMLElement, duration: number) => {
  const startingY = window.pageYOffset;
  const elementY = window.pageYOffset + element.getBoundingClientRect().top;
  // Move card to top of page with some padding
  const topOffset = 30; // Pixels from top of viewport
  const targetY = elementY - topOffset;
  const diff = targetY - startingY;
  let start: number;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;
    const time = timestamp - start;
    const percent = Math.min(time / duration, 1);
    const easedPercent = easeInOutQuad(percent);
    
    window.scrollTo(0, startingY + diff * easedPercent);
    
    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

export const ProjectsTab = () => {
  const [expandingCardIndex, setExpandingCardIndex] = useState<number | null>(null);
  const [cardPositions, setCardPositions] = useState<Record<number, CardPosition>>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, projects.length);
  }, []);

  const calculateCardPositions = (expandingIndex: number): Record<number, CardPosition> => {
    const positions: Record<number, CardPosition> = {};
    const numCols = 2;

    for (let i = 0; i < projects.length; i++) {
      positions[i] = {
        row: Math.floor(i / numCols) + 1,
        col: (i % numCols) + 1,
      };
    }

    if (expandingIndex === null || expandingIndex === -1) {
      return positions;
    }

    const expandingRow = Math.floor(expandingIndex / numCols) + 1;
    
    const cardsToRelayout = [];
    for (let i = 0; i < projects.length; i++) {
      if (i === expandingIndex) continue;
      const originalRow = Math.floor(i / numCols) + 1;
      if (originalRow >= expandingRow) {
        cardsToRelayout.push(i);
      }
    }
    
    let currentRow = expandingRow + 1;
    let currentCol = 1;

    for (const cardIndex of cardsToRelayout) {
      positions[cardIndex] = { row: currentRow, col: currentCol };

      currentCol++;
      if (currentCol > numCols) {
        currentCol = 1;
        currentRow++;
      }
    }

    return positions;
  };

  const handleCardExpand = (index: number) => {
    const newPositions = calculateCardPositions(index);
    setCardPositions(newPositions);
    setExpandingCardIndex(index);
    
    // Scroll the card into view on the next frame, syncing with the CSS transition start
    setTimeout(() => {
      const cardElement = cardRefs.current[index];
      if (cardElement) {
        smoothScrollTo(cardElement, 600);
      }
    }, 0);
  };

  const handleCardClose = () => {
    setExpandingCardIndex(null);
    const originalPositions = calculateCardPositions(-1);
    setCardPositions(originalPositions);
  };

  return (
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
              ref={el => cardRefs.current[index] = el}
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
              targetPosition={targetPosition}
              onExpand={() => handleCardExpand(index)}
              onClose={handleCardClose}
            />
          );
        })}
      </div>
    </div>
  );
};