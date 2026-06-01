import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Zap, Menu, X, Sun, Moon } from 'lucide-react';
import { Navbar as BSNavbar, Nav, Container } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BSNavbar
      expand="lg"
      fixed="top"
      variant={theme === 'dark' ? 'dark' : 'light'}
      className={`navbar transition-all ${scrolled ? 'navbar-scrolled' : 'py-4'
        }`}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>

        {/* Logo */}
        <BSNavbar.Brand
          as={NavLink}
          to="/"
          className="d-flex align-items-center gap-2"
        >
          <motion.div
            initial={{ rotate: -20, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <Zap size={30} className="glow-text text-info" />
          </motion.div>

          <span className="gradient-text fw-bold h3 mb-0">
            LeopardX
          </span>
        </BSNavbar.Brand>

        {/* Mobile Toggle */}
        <BSNavbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 shadow-none"
        >
          {expanded ? (
            <X className="text-main" />
          ) : (
            <Menu className="text-main" />
          )}
        </BSNavbar.Toggle>

        <BSNavbar.Collapse id="basic-navbar-nav">

          {/* Nav Links */}
          <Nav className="ms-auto align-items-lg-center gap-lg-4">

            <NavLink
              to="/"
              className="nav-link nav-link-custom py-2"
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className="nav-link nav-link-custom py-2"
            >
              About
            </NavLink>

            <NavLink
              to="/services"
              className="nav-link nav-link-custom py-2"
            >
              Services
            </NavLink>

            <NavLink
              to="/projects"
              className="nav-link nav-link-custom py-2"
            >
              Projects
            </NavLink>

            <NavLink
              to="/contact"
              className="nav-link nav-link-custom py-2"
            >
              Contact
            </NavLink>

            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="mt-3 mt-lg-0 text-decoration-none"
            >
              <button className="btn btn-primary rounded-pill px-4 py-2">
                Launch Project
              </button>
            </NavLink>

          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;