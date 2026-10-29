import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="row about-content">
          {/* Left Side: Introduction */}
          <div className="col-lg-7 order-lg-1 hero-content">
            <span className="h3" data-aos="fade-up" data-aos-delay="0">
              Hi, I'm
            </span>

            <h1 className="name" data-aos="fade-up" data-aos-delay="200">
              <span>Sabid Ahmed</span>
            </h1>

            <div className="mt-3 mb-3" data-aos="fade-up" data-aos-delay="400">
              <button type="button" className="btn btn-sm me-2 btn-showcase">
                <i className="bi bi-stars"></i> Full Stack Web Engineer
              </button>

              {/* Backend Developer and WordPress Developer buttons
                  চাইলে এখানে আগের মতো যোগ করতে পারবে */}
            </div>

            <p className="mb-3" data-aos="fade-up" data-aos-delay="650">
              I'm a passionate Full Stack Web Developer specializing in creating
              responsive, user-friendly websites. Skilled in modern web
              technologies, I blend creativity and functionality to bring ideas
              to life.
            </p>

            {/* Social Links */}
            <div className="social-icons pb-2 pt-2 mb-2">
              <a
                href="https://github.com/sabidahmed798"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
                data-aos="fade-up"
                data-aos-delay="620"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/sabid-ahmed/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
                data-aos="fade-up"
                data-aos-delay="690"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="https://discord.com/users/1520287353007112263"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn discord"
                data-aos="fade-up"
                data-aos-delay="760"
                aria-label="Discord"
              >
                <i className="bi bi-discord"></i>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-wrap gap-2 call-to-action">
              <a
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="700"
                className="btn primary-bg-btn"
              >
                <i className="bi bi-envelope"></i> Contact Me
              </a>

              <a
                href="/assets/pdf/Sabid_Ahmed_Updated_CV.pdf"
                download="Sabid_Ahmed.pdf"
                className="btn btn-success"
                data-aos="fade-up"
                data-aos-delay="900"
              >
                <i className="bi bi-download"></i> Download CV
              </a>
            </div>
          </div>

          {/* Right Side: Profile Image */}
          <div className="col-lg-5 order-lg-2 about-portrait mb-4 mb-lg-0">
            <img
              src="https://avatars.githubusercontent.com/u/243601033?s=400&u=7aaad9fcd84a3492c085894250a2d707c2dee0de&v=4"
              className="img-fluid pic"
              alt="Sabid Ahmed - Profile"
              width="400"
              height="400"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
