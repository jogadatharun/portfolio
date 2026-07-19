import "./Contact.css";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        Contact Me
      </motion.h2>

      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>tharunjogada33@gmail.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 8688837522</p>
            </div>
          </div>

          <div className="info-box">
            <FaGithub className="icon" />
            <div>
              <h3>GitHub</h3>
              <a
                href="https://github.com/jogadatharun"
                target="_blank"
                rel="noreferrer"
              >
                github.com/jogadatharun
              </a>
            </div>
          </div>

          <div className="info-box">
            <FaLinkedin className="icon" />
            <div>
              <h3>LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/jogada-tharun/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jogada-tharun
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea rows="6" placeholder="Write your message..."></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
