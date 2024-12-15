import { Database, ChartBar, Globe, BookOpen, FileSpreadsheet, PieChart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const RoadmapSection = () => {
  const roadmapSteps = [
    {
      icon: Database,
      title: "SQL & Database Fundamentals",
      duration: "4-6 weeks",
      description: "Master the foundation of data analysis",
      content: {
        overview: "SQL is the language of data. You'll learn how to query, filter, and manipulate data from databases.",
        topics: [
          "Basic SELECT queries and filtering with WHERE",
          "Aggregations (COUNT, SUM, AVG) and GROUP BY",
          "JOINs and relationship between tables",
          "Subqueries and CTEs"
        ],
        resources: [
          {
            title: "SQL Tutorial - W3Schools",
            url: "https://www.w3schools.com/sql/"
          },
          {
            title: "PostgreSQL Exercises",
            url: "https://pgexercises.com/"
          }
        ]
      }
    },
    {
      icon: FileSpreadsheet,
      title: "Excel & Spreadsheet Mastery",
      duration: "3-4 weeks",
      description: "Excel remains a crucial tool in data analysis",
      content: {
        overview: "Learn advanced Excel functions, pivot tables, and data cleaning techniques.",
        topics: [
          "VLOOKUP, HLOOKUP, and INDEX-MATCH",
          "Pivot Tables and Power Query",
          "Data Validation and Cleaning",
          "Basic Statistical Functions"
        ],
        resources: [
          {
            title: "Excel for Data Analysis - Microsoft Learn",
            url: "https://learn.microsoft.com/en-us/training/paths/excel-data-analysis/"
          }
        ]
      }
    },
    {
      icon: ChartBar,
      title: "Data Visualization",
      duration: "4-5 weeks",
      description: "Transform data into compelling visuals",
      content: {
        overview: "Learn to create impactful visualizations using tools like Tableau and Power BI.",
        topics: [
          "Chart Types and Best Practices",
          "Dashboard Design Principles",
          "Interactive Visualizations",
          "Storytelling with Data"
        ],
        resources: [
          {
            title: "Tableau Public",
            url: "https://public.tableau.com/en-us/s/"
          },
          {
            title: "Power BI Learning Path",
            url: "https://learn.microsoft.com/en-us/power-bi/"
          }
        ]
      }
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Your Path to Becoming a Data Analyst
        </h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {roadmapSteps.map((step, index) => (
            <Card key={step.title} className="animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{step.title}</CardTitle>
                    <CardDescription>Estimated: {step.duration}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible>
                  <AccordionItem value="overview">
                    <AccordionTrigger>Overview</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground">{step.content.overview}</p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="topics">
                    <AccordionTrigger>Key Topics</AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-6 space-y-2">
                        {step.content.topics.map((topic) => (
                          <li key={topic} className="text-muted-foreground">{topic}</li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="resources">
                    <AccordionTrigger>Learning Resources</AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {step.content.resources.map((resource) => (
                          <li key={resource.title}>
                            <a 
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline"
                            >
                              {resource.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;