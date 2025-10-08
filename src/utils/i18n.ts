// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: { title: "Company Profile" } },
    vi: { translation: { title: "Hồ sơ năng lực" } },
    // add more languages here
  },
  lng: "vi",
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
