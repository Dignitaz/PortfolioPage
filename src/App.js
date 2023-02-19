import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Skills from "./components/Skills";
import HiddenMenu from "./elements/HiddenMenu";
import Repository from "./components/Repository";
import Form from "./components/Form";
import Footer from "./components/Footer";
import LanguageBtn from "./elements/LanguageBtn";
import { LanguageContext, defaultObject } from "./Context/LanguageContext";
import { dictionary } from "./elements/Dictionary";

const App = () => {
  const [language, setLanguage] = useState(defaultObject.activeLanguage);
  const [usedDictionary, setUsedDictionary] = useState(dictionary[0]);

  return (
    <div>
      <LanguageContext.Provider
        value={{ language, setLanguage, usedDictionary, setUsedDictionary }}
      >
        <HiddenMenu />
        <LanguageBtn />
        <Header />
        <AboutMe />
        <Skills />
        <Repository />
        <Form />
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
};

export default App;
