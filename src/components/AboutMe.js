import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
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
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={me1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={me2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item " data-bs-interval="3000">
                <img src={me3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
