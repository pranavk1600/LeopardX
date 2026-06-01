import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {
    Mail,
    Phone,
    MapPin,
    Send,
    ArrowUpRight
} from 'lucide-react';

const Contact = () => {

    return (
        <>
            <Navbar />

            <section
                id="contact"
                className="position-relative overflow-hidden py-5"
                style={{
                    background: 'var(--bg-deep)',
                    minHeight: '100vh'
                }}
            >

                {/* Background Glow */}
                <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                        width: '800px',
                        height: '800px',
                        background: 'rgba(var(--highlight-rgb),0.08)',
                        filter: 'blur(180px)',
                        zIndex: 0
                    }}
                />

                {/* Grid Background */}
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                        backgroundSize: '70px 70px',
                        zIndex: 0
                    }}
                />

                <div
                    className="container position-relative"
                    style={{
                        zIndex: 2,
                        paddingTop: '40px'
                    }}
                >

                    {/* Section Heading */}
                    <div
                        className="mb-5"
                        style={{
                            maxWidth: '720px'
                        }}
                    >

                        <motion.span
                            className="px-4 py-2 rounded-pill border border-info text-info small fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(var(--highlight-rgb),0.08)',
                                backdropFilter: 'blur(12px)',
                                letterSpacing: '2px'
                            }}
                        >
                            <span
                                style={{
                                    width: '8px',
                                    height: '8px',
                                    background: 'var(--highlight-color)',
                                    borderRadius: '50%',
                                    boxShadow: '0 0 12px var(--highlight-color)'
                                }}
                            />

                            Get In Touch

                        </motion.span>

                        <motion.h2
                            className="display-2 fw-bold text-main mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                letterSpacing: '-2px',
                                lineHeight: '1'
                            }}
                        >
                            Let's Build Something{' '}
                            <span className="text-highlight">
                                Legendary
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-secondary fs-5 mt-4"
                            style={{
                                maxWidth: '700px',
                                lineHeight: '1.8'
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            LeopardX creates futuristic digital ecosystems,
                            AI-powered applications, and next-generation
                            experiences for visionary brands worldwide.
                        </motion.p>

                    </div>

                    {/* Main Content */}
                    <div className="row align-items-start g-5">

                        {/* LEFT SIDE */}
                        <div className="col-lg-5">

                            <div className="d-flex flex-column gap-4">

                                {[
                                    {
                                        icon: <Mail size={26} />,
                                        title: 'Email Us',
                                        value: 'leopardxtech@gmail.com'
                                    },
                                    {
                                        icon: <Phone size={26} />,
                                        title: 'Call Us',
                                        value: '+91 98765 43210'
                                    },
                                    {
                                        icon: <MapPin size={26} />,
                                        title: 'Visit Us',
                                        value: 'Pune, Maharashtra, India'
                                    }
                                ].map((item, index) => (

                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                        whileHover={{
                                            y: -8,
                                            scale: 1.02
                                        }}
                                        className="d-flex align-items-center gap-4 p-4 rounded-5"
                                        style={{
                                            background: 'rgba(255,255,255,0.04)',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            backdropFilter: 'blur(18px)',
                                            boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.04)'
                                        }}
                                    >

                                        {/* Icon */}
                                        <div
                                            className="d-flex align-items-center justify-content-center rounded-4"
                                            style={{
                                                width: '70px',
                                                height: '70px',
                                                background: 'rgba(var(--highlight-rgb),0.08)',
                                                border: '1px solid rgba(var(--highlight-rgb),0.2)',
                                                color: 'var(--highlight-color)',
                                                boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.25)'
                                            }}
                                        >
                                            {item.icon}
                                        </div>

                                        {/* Content */}
                                        <div>
                                            <h6
                                                className="small text-uppercase fw-bold mb-2"
                                                style={{
                                                    color: 'var(--highlight-color)',
                                                    letterSpacing: '2px'
                                                }}
                                            >
                                                {item.title}
                                            </h6>

                                            <p className="text-main fw-semibold mb-0 fs-5">
                                                {item.value}
                                            </p>
                                        </div>

                                    </motion.div>

                                ))}

                            </div>

                        </div>

                        {/* RIGHT SIDE */}
                        <div className="col-lg-7">

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                viewport={{ once: true }}
                                className="position-relative"
                            >

                                {/* Form Box */}
                                <div
                                    className="p-5 rounded-5 overflow-hidden position-relative"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(24px)',
                                        boxShadow: '0 0 60px rgba(var(--highlight-rgb),0.08)'
                                    }}
                                >

                                    {/* Glow */}
                                    <div
                                        className="position-absolute top-0 start-50 translate-middle-x"
                                        style={{
                                            width: '300px',
                                            height: '300px',
                                            background: 'rgba(var(--highlight-rgb),0.12)',
                                            filter: 'blur(120px)',
                                            zIndex: 0
                                        }}
                                    />

                                    <form
                                        className="position-relative"
                                        style={{
                                            zIndex: 2
                                        }}
                                    >

                                        {[
                                            {
                                                label: 'Full Name',
                                                type: 'text',
                                                placeholder: 'John Doe'
                                            },
                                            {
                                                label: 'Email Address',
                                                type: 'email',
                                                placeholder: 'john@example.com'
                                            },
                                            {
                                                label: 'Project Type',
                                                type: 'text',
                                                placeholder: 'AI Platform / Website / App'
                                            }
                                        ].map((field, index) => (

                                            <div key={index} className="mb-4">

                                                <label
                                                    className="form-label small fw-bold text-uppercase"
                                                    style={{
                                                        color: 'var(--highlight-color)',
                                                        letterSpacing: '2px'
                                                    }}
                                                >
                                                    {field.label}
                                                </label>

                                                <input
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    className="form-control border-0 rounded-4 py-3 px-4"
                                                    style={{
                                                        background: 'rgba(255,255,255,0.06)',
                                                        color: 'white',
                                                        border: '1px solid rgba(255,255,255,0.08)',
                                                        backdropFilter: 'blur(12px)',
                                                        boxShadow: 'none'
                                                    }}
                                                />

                                            </div>

                                        ))}

                                        {/* Message */}
                                        <div className="mb-4">

                                            <label
                                                className="form-label small fw-bold text-uppercase"
                                                style={{
                                                    color: 'var(--highlight-color)',
                                                    letterSpacing: '2px'
                                                }}
                                            >
                                                Message
                                            </label>

                                            <textarea
                                                rows="5"
                                                placeholder="Tell us about your futuristic project..."
                                                className="form-control border-0 rounded-4 py-3 px-4"
                                                style={{
                                                    background: 'rgba(255,255,255,0.06)',
                                                    color: 'white',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    backdropFilter: 'blur(12px)',
                                                    resize: 'none',
                                                    boxShadow: 'none'
                                                }}
                                            />

                                        </div>

                                        {/* Button */}
                                        <motion.button
                                            whileHover={{
                                                scale: 1.03,
                                                y: -3
                                            }}
                                            type="submit"
                                            className="btn w-100 py-3 rounded-4 fw-bold text-uppercase d-flex align-items-center justify-content-center gap-2"
                                            style={{
                                                background: 'var(--highlight-color)',
                                                color: 'var(--bg-deep)',
                                                border: 'none',
                                                letterSpacing: '2px',
                                                boxShadow: '0 0 30px rgba(var(--highlight-rgb),0.4)'
                                            }}
                                        >
                                            Send Message
                                            <Send size={18} />
                                            <ArrowUpRight size={18} />
                                        </motion.button>

                                    </form>

                                </div>

                            </motion.div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Contact;