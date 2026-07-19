import "./Skills.css";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql, SiTypescript } from "react-icons/si";

const skills = [
  { icon: <FaJava />, name: "Java", level: "90%" },
  { icon: <FaReact />, name: "React", level: "85%" },
  { icon: <FaJs />, name: "JavaScript", level: "90%" },
  { icon: <FaHtml5 />, name: "HTML5", level: "95%" },
  { icon: <FaCss3Alt />, name: "CSS3", level: "95 %" },
  { icon: <SiTypescript />, name: "TypeScript", level: "80%" },
  { icon: <SiMysql />, name: "MySQL", level: "85%" },
  { icon: <FaGitAlt />, name: "Git & GitHub", level: "85%" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        My Skills
      </motion.h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: skill.level }}
              ></div>
            </div>

            <span>{skill.level}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
