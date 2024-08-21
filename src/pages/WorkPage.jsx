import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Імпортуйте хук для перекладу
import styles from "../styles/WorkPage.module.css";
import worksData from "../data/worksData";

const WorkPage = () => {
  const { t } = useTranslation(); // Використовуємо хук для перекладу
  const { workId } = useParams();
  const data = worksData();
  const work = data.find((work) => work.id === workId);

  if (!work) {
    return <div>{t("work_not_found")}</div>; // Додайте переклад для випадку, якщо твір не знайдено
  }

  return (
    <>
      <Helmet>
        <title>{`Твір: ${work.title} | Work: ${work.title} - Yuri Shevchenko`}</title>
        <meta
          name="description"
          content={`Опис твору ${work.title}, створеного Юрієм Шевченком. 
        Description of the work ${work.title} by Yuri Shevchenko.`}
        />
      </Helmet>
      <div className="container">
        <div className={styles.workPage}>
          <div className={styles.topSection}>
            <Link to="/legacy" className={styles.backButton}>
              {t("back_to_works")} {/* Використовуємо переклад */}
            </Link>
          </div>
          <div className={styles.contentSection}>
            <div className={styles.textSection}>
              <h1>{work.title}</h1>
              <p className={styles.description}>{work.description}</p>
              <p>
                <a
                  className={styles.link}
                  href={work.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("view_on_youtube")} {/* Використовуємо переклад */}
                </a>
              </p>
            </div>
            <div className={styles.imageSection}>
              <img
                className={styles.photo}
                src={work.imageUrl}
                alt={work.title}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;