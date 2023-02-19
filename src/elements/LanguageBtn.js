import React, { useContext, useEffect } from "react";
import { LanguageContext } from "../Context/LanguageContext";
import { dictionaryStart } from "./Dictionary";
import "../styles/LanguageBtn.scss";
import ger from "../images/icons8-germany-16.png";
import pol from "../images/icons8-poland-16.png";
import eng from "../images/icons8-united-kingdom-16.png";

const LanguageBtn = () => {
  const { language, setLanguage, setUsedDictionary } =
    useContext(LanguageContext);
  // useEffect((en) => {
  //   setNewWalue(en);
  // }, []);
  let newLanguage = () => {
    if (language === "en") {
      setLanguage("pl");
    } else if (language === "pl") {
      setLanguage("de");
    } else if (language === "de") {
      setLanguage("en");
    }
  };

  const setNewWalue = async (lang) => {
    const newValue = dictionaryStart(lang);
    await setUsedDictionary(newValue);
    newLanguage();
  };

  return (
    <div className="languagebtn">
      <button
        className="languagebtn__btn--en"
        onClick={() => setNewWalue("en")}
      >
        <img src={eng} alt="uk flag" /> EN
      </button>
      <button
        className="languagebtn__btn--pl"
        onClick={() => setNewWalue("pl")}
      >
        <img src={pol} alt="polish flag" /> PL
      </button>
      <button
        className="languagebtn__btn--de"
        onClick={() => setNewWalue("de")}
      >
        <img src={ger} alt="german flag" /> DE
      </button>
    </div>
  );
};

export default LanguageBtn;
