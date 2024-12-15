import Navigation from "../components/Navigation";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-primary">
            Blog Posts
          </h1>
          <p className="text-center text-muted-foreground">
            Coming soon! We're working on creating valuable content for data analysts.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;