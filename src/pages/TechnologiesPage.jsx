import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Cpu, Database, Server, Cloud, Palette } from 'lucide-react';

const TechnologiesPage = () => {
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
        "name": "Technologies",
        "item": "https://leopardxtechnology.com/technologies"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do you use React.js and Vite?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vite provides hot-module replacement and lightning-fast builds, while React allows us to construct modular, highly responsive component architectures."
        }
      },
      {
        "@type": "Question",
        "name": "Do you support migration from legacy databases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we design safe data transfer procedures to migrate records from old relational databases to modern structured databases like PostgreSQL or MongoDB."
        }
      },
      {
        "@type": "Question",
        "name": "Which cloud platforms do you recommend?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For enterprise applications, we recommend AWS or GCP. For web applications and static sites, we use Vercel for instant deployments and edge network efficiency."
        }
      }
    ]
  };

  const faqs = [
    {
      q: "Why do you use React.js and Vite?",
      a: "Vite provides hot-module replacement and lightning-fast builds, while React allows us to construct modular, highly responsive component architectures."
    },
    {
      q: "Do you support migration from legacy databases?",
      a: "Yes, we design safe data transfer procedures to migrate records from old relational databases to modern structured databases like PostgreSQL or MongoDB."
    },
    {
      q: "Which cloud platforms do you recommend?",
      a: "For enterprise applications, we recommend AWS or GCP. For web applications and static sites, we use Vercel for instant deployments and edge network efficiency."
    }
  ];

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://leopardxtechnology.com/technologies#webpage",
    "url": "https://leopardxtechnology.com/technologies",
    "name": "Technologies & Stack | LeopardX Technologies — Modern Tech Solutions",
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
        <title>Technologies & Stack | LeopardX Technologies — Modern Tech Solutions</title>
        <meta name="description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
        <meta name="keywords" content="Tech Stack LeopardX, React Development, Node.js Backend, MERN Stack Development, Python AI, Cloud Architecture, Enterprise Tech Stack" />
        <link rel="canonical" href="https://leopardxtechnology.com/technologies" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Technologies & Stack | LeopardX Technologies — Modern Tech Solutions" />
        <meta property="og:description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/technologies" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technologies & Stack | LeopardX Technologies — Modern Tech Solutions" />
        <meta name="twitter:description" content="Our modern technology stack: React, Node.js, MERN stack, Python, AI frameworks, cloud platforms, and enterprise ERP tools designed for scalability, speed, and safety." />
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
      <section className="subpage-hero" aria-label="Technologies Hero">
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
              Our Technology Stack
            </span>
            <h1 className="section-title text-dark">
              Technologies <span className="text-gradient">We Work With</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              We build using modern, industry-standard languages and frameworks to ensure velocity, safety, and scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Unique Content Section */}
      <section className="subpage-content">
        <div className="lx-container">
          <div className="tech-subpage-grid">
            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Code /></div>
              <h2 className="subpage-card-title">Frontend Development</h2>
              <p className="subpage-card-desc">
                React.js, Next.js, TypeScript, Tailwind CSS, Bootstrap
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Server /></div>
              <h2 className="subpage-card-title">Backend Development</h2>
              <p className="subpage-card-desc">
                Node.js, Express.js, Java, Spring Boot, REST APIs
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Database /></div>
              <h2 className="subpage-card-title">Database &amp; Cloud</h2>
              <p className="subpage-card-desc">
                MongoDB, PostgreSQL, MySQL, Firebase, Supabase
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Cpu /></div>
              <h2 className="subpage-card-title">AI &amp; Machine Learning</h2>
              <p className="subpage-card-desc">
                OpenAI API, Google Gemini, Python, Prompt Engineering, AI Automation
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Cloud /></div>
              <h2 className="subpage-card-title">DevOps &amp; Deployment</h2>
              <p className="subpage-card-desc">
                Vercel, Docker, GitHub Actions, CI/CD, Linux
              </p>
            </motion.div>

            <motion.div 
              className="subpage-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <div className="subpage-card-icon" style={{ color: 'var(--amber)' }}><Palette /></div>
              <h2 className="subpage-card-title">UI/UX &amp; Design</h2>
              <p className="subpage-card-desc">
                Figma, Canva, Responsive Design, User Experience, Motion UI
              </p>
            </motion.div>
          </div>

          {/* Internal Linking Block */}
          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: 16 }}>Ready to plan your application architecture?</h3>
            <div style={{ display: 'inline-flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/services" className="btn-primary" style={{ textDecoration: 'none' }}>
                Explore Our Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline" style={{ textDecoration: 'none' }}>
                Contact Our Engineers
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

export default TechnologiesPage;

