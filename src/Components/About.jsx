import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>

        <p>
          Hello! I'm <span>Jogada Tharun</span>, a passionate Java and React
          Developer with a B.Tech in Computer Science.
        </p>

        <p>
          I enjoy building responsive web applications and solving real-world
          problems using Java, React, JavaScript, JDBC, MySQL, HTML, and CSS.
        </p>

        <p>
          I am always eager to learn new technologies and contribute to
          innovative software projects.
        </p>

        <div className="about-details">
          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.Tech - Computer Science</p>
          </div>

          <div className="card">
            <h3>💻 Experience</h3>
            <p>Java & React Projects</p>
          </div>

          <div className="card">
            <h3>🚀 Goal</h3>
            <p>Become a Full Stack Java Developer</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
