import React, { useContext } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/CVButton.scss";

const CVButton = () => {
  const { usedDictionary } = useContext(LanguageContext);
  return (
    <div className="header__cvbutton">
      <div className="header__cvbutton--circle">
        <a href="https://www.mediafire.com/file/iipyaz0d4ywgvpe/Przemys%25C5%2582aw_Sobolewski.pdf/file">
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
