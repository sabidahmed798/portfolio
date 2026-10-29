import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <h6 className="text-center">
            <span className="btn btn-sm theme-button theme-text">
              But who am I?
            </span>
          </h6>
          <h2 className="section-heading text-center">About Me</h2>

          <div
            className="row justify-content-center"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            {/* Profile Image */}
            <div className="col-lg-5 about-portrait mb-4 mb-lg-0">
              <img
                src="https://avatars.githubusercontent.com/u/243601033?s=400&u=7aaad9fcd84a3492c085894250a2d707c2dee0de&v=4"
                className="img-fluid pic"
                alt="About Me Portrait"
              />
            </div>

            {/* Bio + Tabs */}
            <div className="col-lg-7">
              <p className="bio">
                Hi, I'm Sabid Ahmed, an aspiring Full Stack Web Developer
                passionate about building modern, responsive, and user-friendly
                web applications. I work with React.js, Next.js, JavaScript, and
                TypeScript to create engaging frontend experiences. I'm also
                learning backend development with Node.js, Express.js, and
                MongoDB to build full-stack applications. I enjoy exploring AI
                tools, learning new technologies, and solving real-world
                problems through code. My goal is to become a skilled Full Stack
                Developer and create innovative digital solutions that make
                people's lives easier.
              </p>

              {/* Tabs Navigation */}
              <ul className="nav nav-tabs mt-4" id="aboutTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="tab-skills-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-skills"
                    type="button"
                    role="tab"
                    aria-controls="tab-skills"
                    aria-selected="true"
                  >
                    Skills
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tab-education-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-education"
                    type="button"
                    role="tab"
                    aria-controls="tab-education"
                    aria-selected="false"
                  >
                    Education
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="tab-experience-btn"
                    data-bs-toggle="tab"
                    data-bs-target="#tab-experience"
                    type="button"
                    role="tab"
                    aria-controls="tab-experience"
                    aria-selected="false"
                  >
                    Experience
                  </button>
                </li>
              </ul>

              {/* Tabs Content */}
              <div className="tab-content mt-3" id="aboutTabsContent">
                {/* Skills Tab */}
                <div
                  className="tab-pane fade show active"
                  id="tab-skills"
                  role="tabpanel"
                  aria-labelledby="tab-skills-btn"
                >
                  <h4>Skills</h4>
                  <ul>
                    <li>
                      <strong>Frontend Development:</strong> Crafting responsive
                      and interactive web interfaces that elevate user
                      experiences.
                    </li>
                    <li>
                      <strong>Backend Development:</strong> Building robust
                      server-side solutions to ensure seamless functionality and
                      scalability.
                    </li>
                    <li>
                      <strong>Technologies:</strong> HTML, CSS, Tailwind CSS,
                      JavaScript, React, TypeScript, Node.js, Express.js,
                      shadcn, MongoDB, BetterAuth, Git.
                    </li>
                    <li>
                      <strong>Artificial Intelligence:</strong> I enjoy
                      exploring AI tools and discovering how artificial
                      intelligence improves web development, creativity, and
                      problem-solving while helping me build smarter,
                      innovative, and user-friendly web applications.
                    </li>
                    {/* <li>
                      <strong>Other:</strong> Basic knowledge of Angular,
                      Firebase, Crystal Reports, and office automation
                      expertise.
                    </li> */}
                  </ul>
                </div>

                {/* Education Tab */}
                <div
                  className="tab-pane fade"
                  id="tab-education"
                  role="tabpanel"
                  aria-labelledby="tab-education-btn"
                >
                  <h4>Education</h4>
                  <ul>
                    <li>
                      <strong>2021–2022 </strong>
                      <br />
                      <strong>
                        Diploma in Engineering — Computer Science & Technology
                      </strong>
                      <br />
                      Jashore Polytechnic Institute
                      <br />
                    </li>
                  </ul>
                </div>

                {/* Experience Tab */}
                <div
                  className="tab-pane fade"
                  id="tab-experience"
                  role="tabpanel"
                  aria-labelledby="tab-experience-btn"
                >
                  <h4>Experience</h4>
                  <ul>
                    <li>
                      <strong>Frontend Developer</strong>
                      <br />
                      Personal Projects & Self-Directed Learning
                      <br />
                      <em>2025 – Present</em>
                      <br />
                      <ul>
                        <li>
                          Building responsive websites using HTML, CSS,
                          JavaScript and Tailwind CSS.
                        </li>
                        <li>
                          Developing web applications with React and Next.js.
                        </li>
                        <li>
                          Integrating APIs and working with authentication and
                          application state.
                        </li>
                        <li>
                          Learning backend development with Node.js, Express.js
                          and MongoDB.
                        </li>
                        {/* <li>
                          Collaborate with cross-functional teams to deliver
                          high-quality software solutions.
                        </li> */}
                        {/* <li>
                          Develop frontend features using HTML, CSS, JavaScript,
                          jQuery, and AJAX.
                        </li> */}
                        {/* <li>
                          Ensure applications follow best practices for
                          reliability, security, and scalability.
                        </li> */}
                      </ul>
                    </li>

                    <li>
                      <strong>Personal Project Developer</strong>
                      <br />
                      Independent Projects
                      <br />
                      {/* <em>October 2024 - March 2026</em> */}
                      <br />
                      <ul>
                        <li>
                          Built projects such as a market price application and
                          user management system.
                        </li>
                        <li>
                          Practiced CRUD operations, API integration and
                          responsive UI design.
                        </li>
                        <li>Used Git and GitHub for version control.</li>
                        {/* <li>
                          Participated in development and testing of new
                          modules.
                        </li> */}
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
