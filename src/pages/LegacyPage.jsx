import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/LegacyPage.module.css";
import worksData from "../data/worksData";

const LegacyPage = () => {
  const { i18n, t } = useTranslation();
  const data = worksData();

  // Групування робіт за категоріями
  const groupedWorks = data.reduce((acc, work) => {
    if (!acc[work.category]) {
      acc[work.category] = [];
    }
    acc[work.category].push(work);
    return acc;
  }, {});

  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>
          {t("legacy_title")} | {t("legacy_title")} - Юрій Шевченко | Yuri
          Shevchenko
        </title>
        <meta name="description" content={t("legacy_description")} />
      </Helmet>
      <div className="container">
        <div className={styles.legacyPage}>
          <h1>{t("legacy_title")}</h1>

          {/* Перелік розділів */}
          <div className={styles.mainContent}>
            <div className={styles.categoriesList}>
              <ul>
                {Object.keys(groupedWorks).map((category) => (
                  <li key={category}>
                    <a href={`#${category}`} className={styles.categoryLink}>
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Список робіт по розділах та підкатегоріях */}
          {Object.keys(groupedWorks).map((category) => (
            <div key={category} id={category}>
              <h2>{category}</h2>
              {/* Групування робіт за підкатегоріями для відображення в списку */}
              {Object.entries(
                groupedWorks[category].reduce((acc, work) => {
                  const subcategory = work.subcategory || "Others"; // Використання 'Others' для робіт без підкатегорії
                  if (!acc[subcategory]) {
                    acc[subcategory] = [];
                  }
                  acc[subcategory].push(work);
                  return acc;
                }, {})
              ).map(([subcategory, works]) => (
                <div key={subcategory}>
                  {subcategory !== "Others" && <h3>{subcategory}</h3>}
                  <ul className={styles.worksList}>
                    {works.map((work) => (
                      <li key={work.id}>
                        <Link
                          to={`/works/${work.id}`}
                          className={styles.workLink}
                        >
                          {work.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Кнопка "Повернутися на початок" */}
        {showScrollToTop && (
          <button className={styles.scrollToTop} onClick={scrollToTop}></button>
        )}
      </div>
    </>
  );
};

export default LegacyPage;
