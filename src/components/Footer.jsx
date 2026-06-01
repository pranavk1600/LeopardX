import React from 'react';
import {
  Zap,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  ArrowUpRight
} from 'lucide-react';

const Footer = () => {

  return (
    <footer
      className="position-relative overflow-hidden pt-5"
      style={{
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--glass-border)'
      }}
    >

      {/* Background Glow */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: '700px',
          height: '700px',
          background: 'rgba(var(--highlight-rgb),0.06)',
          filter: 'blur(180px)',
          zIndex: 0
        }}
      />

      {/* Grid Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          zIndex: 0
        }}
      />

      <div className="container position-relative" style={{ zIndex: 2 }}>

        <div className="row g-5 pb-5">

          {/* LEFT */}
          <div className="col-lg-4 col-md-6">

            {/* Logo */}
            <a
              href="#home"
              className="d-flex align-items-center gap-3 text-decoration-none mb-4"
            >

              <div
                className="d-flex align-items-center justify-content-center rounded-4"
                style={{
                  width: '60px',
                  height: '60px',
                  background: 'rgba(var(--highlight-rgb),0.08)',
                  border: '1px solid rgba(var(--highlight-rgb),0.2)',
                  boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.25)',
                  color: 'var(--highlight-color)'
                }}
              >
                <Zap size={28} />
              </div>

              <div>
                <h2
                  className="mb-0 fw-bold"
                  style={{
                    color: 'var(--text-main)',
                    letterSpacing: '-1px'
                  }}
                >
                  Leopard
                  <span className="text-highlight">
                    X
                  </span>
                </h2>

                <small
                  style={{
                    color: 'var(--highlight-color)',
                    letterSpacing: '2px'
                  }}
                >
                  FUTURE TECHNOLOGY
                </small>
              </div>

            </a>

            {/* Text */}
            <p
              className="text-secondary mb-4"
              style={{
                lineHeight: '1.9',
                maxWidth: '380px'
              }}
            >
              LeopardX engineers futuristic digital ecosystems,
              AI-powered applications, and immersive next-generation
              experiences for visionary brands worldwide.
            </p>

            {/* Socials */}
            <div className="d-flex gap-3">

              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (

                <a
                  key={i}
                  href="#"
                  className="d-flex align-items-center justify-content-center rounded-circle text-decoration-none"
                  style={{
                    width: '50px',
                    height: '50px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(12px)',
                    color: 'var(--text-main)',
                    transition: '0.4s ease'
                  }}
                >
                  <Icon size={20} />
                </a>

              ))}

            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">

            <h5
              className="fw-bold mb-4"
              style={{
                color: 'var(--highlight-color)',
                letterSpacing: '2px'
              }}
            >
              QUICK LINKS
            </h5>

            <ul className="list-unstyled d-flex flex-column gap-3">

              {[
                { name: 'Home', href: '#home' },
                { name: 'About', href: '#about' },
                { name: 'Services', href: '#services' },
                { name: 'Portfolio', href: '#portfolio' },
                { name: 'Contact', href: '#contact' }
              ].map((item, index) => (

                <li key={index}>

                  <a
                    href={item.href}
                    className="text-decoration-none d-flex align-items-center gap-2"
                    style={{
                      color: '#9ca3af',
                      transition: '0.3s ease'
                    }}
                  >
                    <ArrowUpRight size={14} />
                    {item.name}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* LEGAL */}
          <div className="col-lg-2 col-md-6">

            <h5
              className="fw-bold mb-4"
              style={{
                color: 'var(--highlight-color)',
                letterSpacing: '2px'
              }}
            >
              LEGAL
            </h5>

            <ul className="list-unstyled d-flex flex-column gap-3">

              {[
                'Privacy Policy',
                'Terms Of Service',
                'Cookie Policy'
              ].map((item, index) => (

                <li key={index}>

                  <a
                    href="#"
                    className="text-decoration-none d-flex align-items-center gap-2"
                    style={{
                      color: '#9ca3af',
                      transition: '0.3s ease'
                    }}
                  >
                    <ArrowUpRight size={14} />
                    {item}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* NEWSLETTER */}
          <div className="col-lg-4 col-md-6">

            <div
              className="p-4 rounded-5 h-100 position-relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                backdropFilter: 'blur(18px)',
                boxShadow: '0 0 40px rgba(var(--highlight-rgb),0.06)'
              }}
            >

              {/* Glow */}
              <div
                className="position-absolute top-50 start-50 translate-middle"
                style={{
                  width: '220px',
                  height: '220px',
                  background: 'rgba(var(--highlight-rgb),0.08)',
                  filter: 'blur(90px)'
                }}
              />

              <div className="position-relative">

                <h4
                  className="fw-bold text-main mb-3"
                >
                  Join Our Newsletter
                </h4>

                <p
                  className="text-secondary small mb-4"
                  style={{
                    lineHeight: '1.8'
                  }}
                >
                  Subscribe for futuristic technology insights,
                  AI innovations, and digital transformation updates.
                </p>

                {/* Input */}
                <div className="d-flex flex-column gap-3">

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control form-control-custom border-0 rounded-4 py-3 px-4"
                    style={{
                      border: '1px solid var(--glass-border)',
                      backdropFilter: 'blur(12px)',
                      boxShadow: 'none'
                    }}
                  />

                  <button
                    className="btn py-3 rounded-4 fw-bold text-uppercase"
                    style={{
                      background: 'var(--highlight-color)',
                      color: 'var(--bg-deep)',
                      border: 'none',
                      letterSpacing: '2px',
                      boxShadow: '0 0 30px rgba(var(--highlight-rgb),0.35)'
                    }}
                  >
                    Subscribe Now
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div
          className="d-flex flex-column flex-md-row justify-content-between align-items-center py-4"
          style={{
            borderTop: '1px solid var(--glass-border)'
          }}
        >

          <p
            className="mb-3 mb-md-0"
            style={{
              color: '#6b7280',
              letterSpacing: '1px'
            }}
          >
            © {new Date().getFullYear()} LeopardX Technology.
            All rights reserved.
          </p>

          <div className="d-flex gap-4">

            <a
              href="#"
              className="text-decoration-none"
              style={{
                color: '#9ca3af'
              }}
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{
                color: '#9ca3af'
              }}
            >
              Terms
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{
                color: '#9ca3af'
              }}
            >
              Security
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;