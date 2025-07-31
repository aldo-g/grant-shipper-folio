import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, GraduationCap, Award, FileCheck, Users } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Rabobank - Data & Analytics",
    period: "JUNE 2024 – PRESENT",
    description: "I transferred Rabobank's Data & Analytics department to join the newly formed Generative AI team. Our responsibility was to create building blocks for Generative AI, that could be lifted and shifted to other applications, so that Generative AI tools could be developed and deployed quickly throughout the bank. I focused on building Retrieval Augmented Generation (RAG) building blocks. Using Terraform IAC to create a standardised infrastructure for how we would host RAG applications within Azure. We then developed CI/CD pipelines that used this infrastructure, as well as our existing BE and FE solutions to quickly create full stack Generative AI applications that could be created by even non-technical members of the bank.",
    achievements: [
      "Developed some of the first Generative AI applications to be in Production within Rabobank. Replacing previous chatbot solutions with RAG applications based on Policy and HR documentation",
      "Increased the maturity of our Generative AI approach by taking a Data Security + Compliancy first approach for our applications",
      "Developed a Configurator module for our Generative AI applications to enable non technical Users to configure their own prompts, and data",
      "Created our ETL pipeline to standardise all unstructured data our RAG applications would import. This included using OCR technologies to diversify what documents we could use, as well as other traditional methods"
    ],
    technologies: ["Terraform", "Azure", "RAG", "Generative AI", "CI/CD", "ETL", "OCR"],
    type: "current"
  },
  {
    title: "Junior Back End Developer",
    company: "Rabobank - Wholesale & Rural",
    period: "SEPTEMBER 2022 – JUNE 2024",
    description: "I was hired as a Junior Developer to Rabobank's Wholesale and Rural Innovation Department. There I joined the team responsible for the final stages of developing a BI app called the Value Chain Viewer (VCV), while also completing Rabobank's Young Engineer Professionals Program. As the Backend Engineer for the VCV, I worked with our Business Stakeholders, as well as other members of our Tech Team to develop additional functionality. This could be as simple as working with other API's, and to enhance the financial data we showed users, or more complicated tasks like the development of our Peer Analysis Graphs. I was also responsible for making the application fit the banks compliancy standards when the application transitioned out of the innovation department.",
    achievements: [
      "As a Junior Developer I became the sole backend engineer of the VCV six months after beginning the project",
      "Developed a lightweight database connection framework for Python to replace our previous un-compliant solution",
      "Oversaw the transition of the VCV API from the innovation department to Wholesale and Rural",
      "Created CI/CD pipelines to automate testing for the application, as well as other compliancy checks like CheckMarx and SonarQube"
    ],
    technologies: ["Python", "Backend Development", "API Development", "CI/CD", "Database", "Compliance"],
    type: "previous"
  }
];

const earlierRoles = [
  {
    title: "Web Developer Intern",
    company: "H.U.M.A.N",
    period: "MARCH 2022 – JULY 2022"
  },
  {
    title: "Trustee",
    company: "Cameron Grant Memorial Trust",
    period: "JANUARY 2015 – PRESENT"
  }
];

const qualifications = [
  {
    title: "Full-Stack Web Developer Course",
    institution: "Le Wagon Berlin",
    location: "Germany",
    year: "2021"
  },
  {
    title: "BS in Development Economics and International Development",
    institution: "Lund University",
    location: "Lund, Sweden",
    year: "2019"
  }
];

const certifications = [
  {
    title: "Agentic AI Deal Ready — Participant",
    provider: "Microsoft",
    issued: "Jun 2025",
    credentialId: null,
    skills: ["Azure AI Studio", "Microsoft Azure", "Agentic AI"],
    badge: "/assets/deal-ready-badge.png" // Updated path
  },
  {
    title: "Agentic AI Solution Architecture — Participant", 
    provider: "Microsoft",
    issued: "Jun 2025",
    credentialId: null,
    skills: ["Microsoft Azure", "Azure AI Studio", "Agentic AI"],
    badge: "/assets/solution-architect-badge.png" // Updated path
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    provider: "Microsoft", 
    issued: "Oct 2023",
    credentialId: "BB36E68ED4904335",
    skills: ["Microsoft Azure"],
    badge: "/assets/az-900-badge.png" // Updated path
  }
];

export const ExperienceTab = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">Professional Experience</h2>
        <p className="text-muted-foreground">
          My journey through technology, data, and AI development
        </p>
      </div>

      {/* Main Experience */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="card-hover border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {exp.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                <Badge 
                  variant={exp.type === 'current' ? 'default' : 'secondary'}
                  className={exp.type === 'current' ? 'bg-accent text-accent-foreground' : ''}
                >
                  {exp.type === 'current' ? 'Current Role' : 'Previous Role'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="space-y-2">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  Technologies & Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-accent/40 text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Separator className="bg-border/50" />

              {/* Achievements */}
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Earlier Roles */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground">Earlier Roles</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {earlierRoles.map((role, index) => (
            <Card key={index} className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{role.title}</h4>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="h-3 w-3" />
                    {role.company}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="h-3 w-3" />
                    {role.period}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Qualifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <GraduationCap className="h-6 w-6" />
          Qualifications
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {qualifications.map((qual, index) => (
            <Card key={index} className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">{qual.title}</h4>
                  <p className="text-muted-foreground">{qual.institution}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {qual.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {qual.year}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <FileCheck className="h-6 w-6" />
          Certifications
        </h3>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-border/50 bg-card/30 backdrop-blur-sm card-hover">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Badge Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={cert.badge} 
                      alt={cert.title}
                      className="w-16 h-16 object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow space-y-3">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground leading-tight">{cert.title}</h4>
                      <p className="text-muted-foreground">{cert.provider}</p>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>Issued {cert.issued}</span>
                      </div>
                      {cert.credentialId && (
                        <p className="text-xs text-muted-foreground">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}
                    </div>
                    
                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="text-xs border-accent/40 text-accent">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};