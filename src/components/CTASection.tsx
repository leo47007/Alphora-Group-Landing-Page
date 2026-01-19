const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
            Let <span className="font-serif italic">Alphora</span> help you take the<br />
            next step in your <span className="font-serif italic">crypto journey</span>.
          </h2>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="btn-outline min-w-[160px]">
              Learn More
            </button>
            <button className="btn-primary min-w-[160px]">
              Start Investing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
