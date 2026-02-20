// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  offscreen: { opacity: 0, scale: 0.8 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 },
  },
};
const projectsData = [
  {
    title: "Professional design",
    img: "../public/unnamed.jpg",
    link: "",
  },
  {
    title: "react.js",
    img: "../public/react.png",
    link: "",
  },
  {
    title: "python and django",
    img: "../public/python and jango.jpg",
    link: "",
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="section-title">Selected Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="project-card glass-card"
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="project-image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
