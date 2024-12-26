import Navigation from "../components/Navigation";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Portfolio Projects
          </h1>
          <p className="text-center text-muted-foreground">
            Coming soon! We're preparing example portfolio projects for data analysts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;