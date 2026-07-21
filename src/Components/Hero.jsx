import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import "./Hero.css";
import profile from "../assets/Profile.jpg";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          👋 Hello, I'm
        </motion.h3>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Jogada Tharun
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Java Developer | React Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Passionate about building responsive web applications using Java,
          React, JavaScript, HTML, CSS, TypeScript, JDBC, and MySQL.
        </motion.p>

        <div className="hero-buttons">
          <a href="/Jogada_Tharun_Resume.pdf" download className="btn">
            <FaDownload />
            Download Resume
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="social-icons">
          <a
            href="https://github.com/jogadatharun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jogada-tharun/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <motion.div
        className="hero-image"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={profile} alt="Jogada Tharun" />
      </motion.div>
    </section>
  );
};

export default Hero;
