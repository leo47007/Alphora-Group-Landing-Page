import { TrendingUp, Layers, Users } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Eight-year track record: All crypto, no distractions',
    description: "Crypto isn't something we got into on the side. It's been our sole focus from the beginning. That matters when you consider the dedicated attention necessary to understand this complex, constantly changing space.",
  },
  {
    icon: Layers,
    title: 'Broad suite of solutions',
    description: 'Since launching our first crypto index fund in 2017, we haven\'t stopped expanding opportunities for investors. We now offer over 30 products across a range of formats, including ETFs, publicly traded trusts, SMAs, and private funds.',
  },
  {
    icon: Users,
    title: 'World-class team, rich experience',
    description: "To give investors smart access to a complex space — and answers to their toughest questions — we've brought together more than 140 of the best minds in tech, asset management, and law.",
  },
];

const WhyBitwiseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-wider text-primary mb-4 block">Why Alphora</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Professional funds managed by crypto experts.
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

        <button className="btn-primary">
          Invest Now
        </button>
      </div>
    </section>
  );
};

export default WhyBitwiseSection;
