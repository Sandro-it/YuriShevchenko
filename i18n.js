import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./src/locales/en.json";
import translationUK from "./src/locales/uk.json";

const resources = {
  en: {
    translation: translationEN,
  },
  uk: {
    translation: translationUK,
  },
};

// Перевіряємо, чи є збережена мова в localStorage
const savedLanguage = localStorage.getItem("language") || "uk"; // Мова за замовчуванням "uk"

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage, // Встановлюємо збережену мову або мову за замовчуванням
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
