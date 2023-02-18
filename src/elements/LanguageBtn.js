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
  useEffect(() => {
    setNewWalue();
  }, []);
  let newLanguage = () => {
    if (language === "en") {
      setLanguage("pl");
    } else if (language === "pl") {
      setLanguage("de");
    } else if (language === "de") {
      setLanguage("en");
    }
  };

  const setNewWalue = async () => {
    const newValue = dictionaryStart(language);
    await setUsedDictionary(newValue);
    newLanguage();
  };

  return (
    <div className="languagebtn">
      <button className="languagebtn__btn" onClick={setNewWalue}>
        <img src={eng} alt="uk flag" /> EN | <img src={pol} alt="polish flag" />{" "}
        PL | <img src={ger} alt="german flag" /> DE
      </button>
    </div>
  );
};

export default LanguageBtn;
