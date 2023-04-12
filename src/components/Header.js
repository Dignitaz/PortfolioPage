import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/Header.scss";
import lola from "../images/nobcg_lola.png";
import HeaderButton from "../elements/HeaderButton";
import CVButton from "../elements/CVButton";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = (props) => {
  const { usedDictionary } = useContext(LanguageContext);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div id="main" className="header">
      <div className="header__layout">
        <div className="header__layout--red  beateffect"></div>
        <div className="header__layout--blue  beateffectblue"></div>
      </div>
      <CVButton />
      <div className="header__main">
        <div className="header__main--img" data-aos="fade-up">
          <img src={lola} alt="my_profile_photo" />
        </div>
        <div className="header__main--title">
          <h3>Junior Frontend Developer.</h3>
          <p> {usedDictionary.headerdescription_text_1}</p>
        </div>
      </div>
      <div className="header__social-media">
        <p>
          <a href="https://www.facebook.com/przemek.sobolewski.96">
            <i className="fab fa-facebook-f"></i>
          </a>
        </p>
        <p>
          <a href="https://github.com/Dignitaz">
            <i className="fab fa-github"></i>
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/przemys%C5%82aw-sobolewski-1711861a7/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </p>
      </div>
      <div className="header__headerbutton">
        <HeaderButton />
      </div>
    </div>
  );
};

export default Header;
