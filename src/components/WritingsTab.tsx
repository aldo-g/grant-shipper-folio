import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const writings = [
  {
    title: "Agents, Prediction Markets and AWS",
    publication: "Small Agent. Big Bets.",
    date: "Mar 4, 2026",
    url: "https://medium.com/@alastairegrant/small-agent-big-bets-c702d989df17",
    tags: ["Agents", "AWS"]
  },
  {
    title: "LLM as a Judge: Using LLMs and different rubrics to Rate the Nikon Comedy Wildlife Photography",
    publication: "Small Agent. Big Bets.",
    date: "Nov 21, 2025",
    url: "https://medium.com/@alastairegrant/llm-as-a-judge-using-llms-and-different-rubrics-to-rate-the-nikon-comedy-wildlife-photography-f12c38b84145",
    tags: ["LLMs", "AI"]
  },
  {
    title: "Automatically Syncing a Database for API Tests with a Dataplatform Repo, Using Dacpacs, Docker and GitHub Actions",
    publication: "Medium",
    date: "Dec 22, 2023",
    url: "https://medium.com/@alastairegrant/automatically-scyncing-a-database-for-api-tests-with-a-dataplatform-repo-using-dacpacs-docker-and-fba0f2317ccb",
    tags: ["Testing", "DevOps", "Docker"]
  }
];

export const WritingsTab = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-3">Writings</h2>
        <p className="text-muted-foreground text-base">
          Articles I've written on software engineering, AI, and the systems I've worked on.
        </p>
      </div>

      <div className="space-y-4">
        {writings.map((article, index) => (
          <a
            key={index}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Card className="card-hover cursor-pointer border border-border/50 bg-card/50">
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-grow space-y-2">
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-sm text-accent font-medium">{article.publication}</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
