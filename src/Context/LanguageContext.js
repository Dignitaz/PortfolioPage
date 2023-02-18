import { createContext } from "react";

export const defaultObject = {
  activeLanguage: "en",
};

export const LanguageContext = createContext(defaultObject);
