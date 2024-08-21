import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "../styles/BiographyPage.module.css";

const BiographyPage = () => {
  const { t } = useTranslation(); // Використання хука для перекладу

  return (
    <>
      <Helmet>
        <title>
          {t("biography_title")} | Biography - Юрій Шевченко | Yuri Shevchenko
        </title>
        <meta
          name="description"
          content={t("biography_description")} // Використовуємо переклад
        />
      </Helmet>
      <div className="container">
        <div className={styles.biographyPage}>
          <div className={styles.textSection}>
            <h1>{t("biography_name")}</h1> {/* Використовуємо переклад */}
            <p className={styles.importantDates}>{t("biography_dates")}</p>{" "}
            {/* Використовуємо переклад */}
            <h2>{t("biography_section_title")}</h2>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_1")}</p>{" "}
            {/* Використовуємо переклад */}
            <h2>{t("biography_section_title_2")}</h2>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_2")}</p>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_3")}</p>{" "}
            {/* Використовуємо переклад */}
            <h2>{t("biography_section_title_3")}</h2>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_4")}</p>{" "}
            {/* Використовуємо переклад */}
            <h2>{t("biography_section_title_4")}</h2>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_5")}</p>{" "}
            {/* Використовуємо переклад */}
            <p>{t("biography_section_text_6")}</p>{" "}
            {/* Використовуємо переклад */}
          </div>
          <div className={styles.imageSection}>
            <img
              className={styles.photo}
              src="/images/biography-min.jpg"
              alt={t("biography_photo_alt")} // Використовуємо переклад
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BiographyPage;
