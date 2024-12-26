import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, TrendingUp, Database, ChartBar } from "lucide-react";

const BlogSection = () => {
  const blogs = [
    {
      title: "Top Data Visualization Trends in 2024",
      date: "March 15, 2024",
      description: "Exploring the latest trends in data visualization and how they're shaping business decisions.",
      icon: TrendingUp,
      readTime: "5 min read",
      preview: "The landscape of data visualization is constantly evolving. This year, we're seeing a significant shift towards interactive dashboards and real-time data visualization...",
      tags: ["Visualization", "Trends", "Business Intelligence"]
    },
    {
      title: "Mastering SQL Window Functions",
      date: "March 10, 2024",
      description: "A comprehensive guide to using SQL window functions for advanced data analysis.",
      icon: Database,
      readTime: "8 min read",
      preview: "Window functions are powerful SQL features that allow you to perform calculations across rows related to the current row. Learn how to leverage them for better analysis...",
      tags: ["SQL", "Tutorial", "Data Analysis"]
    },
    {
      title: "Excel Power Query: Your Secret Weapon",
      date: "March 5, 2024",
      description: "How to automate data cleaning and transformation using Excel Power Query.",
      icon: ChartBar,
      readTime: "6 min read",
      preview: "Power Query is revolutionizing how analysts work with data in Excel. Learn how this powerful tool can automate your data preparation workflow...",
      tags: ["Excel", "Automation", "Data Cleaning"]
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Latest from the Blog
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.title} className="hover:shadow-lg transition-shadow animate-fade-up">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <CalendarDays className="w-4 h-4" />
                  <span>{blog.date}</span>
                  <span>•</span>
                  <span>{blog.readTime}</span>
                </div>
                <CardTitle className="text-xl">{blog.title}</CardTitle>
                <CardDescription>{blog.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{blog.preview}</p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;