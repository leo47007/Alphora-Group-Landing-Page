const partners = [
  'Highland Capital Partners',
  'Khosla Ventures',
  'General Catalyst',
  'Third Point',
  'MassMutual',
  'Blockchain Capital',
  'Electric Capital',
  'Coinbase',
  'Haun Ventures',
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-background border-y border-border">
      <div className="container px-6">
        <h3 className="text-center text-muted-foreground text-sm uppercase tracking-wider mb-12">
          Backed By Leading Institutions and Individuals
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-muted-foreground/50 hover:text-muted-foreground transition-colors text-sm md:text-base font-medium"
            >
              {partner}
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground/50 mt-10 max-w-2xl mx-auto">
          The companies listed are venture investors in Alphora Group. 
          Logos do not imply endorsement or investment in Alphora products.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
