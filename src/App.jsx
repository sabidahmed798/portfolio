import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ThingsILove from "./components/ThingsILove";
import About from "./components/About";
import Skills from "./components/Skills";
import Tools from "./components/Tools";
import Certificates from "./components/Certificates";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectShowcase from "./components/ProjectShowCase";
import { Helmet } from "react-helmet-async";

function App() {
  const skills = [
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "Next.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
  ];

  return (
    <>
      <Helmet>
        <title>Sabid Ahmed - Full Stack Web Developer</title>
        <meta name="description" content="Full Stack Web Developer" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "",
            "@type": "Person",
            name: "Sabid Ahmed",
            // url: "https://daniyal-works-portfolio.vercel.app/",
            jobTitle: "Full Stack Web Developer ",
            skills: [
              "React",
              "Node.js",
              "Laravel",
              ".NET",
              "Flutter",
              "UI/UX Design",
            ],
          })}
        </script>
      </Helmet>
      <Header />
      <Hero />
      <ThingsILove />
      <About />
      <Skills />
      <Tools />
      {/* <Certificates /> */}
      <Projects />
      <ProjectShowcase />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
