const insights = [
  {
    category: 'Treasury Benchmark',
    date: 'Jan 13, 2026',
    title: 'Cashflow Visibility Maturity in Corporate Finance 2026',
    description: 'Benchmarking liquidity dashboards, forecast accuracy, and decision velocity across finance teams.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
  },
  {
    category: 'Cross-Border Ops',
    date: 'Dec 15, 2025',
    title: 'Reducing AR/AP Friction Across Entities and Currencies',
    description: 'Operational patterns that compress settlement time and improve working capital efficiency.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
  },
  {
    category: 'Strategy',
    date: 'Oct 17, 2025',
    title: 'On-Chain + Off-Chain Treasury Strategy Playbook',
    description: 'Governance, controls, and execution design for modern treasury portfolios.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=450&fit=crop',
  },
];

const InsightsSection = () => {
  return (
    <section id="insights" className="py-24 bg-background scroll-mt-24">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Treasury is <span className="font-serif italic">complex</span>.
              <br />
              We make it <span className="font-serif italic">actionable</span>.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {insights.map((insight, index) => (
            <article
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-card">
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                <span className="text-primary">{insight.category}</span>
                <span>•</span>
                <span>{insight.date}</span>
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {insight.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
