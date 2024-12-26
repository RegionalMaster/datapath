import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, PenLine, Brain } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const courses = {
  "sql-fundamentals": {
    title: "SQL Fundamentals",
    description: "Master database querying from scratch",
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
    ],
    content: {
      lesson: `# Introduction to SQL

SQL (Structured Query Language) is the standard language for managing and manipulating relational databases. In this course, you'll learn how to:

1. Write basic queries to retrieve data
2. Filter and sort your results
3. Perform calculations and aggregations
4. Join multiple tables together
5. Write subqueries and CTEs

## Why Learn SQL?

- Essential skill for data analysts
- Universal database language
- Powerful data manipulation capabilities
- High demand in job market`,
      exercises: [
        {
          question: "Write a query to select all columns from the 'employees' table.",
          answer: "SELECT * FROM employees;"
        },
        {
          question: "How would you filter employees with salary greater than 50000?",
          answer: "SELECT * FROM employees WHERE salary > 50000;"
        }
      ],
      practice: [
        {
          scenario: "You have a table named 'sales' with columns: date, product_id, quantity, and price.",
          task: "Calculate the total revenue for each product.",
          hint: "Use GROUP BY and multiplication"
        }
      ],
      quiz: [
        {
          question: "Which SQL keyword is used to filter rows?",
          options: ["WHERE", "FILTER", "SELECT", "GROUP"],
          correct: 0
        },
        {
          question: "What does SELECT DISTINCT do?",
          options: [
            "Returns only unique values",
            "Returns all values",
            "Sorts the results",
            "Counts the rows"
          ],
          correct: 0
        }
      ]
    }
  },
  "excel-fundamentals": {
    title: "Excel for Data Analysis",
    description: "Essential spreadsheet skills for analysts",
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
    ],
    content: {
      lesson: `# Introduction to Excel for Data Analysis

Microsoft Excel is a powerful tool for data analysis. In this course, you'll learn:

1. Essential Excel functions
2. Data organization techniques
3. Pivot tables and charts
4. Advanced formulas
5. Data cleaning methods

## Why Excel?

- Universal business tool
- Easy to learn, powerful to use
- Great for quick analysis
- Widely used in business`,
      exercises: [
        {
          question: "Create a VLOOKUP formula to find an employee's department based on their ID.",
          answer: "=VLOOKUP(A2, EmployeeTable, 3, FALSE)"
        }
      ],
      practice: [
        {
          scenario: "You have sales data for multiple regions over 12 months.",
          task: "Create a pivot table showing total sales by region and month.",
          hint: "Use PivotTable feature with proper row and column settings"
        }
      ],
      quiz: [
        {
          question: "What does VLOOKUP stand for?",
          options: [
            "Vertical Lookup",
            "Value Lookup",
            "Variable Lookup",
            "Vector Lookup"
          ],
          correct: 0
        }
      ]
    }
  },
  "data-visualization": {
    title: "Data Visualization",
    description: "Create compelling visual stories",
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
    ],
    content: {
      lesson: `# Introduction to Data Visualization

Data visualization is the art and science of presenting data in a visual format. You'll learn:

1. Basic visualization principles
2. Chart selection guidelines
3. Tool-specific techniques
4. Best practices for design
5. Storytelling with data

## Why Data Visualization?

- Makes data more accessible
- Reveals patterns and trends
- Supports decision-making
- Enhances communication`,
      exercises: [
        {
          question: "Create a visualization to show sales trends over time.",
          answer: "Use a line chart with time on x-axis and sales on y-axis"
        }
      ],
      practice: [
        {
          scenario: "You have customer satisfaction scores across different product categories.",
          task: "Create an effective visualization to compare satisfaction levels.",
          hint: "Consider using a bar chart or heat map"
        }
      ],
      quiz: [
        {
          question: "Which chart type is best for showing parts of a whole?",
          options: ["Pie Chart", "Line Chart", "Scatter Plot", "Bar Chart"],
          correct: 0
        }
      ]
    }
  }
};

const CourseContent = () => {
  const { courseId } = useParams();
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  if (!courseId || !courses[courseId as keyof typeof courses]) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center text-primary">Course Not Found</h1>
        </div>
      </div>
    );
  }

  const course = courses[courseId as keyof typeof courses];

  const markAsComplete = (section: string) => {
    if (!completedSections.includes(section)) {
      setCompletedSections([...completedSections, section]);
      toast({
        title: "Section Completed!",
        description: `You've completed the ${section} section.`,
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 text-primary">{course.title}</h1>
        <p className="text-xl text-muted-foreground mb-8">{course.description}</p>

        <Tabs defaultValue="lesson" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="lesson" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Lesson
              {completedSections.includes('lesson') && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </TabsTrigger>
            <TabsTrigger value="exercises" className="flex items-center gap-2">
              <PenLine className="w-4 h-4" />
              Exercises
              {completedSections.includes('exercises') && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Practice
              {completedSections.includes('practice') && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </TabsTrigger>
            <TabsTrigger value="quiz" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              Quiz
              {completedSections.includes('quiz') && (
                <CheckCircle className="w-4 h-4 text-green-500" />
              )}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="lesson">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <div className="prose max-w-none">
                {course.content.lesson}
              </div>
            </ScrollArea>
            <Button 
              className="mt-4"
              onClick={() => markAsComplete('lesson')}
              disabled={completedSections.includes('lesson')}
            >
              Mark as Complete
            </Button>
          </TabsContent>

          <TabsContent value="exercises">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <div className="space-y-8">
                {course.content.exercises.map((exercise, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold">Exercise {index + 1}</h3>
                    <p className="text-muted-foreground">{exercise.question}</p>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-mono">{exercise.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button 
              className="mt-4"
              onClick={() => markAsComplete('exercises')}
              disabled={completedSections.includes('exercises')}
            >
              Mark as Complete
            </Button>
          </TabsContent>

          <TabsContent value="practice">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <div className="space-y-8">
                {course.content.practice.map((practice, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold">Practice Problem {index + 1}</h3>
                    <div className="bg-muted p-4 rounded-md">
                      <p className="font-semibold">Scenario:</p>
                      <p>{practice.scenario}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-semibold">Task:</p>
                      <p>{practice.task}</p>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-md">
                      <p className="font-semibold">Hint:</p>
                      <p>{practice.hint}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button 
              className="mt-4"
              onClick={() => markAsComplete('practice')}
              disabled={completedSections.includes('practice')}
            >
              Mark as Complete
            </Button>
          </TabsContent>

          <TabsContent value="quiz">
            <ScrollArea className="h-[600px] w-full rounded-md border p-4">
              <div className="space-y-8">
                {course.content.quiz.map((question, index) => (
                  <div key={index} className="space-y-4">
                    <h3 className="text-lg font-semibold">Question {index + 1}</h3>
                    <p className="text-muted-foreground">{question.question}</p>
                    <div className="space-y-2">
                      {question.options.map((option, optionIndex) => (
                        <div
                          key={optionIndex}
                          className={`p-4 rounded-md cursor-pointer transition-colors ${
                            optionIndex === question.correct
                              ? "bg-green-100 hover:bg-green-200"
                              : "bg-muted hover:bg-muted/80"
                          }`}
                        >
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Button 
              className="mt-4"
              onClick={() => markAsComplete('quiz')}
              disabled={completedSections.includes('quiz')}
            >
              Mark as Complete
            </Button>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CourseContent;