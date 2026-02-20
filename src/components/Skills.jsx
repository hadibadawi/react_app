// src/components/Skills.jsx
import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  { name: "HTML", level: "90%", color: "#51ff00" },
  { name: "JavaScript  & React.js & npm", level: "60%", color: "#ff9a3e" },
  { name: "CSS & SASS & Bootstrap", level: "80%", color: "#bf00ff" },
  { name: "webpack & vite ", level: "70%", color: "#dcdcdc" },
  { name: "PYTHON", level: "60%", color: "#faf603" },
  { name: "GIT & GITHUB", level: "80%", color: "#fa0303" },
];

const Skills = () => {
  return (
    <motion.section
      className="skills-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card glass-card">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: skill.level,
                  backgroundColor: skill.color,
                  boxShadow: `0 0 15px ${skill.color}`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
