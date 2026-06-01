import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import {
    Shield,
    Zap,
    Globe,
    ArrowUpRight
} from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Projects Completed', value: '2' },
        { label: 'Happy Clients', value: '2+' },
        { label: 'Tech Experts', value: '3' },
        { label: 'Years Experience', value: '1' },
    ];

    return (
        <>
            <Navbar />
            <section
                id="about"
                className="position-relative py-5 overflow-hidden"
                style={{
                    background: 'var(--bg-deep)'
                }}
            >
                {/* Background Glow */}
                <div
                    className="position-absolute top-50 start-50 translate-middle"
                    style={{
                        width: '800px',
                        height: '800px',
                        background: 'rgba(var(--highlight-rgb),0.06)',
                        filter: 'blur(180px)',
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
                    <div className="row align-items-center g-5">

                        {/* Left Content */}
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: -60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >

                                {/* Badge */}
                                <span
                                    className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill border border-info text-info small fw-bold text-uppercase mb-4"
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
                                    Our Story
                                </span>

                                {/* Heading */}
                                <h2 className="display-2 fw-bold text-main mb-4">
                                    Engineering The <br />
                                    <span className="text-highlight">
                                        Future With Intelligence
                                    </span>
                                </h2>

                                {/* Paragraph */}
                                <p
                                    className="text-secondary fs-5 mb-5 lh-lg"
                                    style={{
                                        maxWidth: '620px'
                                    }}
                                >
                                    LeopardX is a next-generation AI technology company focused on
                                    building futuristic digital ecosystems, intelligent software,
                                    and immersive experiences that redefine innovation in the modern world.
                                </p>

                                {/* Feature Cards */}
                                <div className="row g-4 mt-2">

                                    {/* Card 1 */}
                                    <div className="col-md-6">
                                        <motion.div
                                            whileHover={{
                                                y: -8,
                                                scale: 1.02
                                            }}
                                            className="h-100 p-4 rounded-5 border border-secondary"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                backdropFilter: 'blur(16px)',
                                                transition: '0.4s ease'
                                            }}
                                        >
                                            <div
                                                className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'rgba(var(--highlight-rgb),0.08)',
                                                    border: '1px solid rgba(var(--highlight-rgb),0.2)',
                                                    color: 'var(--highlight-color)',
                                                    boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.25)'
                                                }}
                                            >
                                                <Zap size={30} />
                                            </div>

                                            <h4 className="text-main fw-bold mb-3">
                                                Fast Execution
                                            </h4>

                                            <p className="text-secondary mb-4">
                                                Rapid prototyping, futuristic workflows,
                                                and agile development pipelines.
                                            </p>

                                            <div className="d-flex align-items-center gap-2 text-info fw-bold small text-uppercase">
                                                Learn More
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className="col-md-6">
                                        <motion.div
                                            whileHover={{
                                                y: -8,
                                                scale: 1.02
                                            }}
                                            className="h-100 p-4 rounded-5 border border-secondary"
                                            style={{
                                                background: 'rgba(255,255,255,0.04)',
                                                backdropFilter: 'blur(16px)',
                                                transition: '0.4s ease'
                                            }}
                                        >
                                            <div
                                                className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4"
                                                style={{
                                                    width: '70px',
                                                    height: '70px',
                                                    background: 'rgba(var(--highlight-rgb),0.08)',
                                                    border: '1px solid rgba(var(--highlight-rgb),0.2)',
                                                    color: 'var(--highlight-color)',
                                                    boxShadow: '0 0 25px rgba(var(--highlight-rgb),0.25)'
                                                }}
                                            >
                                                <Shield size={30} />
                                            </div>

                                            <h4 className="text-main fw-bold mb-3">
                                                Secure By Design
                                            </h4>

                                            <p className="text-secondary mb-4">
                                                Enterprise-grade cybersecurity engineered
                                                for modern digital infrastructures.
                                            </p>

                                            <div className="d-flex align-items-center gap-2 text-info fw-bold small text-uppercase">
                                                Learn More
                                                <ArrowUpRight size={16} />
                                            </div>
                                        </motion.div>
                                    </div>

                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side Stats */}
                        <div className="col-lg-6">
                            <motion.div
                                initial={{ opacity: 0, x: 60 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="position-relative"
                            >

                                {/* Main Glass Box */}
                                <div
                                    className="p-5 rounded-5 border border-secondary overflow-hidden"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        backdropFilter: 'blur(24px)',
                                        boxShadow: '0 0 60px rgba(var(--highlight-rgb),0.08)'
                                    }}
                                >

                                    {/* Floating Glow */}
                                    <div
                                        className="position-absolute top-0 start-50 translate-middle-x"
                                        style={{
                                            width: '250px',
                                            height: '250px',
                                            background: 'rgba(var(--highlight-rgb),0.15)',
                                            filter: 'blur(100px)',
                                            zIndex: 0
                                        }}
                                    />

                                    <div className="row g-4 text-center position-relative">

                                        {stats.map((stat, index) => (
                                            <div key={index} className="col-6">
                                                <motion.div
                                                    whileHover={{
                                                        y: -6,
                                                        scale: 1.04
                                                    }}
                                                    className="p-4 rounded-4 border border-secondary h-100"
                                                    style={{
                                                        background: 'rgba(255,255,255,0.03)',
                                                        backdropFilter: 'blur(12px)',
                                                        transition: '0.4s ease'
                                                    }}
                                                >
                                                    <h3
                                                        className="display-4 fw-bold mb-2"
                                                        style={{
                                                            color: 'var(--highlight-color)',
                                                            textShadow: '0 0 25px rgba(var(--highlight-rgb),0.7)'
                                                        }}
                                                    >
                                                        {stat.value}
                                                    </h3>

                                                    <p className="text-secondary small fw-bold text-uppercase">
                                                        {stat.label}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        ))}

                                    </div>
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

export default About;
