import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, PenLine, Brain, HelpCircle } from "lucide-react";

const LearningContent = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  const lessons = [
    {
      id: "sql-basics",
      title: "SQL Basics",
      content: "SQL (Structured Query Language) is the standard language for dealing with Relational Databases. Learn about basic queries, filtering, and sorting data.",
      exercise: "Write a SELECT statement to retrieve all columns from the 'employees' table where the salary is greater than 50000.",
      practice: "Given a 'sales' table with columns (date, product_id, quantity, price), write a query to find the total revenue for each product.",
      quiz: [
        {
          question: "Which SQL clause is used to filter rows?",
          options: ["SELECT", "WHERE", "GROUP BY", "ORDER BY"],
          answer: 1
        }
      ]
    },
    {
      id: "excel-functions",
      title: "Excel Functions",
      content: "Master essential Excel functions like VLOOKUP, SUMIF, and Pivot Tables to analyze and transform data effectively.",
      exercise: "Create a VLOOKUP function to match product IDs with their names from a reference table.",
      practice: "Using the provided sales dataset, create a pivot table showing monthly sales by product category.",
      quiz: [
        {
          question: "What does VLOOKUP stand for?",
          options: ["Vertical Lookup", "Value Lookup", "Variable Lookup", "Vector Lookup"],
          answer: 0
        }
      ]
    },
    {
      id: "data-visualization",
      title: "Data Visualization",
      content: "Learn how to create effective visualizations that communicate insights clearly using various chart types and best practices.",
      exercise: "Create a line chart showing sales trends over time, including appropriate labels and legend.",
      practice: "Analyze the given customer satisfaction data and create the most appropriate visualization to show the distribution of ratings.",
      quiz: [
        {
          question: "Which chart type is best for showing parts of a whole?",
          options: ["Line Chart", "Scatter Plot", "Pie Chart", "Bar Chart"],
          answer: 2
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-primary">
        Learning Materials
      </h1>
      
      <div className="grid gap-8">
        {lessons.map((lesson) => (
          <Card key={lesson.id} className="animate-fade-up">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-2xl font-bold">
                {lesson.title}
              </CardTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleLessonCompletion(lesson.id)}
                className={completedLessons.includes(lesson.id) ? "text-green-500" : "text-gray-400"}
              >
                <CheckCircle className="h-5 w-5" />
              </Button>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="lesson" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="lesson" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Lesson
                  </TabsTrigger>
                  <TabsTrigger value="exercise" className="flex items-center gap-2">
                    <PenLine className="h-4 w-4" />
                    Exercise
                  </TabsTrigger>
                  <TabsTrigger value="practice" className="flex items-center gap-2">
                    <Brain className="h-4 w-4" />
                    Practice
                  </TabsTrigger>
                  <TabsTrigger value="quiz" className="flex items-center gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Quiz
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="lesson">
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <p className="text-muted-foreground">{lesson.content}</p>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="exercise">
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Exercise:</h3>
                      <p className="text-muted-foreground">{lesson.exercise}</p>
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="practice">
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Practice Problem:</h3>
                      <p className="text-muted-foreground">{lesson.practice}</p>
                    </div>
                  </ScrollArea>
                </TabsContent>
                
                <TabsContent value="quiz">
                  <ScrollArea className="h-[200px] rounded-md border p-4">
                    {lesson.quiz.map((q, index) => (
                      <div key={index} className="space-y-4">
                        <h3 className="font-semibold">{q.question}</h3>
                        <div className="space-y-2">
                          {q.options.map((option, optionIndex) => (
                            <div key={optionIndex} className="flex items-center gap-2">
                              <input
                                type="radio"
                                name={`quiz-${lesson.id}-${index}`}
                                id={`option-${lesson.id}-${index}-${optionIndex}`}
                                className="w-4 h-4"
                              />
                              <label
                                htmlFor={`option-${lesson.id}-${index}-${optionIndex}`}
                                className="text-muted-foreground"
                              >
                                {option}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LearningContent;