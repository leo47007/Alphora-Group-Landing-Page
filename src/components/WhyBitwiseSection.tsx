import { TrendingUp, Layers, Users } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'CFO-first cashflow visibility',
    description: 'Model liquidity, runway, and scenarios in one place to support faster, more confident decisions.',
  },
  {
    icon: Layers,
    title: 'Cross-border treasury execution',
    description: 'Streamline AR/AP across entities, currencies, and counterparties while keeping control and auditability.',
  },
  {
    icon: Users,
    title: 'Tailored strategy with steady support',
    description: 'Combine on-chain and off-chain approaches with governance, risk controls, and ongoing stewardship.',
  },
];

const WhyBitwiseSection = () => {
  return (
    <section id="why-alphora" className="py-24 bg-background scroll-mt-24">
      <div className="container px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-wider text-primary mb-4 block">Why Alphora</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Modern treasury operations, built around your business.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="p-3 rounded-lg bg-secondary/50 w-fit mb-6 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-sm text-muted-foreground">
          Contact us at <a className="text-primary hover:text-primary/80 transition-colors" href="mailto:info@alphoragroup.com">info@alphoragroup.com</a>
        </div>
      </div>
    </section>
  );
};

export default WhyBitwiseSection;
