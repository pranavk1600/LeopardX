import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Technologies', id: 'technologies' },
  { label: 'Contact', id: 'contact' },
];

const scrollToSection = (id) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }
  const el = document.getElementById(id);
  if (el) {
    const navbarHeight = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  }
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    setTimeout(() => scrollToSection(id), 50);
  };

  return (
    <>
      <nav className={`lx-navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="lx-navbar-inner">

          {/* Logo */}
          <button
            className="lx-logo"
            onClick={() => handleNavClick('home')}
            aria-label="Go to top"
          >
            <img
              src="/lx-logo.png"
              alt="LeopardX Technologies Logo"
              width="42"
              height="42"
            />
            <span className="lx-logo-text">
              LeopardX <span>Technologies</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <ul className="lx-nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  className="lx-nav-link"
                  onClick={() => handleNavClick(link.id)}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            className="lx-nav-cta"
            onClick={() => handleNavClick('contact')}
            aria-label="Get in touch"
          >
            Get In Touch
          </button>

          {/* Hamburger */}
          <button
            className={`lx-hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>

        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lx-mobile-menu open"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                className="lx-mobile-link"
                onClick={() => handleNavClick(link.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              className="lx-mobile-cta"
              onClick={() => handleNavClick('contact')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;