import Navigation from "../components/Navigation";
import RoadmapSection from "../components/RoadmapSection";
import CoursesSection from "../components/CoursesSection";
import BlogSection from "../components/BlogSection";
import PortfolioSection from "../components/PortfolioSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-down">
            Begin Your Data Analysis Journey
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-up">
            Master the skills needed to become a successful remote data analyst with our comprehensive learning path and resources.
          </p>
        </div>
      </section>

      <RoadmapSection />
      <CoursesSection />
      <BlogSection />
      <PortfolioSection />
    </div>
  );
};

export default Index;