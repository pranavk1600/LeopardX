import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail size={18} aria-hidden="true" />,
    label: 'Email',
    value: 'leopardxtechnology@gmail.com',
    link: 'mailto:leopardxtechnology@gmail.com',
  },
  {
    icon: <Phone size={18} aria-hidden="true" />,
    label: 'Phone',
    value: '+91 7823065239',
    link: 'tel:+917823065239',
  },
  {
    icon: <MapPin size={18} aria-hidden="true" />,
    label: 'Location',
    value: 'Pune, Maharashtra, India',
    link: null,
  },
];

const WHATSAPP_NUMBER = '917823065239'; // Replace with real number

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi LeopardX! I'd like to discuss a project.")}`;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-accent" aria-hidden="true" />

      <div className="lx-container position-relative" style={{ zIndex: 2 }}>

        <motion.div
          style={{ textAlign: 'center', marginBottom: 56 }}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            Get In Touch
          </span>
          <h2 id="contact-title" className="section-title">
            Let's Build Something{' '}
            <span className="text-gradient">Great Together</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
            Have a project in mind? Tell us about it — we'll respond within 24 hours
            with a clear plan and honest timeline.
          </p>
        </motion.div>

        <div className="contact-grid">

          {/* ── Left ── */}
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3 className="contact-heading">
              Start a Conversation
            </h3>
            <p className="contact-body">
              Whether you need an ERP system, a web application, an AI-powered product,
              or just want to explore possibilities — we're here and ready to help.
            </p>

            {/* Contact info */}
            <div className="contact-info-stack">
              {contactInfo.map((item) => (
                <motion.div
                  key={item.label}
                  className="contact-info-row"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                >
                  <div className="contact-info-icon">{item.icon}</div>
                  <div>
                    <div className="contact-info-label">{item.label}</div>
                    <div className="contact-info-value">
                      {item.link ? (
                        <a href={item.link}>{item.value}</a>
                      ) : (
                        item.value
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappUrl}
              className="btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </motion.a>

            {/* Response guarantee */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                marginTop: 20,
                padding: '12px 16px',
                background: '#ECFDF5',
                border: '1px solid rgba(5,150,105,0.15)',
                borderRadius: 12,
              }}
            >
              <span style={{ fontSize: '1rem' }} aria-hidden="true">✓</span>
              <span style={{ fontSize: '0.8rem', color: '#065F46', fontWeight: 600 }}>
                We respond to all enquiries within 24 hours
              </span>
            </div>
          </motion.div>

          {/* ── Right — Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-form-card">
              <h3 className="contact-form-title">Send Us a Message</h3>

              {submitted && (
                <motion.div
                  className="contact-success"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  role="alert"
                >
                  <span aria-hidden="true">✓</span>
                  Message sent! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-row-2">
                  <div className="contact-field">
                    <label htmlFor="contact-name" className="contact-field-label">Your Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      required
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-email" className="contact-field-label">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="rahul@company.com"
                      required
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-subject" className="contact-field-label">Subject</label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="ERP System / Web App / AI Integration"
                    className="contact-input"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-message" className="contact-field-label">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — what you're building, your timeline, and any specific requirements..."
                    required
                    rows={5}
                    className="contact-input textarea"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary-custom"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ width: '100%', justifyContent: 'center', padding: '14px 28px' }}
                >
                  <Send size={16} aria-hidden="true" />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
