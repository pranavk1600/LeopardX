import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'Technologies', id: 'technologies' },
  { label: 'Contact', id: 'contact' },
];

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

  return (
    <>
      <nav className={`lx-navbar${scrolled ? ' scrolled' : ''}`} aria-label="Main navigation">
        <div className="lx-navbar-inner">

          {/* Logo */}
          <Link
            to="/"
            className="lx-logo"
            onClick={() => setMobileOpen(false)}
            aria-label="Go to top"
          >
            <img
              src="/lx-logo.png"
              alt="LeopardX Technologies Logo"
              width="42"
              height="42"
              decoding="async"
            />
            <span className="lx-logo-text">
              LeopardX <span>Technologies</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="lx-nav-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className={({ isActive }) => `lx-nav-link${isActive ? ' active' : ''}`}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link
            to="/contact"
            className="lx-nav-cta"
            aria-label="Get in touch"
            style={{ textDecoration: 'none' }}
          >
            Get In Touch
          </Link>

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
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <NavLink
                  to={link.id === 'home' ? '/' : `/${link.id}`}
                  className={({ isActive }) => `lx-mobile-link${isActive ? ' active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Link
                to="/contact"
                className="lx-mobile-cta"
                onClick={() => setMobileOpen(false)}
                style={{ textDecoration: 'none' }}
              >
                Get In Touch
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;