import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
    Code,
    Cpu,
    Cloud,
    Lock,
    BarChart,
    Smartphone,
    ArrowUpRight
} from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Code size={34} />,
            title: 'Custom Software',
            desc: 'Scalable web and desktop applications engineered for ultra-high performance and futuristic digital ecosystems.'
        },
        {
            icon: <Cpu size={34} />,
            title: 'AI & Machine Learning',
            desc: 'Advanced artificial intelligence systems designed to automate, predict, and dominate modern workflows.'
        },
        {
            icon: <Cloud size={34} />,
            title: 'Cloud Infrastructure',
            desc: 'Next-generation cloud architecture with lightning-fast deployment and enterprise-grade scalability.'
        },
        {
            icon: <Smartphone size={34} />,
            title: 'Mobile Applications',
            desc: 'Immersive mobile experiences with futuristic UI, smooth performance, and cross-platform power.'
        },
        {
            icon: <Lock size={34} />,
            title: 'Cybersecurity',
            desc: 'Military-grade digital protection systems built to secure critical infrastructure and sensitive data.'
        },
        {
            icon: <BarChart size={34} />,
            title: 'Data Analytics',
            desc: 'Transform massive datasets into intelligent business decisions using real-time visual insights.'
        }
    ];

    return (
        <>
            <Navbar />
            <section
                id="services"
                className="position-relative py-5 overflow-hidden"
                style={{
                    background: 'var(--bg-deep)'
                }}
            >
                {/* Background Glow */}
                <div
                    className="position-absolute top-0 start-50 translate-middle-x"
                    style={{
                        width: '700px',
                        height: '700px',
                        background: 'rgba(var(--highlight-rgb),0.08)',
                        filter: 'blur(160px)',
                        zIndex: 0
                    }}
                />

                ```
                <div
                    className="container position-relative"
                    style={{
                        zIndex: 2,
                        paddingTop: '20px'
                    }}
                >
                    {/* Section Heading */}
                    <div className="mb-5">
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
                            Our Expertise
                        </motion.span>

                        <motion.h2
                            className="display-3 fw-bold text-main mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Solutions that{' '}
                            <span className="text-highlight">
                                Drive Innovation
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-secondary fs-5 mt-4 mx-auto"
                            style={{ maxWidth: '700px' }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            We engineer futuristic digital systems powered by AI,
                            cloud infrastructure, and immersive technology experiences.
                        </motion.p>
                    </div>

                    {/* Services Grid */}
                    <div className="row g-4">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.03
                                    }}
                                    className="position-relative overflow-hidden h-100 p-5 rounded-5 border border-secondary"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        backdropFilter: 'blur(18px)',
                                        transition: '0.4s ease',
                                        boxShadow: '0 0 40px rgba(var(--highlight-rgb),0.04)'
                                    }}
                                >
                                    {/* Hover Glow */}
                                    <div
                                        className="position-absolute top-0 start-0 w-100 h-100"
                                        style={{
                                            background:
                                                'linear-gradient(135deg, rgba(var(--highlight-rgb),0.12), transparent)',
                                            opacity: 0,
                                            transition: '0.5s'
                                        }}
                                    />

                                    {/* Icon */}
                                    <div
                                        className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4"
                                        style={{
                                            width: '80px',
                                            height: '80px',
                                            background: 'rgba(var(--highlight-rgb),0.08)',
                                            border: '1px solid rgba(var(--highlight-rgb),0.2)',
                                            color: 'var(--highlight-color)',
                                            boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.25)'
                                        }}
                                    >
                                        {service.icon}
                                    </div>

                                    {/* Content */}
                                    <h3 className="h3 fw-bold text-main mb-3">
                                        {service.title}
                                    </h3>

                                    <p className="text-secondary lh-lg mb-5">
                                        {service.desc}
                                    </p>

                                    {/* Bottom Button */}
                                    <div className="d-flex align-items-center gap-2 text-info fw-bold text-uppercase small">
                                        Explore More
                                        <ArrowUpRight size={16} />
                                    </div>

                                    {/* Bottom Glow Line */}
                                    <motion.div
                                        className="position-absolute bottom-0 start-0"
                                        initial={{ width: '0%' }}
                                        whileInView={{ width: '100%' }}
                                        transition={{ duration: 1.5, delay: index * 0.1 }}
                                        style={{
                                            height: '2px',
                                            background:
                                                'linear-gradient(to right, transparent, var(--highlight-color), transparent)'
                                        }}
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>

    );
};

export default Services;
