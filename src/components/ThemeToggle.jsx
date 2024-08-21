import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/ThemeToggle.module.css";

const ThemeToggle = () => {
  const { t } = useTranslation(); // Підключення перекладу
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
      {theme === "light" ? t("theme_dark") : t("theme_light")}
    </button>
  );
};

export default ThemeToggle;
