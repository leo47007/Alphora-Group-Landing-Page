const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-background to-background" />
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container relative z-10 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 animate-fade-in">
            Treasury Clarity for
            <br />
            <span className="font-serif italic text-foreground/90">On-Chain and Off-Chain Finance</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We help CFOs and finance teams visualize cashflow, manage cross-border treasury across AR/AP,
            and design tailored on-chain and off-chain financial strategies.
          </p>

          <div className="mt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Contact us at <a className="text-primary hover:text-primary/80 transition-colors" href="mailto:info@alphoragroup.com">info@alphoragroup.com</a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-foreground mb-2">4</div>
              <div className="text-sm text-muted-foreground"># Companies Under Management</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-foreground mb-2">8+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-foreground mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Treasury Playbooks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-light text-foreground mb-2">140+</div>
              <div className="text-sm text-muted-foreground">Team Members</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
