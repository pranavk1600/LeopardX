import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, FolderOpen, Headphones } from 'lucide-react';

const stats = [
  { icon: <FolderOpen size={22} aria-hidden="true" />, num: 5,  unit: '+', label: 'Delivered Projects' },
  { icon: <Users size={22} aria-hidden="true" />,      num: 3,  unit: '+', label: 'Happy Clients'      },
  { icon: <CheckCircle size={22} aria-hidden="true" />,num: 3,  unit: '+', label: 'Ongoing Projects'   },
  { icon: <Headphones size={22} aria-hidden="true" />, num: 24, unit: '/7', label: 'Support Available' },
];

// Animated counter hook
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // easeOutCubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const StatItem = ({ stat }) => {
  const { count, ref } = useCounter(stat.num);
  return (
    <motion.div
      className="stat-item"
      ref={ref}
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
    >
      <div className="stat-icon">{stat.icon}</div>
      <span className="stat-number" aria-label={`${stat.num}${stat.unit} ${stat.label}`}>
        {count}<span>{stat.unit}</span>
      </span>
      <div className="stat-label">{stat.label}</div>
    </motion.div>
  );
};

const ClientStats = () => {
  return (
    <section id="stats" className="stats-section" aria-labelledby="stats-title">

      <div className="lx-container">
        <motion.div
          className="stats-section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            Trusted by Growing Businesses
          </span>
          <h2 id="stats-title" className="section-title">
            Numbers That{' '}
            <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} />
          ))}
        </motion.div>
      </div>

    </section>
  );
};

export default ClientStats;
