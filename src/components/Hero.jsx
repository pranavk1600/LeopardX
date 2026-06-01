import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="position-relative overflow-hidden d-flex align-items-center"
      style={{
        minHeight: '100vh',
        background: 'var(--bg-deep)'
      }}
    >

      ```
      {/* Background Leopard Image */}
      {/* Background Leopard Video */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden"
        style={{
          zIndex: 1
        }}
      >

        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-100 h-100"
          style={{
            objectFit: 'cover',
            opacity: 1,
            filter: `
      brightness(1)
      contrast(1.05)
      saturate(1.05)
    `
          }}
        >
          <source src="/videos/leopard.mp4" type="video/mp4" />
        </video>

        {/* Dark Cinematic Overlay */}
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              'linear-gradient(to right, rgba(5,8,22,0.75) 15%, rgba(5,8,22,0.25) 50%, rgba(5,8,22,0.75) 100%)'
          }}
        />

        {/* Cyan Glow */}
        <div
          className="position-absolute top-50 start-50 translate-middle"
          style={{
            width: '900px',
            height: '900px',
            background: 'rgba(var(--highlight-rgb),0.15)',
            filter: 'blur(180px)',
            pointerEvents: 'none'
          }}
        />

      </motion.div>

      {/* Grid Background */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
          zIndex: 1
        }}
      />

      {/* Hero Content */}
      <div
        className="container position-relative"
        style={{ zIndex: 3 }}
      >
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-7">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
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
                Pioneering the Future
              </span>

              {/* Main Heading */}
              <h1
                className="display-1 fw-black text-main mb-4"
                style={{
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: '-3px'
                }}
              >
                LEOPARD
                <span className="text-highlight">
                  X
                </span>
              </h1>

              {/* Subtitle */}
              <h2
                className="text-info mb-4"
                style={{
                  fontWeight: 300,
                  letterSpacing: '4px',
                  textTransform: 'uppercase'
                }}
              >
                Speed. Agility. Innovation.
              </h2>

              {/* Description */}
              <p
                className="lead text-white mb-5"
                style={{
                  maxWidth: '650px',
                  lineHeight: 1.8,
                  fontSize: '1.15rem'
                }}
              >
                LeopardX is a futuristic AI technology company specializing
                in high-performance software, intelligent systems,
                and next-generation digital experiences.
              </p>

              {/* Buttons */}
              <div className="d-flex flex-wrap gap-4">

                {/* Primary Button */}
                <motion.button
                  onClick={() => window.location.href = '#contact'}
                  whileHover={{
                    scale: 1.05,
                    y: -3
                  }}
                  className="btn px-5 py-3 rounded-4 fw-bold text-uppercase d-flex align-items-center gap-2"
                  style={{
                    background: 'var(--highlight-color)',
                    color: 'var(--bg-deep)',
                    border: 'none',
                    boxShadow: '0 0 30px rgba(var(--highlight-rgb),0.4)',
                    letterSpacing: '1px'
                  }}
                >
                  Launch Project
                  <ArrowRight size={18} />
                </motion.button>

                {/* Secondary Button */}
                <motion.button
                  onClick={() => window.location.href = '#services'}
                  whileHover={{
                    scale: 1.05,
                    y: -3
                  }}
                  className="btn px-5 py-3 rounded-4 fw-bold text-uppercase"
                  style={{
                    background: 'var(--glass)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-main)',
                    backdropFilter: 'blur(12px)',
                    letterSpacing: '1px'
                  }}
                >
                  Explore Services
                </motion.button>

              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{
          zIndex: 5,
          color: 'var(--highlight-color)'
        }}
      >
        <ChevronDown size={36} />
      </motion.div>

    </section>

  );
};

export default Hero;
