import React from 'react';
import { motion } from 'framer-motion';
import { Search, Pen, Code2, TestTube2, Rocket, ArrowRight } from 'lucide-react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const steps = [
  {
    num: '01',
    icon: <Search size={22} aria-hidden="true" />,
    title: 'Discovery',
    desc: 'We dive deep into your business requirements, goals, and constraints — mapping every workflow before writing a single line of code.',
  },
  {
    num: '02',
    icon: <Pen size={22} aria-hidden="true" />,
    title: 'Design',
    desc: "User-centered UI/UX design with wireframes and interactive prototypes. You see exactly what you're getting before development begins.",
  },
  {
    num: '03',
    icon: <Code2 size={22} aria-hidden="true" />,
    title: 'Development',
    desc: 'Agile development with weekly demos. Clean, documented code following industry best practices — built to be maintained and scaled.',
  },
  {
    num: '04',
    icon: <TestTube2 size={22} aria-hidden="true" />,
    title: 'Testing',
    desc: "Rigorous QA across devices and edge cases. We stress-test before you see anything — so bugs stay in development, not production.",
  },
  {
    num: '05',
    icon: <Rocket size={22} aria-hidden="true" />,
    title: 'Delivery',
    desc: "Smooth deployment, handover documentation, and training. We don't just deliver — we ensure your team can run it confidently.",
  },
];

const Process = () => {
  return (
    <section id="process" className="process-section" aria-labelledby="process-title">

      <div className="lx-container">

        <motion.div
          className="process-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            How We Work
          </span>
          <h2 id="process-title" className="section-title">
            Our Development{' '}
            <span className="text-gradient">Process</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
            A structured, transparent workflow that takes you from idea to
            production without surprises or delays.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="process-steps-grid" role="list">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-step-card"
              role="listitem"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(0,0,0,0.09)' }}
            >
              {/* Connector line between cards */}
              {i < steps.length - 1 && (
                <div className="process-connector" aria-hidden="true" />
              )}

              {/* Number badge */}
              <div className="process-card-num">{step.num}</div>

              {/* Icon */}
              <div className="process-card-icon">{step.icon}</div>

              {/* Text */}
              <h3 className="process-card-title">{step.title}</h3>
              <p className="process-card-desc">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="process-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="process-cta-label">Ready to start your project?</p>
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="btn-primary"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's Get Started <ArrowRight size={16} aria-hidden="true" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default Process;
