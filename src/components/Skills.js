import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/Skills.scss";

const Skills = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <>
      <section id="skills" className="skills">
        <div className="skills__title">
          <h3>{usedDictionary.skills_title}</h3>
        </div>
        <div className="skills__logos">
          <div data-aos="fade-up">
            <i class="fa-brands fa-html5"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="100">
            <i class="fa-brands fa-css3"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="150">
            <i class="fa-brands fa-sass"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <i class="fa-brands fa-bootstrap"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="250">
            <i class="fa-brands fa-js"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <i class="fa-brands fa-react"></i>
          </div>
          <div data-aos="fade-up" data-aos-delay="350">
            <i class="fa-brands fa-git-alt"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
