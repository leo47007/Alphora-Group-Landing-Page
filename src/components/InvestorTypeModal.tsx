import { User, Building2, UserCircle } from 'lucide-react';

interface InvestorTypeModalProps {
  onSelect: (type: string) => void;
}

const investorTypes = [
  {
    id: 'financial-professional',
    icon: User,
    title: 'Financial Professional',
    description: "I'm looking for investments for my clients, timely insights, and to connect with my relationship manager.",
  },
  {
    id: 'institutional',
    icon: Building2,
    title: 'Institutional Investor',
    description: "I'm looking for investment strategies and research, and to connect with my relationship manager.",
  },
  {
    id: 'individual',
    icon: UserCircle,
    title: 'Individual Investor',
    description: "I'm looking for investment solutions and education for myself.",
  },
];

const InvestorTypeModal = ({ onSelect }: InvestorTypeModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-background/95 backdrop-blur-strong overflow-y-auto">
      <div className="w-full max-w-5xl px-6 py-12 md:py-20">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-light text-foreground mb-3">
            Welcome to <span className="font-serif italic">Bitwise</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Choose your investor type to help us deliver the site experience most relevant to you.
          </p>
        </div>

        <div className="flex justify-end mb-8">
          <div className="flex flex-col items-end gap-1">
            <span className="text-xs text-muted-foreground">Location:</span>
            <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-md">
              <span className="text-sm">🇺🇸</span>
              <span className="text-sm text-foreground">United States</span>
              <svg className="w-4 h-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
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
