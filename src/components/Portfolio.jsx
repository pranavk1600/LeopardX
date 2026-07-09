import React from 'react';
import { motion } from 'framer-motion';
import { Database, ShoppingCart, Stethoscope, Building2, ChevronRight } from 'lucide-react';

const projects = [
  {
    icon: <Database size={36} />,
    image: '/mejwani-erp.png',
    imageAlt: 'Mejwani Restaurant ERP Dashboard — QR Ordering, Kitchen Panel, Billing',
    category: 'Restaurant ERP',
    title: 'Mejwani ERP',
    desc: 'A full-featured Restaurant Management ERP delivering QR-based ordering, real-time kitchen management, multi-level billing, and inventory intelligence for a growing restaurant chain.',
    industry: 'Hospitality & Food Service',
    outcome: 'Eliminated manual order errors; unified billing across multiple counters',
    features: ['QR Ordering', 'Kitchen Panel', 'Billing', 'Inventory', 'Captain Panel', 'Admin Panel', 'Realtime Orders'],
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    status: 'live',
    statusLabel: 'LIVE',
  },
  {
    icon: <ShoppingCart size={36} />,
    image: '/retail-erp.png',
    imageAlt: 'Retail Sales ERP — POS Billing, GST Reports, Inventory Management',
    category: 'Retail ERP',
    title: 'Retail Sales ERP',
    desc: 'A comprehensive Retail management platform with GST-compliant billing, inventory tracking, customer management, and advanced sales analytics for retail businesses.',
    industry: 'Retail & Commerce',
    outcome: 'Centralizing inventory and billing for streamlined retail operations',
    features: ['Inventory', 'Billing', 'GST Reports', 'Analytics', 'Customer Management', 'Supplier Module'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    status: 'coming',
    statusLabel: 'IN DEVELOPMENT',
  },
  {
    icon: <Stethoscope size={36} />,
    image: '/medical-system.png',
    imageAlt: 'Medical Management System — Appointments, Patient Records, Billing',
    category: 'Healthcare Software',
    title: 'Medical Management System',
    desc: 'An intelligent Medical Management System for clinics and hospitals — covering patient records, appointment scheduling, doctor management, billing, and automated reports.',
    industry: 'Healthcare',
    outcome: 'Digitizing patient workflows and reducing administrative overhead',
    features: ['Appointments', 'Patient Records', 'Doctor Panel', 'Billing', 'Reports', 'Pharmacy Module'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Prisma'],
    status: 'coming',
    statusLabel: 'IN DEVELOPMENT',
  },
  {
    icon: <Building2 size={36} />,
    image: '/resort-website.png',
    imageAlt: 'Luxury Resort Website — Premium Booking, Gallery, Responsive',
    category: 'Hospitality Website',
    title: 'Luxury Resort Website',
    desc: 'A premium responsive website for a luxury resort — featuring a stunning gallery, online room enquiry, seasonal packages, and an elegant booking experience designed to convert visitors.',
    industry: 'Tourism & Hospitality',
    outcome: 'Delivered a premium digital presence that drives direct enquiries',
    features: ['Responsive Design', 'Gallery', 'Enquiry System', 'Booking', 'SEO Optimized'],
    tech: ['React', 'Node.js', 'Tailwind', 'Vercel'],
    status: 'delivered',
    statusLabel: 'DELIVERED',
  },
];

const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 !== 0;

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      aria-label={`Project: ${project.title}`}
    >
      <div className={`project-card-inner${reversed ? ' reversed' : ''}`}>

        {/* ── Visual / Image ── */}
        <div className="project-visual">
          <div className="project-visual-bg" aria-hidden="true" />
          <motion.div
            className="project-img-wrap"
            whileHover={{ scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 180, damping: 24 }}
          >
            <img
              src={project.image}
              alt={project.imageAlt}
              className="project-img"
              loading="lazy"
            />
          </motion.div>
          {/* Industry tag */}
          <div className="project-industry-tag">{project.industry}</div>
        </div>

        {/* ── Content ── */}
        <div className="project-content">

          <div className={`project-status-badge ${project.status}`}>
            {project.status === 'live' && <span className="status-dot" />}
            {project.statusLabel}
          </div>

          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.desc}</p>

          {/* Outcome */}
          <div className="project-outcome">
            <span className="project-outcome-icon" aria-hidden="true">✦</span>
            <span className="project-outcome-text">{project.outcome}</span>
          </div>

          {/* Features */}
          <div className="project-features">
            {project.features.map((f) => (
              <span className="project-feature-tag" key={f}>{f}</span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="project-tech-row">
            {project.tech.map((t) => (
              <span className="project-tech-chip" key={t}>{t}</span>
            ))}
          </div>

          {/* CTA */}
          <div className="project-cta-row">
            <button
              className="btn-case-study"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
              }}
              aria-label={`Enquire about ${project.title}`}
            >
              <ChevronRight size={14} aria-hidden="true" />
              Enquire About This
            </button>
            <div className="project-status-pill">
              Status: <strong style={{ color: '#111827', marginLeft: 4 }}>{project.statusLabel}</strong>
            </div>
          </div>

        </div>
      </div>
    </motion.article>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">

      <div className="lx-container">

        <motion.div
          className="portfolio-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            Our Work
          </span>
          <h2 id="portfolio-title" className="section-title">
            Featured{' '}
            <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
            Real enterprise systems, built for real businesses. Every project is production-grade,
            custom-engineered, and delivered with precision.
          </p>
        </motion.div>

        <div>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
