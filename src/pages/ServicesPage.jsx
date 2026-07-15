import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Layout, Smartphone, Cloud } from 'lucide-react';

const ServicesPage = () => {
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
        "name": "Services",
        "item": "https://leopardxtechnology.com/services"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What kind of ERP customizations do you provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build fully bespoke ERP dashboards, inventory modules, HR operations tools, and automated pipelines tailored to your existing infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sign Non-Disclosure Agreements (NDAs)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we sign NDAs prior to any code sharing or business discussions to protect your corporate data and IP."
        }
      },
      {
        "@type": "Question",
        "name": "What is the typical development duration?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Depending on project scope, custom dashboards and web platforms take 4-8 weeks, while complex ERP implementations can range from 3-6 months."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "What kind of ERP customizations do you provide?",
      a: "We build fully bespoke ERP dashboards, inventory modules, HR operations tools, and automated pipelines tailored to your existing infrastructure."
    },
    {
      q: "Do you sign Non-Disclosure Agreements (NDAs)?",
      a: "Yes, we sign NDAs prior to any code sharing or business discussions to protect your corporate data and IP."
    },
    {
      q: "What is the typical development duration?",
      a: "Depending on project scope, custom dashboards and web platforms take 4-8 weeks, while complex ERP implementations can range from 3-6 months."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Our Services | LeopardX Technologies — Custom Software & AI Development</title>
        <meta name="description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
        <meta name="keywords" content="Software Development Services, Enterprise Solutions, ERP Customization, AI Consulting, Web Development Services, Mobile App Development" />
        <link rel="canonical" href="https://leopardxtechnology.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Our Services | LeopardX Technologies — Custom Software & AI Development" />
        <meta property="og:description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Services | LeopardX Technologies — Custom Software & AI Development" />
        <meta name="twitter:description" content="Discover our professional services: customized enterprise software development, ERP integrations, generative AI implementation, UI/UX design, and scalable full-stack web/mobile apps." />
        <meta name="twitter:image" content="https://leopardxtechnology.com/lx-logo.png" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Subpage Hero Section */}
      <section className="subpage-hero" aria-label="Services Hero">
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
              What We Offer
            </span>
            <h1 className="section-title text-dark">
              Software Development <span className="text-gradient">Services</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              From initial architecture definition to production scale deployment, we build robust digital ecosystems for modern enterprises.
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
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Database /></div>
              <h2 className="subpage-card-title">Enterprise ERP Systems</h2>
              <p className="subpage-card-desc">
                High-efficiency bespoke ERP architectures incorporating logistics control, inventory management dashboards, and automatic financial pipelines.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Cpu /></div>
              <h2 className="subpage-card-title">AI &amp; Generative AI Solutions</h2>
              <p className="subpage-card-desc">
                Advanced machine learning implementations, dynamic LLM integrations, custom chatbots, and NLP workflows to automate complex enterprise tasks.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Code /></div>
              <h2 className="subpage-card-title">Full-Stack Web Applications</h2>
              <p className="subpage-card-desc">
                Building highly responsive React & Node.js structures, API integrations, and robust database layers scaled to millions of active queries.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Layout /></div>
              <h2 className="subpage-card-title">UI/UX Design &amp; Consulting</h2>
              <p className="subpage-card-desc">
                Framer Motion animations, interactive mockups, and layout structures aligned with Stripe, Vercel, and Linear premium aesthetics.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Smartphone /></div>
              <h2 className="subpage-card-title">Mobile App Development</h2>
              <p className="subpage-card-desc">
                Android &amp; iOS applications using React Native, Flutter, modern APIs, push notifications, authentication, and scalable architecture.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Cloud /></div>
              <h2 className="subpage-card-title">Cloud &amp; DevOps Solutions</h2>
              <p className="subpage-card-desc">
                Docker, CI/CD, Vercel, AWS deployment, server optimization, monitoring, backup, and cloud infrastructure.
              </p>
            </motion.div>
          </div>

          {/* Internal Linking Block */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: 16 }}>Ready to transform your tech?</h3>
            <div style={{ display: 'inline-flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/portfolio" className="btn-primary" style={{ textDecoration: 'none' }}>
                View Our Portfolio <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
                Start a Conversation
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

export default ServicesPage;
