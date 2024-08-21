import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle"; // Імпорт перемикача теми
import styles from "../styles/Header.module.css";

const Header = () => {
  const { t } = useTranslation(); // Використовуємо хук для перекладу
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.navContainer}>
          <button className={styles.menuButton} onClick={toggleMenu}>
            ☰
          </button>
          <nav
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            onClick={closeMenu}
          >
            <ul className={styles.navLinks}>
              <li className={styles.navItem}>
                <Link className={styles.navLink} to="/" onClick={closeMenu}>
                  {t("home")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/biography"
                  onClick={closeMenu}
                >
                  {t("biography")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/legacy"
                  onClick={closeMenu}
                >
                  {t("legacy")}
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link
                  className={styles.navLink}
                  to="/contact"
                  onClick={closeMenu}
                >
                  {t("contact_us")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.switchersContainer}>
            <LanguageSwitcher /> {/* Додаємо перемикач мови */}
            <ThemeToggle /> {/* Додаємо перемикач теми */}
          </div>
        </div>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={closeMenu}></div>}
    </header>
  );
};

export default Header;
