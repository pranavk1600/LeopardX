import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart, Activity, Globe, Grid, Utensils, Monitor } from 'lucide-react';

const ProjectsPage = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://leopardxtechnology.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://leopardxtechnology.com/portfolio"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can you share live links to your case studies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For security and NDA compliance, some enterprise dashboards are kept private, but we can demo anonymized case studies during our discovery sessions."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups or only enterprise clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We partner with ambitious startups looking for reliable engineering expertise, as well as medium and large enterprises requiring complex systems."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle project updates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We operate in 2-week agile sprints, providing staging environment deployments and weekly sync meetings to keep stakeholders fully informed."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "Can you share live links to your case studies?",
      a: "For security and NDA compliance, some enterprise dashboards are kept private, but we can demo anonymized case studies during our discovery sessions."
    },
    {
      q: "Do you work with startups or only enterprise clients?",
      a: "We partner with ambitious startups looking for reliable engineering expertise, as well as medium and large enterprises requiring complex systems."
    },
    {
      q: "How do you handle project updates?",
      a: "We operate in 2-week agile sprints, providing staging environment deployments and weekly sync meetings to keep stakeholders fully informed."
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://leopardxtechnology.com/portfolio#webpage",
    "url": "https://leopardxtechnology.com/portfolio",
    "name": "Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects",
    "isPartOf": {
      "@id": "https://leopardxtechnology.com/#website"
    },
    "publisher": {
      "@id": "https://leopardxtechnology.com/#organization"
    }
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects</title>
        <meta name="description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
        <meta name="keywords" content="LeopardX Portfolio, Software Case Studies, React Projects, Enterprise App Showcase, ERP System Examples" />
        <link rel="canonical" href="https://leopardxtechnology.com/portfolio" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects" />
        <meta property="og:description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Portfolio & Case Studies | LeopardX Technologies — Custom Software Projects" />
        <meta name="twitter:description" content="Explore the portfolio of LeopardX Technologies. See our successful enterprise applications, customized ERP dashboards, medical systems, and responsive web portals." />
        <meta name="twitter:image" content="https://leopardxtechnology.com/lx-logo.png" />

        {/* Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Subpage Hero Section */}
      <section className="subpage-hero" aria-label="Portfolio Hero">
        <div className="hero-bg-gradient" aria-hidden="true" />
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="lx-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag" style={{ marginBottom: 18 }}>
              <span className="dot" aria-hidden="true" />
              Our Work
            </span>
            <h1 className="section-title text-dark">
              Our <span className="text-gradient">Projects &amp; Case Studies</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              Explore the engineering and design choices behind our top custom applications and software platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unique Content Section */}
      <section className="subpage-content">
        <div className="lx-container">
          <div className="subpage-grid-3col">
            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><BarChart /></div>
              <h2 className="subpage-card-title">Smart ERP Dashboard</h2>
              <p className="subpage-card-desc">
                High-performance supply pipeline tool integrating predictive dispatch, automated logistics logging, and custom analytics widgets.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Activity /></div>
              <h2 className="subpage-card-title">AI Clinical Diagnostic Platform</h2>
              <p className="subpage-card-desc">
                Secure imaging processor for medical personnel, incorporating classification algorithms and robust HIPAA-compliant file stores.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Globe /></div>
              <h2 className="subpage-card-title">Hotel Booking Suite</h2>
              <p className="subpage-card-desc">
                Fast web portal for global travelers, delivering low latency room searches, multi-gateway checkout systems, and unified calendars.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Grid /></div>
              <h2 className="subpage-card-title">B2B Inventory Hub</h2>
              <p className="subpage-card-desc">
                Real-time stock ledger built for global suppliers, featuring automated SKU tracking, low stock notifications, and barcode generation.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Utensils /></div>
              <h2 className="subpage-card-title">Restaurant ERP &amp; QR Ordering System</h2>
              <p className="subpage-card-desc">
                Complete restaurant management platform with QR ordering, billing, KOT, inventory, kitchen management, captain panel, and analytics.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Monitor /></div>
              <h2 className="subpage-card-title">Corporate Business Website</h2>
              <p className="subpage-card-desc">
                Premium responsive company website with SEO optimization, performance optimization, modern UI/UX, contact forms, and lead generation.
              </p>
            </motion.div>
          </div>

          {/* Internal Linking Block */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: 16 }}>Curious about our technical stack?</h3>
            <div style={{ display: 'inline-flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/technologies" className="btn-primary" style={{ textDecoration: 'none' }}>
                Explore Technologies <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
                Discuss a Project
              </Link>
            </div>
          </div>

          {/* Dynamic FAQ Accordion */}
          <div className="faq-section">
            <h2 className="faq-title text-dark">Frequently Asked Questions</h2>
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <button 
                  className="faq-question" 
                  onClick={() => toggleFaq(i)}
                  aria-expanded={activeFaq === i}
                >
                  {faq.q}
                  <span style={{ transform: activeFaq === i ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
                    ▼
                  </span>
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectsPage;