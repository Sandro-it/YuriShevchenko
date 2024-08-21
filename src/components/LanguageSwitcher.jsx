import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/LanguageSwitcher.module.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "uk"
  );
  let timeoutId;

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setShowLanguages(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setShowLanguages(false);
    }, 300);
  };

  const changeLanguage = (lng) => {
    setLanguage(lng);
    setShowLanguages(false);
  };

  return (
    <div
      className={styles.languageSwitcher}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.languageButton} onClick={toggleLanguages}>
        {language === "uk" ? "Українська" : "English"}
      </button>
      {showLanguages && (
        <ul
          className={styles.languageList}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li onClick={() => changeLanguage("uk")}>Українська</li>
          <li onClick={() => changeLanguage("en")}>English</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
