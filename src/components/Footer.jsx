import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/Footer.module.css";

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className="container">
//         <p className={styles.footerText}>
//           <span>&copy; 2024 Yuri Shevchenko. </span>
//           <span>Всі права захищені.</span>
//         </p>
//         <div className={styles.socialLinks}>
//           <Link className={styles.socialLink} to="/contact">
//             Електронна пошта
//           </Link>
//           {/* <a className={styles.socialLink} href="tel:+380671967232">
//             Телефон
//           </a>
//           <a className={styles.socialLink} href="https://facebook.com">
//             Facebook
//           </a>
//           <a className={styles.socialLink} href="https://twitter.com">
//             Twitter
//           </a> */}
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  const { t } = useTranslation(); // Використовуємо хук для перекладу

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.footerText}>
          <span>&copy; 2024 Yuri Shevchenko. </span>
          <span>{t("footer_rights")}</span> {/* Використовуємо переклад */}
        </p>
        <div className={styles.socialLinks}>
          <Link className={styles.socialLink} to="/contact">
            {t("footer_contact")} {/* Використовуємо переклад */}
          </Link>
          {/* <a className={styles.socialLink} href="tel:+380671967232">
            {t("footer_phone")} 
          </a>
          <a className={styles.socialLink} href="https://facebook.com">
            {t("footer_facebook")}
          </a>
          <a className={styles.socialLink} href="https://twitter.com">
            {t("footer_twitter")}
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
