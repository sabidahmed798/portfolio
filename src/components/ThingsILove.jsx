import React from "react";

const thingsILoveData = [
  {
    icon: "bi bi-robot",
    title: "Artificial Intelligence",
    text: "I enjoy exploring AI tools and discovering how artificial intelligence improves web development, creativity, and problem-solving while helping me build smarter, innovative, and user-friendly web applications.",
  },
  {
    icon: "bi bi-code-slash",
    title: "Web Development",
    text: "I love web development because it allows me to transform creative ideas into responsive, interactive, and user-friendly websites while continuously learning modern technologies and building useful digital solutions.",
  },
  {
    icon: "bi bi-lightbulb",
    title: "Learning & Reading",
    text: "I enjoy learning new technologies, reading tech blogs, and exploring fresh ideas. Continuous learning helps me improve my knowledge, develop new skills, and grow as a developer.",
  },
];

const ThingsILove = () => {
  return (
    <section id="things-i-love">
      <div className="container">
        <h6 className="text-center">
          <span className="btn btn-sm theme-button theme-text">Interests</span>
        </h6>
        <h2 className="section-heading text-center">Things I Love</h2>
        <div className="row justify-content-center pt-3 gy-4">
          {thingsILoveData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index} data-aos="fade-up">
              <div className="card">
                <div className="circle-container">
                  <div className="circle">
                    <i className={item.icon}></i>
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-title">{item.title}</p>
                  <p className="card-text">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThingsILove;
