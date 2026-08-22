import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, WifiOff, UserX, Mail, Globe, Clock, ChevronRight, Lock } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://leopardxtechnology.com/privacy-policy#webpage",
    "url": "https://leopardxtechnology.com/privacy-policy",
    "name": "Privacy Policy | LeopardX Technologies — Modern Digital Solutions",
    "isPartOf": {
      "@id": "https://leopardxtechnology.com/#website"
    },
    "publisher": {
      "@id": "https://leopardxtechnology.com/#organization"
    }
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
        "name": "Privacy Policy",
        "item": "https://leopardxtechnology.com/privacy-policy"
      }
    ]
  };

  const privacyHighlights = [
    { icon: <ShieldCheck size={20} />, text: "Data Protection & Privacy" },
    { icon: <Lock size={20} />, text: "Secure Infrastructure" },
    { icon: <UserX size={20} />, text: "No Unauthorized Data Sharing" },
    { icon: <Globe size={20} />, text: "Transparent Client Policies" }
  ];

  const policySections = [
    {
      id: "collect",
      number: "1",
      title: "Information We Collect",
      content: [
        "LeopardX Technologies is committed to respecting user and client privacy. When visiting our website or submitting project inquiries, we only collect information that you voluntarily provide (such as name, email address, phone number, and project details via our contact forms).",
        "We process all user information responsibly to respond to inquiries and deliver high-quality enterprise software services."
      ]
    },
    {
      id: "use",
      number: "2",
      title: "How We Use Information",
      content: [
        "Information collected through our website is used solely to respond to project consultations, deliver customized ERP and web applications, provide tech support, and improve our services.",
        "We do not sell, rent, or trade personal or client information to third parties for marketing purposes."
      ]
    },
    {
      id: "security",
      number: "3",
      title: "Data Security",
      content: [
        "We implement robust technical and organizational security measures to protect your information against unauthorized access, loss, or alteration.",
        "Our development practices follow industry-standard security protocols, including HTTPS encryption, secure cloud configurations, and strict access controls."
      ]
    },
    {
      id: "third-party",
      number: "4",
      title: "Third-Party Services",
      content: [
        "We value user trust. Our website does not share personal data with external advertising networks or unauthorized data brokers.",
        "Any standard service analytics integrated onto our website are strictly used to evaluate site performance and ensure proper platform operation."
      ]
    },
    {
      id: "children",
      number: "5",
      title: "Children's Privacy",
      content: [
        "Our website and software services are directed at business professionals and modern enterprises. We do not knowingly collect personal information from children.",
        "If you believe information regarding a minor has been submitted to us, please contact us immediately so we can remove the data."
      ]
    },
    {
      id: "changes",
      number: "6",
      title: "Changes to This Privacy Policy",
      content: [
        "We may update our Privacy Policy from time to time to reflect changes in technical practices or regulatory requirements. Any updates will be posted on this page with a revised modification date.",
        "We recommend checking this policy periodically to stay informed about our commitment to privacy and data protection."
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Privacy Policy | LeopardX Technologies — Modern Digital Solutions</title>
        <meta name="description" content="Read the Privacy Policy for LeopardX Technologies. Learn how we handle data protection, privacy, and security across our software services and website." />
        <meta name="keywords" content="Privacy Policy, LeopardX Technologies, Data Protection, Software Company Privacy, Security Policy" />
        <link rel="canonical" href="https://leopardxtechnology.com/privacy-policy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | LeopardX Technologies — Modern Digital Solutions" />
        <meta property="og:description" content="Read the Privacy Policy for LeopardX Technologies. Learn how we handle data protection, privacy, and security across our software services and website." />
        <meta property="og:image" content="https://leopardxtechnology.com/lx-logo.png" />
        <meta property="og:url" content="https://leopardxtechnology.com/privacy-policy" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LeopardX Technologies" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | LeopardX Technologies — Modern Digital Solutions" />
        <meta name="twitter:description" content="Read the Privacy Policy for LeopardX Technologies. Learn how we handle data protection, privacy, and security." />
        <meta name="twitter:image" content="https://leopardxtechnology.com/lx-logo.png" />

        {/* Schemas */}
        <script type="application/ld+json">
          {JSON.stringify(webPageSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Subpage Hero Section */}
      <section className="subpage-hero" aria-label="Privacy Policy Hero">
        <div className="hero-bg-gradient" aria-hidden="true" />
        <div className="hero-dot-grid" aria-hidden="true" />
        <div className="lx-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="label-tag" style={{ marginBottom: 18 }}>
              <Clock size={12} style={{ marginRight: 4 }} />
              Last Updated: August 2026
            </span>
            <h1 className="section-title text-dark">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
              LeopardX Technologies — Enterprise Software &amp; Digital Solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="subpage-content" style={{ background: 'var(--bg-soft)', padding: '80px 0 120px' }}>
        <div className="lx-container">
          <div style={{ maxWidth: '880px', margin: '0 auto' }}>
            
            {/* Overview / Glassmorphism Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                background: 'rgba(255, 255, 255, 0.75)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(245, 158, 11, 0.15)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 32px',
                boxShadow: 'var(--shadow-md)',
                marginBottom: '48px'
              }}
            >
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>
                Our Privacy Commitment
              </h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '32px' }}>
                LeopardX Technologies is committed to providing secure software solutions. We adhere to high data protection standards across all our web applications, ERP systems, and enterprise services.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '20px'
              }}>
                {privacyHighlights.map((highlight, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px',
                    background: 'var(--bg-white)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{ color: 'var(--amber)', display: 'flex', alignItems: 'center' }}>
                      {highlight.icon}
                    </div>
                    <span style={{ fontSize: '0.88rem', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {highlight.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Standard Policy Sections */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {policySections.map((section, idx) => (
                <motion.div
                  key={section.id}
                  id={section.id}
                  className="subpage-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  style={{
                    textAlign: 'left',
                    background: 'var(--bg-white)',
                    padding: '36px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-sm)'
                  }}
                >
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'var(--amber-pale)',
                      color: 'var(--amber-dark)',
                      fontWeight: '800',
                      fontSize: '1rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      flexShrink: 0
                    }}>
                      {section.number}
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>
                        {section.title}
                      </h2>
                      {section.content.map((p, pIdx) => (
                        <p key={pIdx} style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '12px', fontSize: '0.98rem' }}>
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Section 7: Contact Us (Unique UI Layout) */}
              <motion.div
                id="contact-info"
                className="subpage-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  textAlign: 'left',
                  background: 'var(--bg-white)',
                  padding: '36px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'var(--amber-pale)',
                    color: 'var(--amber-dark)',
                    fontWeight: '800',
                    fontSize: '1rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    flexShrink: 0
                  }}>
                    7
                  </div>
                  <div style={{ width: '100%' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text-primary)' }}>
                      Contact Us
                    </h2>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '24px', fontSize: '0.98rem' }}>
                      If you have any questions or suggestions regarding this Privacy Policy, do not hesitate to contact us at LeopardX Technologies.
                    </p>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Globe size={16} style={{ color: 'var(--amber)' }} />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600' }}>Website:</span>
                        <a href="https://leopardxtechnology.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.92rem', color: 'var(--amber-dark)', textDecoration: 'none', fontWeight: '600' }}>
                          https://leopardxtechnology.com
                        </a>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Mail size={16} style={{ color: 'var(--amber)' }} />
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: '600' }}>Email:</span>
                        <a href="mailto:leopardxtechnology@gmail.com" style={{ fontSize: '0.92rem', color: 'var(--amber-dark)', textDecoration: 'none', fontWeight: '600' }}>
                          leopardxtechnology@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Back to Home Button */}
            <div style={{ marginTop: '48px', textAlign: 'center' }}>
              <Link to="/" className="btn-primary" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Back to Homepage <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
