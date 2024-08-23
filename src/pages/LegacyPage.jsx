// import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import styles from "../styles/LegacyPage.module.css";
// import worksData from "../data/worksData";

// const LegacyPage = () => {
//   const { i18n } = useTranslation();
//   const data = worksData(); // Викликаємо функцію, щоб отримати масив даних

//   const groupedWorks = data.reduce((acc, work) => {
//     if (!acc[work.category]) {
//       acc[work.category] = [];
//     }
//     acc[work.category].push(work);
//     return acc;
//   }, {});

//   return (
//     <>
//       <Helmet>
//         <title>
//           {i18n.t("legacy_title")} | {i18n.t("legacy_title")} - Юрій Шевченко |
//           Yuri Shevchenko
//         </title>
//         <meta name="description" content={i18n.t("legacy_description")} />
//       </Helmet>
//       <div className="container">
//         <div className={styles.legacyPage}>
//           <h1>{i18n.t("legacy_title")}</h1>
//           {Object.keys(groupedWorks).map((category) => (
//             <div key={category}>
//               <h2>{category}</h2>
//               <ul className={styles.worksList}>
//                 {groupedWorks[category].map((work) => (
//                   <li key={work.id}>
//                     <Link to={`/works/${work.id}`} className={styles.workLink}>
//                       {work.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default LegacyPage;

//============перелік категорій + слайдшоу + стрілка догори=========//

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/LegacyPage.module.css";
import worksData from "../data/worksData";

const LegacyPage = () => {
  const { i18n, t } = useTranslation();
  const data = worksData();

  const groupedWorks = data.reduce((acc, work) => {
    if (!acc[work.category]) {
      acc[work.category] = [];
    }
    acc[work.category].push(work);
    return acc;
  }, {});

  const images = [
    "/images/ShevaHome1.jpg",
    "/images/ShevaHome2.jpg",
    "/images/ShevaHome3.jpg",
    "/images/ShevaHome4.jpg",
    "/images/ShevaHome5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

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
          {i18n.t("legacy_title")} | {i18n.t("legacy_title")} - Юрій Шевченко |
          Yuri Shevchenko
        </title>
        <meta name="description" content={i18n.t("legacy_description")} />
      </Helmet>
      <div className="container">
        <div className={styles.legacyPage}>
          <h1>{i18n.t("legacy_title")}</h1>

          {/* Перелік розділів */}
          <div className={styles.mainContent}>
            <div className={styles.categoriesList}>
              {/* <h2>{i18n.t("categories_title")}</h2> */}
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

            {/* Слайд-шоу */}
            <div className={styles.slideShow}>
              {images.map((image, index) => (
                <img
                  key={index}
                  className={`${styles.photo} ${
                    index === currentImageIndex ? styles.active : ""
                  }`}
                  src={image}
                  alt={t("home_photo_alt")}
                />
              ))}
            </div>
          </div>

          {/* Список робіт по розділах */}
          {Object.keys(groupedWorks).map((category) => (
            <div key={category} id={category}>
              <h2>{category}</h2>
              <ul className={styles.worksList}>
                {groupedWorks[category].map((work) => (
                  <li key={work.id}>
                    <Link to={`/works/${work.id}`} className={styles.workLink}>
                      {work.title}
                    </Link>
                  </li>
                ))}
              </ul>
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
