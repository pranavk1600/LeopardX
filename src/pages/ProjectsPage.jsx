import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import {
    ExternalLink,
    Github,
    ArrowRight
} from 'lucide-react';

const Portfolio = () => {

    const projects = [
        {
            title: 'Neural Engine Dashboard',
            category: 'AI / Data Science',
            image: '/project-ai.png',
            desc: 'Advanced AI analytics platform powered by neural intelligence.',
            link: '#'
        },
        {
            title: 'CryptoX Exchange',
            category: 'Fintech / Blockchain',
            image: '/project-crypto.png',
            desc: 'High-speed futuristic crypto trading ecosystem.',
            link: '#'
        },
        {
            title: 'Quantum Cloud Portal',
            category: 'Cloud Infrastructure',
            image: '/project-cloud.png',
            desc: 'Scalable cloud infrastructure for next-generation systems.',
            link: '#'
        }
    ];

    return (
        <>
            <Navbar />

            <section
                id="portfolio"
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
                        width: '700px',
                        height: '700px',
                        background: 'rgba(var(--highlight-rgb),0.08)',
                        filter: 'blur(180px)',
                        zIndex: 0
                    }}
                />

                {/* Grid */}
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
                        paddingTop: '30px'
                    }}
                >

                    {/* Section Heading */}
                    <div
                        className="mb-5"
                        style={{
                            paddingTop: '10px'
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

                            Our Work

                        </motion.span>

                        <motion.h2
                            className="display-2 fw-bold text-main mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Selected{' '}
                            <span className="text-highlight">
                                Projects
                            </span>
                        </motion.h2>

                        <motion.p
                            className="text-secondary fs-5 mt-4"
                            style={{
                                maxWidth: '700px'
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Explore futuristic digital products, AI systems,
                            cloud ecosystems, and next-generation software
                            engineered by LeopardX.
                        </motion.p>

                    </div>

                    {/* Projects */}
                    <div className="row g-4">

                        {projects.map((project, index) => (

                            <div key={index} className="col-lg-4 col-md-6">

                                <motion.div
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{
                                        y: -12,
                                        scale: 1.02
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15
                                    }}
                                    className="position-relative overflow-hidden rounded-5 h-100"
                                    style={{
                                        background: 'rgba(255,255,255,0.04)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        backdropFilter: 'blur(18px)',
                                        boxShadow: '0 0 40px rgba(var(--highlight-rgb),0.05)'
                                    }}
                                >

                                    {/* Image */}
                                    <div
                                        className="overflow-hidden position-relative"
                                        style={{
                                            height: '280px'
                                        }}
                                    >

                                        <motion.img
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.6 }}
                                            src={project.image}
                                            alt={project.title}
                                            className="w-100 h-100"
                                            style={{
                                                objectFit: 'cover',
                                                filter: 'brightness(0.8)'
                                            }}
                                        />

                                        {/* Overlay */}
                                        <div
                                            className="position-absolute top-0 start-0 w-100 h-100"
                                            style={{
                                                background:
                                                    'linear-gradient(to top, rgba(5,8,22,0.95), rgba(5,8,22,0.15))'
                                            }}
                                        />

                                    </div>

                                    {/* Content */}
                                    <div className="p-4 d-flex flex-column h-100">

                                        <span
                                            className="small fw-bold text-uppercase mb-3"
                                            style={{
                                                color: 'var(--highlight-color)',
                                                letterSpacing: '2px'
                                            }}
                                        >
                                            {project.category}
                                        </span>

                                        <h3 className="h3 text-main fw-bold mb-3">
                                            {project.title}
                                        </h3>

                                        <p className="text-secondary mb-4">
                                            {project.desc}
                                        </p>

                                        {/* Buttons */}
                                        <div className="d-flex align-items-center gap-3 mt-auto">

                                            <a
                                                href={project.link}
                                                className="btn px-4 py-2 rounded-4 fw-bold d-flex align-items-center gap-2"
                                                style={{
                                                    background: 'var(--highlight-color)',
                                                    color: 'var(--bg-deep)',
                                                    border: 'none',
                                                    boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.35)'
                                                }}
                                            >
                                                Case Study
                                                <ExternalLink size={16} />
                                            </a>

                                            <a
                                                href="#"
                                                className="d-flex align-items-center justify-content-center rounded-circle"
                                                style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    background: 'rgba(255,255,255,0.05)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: 'var(--text-main)',
                                                    backdropFilter: 'blur(12px)'
                                                }}
                                            >
                                                <Github size={20} />
                                            </a>

                                        </div>

                                    </div>

                                    {/* Hover Glow */}
                                    <div
                                        className="position-absolute top-50 start-50 translate-middle"
                                        style={{
                                            width: '250px',
                                            height: '250px',
                                            background: 'rgba(var(--highlight-rgb),0.06)',
                                            filter: 'blur(100px)',
                                            zIndex: 0
                                        }}
                                    />

                                </motion.div>

                            </div>

                        ))}

                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-5 pt-4">

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -3
                            }}
                            className="btn px-5 py-3 rounded-4 fw-bold text-uppercase d-inline-flex align-items-center gap-2"
                            style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                                color: 'var(--text-main)',
                                backdropFilter: 'blur(12px)'
                            }}
                        >
                            Explore Full Portfolio
                            <ArrowRight size={18} />
                        </motion.button>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
};

export default Portfolio;