import React from "react";

function Skills() {
  return (
    <>
      {/*  Skills */}
      <section id="skills">
        <div class="container">
          <h6 class="text-center">
            <span class="btn btn-sm theme-button theme-text">
              What do I know?
            </span>
          </h6>
          <h2 class="section-heading text-center">Skills</h2>
          <p class="text-center muted-text mt-3 mb-4">
            Here are some of the technologies that are part of my current stack:
          </p>

          <div
            class="row justify-content-center row-cols-2 row-cols-md-3 row-cols-lg-6 mt-4 gy-4 skills-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {/* HTML  */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML"
                />
                <p class="skill-name">HTML</p>
              </div>
            </div>

            {/* CSS  */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                  alt="CSS"
                />
                <p class="skill-name">CSS</p>
              </div>
            </div>

            {/*  JavaScript  */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                  alt="JavaScript"
                />
                <p class="skill-name">JavaScript</p>
              </div>
            </div>

            {/* PHP */}
            <div className="col">
              <div className="skill">
                <img
                  className="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                  alt="Tailwind CSS"
                />
                <p className="skill-name">Tailwind CSS</p>
              </div>
            </div>

            {/*  React  */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  alt="React"
                />
                <p class="skill-name">React</p>
              </div>
            </div>
            {/* Next.js */}
            <div className="col">
              <div className="skill">
                <img
                  className="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                  alt="Next.js"
                />
                <p className="skill-name">Next.js</p>
              </div>
            </div>
            {/* Better Auth */}
            <div className="col">
              <div className="skill">
                <img
                  className="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                  alt="Express.js"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <p className="skill-name">Express.js</p>
              </div>
            </div>
            {/*  Node.js  */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  alt="Node.js"
                />
                <p class="skill-name">Node.js</p>
              </div>
            </div>

            {/*  MongoDB */}
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                  alt="MongoDB"
                />
                <p class="skill-name">MongoDB</p>
              </div>
            </div>

            {/* SQL Server 
            <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="assets/images/skills/microsoft-sql-server-logo.svg"
                  alt="SQL Server"
                />
                <p class="skill-name">SQL Server</p>
              </div>
            </div> */}
            {/* MERN Stack */}
            <div class="col">
              <div class="skill mern-card">
                <img
                  class="skill-image mern-img"
                  src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs"
                  alt="MERN Stack"
                />
                <p class="skill-name text-center">MERN Stack</p>
              </div>
            </div>

            {/*  Flutter  */}
            {/* <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
                  alt="Flutter"
                />
                <p class="skill-name">Flutter</p>
              </div>
            </div> */}

            {/*  Firebase  */}
            {/* <div class="col">
              <div class="skill">
                <img
                  class="skill-image"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                />
                <p class="skill-name">Firebase</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
