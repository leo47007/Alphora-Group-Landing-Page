import { Building2, Users } from 'lucide-react';

const clientTypes = [
  {
    icon: Building2,
    title: 'Corporate Client',
    description: 'Treasury visibility, cross-border AR/AP support, and strategic financial guidance.',
  },
  {
    icon: Users,
    title: 'Family Office',
    description: 'Tailored on-chain and off-chain strategies with ongoing treasury management.',
  },
];

const ClientTypesSection = () => {
  return (
    <section id="client-types" className="py-24 bg-card/30 scroll-mt-24">
      <div className="container px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Client Types</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Built for the finance teams<br className="hidden md:block" />
            that steward <span className="font-serif italic">complex capital</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {clientTypes.map((type) => (
            <div
              key={type.title}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all"
            >
              <div className="p-3 rounded-lg bg-secondary/50 w-fit mb-6 text-muted-foreground">
                <type.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{type.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTypesSection;
