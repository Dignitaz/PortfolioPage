import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/CVButton.scss";

const CVButton = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <div className="header__cvbutton">
      <div className="header__cvbutton--circle">
        <a href="facebook.pl">
          <i className="fa-solid fa-file-pdf"></i>
        </a>
        <div className="beam">
          <p>{usedDictionary.downloadpdf_text_1}</p>
        </div>
      </div>
    </div>
  );
};

export default CVButton;
