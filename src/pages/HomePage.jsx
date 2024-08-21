import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("home_title")} | Home - Юрій Шевченко | Yuri Shevchenko
        </title>
        <meta name="description" content={t("home_description")} />
      </Helmet>
      <div className="container">
        <div className={styles.homePage}>
          <div className={styles.leftSection}>
            <img
              className={styles.newPhoto}
              src="/images/Sheva-black-min.png"
              alt={t("home_photo_alt")}
            />
            <p className={styles.description}>{t("home_content")}</p>
          </div>
          <img
            className={styles.photo}
            src="/images/ShevaHome-min.jpg"
            alt={t("home_photo_alt")}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
