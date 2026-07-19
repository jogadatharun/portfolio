import "./Project.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Bank Management System",
    tech: "Java • JDBC • MySQL",
    description:
      "Developed a banking application using Java, JDBC, and MySQL. It supports account creation, deposits, withdrawals, balance enquiry, and transaction history with a layered architecture.",
    github:
      "https://github.com/jogadatharun/Bank_Management_System_By_Using_JDBC",
    live: "",
  },
  {
    title: "CourseCraft - AI Based Smart Curriculum Selector",
    tech: "React • Node.js • SQL",
    description:
      "An AI-powered curriculum recommendation platform that generates personalized learning paths based on users' skills, interests, and career goals.",
    github:
      "https://github.com/jogadatharun/CourseCraft-AI-Based-Smart-Curriculum-Selector",
    live: "",
  },
  {
    title: "Portfolio Website",
    tech: "React • Vite • CSS",
    description:
      "A responsive personal portfolio website showcasing my skills, projects, resume, and contact information with smooth animations and a modern UI.",
    github: "https://github.com/jogadatharun/portfolio",
    live: "https://portfolio-dun-nine-cb2voiyszj.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="project-content">
              <h3>{project.title}</h3>

              <span>{project.tech}</span>

              <p>{project.description}</p>
            </div>

            <div className="project-buttons">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
