import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";
import EmailModal from "./EmailModal";

const Footer = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const modalState = sessionStorage.getItem("isModalOpen");
    if (modalState === "true") {
      setIsModalOpen(true);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
    sessionStorage.setItem("isModalOpen", "true");
  };

  const closeModal = () => {
    setIsModalOpen(false);
    sessionStorage.setItem("isModalOpen", "false");
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerText}>
          <span>&copy; {t("footer_name")}. </span>
          <span>{t("footer_rights")}</span>
        </p>
        <div className={styles.socialLinks}>
          <button className={styles.socialLink} onClick={openModal}>
            {t("footer_contact")}
          </button>
        </div>
      </div>
      <EmailModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
};

export default Footer;
