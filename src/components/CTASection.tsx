const CTASection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
            Let <span className="font-serif italic">Alphora</span> help you take the
            next step in your <span className="font-serif italic">treasury journey</span>.
          </h2>

          <div className="mt-3 text-sm text-muted-foreground">
            Contact us at{' '}
            <a className="text-primary hover:text-primary/80 transition-colors" href="mailto:info@alphoragroup.com">
              info@alphoragroup.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
