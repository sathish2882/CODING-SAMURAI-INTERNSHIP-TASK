
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub,FaPhone  } from "react-icons/fa";
import './Contact.css';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h2>Contact Me</h2>
      <div className="contact-text">
        <div className='contact-item'>
          <MdEmail className="contact-logos" />
        <p> Email: <a href="mailto:sathish19222978sk@gmail.com"> sathish19222978sk@gmail.com</a>
        </p>
        
        </div>
        <div className='contact-item'>
          <FaPhone className="contact-logos" />
        <p> Phone: 
          <a href="tel:+919952402915"> +91 9952402915</a>
        </p>
        
        </div>
        <div className='contact-item'>
          <FaLinkedin className="contact-logos" />
        <p> LinkedIn: <a href="https://www.linkedin.com/in/sathish-mariyappan" target="_blank" rel="noreferrer">
            linkedin.com/in/sathish-mariyappan
          </a>
        </p>
        </div>
        <div className='contact-item'>
          <FaGithub className="contact-logos" />
        <p> GitHub: <a href="https://github.com/sathish2882/instashare" target="_blank" rel="noreferrer">
            github.com/sathish2882
          </a>
        </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
