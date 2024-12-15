import { BookOpen, FileSpreadsheet, Database, ChartBar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CoursesSection = () => {
  const courses = [
    {
      id: "sql-fundamentals",
      title: "SQL Fundamentals",
      description: "Master database querying from scratch",
      level: "Beginner",
      duration: "4 weeks",
      icon: Database,
      topics: [
        "Introduction to Databases",
        "Basic SELECT Queries",
        "Filtering with WHERE",
        "Sorting with ORDER BY",
        "Aggregations (COUNT, SUM, AVG)",
        "GROUP BY and HAVING",
        "JOINs (INNER, LEFT, RIGHT)",
        "Subqueries and CTEs"
      ],
      materials: [
        {
          title: "Practice Exercises",
          url: "https://sqlzoo.net/"
        },
        {
          title: "Interactive SQL Tutorial",
          url: "https://www.sqlcourse.com/"
        }
      ]
    },
    {
      id: "excel-fundamentals",
      title: "Excel for Data Analysis",
      description: "Essential spreadsheet skills for analysts",
      level: "Beginner",
      duration: "3 weeks",
      icon: FileSpreadsheet,
      topics: [
        "Excel Interface and Basic Functions",
        "Data Formatting and Validation",
        "VLOOKUP and HLOOKUP",
        "Pivot Tables",
        "Data Cleaning Techniques",
        "Basic Statistical Functions",
        "Charts and Visualizations",
        "Power Query Basics"
      ],
      materials: [
        {
          title: "Excel Practice Files",
          url: "https://www.contextures.com/excel-sample-data-files.html"
        },
        {
          title: "Excel Exercises",
          url: "https://chandoo.org/wp/excel-exercises/"
        }
      ]
    },
    {
      id: "data-visualization",
      title: "Data Visualization",
      description: "Create compelling visual stories",
      level: "Intermediate",
      duration: "5 weeks",
      icon: ChartBar,
      topics: [
        "Visualization Principles",
        "Chart Types and Best Practices",
        "Tableau Basics",
        "Interactive Dashboards",
        "Power BI Fundamentals",
        "Color Theory in Data Viz",
        "Storytelling with Data",
        "Dashboard Design"
      ],
      materials: [
        {
          title: "Tableau Resources",
          url: "https://public.tableau.com/en-us/s/resources"
        },
        {
          title: "Power BI Samples",
          url: "https://learn.microsoft.com/en-us/power-bi/create-reports/sample-datasets"
        }
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Detailed Learning Paths
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.title}
              className="hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <course.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Course Content:</h4>
                    <ScrollArea className="h-[200px] rounded-md border p-4">
                      <ul className="space-y-2">
                        {course.topics.map((topic) => (
                          <li key={topic} className="text-sm text-muted-foreground">
                            • {topic}
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Learning Materials:</h4>
                    <ul className="space-y-2">
                      {course.materials.map((material) => (
                        <li key={material.title}>
                          <a
                            href={material.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary hover:underline"
                          >
                            {material.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <div className="space-y-1">
                      <span className="text-sm text-primary block">{course.level}</span>
                      <span className="text-sm text-muted-foreground block">{course.duration}</span>
                    </div>
                    <Link to={`/course/${course.id}`}>
                      <Button>Start Learning</Button>
                    </Link>
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

export default CoursesSection;