import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#projects' },
    { label: 'What I Build', href: '#what-i-build' },
    { label: 'Skills', href: '#skills' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border-subtle shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Brand SKC emblem */}
        <a
          href="#"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-accent-blue rounded-md px-1"
        >
          <div className="w-8 h-8 rounded-lg bg-surface border border-border-strong flex items-center justify-center font-mono font-bold text-sm text-foreground group-hover:border-accent-blue transition-colors">
            <span className="bg-gradient-to-r from-accent-blue to-accent-violet bg-clip-text text-transparent">
              SKC
            </span>
          </div>
          <span className="font-mono text-xs text-muted tracking-wider hidden sm:inline-block">
            SELVA KISHORE C
          </span>
        </a>

        {/* Center / Right: Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-mono text-muted hover:text-foreground transition-colors tracking-wide py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Theme Toggle + Resume Button */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-muted hover:text-foreground hover:bg-surface-elevated rounded-md border border-transparent hover:border-border-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Download CTA */}
          <Button
            asLink
            href="/Selva_Kishore_C_Resume.pdf"
            download="Selva_Kishore_C_Resume.pdf"
            variant="outline"
            size="sm"
            icon={<Download className="w-3.5 h-3.5" />}
            iconPosition="left"
          >
            Resume
          </Button>
        </div>

        {/* Mobile: Hamburger & Theme Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-muted hover:text-foreground"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="p-2 text-muted hover:text-foreground focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface/95 backdrop-blur-md border-b border-border-strong px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-muted hover:text-foreground py-2 border-b border-border-subtle"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2">
            <Button
              asLink
              href="/Selva_Kishore_C_Resume.pdf"
              download="Selva_Kishore_C_Resume.pdf"
              variant="primary"
              size="sm"
              className="w-full justify-center"
              icon={<Download className="w-4 h-4" />}
              iconPosition="left"
            >
              DOWNLOAD RESUME
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
