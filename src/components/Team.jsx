import React from 'react';
import { motion } from 'framer-motion';
import vaiPhoto from '../../team/vai.png';
import pranavPhoto from '../../team/pranav.png';
import harshadPhoto from '../../team/harshad.png';

const members = [
  {
    name: 'Mr. Vaishanav Ghadge',
    role: 'Co-Founder & Chief Technology Officer (CTO)',
    desc: 'Leads the technical vision of LeopardX Technologies, specializing in software architecture, enterprise application development, AI integration, and delivering scalable technology solutions.',
    photo: vaiPhoto,
  },
  {
    name: 'Mr. Pranav Kondhalkar',
    role: 'Co-Founder & Chief Executive Officer (CEO)',
    desc: 'Leads business strategy, client relationships, project management, and drives innovation to deliver modern digital solutions for businesses.',
    photo: pranavPhoto,
  },
  {
    name: 'Mr. Harshad Nikam',
    role: 'Co-Founder & Business Development Manager',
    desc: 'Focuses on business development, client acquisition, software development, and ensuring successful project delivery through strong client partnerships.',
    photo: harshadPhoto,
  },
];

const Team = () => {
  return (
    <section id="team" className="team-section" aria-labelledby="team-title">
      <div className="lx-container">
        
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="label-tag" style={{ marginBottom: 18, display: 'inline-flex' }}>
            <span className="dot" aria-hidden="true" />
            Leadership
          </span>
          <h2 id="team-title" className="section-title">
            Meet Our <span className="text-gradient">Leadership Team</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto', marginTop: 12 }}>
            The passionate leaders behind LeopardX Technologies, building modern enterprise software and helping businesses grow through technology.
          </p>
        </motion.div>

        <div className="team-grid">
          {members.map((member, idx) => (
            <motion.div
              key={member.name}
              className="team-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.65, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="team-card-accent" />
              
              <div className="team-photo-wrapper">
                <img
                  src={member.photo}
                  alt={`${member.name} - ${member.role}`}
                  className="team-photo"
                  loading="lazy"
                />
              </div>

              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
              <p className="team-member-desc">{member.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;
