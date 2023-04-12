import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/Repository.scss";
import logo from "../images/logo.png";

const Repository = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <div id="repository" className="repository">
      <div className="repository__title">
        <h3>{usedDictionary.repository_title}</h3>
      </div>
      <div className="repository__body">
        {/* <div className="repository__body--example">
          <i className="fa-solid fa-person-digging"></i>
          <p>
            Work in Progress <i className="fa-regular fa-face-smile"></i>
          </p>
        </div> */}
        <div className="repository__body--position">
          <div className="positiontext">
            <h4>Pizzeria Speedy Gonzalo Romano</h4>
            <p className="positiontext_paragraph">
              {usedDictionary.repository_desc1}
            </p>
            <p className="positiontext_links">
              Link to GitHub:{" "}
              <a href="https://github.com/Dignitaz/PizzeriaGonzaloRomano">
                https://github.com/Dignitaz/PizzeriaGonzaloRomano
              </a>
            </p>
          </div>
          <div className="positionimg">
            <img src={logo} alt="Pizzeria Gonzalo Romano logo"></img>
          </div>
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
