import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import Carousel from "react-bootstrap/Carousel";
import "../styles/AboutMe.scss";
import me1 from "../images/me1.jpg";
import me2 from "../images/me2.jpg";
import me3 from "../images/me3.jpg";

const AboutMe = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <div id="aboutme" className="aboutme">
      <div className="aboutme__title">
        <h2> {usedDictionary.aboutmesection_title} </h2>
      </div>
      <div className="aboutme__body">
        <div className="aboutme__body--description">
          <p>{usedDictionary.aboutmesection_description_1}</p>
          <p>{usedDictionary.aboutmesection_description_2}</p>
          <p>{usedDictionary.aboutmesection_description_3}</p>
          <p> {usedDictionary.aboutmesection_description_4}</p>
          <p>{usedDictionary.aboutmesection_description_5}</p>
          <p> {usedDictionary.aboutmesection_description_6}</p>
        </div>
        <div className="aboutme__body--carousel">
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={me1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={me2} alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img className="d-block w-100" src={me3} alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
