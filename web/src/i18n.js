import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './lang/en.json'
import nl from './lang/nl.json'

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en,
  nl
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbacks: true,
    fallbackLng: "nl",
    whitelist: ['nl', 'en'],
    react: {
        transKeepBasicHtmlNodesFor: ['br', 'b', 'i', 'p']
    },
    // keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;