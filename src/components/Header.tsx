import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Client Types', href: '#client-types' },
  { label: 'Why Alphora', href: '#why-alphora' },
  { label: 'Treasury Portal', href: 'https://treasury.alphoragroup.com/' },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-strong border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img src="/Alphora-LOGO.png" alt="Alphora Group" className="h-9 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={item.href.startsWith('http')
                  ? 'flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium'
                  : 'flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors'}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="mailto:info@alphoragroup.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              info@alphoragroup.com
            </a>
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
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={item.href.startsWith('http')
                    ? 'flex items-center text-primary py-2 font-medium'
                    : 'flex items-center text-foreground py-2'}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-3">
                <a
                  href="mailto:info@alphoragroup.com"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@alphoragroup.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
