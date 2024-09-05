// import { Helmet } from "react-helmet-async";
// import { useParams, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next"; // Імпортуйте хук для перекладу
// import styles from "../styles/WorkPage.module.css";
// import worksData from "../data/worksData";

// const WorkPage = () => {
//   const { t } = useTranslation(); // Використовуємо хук для перекладу
//   const { workId } = useParams();
//   const data = worksData();
//   const work = data.find((work) => work.id === workId);

//   if (!work) {
//     return <div>{t("work_not_found")}</div>; // Додайте переклад для випадку, якщо твір не знайдено
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{`Твір: ${work.title} | Work: ${work.title} - Yuri Shevchenko`}</title>
//         <meta
//           name="description"
//           content={`Опис твору ${work.title}, створеного Юрієм Шевченком.
//           Description of the work ${work.title} by Yuri Shevchenko.`}
//         />
//       </Helmet>
//       <div className="container">
//         <div className={styles.workPage}>
//           <div className={styles.topSection}>
//             <Link to="/legacy" className={styles.backButton}>
//               {t("back_to_works")} {/* Використовуємо переклад */}
//             </Link>
//           </div>
//           <div className={styles.contentSection}>
//             <div className={styles.textSection}>
//               <h1>{work.title}</h1>
//               <p className={styles.description}>{work.description}</p>
//               <p>
//                 <a
//                   className={styles.link}
//                   href={work.videoUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   {t("view_on_youtube")} {/* Використовуємо переклад */}
//                 </a>
//               </p>
//             </div>
//             <div className={styles.imageSection}>
//               <img
//                 className={styles.photo}
//                 src={work.imageUrl}
//                 alt={work.title}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkPage;

// import { Helmet } from "react-helmet-async";
// import { useParams, Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import styles from "../styles/WorkPage.module.css";
// import worksData from "../data/worksData";

// const WorkPage = () => {
//   const { t } = useTranslation();
//   const { workId } = useParams();
//   const data = worksData();
//   const work = data.find((work) => work.id === workId);

//   if (!work) {
//     return <div>{t("work_not_found")}</div>;
//   }

//   return (
//     <>
//       <Helmet>
//         <title>{`Твір: ${work.title} | Work: ${work.title} - Yuri Shevchenko`}</title>
//         <meta
//           name="description"
//           content={`Опис твору ${work.title}, створеного Юрієм Шевченком.
//           Description of the work ${work.title} by Yuri Shevchenko.`}
//         />
//       </Helmet>
//       <div className="container">
//         <div className={styles.workPage}>
//           <div className={styles.topSection}>
//             <Link to="/legacy" className={styles.backButton}>
//               {t("back_to_works")}
//             </Link>
//           </div>
//           <div className={styles.contentSection}>
//             <div className={styles.textSection}>
//               <h1>{work.title}</h1>
//               <p className={styles.description}>{work.description}</p>

//               {/* Якщо є список, відображаємо його */}
//               {work.list && work.list.length > 0 && (
//                 <ol>
//                   {work.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ol>
//               )}

//               {/* Відображення відео посилання, якщо доступно */}
//               {work.videoUrl && (
//                 <p>
//                   <a
//                     className={styles.link}
//                     href={work.videoUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {t("view_on_youtube")}
//                   </a>
//                 </p>
//               )}
//             </div>
//             <div className={styles.imageSection}>
//               <img
//                 className={styles.photo}
//                 src={work.imageUrl}
//                 alt={work.title}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkPage;

import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "../styles/WorkPage.module.css";
import worksData from "../data/worksData";

const WorkPage = () => {
  const { t } = useTranslation();
  const { workId } = useParams();
  const data = worksData();
  const work = data.find((work) => work.id === workId);

  if (!work) {
    return <div>{t("work_not_found")}</div>;
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
              {t("back_to_works")}
            </Link>
          </div>
          <div className={styles.contentSection}>
            <div className={styles.textSection}>
              <h1>{work.title}</h1>
              <p className={styles.description}>{work.description}</p>

              {/* Якщо є список, відображаємо його */}
              {work.list && work.list.length > 0 && (
                <ol>
                  {work.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}

              {/* Відображення кількох відео-посилань, якщо доступні */}
              {work.videoUrls && work.videoUrls.length > 0 && (
                <div>
                  {work.videoUrls.map((url, index) => (
                    <p key={index}>
                      <a
                        className={styles.link}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {`${t("view_on_youtube")} ${index + 1}`}
                      </a>
                    </p>
                  ))}
                </div>
              )}
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
