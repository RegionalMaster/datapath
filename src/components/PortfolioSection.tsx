import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, FileSpreadsheet, Database, ChartBar } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Sales Data Analysis Dashboard",
      description: "Interactive dashboard analyzing e-commerce sales trends",
      icon: ChartBar,
      tools: ["Excel", "Power BI", "SQL"],
      preview: "Created a comprehensive dashboard to visualize sales trends, customer behavior, and inventory management metrics for an e-commerce platform.",
      demoUrl: "#",
      githubUrl: "#",
      skills: ["Data Visualization", "Dashboard Design", "KPI Tracking"]
    },
    {
      title: "Customer Segmentation Analysis",
      description: "RFM analysis for customer segmentation",
      icon: Database,
      tools: ["SQL", "Excel", "Tableau"],
      preview: "Performed customer segmentation using RFM (Recency, Frequency, Monetary) analysis to identify key customer groups and behavior patterns.",
      demoUrl: "#",
      githubUrl: "#",
      skills: ["Customer Analytics", "SQL Queries", "Data Visualization"]
    },
    {
      title: "Marketing Campaign Performance",
      description: "Analysis of multi-channel marketing campaigns",
      icon: FileSpreadsheet,
      tools: ["Google Analytics", "Excel", "Data Studio"],
      preview: "Analyzed the performance of marketing campaigns across multiple channels, identifying the most effective strategies and ROI metrics.",
      demoUrl: "#",
      githubUrl: "#",
      skills: ["Marketing Analytics", "ROI Analysis", "Report Automation"]
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Portfolio Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow animate-fade-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <project.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">{project.preview}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      Source Code
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;