import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Award, Zap, Heart, ArrowRight } from 'lucide-react';

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const values = [
  {
    icon: <Lightbulb size={22} aria-hidden="true" />,
    title: 'Innovation First',
    desc: 'We embrace cutting-edge technologies and creative engineering to deliver solutions that push the boundaries of what software can do.',
  },
  {
    icon: <Award size={22} aria-hidden="true" />,
    title: 'Engineering Quality',
    desc: 'Every line of code we ship meets the highest standards — clean architecture, performance-tuned, and built to last.',
  },
  {
    icon: <Zap size={22} aria-hidden="true" />,
    title: 'Scalable by Design',
    desc: 'From day one, we architect solutions that can handle your growth — from startup scale to enterprise workloads.',
  },
  {
    icon: <Heart size={22} aria-hidden="true" />,
    title: 'Client Partnership',
    desc: 'We work as an extension of your team — transparent communication, iterative delivery, and long-term support.',
  },
];

const stats = [
  { num: '5',  unit: '+', label: 'Projects Delivered' },
  { num: '3',  unit: '+', label: 'Happy Clients'      },
  { num: '3',  unit: '+', label: 'Tech Experts'       },
  { num: '1',  unit: 'yr+', label: 'In Operation'     },
];

const About = () => {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-accent-shape" aria-hidden="true" />

      <div className="lx-container position-relative" style={{ zIndex: 2 }}>

        <div className="about-grid">

          {/* ── Left Column ── */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="label-tag about-label">
              <span className="dot" aria-hidden="true" />
              Who We Are
            </span>

            <h2 id="about-title" className="about-heading">
              Engineering the Future{' '}
              <span className="text-gradient">With Intelligence</span>
            </h2>

            <p className="about-body">
              Founded with a vision to transform businesses through technology, LeopardX Technologies
              specializes in building enterprise-grade digital solutions — modern, scalable, and impactful.
            </p>
            <p className="about-body" style={{ marginBottom: 0 }}>
              From elegant business websites to complex ERP platforms and AI integrations, we bring
              precision engineering and thoughtful design together to create products that make a real difference.
            </p>

            {/* Stats */}
            <div className="about-stats-row">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="about-stat-box"
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="about-stat-box-num">{s.num}<span>{s.unit}</span></div>
                  <div className="about-stat-box-lbl">{s.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="btn-black"
              style={{ marginTop: 32 }}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection('contact')}
            >
              Work With Us <ArrowRight size={15} aria-hidden="true" />
            </motion.button>
          </motion.div>

          {/* ── Right Column — Values ── */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="about-values-panel">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  className="about-value-item"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="about-value-icon">{val.icon}</div>
                  <div>
                    <div className="about-value-title">{val.title}</div>
                    <div className="about-value-desc">{val.desc}</div>
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

export default About;
