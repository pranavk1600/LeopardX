import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Contact from '../components/Contact';

const ContactPage = () => {
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
        "name": "Contact",
        "item": "https://leopardxtechnology.com/contact"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast do you respond to inquiries?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our engineering and consulting teams respond to all valid project inquiries within 24 hours with a feedback plan."
        }
      },
      {
        "@type": "Question",
        "name": "Can we schedule a virtual consultation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we can conduct Google Meet, Zoom, or Microsoft Teams discovery calls to analyze system requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What information should we provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Providing details about your project goals, anticipated user volume, desired technology stack, and timeline helps us deliver a more accurate estimation."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "How fast do you respond to inquiries?",
      a: "Our engineering and consulting teams respond to all valid project inquiries within 24 hours with a feedback plan."
    },
    {
      q: "Can we schedule a virtual consultation?",
      a: "Yes, we can conduct Google Meet, Zoom, or Microsoft Teams discovery calls to analyze system requirements."
    },
    {
      q: "What information should we provide?",
      a: "Providing details about your project goals, anticipated user volume, desired technology stack, and timeline helps us deliver a more accurate estimation."
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://leopardxtechnology.com/contact#webpage",
    "url": "https://leopardxtechnology.com/contact",
    "name": "Contact Us | LeopardX Technologies — Get a Custom Software Quote",
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
        <title>Contact Us | LeopardX Technologies — Get a Custom Software Quote</title>
        <meta name="description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
        <meta name="keywords" content="Contact LeopardX, Software Development Quote, Hire AI Developers, ERP Consulting Contact, LeopardX India" />
        <link rel="canonical" href="https://leopardxtechnology.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | LeopardX Technologies — Get a Custom Software Quote" />
        <meta property="og:description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/contact" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | LeopardX Technologies — Get a Custom Software Quote" />
        <meta name="twitter:description" content="Get in touch with LeopardX Technologies today. Contact us for customized enterprise software, AI solutions, ERP integrations, and software engineering services." />
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
      <section className="subpage-hero" aria-label="Contact Hero">
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
              Get In Touch
            </span>
            <h1 className="section-title text-dark">
              Contact <span className="text-gradient">LeopardX Technologies</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              Have an enterprise project, web app, or AI idea? Send us a message — our engineering experts are ready to assist.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modular Contact form section */}
      <div style={{ background: 'var(--bg-soft)', paddingTop: 40 }}>
        <Contact />
      </div>

      {/* Unique Content Section */}
      <section className="subpage-content" style={{ paddingTop: 0 }}>
        <div className="lx-container">
          
          {/* Internal Linking Block */}
          <div style={{ marginTop: 40, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: 16 }}>Want to learn more about our company?</h3>
            <div style={{ display: 'inline-flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn-primary" style={{ textDecoration: 'none' }}>
                About Our Team <ArrowRight size={16} />
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

export default ContactPage;