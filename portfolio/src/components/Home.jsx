import "./Home.css";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home-left">
        <img
          src="https://res.cloudinary.com/dq9zq6ubg/image/upload/v1751954803/WhatsApp_Image_2025-07-08_at_11.18.21_209d62a6_ujoxem.jpg"
          alt="Sathish"
          className="home-image"
        />
      </div>

      <div className="home-right">
        <h1>
          Hello, I’m <span className="blue">Sathish</span>
        </h1>
        <p className="home-subtitle">
          Frontend Developer passionate about building modern, responsive, and
          user-friendly web applications using React.js and CSS.
        </p>
        <div className="download-section">
          <a href="#projects" className="home-button">
            View Projects
          </a>
          <a
            href="/Sathish_M_Resume.pdf"
            download="Sathish_M_Resume.pdf"
            className="download-resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
