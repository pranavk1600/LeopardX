import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const features = [
  {
    title: 'Custom Software Development',
    desc: 'Every system is built from scratch for your specific business logic — no bloated templates or off-the-shelf compromises.',
  },
  {
    title: 'Enterprise ERP Solutions',
    desc: 'Production-grade ERP systems with multi-module architecture, role-based access, and real-time data management.',
  },
  {
    title: 'AI-Powered Applications',
    desc: 'We integrate OpenAI, Gemini, and custom AI models into your products to automate workflows and unlock new capabilities.',
  },
  {
    title: 'Responsive Web Applications',
    desc: 'Pixel-perfect across all screen sizes — from 320px mobiles to 4K displays. No exceptions.',
  },
  {
    title: 'Long-Term Maintenance & Support',
    desc: 'We stay with you after launch. Ongoing updates, security patches, and performance monitoring keep your product healthy.',
  },
  {
    title: 'Secure & Scalable Architecture',
    desc: 'Security-first design with proper authentication, data encryption, and infrastructure that scales as your business grows.',
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="why-section" aria-labelledby="why-title">

      <div className="lx-container">
        <div className="why-grid">

          {/* ── Left ── */}
          <motion.div
            className="why-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="label-tag" style={{ marginBottom: 20, display: 'inline-flex' }}>
              <span className="dot" aria-hidden="true" />
              Our Advantage
            </span>

            <h2 id="why-title" className="why-heading">
              Why Businesses{' '}
              <span className="text-gradient">Trust LeopardX</span>
            </h2>

            <p className="why-subtext">
              We go beyond writing code. We build reliable digital partnerships — combining
              engineering excellence with business understanding to deliver software that actually works.
            </p>

            <div className="why-cta-row">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('contact')}
              >
                Start a Project <ArrowRight size={15} aria-hidden="true" />
              </motion.button>
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollToSection('portfolio')}
              >
                See Our Work
              </motion.button>
            </div>

            {/* Trust signal */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 36,
                padding: '14px 18px',
                background: '#FFFFFF',
                border: '1px solid #E5E7EB',
                borderRadius: 14,
                width: 'fit-content',
              }}
            >
              <span style={{ fontSize: '1.3rem' }} aria-hidden="true">⭐</span>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: '0.88rem', fontWeight: 700, color: '#111827' }}>
                  100% Client Satisfaction
                </div>
                <div style={{ fontSize: '0.73rem', color: '#9CA3AF', marginTop: 2 }}>
                  Across all delivered projects
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right — Feature Checklist ── */}
          <motion.div
            className="why-right"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="why-feature-list">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  className="why-feature-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="why-check-wrap" aria-hidden="true">✓</div>
                  <div>
                    <div className="why-feature-title">{f.title}</div>
                    <div className="why-feature-desc">{f.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
