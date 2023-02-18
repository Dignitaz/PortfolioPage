import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/Repository.scss";

const Repository = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <div id="repository" className="repository">
      <div className="repository__title">
        <h3>{usedDictionary.repository_title}</h3>
      </div>
      <div className="repository__body">
        <div className="repository__body--example">
          <i className="fa-solid fa-person-digging"></i>
          <p>
            Work in Progress <i className="fa-regular fa-face-smile"></i>
          </p>
        </div>
      </div>
      <div className="repository__github">
        <p>{usedDictionary.repository_description}</p>
        <p>
          <a href="https://github.com/Dignitaz">
            Github <i className="fab fa-github"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Repository;
