import "./Project.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Bank Management System",
    tech: "Java • JDBC • MySQL",
    description:
      "A banking application with account creation, deposits, withdrawals, balance enquiry, and transaction history.",
    github: "https://github.com/yourusername/bank-management-system",
    live: "#",
  },
  {
    title: "CourseCraft",
    tech: "React • Node.js • SQL",
    description:
      "AI-based curriculum recommendation platform that suggests personalized learning paths based on user interests.",
    github:
      "https://github.com/jogadatharun/CourseCraft-AI-Based-Smart-Curriculum-Selector",
    live: "#",
  },
  {
    title: "React Todo App",
    tech: "React • JavaScript",
    description:
      "Task management application with add, delete, edit, and complete task features.",
    github: "https://github.com/yourusername/react-todo",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        My Projects
      </motion.h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3>{project.title}</h3>

            <span>{project.tech}</span>

            <p>{project.description}</p>

            <div className="project-buttons">
              <a href={project.github} target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>

              <a href={project.live} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
