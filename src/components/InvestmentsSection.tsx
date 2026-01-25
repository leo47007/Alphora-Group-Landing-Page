const services = [
  {
    title: 'Cashflow visualization for CFOs',
    description: 'Unified dashboards for liquidity, runway tracking, and scenario planning.',
    tag: 'Core Service',
  },
  {
    title: 'Cross-border treasury management for AR/AP',
    description: 'Centralize collections and payouts across entities, currencies, and counterparties.',
    tag: 'Core Service',
  },
  {
    title: 'Tailor-made on-chain and off-chain financial strategy',
    description: 'Design policy, execution, and risk controls across digital and traditional rails.',
    tag: 'Core Service',
  },
];

const InvestmentsSection = () => {
  return (
    <section id="services" className="py-24 bg-card/30 scroll-mt-24">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Core treasury and finance services
              <br className="hidden md:block" />
              tailored to <span className="font-serif italic">modern operations</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {service.tag}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
