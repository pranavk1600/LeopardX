import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Instagram, ArrowUp, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { label: 'Home',         id: 'home'         },
  { label: 'About',        id: 'about'        },
  { label: 'Services',     id: 'services'     },
  { label: 'Portfolio',    id: 'portfolio'    },
  { label: 'Technologies', id: 'technologies' },
  { label: 'Process',      id: 'process'      },
  { label: 'Contact',      id: 'contact'      },
];

const serviceLinks = [
  'ERP Software',
  'Web Applications',
  'AI Integration',
  'Hotel Management',
  'Business Websites',
  'UI/UX Design',
];

const socials = [
  { Icon: Twitter,   href: '#', label: 'Twitter'   },
  { Icon: Linkedin,  href: '#', label: 'LinkedIn'  },
  { Icon: Github,    href: '#', label: 'GitHub'    },
  { Icon: Instagram, href: '#', label: 'Instagram' },
];

const Footer = () => {
  return (
    <footer className="lx-footer" role="contentinfo">

      {/* Top section */}
      <div className="footer-top">
        <div className="lx-container">
          <div className="footer-grid">

            {/* Brand */}
            <div className="footer-brand-col">
              <Link
                to="/"
                className="footer-logo-wrap"
                aria-label="Back to top"
              >
                <img
                  src="/lx-logo.png"
                  alt="LeopardX Technologies Logo"
                  className="footer-logo-img"
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                />
                <span className="footer-logo-text">
                  LeopardX <span>Technologies</span>
                </span>
              </Link>

              <p className="footer-brand-desc">
                We build modern websites, scalable ERP systems, AI-powered applications,
                and digital products for businesses that demand excellence.
              </p>

              {/* Contact mini info */}
              <div className="footer-contact-mini">
                <a href="mailto:leopardxtechnology@gmail.com" className="footer-contact-row">
                  <Mail size={13} aria-hidden="true" />
                  leopardxtechnology@gmail.com
                </a>
                <a href="tel:+917823065239" className="footer-contact-row">
                  <Phone size={13} aria-hidden="true" />
                  +91 7823065239
                </a>
                <span className="footer-contact-row" style={{ cursor: 'default' }}>
                  <MapPin size={13} aria-hidden="true" />
                  Pune, Maharashtra, India
                </span>
              </div>

              <div className="footer-socials">
                {socials.map(({ Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="footer-social"
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Icon size={15} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <span className="footer-col-title">Navigation</span>
              <ul className="footer-col-links">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      to={link.id === 'home' ? '/' : link.id === 'process' ? '/#process' : `/${link.id}`}
                      className="footer-link"
                      aria-label={`Go to ${link.label}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <span className="footer-col-title">Services</span>
              <ul className="footer-col-links">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <Link
                      to="/services"
                      className="footer-link"
                      aria-label={`View ${s}`}
                    >
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA column */}
            <div>
              <span className="footer-col-title">Start a Project</span>
              <p className="footer-cta-text">
                Ready to build something great? Let's talk about your project.
              </p>
              <Link to="/contact" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                <motion.span
                  className="footer-cta-btn"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: 'inline-flex' }}
                >
                  Get In Touch
                </motion.span>
              </Link>

              {/* Response badge */}
              <div className="footer-response-badge">
                <span aria-hidden="true">✓</span>
                Responds within 24 hours
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <div className="lx-container">
          <div className="footer-bottom-inner">
            <p className="footer-copyright">
              © {new Date().getFullYear()} LeopardX Technologies. All rights reserved.
            </p>

            <div className="footer-legal">
              {['Privacy Policy', 'Terms of Service'].map((item) => (
                <a key={item} href="#" aria-label={item}>{item}</a>
              ))}
            </div>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="footer-back-top"
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 300 }}
              aria-label="Back to top"
            >
              <ArrowUp size={14} aria-hidden="true" />
            </motion.button>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;