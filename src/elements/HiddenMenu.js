import React, { useContext, useState } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import "../styles/HiddenMenu.scss";

const HiddenMenu = () => {
  const [hide, setHide] = useState(false);
  const { usedDictionary } = useContext(LanguageContext);
  const handleHideMenu = () => {
    setHide((prevValue) => !prevValue);
  };

  return (
    <div className={`${hide ? "hiddenmenu hide" : "hiddenmenu"}`}>
      {/* <div className="hiddenmenu--shadow"></div> */}
      <div className="hiddenmenu--buttondiv">
        <button onClick={handleHideMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <nav className="hiddenmenu--navbar">
        <a href="#main" className="link two">
          {usedDictionary.hiddenmenu_opt1}
        </a>
        <a href="#aboutme" className="link two">
          {usedDictionary.hiddenmenu_opt2}
        </a>
        <a href="#skills" className="link two">
          {usedDictionary.hiddenmenu_opt3}
        </a>
        <a href="#repository" className="link two">
          {usedDictionary.hiddenmenu_opt4}
        </a>
        <a href="#form" className="link two">
          {usedDictionary.hiddenmenu_opt5}
        </a>
      </nav>
    </div>
  );
};

export default HiddenMenu;
