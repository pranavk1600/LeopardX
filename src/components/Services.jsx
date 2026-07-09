import React from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  Monitor,
  Database,
  Hotel,
  Brain,
  LayoutTemplate,
  TrendingUp,
} from 'lucide-react';

const services = [
  {
    icon: <Database size={32} />,
    num: '01',
    title: 'ERP Software Development',
    desc: 'Custom Enterprise Resource Planning systems built for restaurants, retail, healthcare, and hospitality — integrating billing, inventory, analytics, and operations under one platform.',
    features: [
      'Multi-module architecture',
      'Real-time data synchronization',
      'Role-based access control',
      'GST-compliant billing',
    ],
    visualLabel: 'ERP Platform',
    image: '/svc-erp.png',
  },
  {
    icon: <Monitor size={32} />,
    num: '02',
    title: 'Web Application Development',
    desc: 'Scalable, full-stack web applications built on React, Node.js, and modern cloud infrastructure. From internal tools to consumer-facing platforms.',
    features: [
      'React + Node.js full stack',
      'RESTful & GraphQL APIs',
      'Cloud-native deployment',
      'Mobile-responsive by default',
    ],
    visualLabel: 'Web Platform',
    image: '/svc-web.png',
  },
  {
    icon: <Brain size={32} />,
    num: '03',
    title: 'AI-Powered Integrations',
    desc: 'Embed intelligence into your business workflows — AI chatbots, smart automation, recommendation engines, and OpenAI/Gemini-powered features built for real-world use.',
    features: [
      'OpenAI & Gemini integration',
      'Custom AI chatbots',
      'Intelligent automation',
      'Data-driven insights',
    ],
    visualLabel: 'AI Integration',
    image: '/svc-ai.png',
  },
  {
    icon: <Hotel size={32} />,
    num: '04',
    title: 'Hotel & Hospitality Systems',
    desc: 'Complete hospitality management software covering reservations, billing, staff coordination, guest experience, and real-time reporting for hotels and resorts.',
    features: [
      'Room & booking management',
      'Guest check-in/out flows',
      'Staff coordination panels',
      'Revenue & occupancy reports',
    ],
    visualLabel: 'Hotel System',
    image: '/svc-hotel.png',
  },
  {
    icon: <Globe size={32} />,
    num: '05',
    title: 'Business Websites & Portfolios',
    desc: 'Premium, SEO-optimized websites that represent your brand at the highest level. Fast, responsive, and built to convert visitors into customers.',
    features: [
      'Custom design (no templates)',
      'SEO-optimized from day one',
      'Performance-first build',
      'CMS-ready if needed',
    ],
    visualLabel: 'Business Website',
    image: '/svc-business.png',
  },
  {
    icon: <TrendingUp size={32} />,
    num: '06',
    title: 'Digital Marketing',
    desc: 'Maximize your digital presence and drive growth. We specialize in search engine optimization (SEO), Google Ads, Meta Ads, social media strategy, analytics, content planning, and conversion rate optimization (CRO).',
    features: [
      'SEO Audit & Optimization',
      'Google & Meta Paid Ads Campaigns',
      'Social Media Growth Strategy',
      'Data Analytics & Performance Tracking',
    ],
    visualLabel: 'Digital Marketing',
    image: '/svc-marketing.png',
  },
  {
    icon: <LayoutTemplate size={32} />,
    num: '07',
    title: 'UI/UX Design & Consulting',
    desc: 'User-centered design that transforms complex workflows into elegant interfaces. We deliver wireframes, prototypes, and pixel-perfect implementation.',
    features: [
      'User research & wireframing',
      'Interactive prototypes',
      'Design system creation',
      'Accessibility compliance',
    ],
    visualLabel: 'UI Design',
    image: '/svc-uiux.png',
  },
];

const ServiceBlock = ({ service, index }) => {
  const reversed = index % 2 !== 0;

  return (
    <motion.div
      className={`service-block${reversed ? ' reversed' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Visual / Illustration */}
      <motion.div
        className="service-block-visual-container"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 24 }}
      >
        <div className="service-block-visual-bg" aria-hidden="true" />
        <div className="service-block-illustration-wrapper">
          <img
            src={service.image}
            alt={`${service.title} Illustration`}
            className="service-block-illustration"
            loading="lazy"
          />
        </div>
        <div className="service-block-floating-label">
          <div className="service-block-icon-wrap-small">{service.icon}</div>
          <span className="service-block-visual-label">{service.visualLabel}</span>
        </div>
      </motion.div>

      {/* Content */}
      <div className="service-block-content">
        <span className="service-block-number">{service.num} — Service</span>
        <h3 className="service-block-title">{service.title}</h3>
        <p className="service-block-desc">{service.desc}</p>
        <div className="service-block-features">
          {service.features.map((f) => (
            <div className="service-block-feature" key={f}>
              <span className="service-block-feature-dot" aria-hidden="true" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">

      <div className="lx-container">

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            What We Build
          </span>
          <h2 id="services-title" className="section-title">
            End-to-End Digital{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
            From concept to deployment — premium software solutions for businesses
            that need reliability, speed, and scale.
          </p>
        </motion.div>

        {/* Service blocks */}
        <div>
          {services.map((service, i) => (
            <ServiceBlock key={service.num} service={service} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
