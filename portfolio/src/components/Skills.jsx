
import "./Skills.css";

function Skills() {
  return (
    <div id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125789/html_pfe7fk.png" alt="HTML" />
          <p>HTML</p>
        </div>
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125785/css-3_jdbzeg.png" alt="CSS" />
          <p>CSS</p>
        </div>
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125787/js_f1mhmr.png" alt="JavaScript" />
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125787/science_dpmxlk.png" alt="React" />
          <p>React.js</p>
        </div>
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125788/social_h5w6o0.png" alt="GitHub" />
          <p>GitHub</p>
        </div>
        <div className="skill">
          <img src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1752125787/mobile_drna36.png" alt="Responsive Design" />
          <p>Responsive Design</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
