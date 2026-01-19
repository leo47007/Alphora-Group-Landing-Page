import { ArrowRight } from 'lucide-react';

const investments = [
  {
    ticker: 'BITB',
    name: 'Bitwise Bitcoin ETF',
    type: 'ETF',
    change: '+2.4%',
    positive: true,
  },
  {
    ticker: 'ETHW',
    name: 'Bitwise Ethereum ETF',
    type: 'ETF',
    change: '-1.2%',
    positive: false,
  },
  {
    ticker: 'BITQ',
    name: 'Bitwise Crypto Industry Innovators ETF',
    type: 'ETF',
    change: '+3.1%',
    positive: true,
  },
  {
    ticker: 'SOLQ',
    name: 'Bitwise Solana ETF',
    type: 'ETF',
    change: '-2.8%',
    positive: false,
  },
];

const InvestmentsSection = () => {
  return (
    <section className="py-24 bg-card/30">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Investments</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Professionally managed exposure to<br className="hidden md:block" />
              a growing world of <span className="font-serif italic">crypto opportunities</span>.
            </h2>
          </div>
          <button className="mt-6 md:mt-0 flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View All Products <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {investments.map((investment) => (
            <div
              key={investment.ticker}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {investment.type}
                </span>
                <span className={investment.positive ? 'text-primary text-sm' : 'text-red-500 text-sm'}>
                  {investment.change}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2 group-hover:text-primary transition-colors">
                {investment.ticker}
              </h3>
              <p className="text-sm text-muted-foreground">
                {investment.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentsSection;
