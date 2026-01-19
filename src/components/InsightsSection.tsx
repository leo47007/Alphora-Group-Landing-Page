import { ArrowRight } from 'lucide-react';

const insights = [
  {
    category: 'Annual Survey',
    date: 'Jan 13, 2026',
    title: 'Crypto Allocations by Financial Advisors Hit All-Time High in 2025',
    description: 'Eighth annual benchmark study finds stablecoins, tokenization, and fiat debasement as most-watched themes.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=450&fit=crop',
  },
  {
    category: 'Timely Insights',
    date: 'Dec 15, 2025',
    title: 'The Year Ahead: 10 Crypto Predictions for 2026',
    description: 'Ten crypto predictions for the year ahead—and how they could move markets.',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=450&fit=crop',
  },
  {
    category: 'Research',
    date: 'Oct 17, 2025',
    title: 'Crypto Market Review (Q3 2025)',
    description: 'Historic stablecoin legislation led to a big Q3. More than 60 charts and tables tell the story.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&h=450&fit=crop',
  },
];

const InsightsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-4 block">Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
              Crypto is <span className="font-serif italic">complicated</span>.
              <br />
              We make it <span className="font-serif italic">clear</span>.
            </h2>
          </div>
          <button className="mt-6 md:mt-0 flex items-center gap-2 text-primary hover:gap-3 transition-all">
            View All Insights <ArrowRight className="w-4 h-4" />
          </button>
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
