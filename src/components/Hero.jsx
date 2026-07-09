import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, ChevronRight } from 'lucide-react';

const scrollToSection = (id) => {
  if (id === 'home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.16, 1, 0.3, 1] },
  }),
};

const serviceRows = [
  { icon: '🏢', name: 'ERP Systems',         badge: 'Enterprise', color: 'amber' },
  { icon: '🤖', name: 'AI Solutions',         badge: 'Active',     color: 'green' },
  { icon: '💻', name: 'Web Applications',     badge: 'Live',       color: 'green' },
  { icon: '🏨', name: 'Hotel Management',     badge: 'Available',  color: 'blue'  },
  { icon: '🌐', name: 'Business Websites',    badge: 'Available',  color: 'blue'  },
];

const Hero = () => (
  <section id="home" className="hero-section" aria-label="Hero">
    <div className="hero-bg-gradient" aria-hidden="true" />
    <div className="hero-dot-grid" aria-hidden="true" />

    <div className="hero-content">

      {/* ── Left Column ── */}
      <div className="hero-left">

        <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUp}>
          <span className="hero-eyebrow">
            <span className="dot" aria-hidden="true" />
            Premium IT Company — India
          </span>
        </motion.div>

        <motion.h1 className="hero-title" custom={0.1} initial="hidden" animate="visible" variants={fadeUp}>
          Enterprise Software <br className="hero-title-br" />Built to Scale
        </motion.h1>

        <motion.p className="hero-subtitle" custom={0.22} initial="hidden" animate="visible" variants={fadeUp}>
          LeopardX Technologies builds production-grade ERP systems, AI-powered applications,
          and digital products for businesses that demand engineering excellence.
        </motion.p>

        <motion.div className="hero-buttons" custom={0.34} initial="hidden" animate="visible" variants={fadeUp}>
          <motion.button
            className="btn-black"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('contact')}
          >
            Start a Project <ArrowRight size={16} aria-hidden="true" />
          </motion.button>
          <motion.button
            className="btn-outline-dark"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollToSection('portfolio')}
          >
            View Our Work <ExternalLink size={14} aria-hidden="true" />
          </motion.button>
        </motion.div>

        <motion.div className="hero-stats" custom={0.46} initial="hidden" animate="visible" variants={fadeUp}>
          {[
            { num: '5',  unit: '+', label: 'Projects Delivered' },
            { num: '3',  unit: '+', label: 'Happy Clients'      },
            { num: '3',  unit: '+', label: 'Tech Experts'       },
          ].map((s) => (
            <div className="hero-stat" key={s.label}>
              <div className="hero-stat-number">{s.num}<span>{s.unit}</span></div>
              <div className="hero-stat-label">{s.label}</div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Right Column — Dashboard Card ── */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        <div className="hero-visual">
          {/* Stacked shadows */}
          <div className="hero-card-shadow-1" />
          <div className="hero-card-shadow-2" />

          {/* Main card */}
          <div className="hero-dash-card">

            {/* Header */}
            <div className="hero-dash-header">
              <div className="hero-dash-logo">
                <img src="/lx-logo.png" alt="LeopardX Technologies" />
              </div>
              <div>
                <div className="hero-dash-company">LeopardX Technologies</div>
                <div className="hero-dash-tagline">Enterprise Solutions Partner</div>
              </div>
              <div className="hero-dash-online">
                <span className="hero-dash-online-dot" />
                Live
              </div>
            </div>

            {/* Service rows */}
            <div className="hero-service-rows">
              {serviceRows.map((s) => (
                <div className="hero-service-row" key={s.name}>
                  <div className="hero-service-row-left">
                    <div className="hero-service-icon">{s.icon}</div>
                    <span className="hero-service-name">{s.name}</span>
                  </div>
                  <span className={`hero-service-badge ${s.color}`}>{s.badge}</span>
                </div>
              ))}
            </div>

            {/* Metrics */}
            <div className="hero-dash-metrics">
              {[
                { val: '10+',  lbl: 'Projects',    gold: false },
                { val: '98%',  lbl: 'Satisfaction', gold: true  },
                { val: '1yr+', lbl: 'Experience',   gold: false },
              ].map((m) => (
                <div className="hero-dash-metric" key={m.lbl}>
                  <div className={`hero-dash-metric-val${m.gold ? ' gold' : ''}`}>{m.val}</div>
                  <div className="hero-dash-metric-lbl">{m.lbl}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Floating badges */}
          <div className="hero-float-card hero-float-1">
            <div className="hero-float-icon">⚡</div>
            Fast Delivery
          </div>
          <div className="hero-float-card hero-float-2">
            <div className="hero-float-icon">🔒</div>
            Secure &amp; Scalable
          </div>
        </div>
      </motion.div>

    </div>

    {/* Scroll indicator */}
    <motion.div
      className="hero-scroll-indicator"
      animate={{ y: [0, 7, 0] }}
      transition={{ duration: 2.5, repeat: Infinity }}
      aria-hidden="true"
    >
      <div className="scroll-mouse" />
      <span>Scroll</span>
    </motion.div>
  </section>
);

export default Hero;
