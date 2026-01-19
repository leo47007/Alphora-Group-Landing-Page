import { Twitter, Linkedin, Youtube } from 'lucide-react';

const footerLinks = {
  products: [
    'Bitcoin ETF (BITB)',
    'Ethereum ETF (ETHW)',
    'Crypto Industry ETF (BITQ)',
    'All Products',
  ],
  resources: [
    'Market Insights',
    'Research',
    'Crypto Basics',
    'FAQs',
  ],
  company: [
    'About Us',
    'Careers',
    'Press',
    'Contact',
  ],
  legal: [
    'Privacy Policy',
    'Terms of Use',
    'Disclosures',
    'Form CRS',
  ],
};

const Footer = () => {
  return (
    <footer className="bg-card/30 border-t border-border">
      <div className="container px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-serif italic text-foreground">Bitwise</span>
            <p className="text-sm text-muted-foreground mt-4 mb-6">
              The world's leading crypto asset manager.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60 leading-relaxed max-w-4xl">
            Investing in crypto assets involves substantial risk. Performance is not guaranteed. 
            Past performance is not indicative of future results. This is not investment advice. 
            Please consult a qualified financial advisor before making any investment decisions. 
            © 2026 Bitwise Asset Management. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
