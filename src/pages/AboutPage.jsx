import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, Award, Users } from 'lucide-react';

const AboutPage = () => {
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
        "name": "About Us",
        "item": "https://leopardxtechnology.com/about"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What industries does LeopardX Technologies serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "LeopardX Technologies serves a wide variety of industries including hospitality, healthcare, logistics, manufacturing, retail, and tech startups, delivering tailored enterprise software."
        }
      },
      {
        "@type": "Question",
        "name": "Where is LeopardX Technologies based?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We are headquartered in Pune, Maharashtra, India, and provide software consulting and development services globally."
        }
      },
      {
        "@type": "Question",
        "name": "How does LeopardX ensure software quality?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We adhere to strict engineering standards, using modern DevOps practices, automated testing, comprehensive code reviews, and robust agile processes."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "What industries does LeopardX Technologies serve?",
      a: "LeopardX Technologies serves a wide variety of industries including hospitality, healthcare, logistics, manufacturing, retail, and tech startups, delivering tailored enterprise software."
    },
    {
      q: "Where is LeopardX Technologies based?",
      a: "We are headquartered in Pune, Maharashtra, India, and provide software consulting and development services globally."
    },
    {
      q: "How does LeopardX ensure software quality?",
      a: "We adhere to strict engineering standards, using modern DevOps practices, automated testing, comprehensive code reviews, and robust agile processes."
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>About Us | LeopardX Technologies — Modern Software Development Company</title>
        <meta name="description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
        <meta name="keywords" content="About LeopardX, Software Developers, IT Consultants, Technology Partner, Web Agency India" />
        <link rel="canonical" href="https://leopardxtechnology.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Us | LeopardX Technologies — Modern Software Development Company" />
        <meta property="og:description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | LeopardX Technologies — Modern Software Development Company" />
        <meta name="twitter:description" content="Learn about LeopardX Technologies, our vision, mission, and how we deliver high-quality enterprise software, ERP systems, and AI solutions for modern businesses." />
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
      <section className="subpage-hero" aria-label="About Hero">
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
              Who We Are
            </span>
            <h1 className="section-title text-dark">
              About <span className="text-gradient">LeopardX Technologies</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              We are a team of visionary engineers and product creators dedicated to transforming complex challenges into elegant digital realities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unique Content Section */}
      <section className="subpage-content">
        <div className="lx-container">
          <div className="subpage-grid">
            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Shield /></div>
              <h2 className="subpage-card-title">Our Vision</h2>
              <p className="subpage-card-desc">
                To build high-performance software architectures that empower businesses globally, ensuring scalability, absolute security, and long-term tech longevity.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Award /></div>
              <h2 className="subpage-card-title">Our Philosophy</h2>
              <p className="subpage-card-desc">
                We believe in clean code, robust documentation, transparent communication, and shipping features that provide immediate business value and superior UX.
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Users /></div>
              <h2 className="subpage-card-title">Our People</h2>
              <p className="subpage-card-desc">
                Our experts hold extensive experience in modern frontend applications, robust database designs, microservices, cloud deployments, and AI integrations.
              </p>
            </motion.div>
          </div>

          {/* Internal Linking Block */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: 16 }}>Ready to see what we build?</h3>
            <div style={{ display: 'inline-flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
                Explore Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
                Contact Our Team
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

export default AboutPage;

