import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'ETFs', hasDropdown: true },
  { label: 'Products', hasDropdown: true },
  { label: 'Insights', hasDropdown: true },
  { label: 'Why Alphora', hasDropdown: true },
  { label: 'Crypto Basics', hasDropdown: true },
  { label: 'Investor Portal', hasDropdown: false, href: 'https://treasury.alphoragroup.com/' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-strong border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-serif italic text-foreground">Alphora</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              )
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sign In
            </button>
            <button className="btn-primary text-sm">
              Invest Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary py-2 font-medium"
                  >
                    {item.label}
                  </a>
                ) : (
                  <button
                    key={item.label}
                    className="flex items-center justify-between text-foreground py-2"
                  >
                    {item.label}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </button>
                )
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <button className="text-muted-foreground">Sign In</button>
                <button className="btn-primary">Invest Now</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
