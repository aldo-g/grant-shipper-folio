import { useState, useRef, useEffect } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { Badge } from "@/components/ui/badge";
import { X, Filter } from "lucide-react";
import { projects } from "@/data/projects";

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
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Get all unique values for each filter type
  const allTechnologies = Array.from(
    new Set(projects.flatMap(project => project.technologies))
  ).sort();
  
  const allSizes = Array.from(
    new Set(projects.map(project => project.size))
  ).sort((a, b) => {
    const sizeOrder = ['tiny', 'small', 'medium', 'large'];
    return sizeOrder.indexOf(a) - sizeOrder.indexOf(b);
  });
  
  const allCategories = Array.from(
    new Set(projects.map(project => project.category))
  ).sort();

  // Filter projects based on selected filters
  const filteredProjects = selectedFilters.length === 0 
    ? projects 
    : projects.filter(project => 
        selectedFilters.some(filter => 
          project.technologies.includes(filter) ||
          project.size === filter ||
          project.category === filter
        )
      );

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, filteredProjects.length);
  }, [filteredProjects.length]);

  const calculateCardPositions = (expandingIndex: number): Record<number, CardPosition> => {
    const positions: Record<number, CardPosition> = {};
    const numCols = 2;

    for (let i = 0; i < filteredProjects.length; i++) {
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
    for (let i = 0; i < filteredProjects.length; i++) {
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

  const handleFilterToggle = (filter: string) => {
    setSelectedFilters(prev => {
      if (prev.includes(filter)) {
        return prev.filter(f => f !== filter);
      } else {
        return [...prev, filter];
      }
    });
    
    // Close any expanded card when filters change
    setExpandingCardIndex(null);
    setCardPositions({});
  };

  const clearAllFilters = () => {
    setSelectedFilters([]);
    setExpandingCardIndex(null);
    setCardPositions({});
  };

  // Helper function to get filter type and color
  const getFilterTypeAndColor = (filter: string) => {
    if (allSizes.includes(filter)) {
      return { type: 'size', color: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/30' };
    }
    if (allCategories.includes(filter)) {
      return { type: 'category', color: 'bg-red-500/20 text-red-300 border-red-500/40 hover:bg-red-500/30' };
    }
    if (allTechnologies.includes(filter)) {
      return { type: 'technology', color: 'bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30' };
    }
    return { type: 'unknown', color: 'bg-gray-500/20 text-gray-300 border-gray-500/40 hover:bg-gray-500/30' };
  };

  const getSelectedFilterColor = (filter: string) => {
    if (allSizes.includes(filter)) {
      return 'bg-yellow-500 text-yellow-900 border-yellow-500 shadow-md';
    }
    if (allCategories.includes(filter)) {
      return 'bg-red-500 text-red-900 border-red-500 shadow-md';
    }
    if (allTechnologies.includes(filter)) {
      return 'bg-green-500 text-green-900 border-green-500 shadow-md';
    }
    return 'bg-gray-500 text-gray-900 border-gray-500 shadow-md';
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
      {/* Header with Filter Toggle */}
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
        <div className="text-center lg:text-left space-y-4">
          <h2 className="text-3xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground">
            A collection of websites, tools, and experiments I've built to explore modern web technologies and AI integration.
          </p>
        </div>
        
        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border self-center lg:self-auto ${
            showFilters || selectedFilters.length > 0
              ? 'bg-accent text-accent-foreground border-accent shadow-md'
              : 'bg-card/50 text-muted-foreground border-border/50 hover:bg-card hover:text-foreground hover:border-accent/50'
          }`}
        >
          <Filter className="h-4 w-4" />
          Filters
          {selectedFilters.length > 0 && (
            <Badge variant="secondary" className="ml-1 h-5 min-w-5 text-xs">
              {selectedFilters.length}
            </Badge>
          )}
        </button>
      </div>

      {/* Filter Section - Conditionally Rendered */}
      {showFilters && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h3 className="text-lg font-semibold text-foreground">Filter Projects</h3>
            {selectedFilters.length > 0 && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors self-start sm:self-auto"
              >
                <X className="h-4 w-4" />
                Clear all filters
              </button>
            )}
          </div>

          {/* Size Filters */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              Project Size
            </h4>
            <div className="flex flex-wrap gap-2">
              {allSizes.map((size) => {
                const isSelected = selectedFilters.includes(size);
                return (
                  <button
                    key={size}
                    onClick={() => handleFilterToggle(size)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border capitalize ${
                      isSelected
                        ? getSelectedFilterColor(size)
                        : getFilterTypeAndColor(size).color
                    }`}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Category Filters */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              Category
            </h4>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => {
                const isSelected = selectedFilters.includes(category);
                return (
                  <button
                    key={category}
                    onClick={() => handleFilterToggle(category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                      isSelected
                        ? getSelectedFilterColor(category)
                        : getFilterTypeAndColor(category).color
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Technology Filters */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {allTechnologies.map((tech) => {
                const isSelected = selectedFilters.includes(tech);
                return (
                  <button
                    key={tech}
                    onClick={() => handleFilterToggle(tech)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                      isSelected
                        ? getSelectedFilterColor(tech)
                        : getFilterTypeAndColor(tech).color
                    }`}
                  >
                    {tech}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Filters Display */}
          {selectedFilters.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Active filters: 
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedFilters.map((filter) => (
                  <Badge
                    key={filter}
                    variant="default"
                    className={`cursor-pointer hover:opacity-80 flex items-center gap-1 ${getSelectedFilterColor(filter)}`}
                    onClick={() => handleFilterToggle(filter)}
                  >
                    {filter}
                    <X className="h-3 w-3" />
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {selectedFilters.length === 0 
                ? `Showing all ${projects.length} projects`
                : `Showing ${filteredProjects.length} of ${projects.length} projects`
              }
            </p>
          </div>
        </div>
      )}

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => {
            const isExpanding = expandingCardIndex === index;
            const siblingIndex = index % 2 === 0 ? index + 1 : index - 1;
            const isSibling = expandingCardIndex === siblingIndex && siblingIndex < filteredProjects.length;
            const targetPosition = cardPositions[index];
            
            return (
              <ProjectCard
                key={`${project.title}-${selectedFilters.join('-')}`}
                ref={el => cardRefs.current[index] = el}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                size={project.size}
                category={project.category}
                githubUrl={project.githubUrl}
                websiteUrl={project.websiteUrl}
                type={project.type}
                image={project.image}
                video={project.video}
                detailedDescription={project.detailedDescription}
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
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No projects found with the selected filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="mt-4 text-accent hover:text-accent/80 underline"
          >
            Clear filters to see all projects
          </button>
        </div>
      )}
    </div>
  );
};