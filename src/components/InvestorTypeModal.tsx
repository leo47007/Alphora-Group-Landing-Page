import { Building2, User, Users } from 'lucide-react';

interface InvestorTypeModalProps {
  onSelect: (type: string) => void;
}

const investorTypes = [
  {
    id: 'corporate-client',
    icon: Building2,
    title: 'Corporate Client',
    description: "I'm looking for treasury visibility, cross-border AR/AP support, and strategic financial guidance.",
  },
  {
    id: 'family-office',
    icon: Users,
    title: 'Family Office',
    description: "I'm looking for tailored on-chain and off-chain strategies and ongoing treasury management.",
  },
  {
    id: 'individual',
    icon: User,
    title: 'Individual',
    description:
      'Alphora Insights gives you premium access to AI-powered market sentiment dashboards, portfolio tracking, and actionable signal tools for equities, commodities, and crypto. Includes continuous product updates and secure account access. Manage or switch monthly/annual plans anytime in the customer portal; plan changes take effect at next renewal.',
  },
];

const InvestorTypeModal = ({ onSelect }: InvestorTypeModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/95 backdrop-blur-strong overflow-y-auto">
      <div className="w-full max-w-5xl px-6 py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-3">
            Welcome to <span className="font-serif italic">Alphora</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose your client type to help us deliver the site experience most relevant to you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {investorTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => onSelect(type.id)}
              className="card-investor text-left group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-secondary/50 text-muted-foreground group-hover:text-primary transition-colors">
                  <type.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-foreground font-medium mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorTypeModal;
