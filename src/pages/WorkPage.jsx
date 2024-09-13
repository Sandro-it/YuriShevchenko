// //==================================абзаци===========================================//

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

//               {/* Відображаємо опис, якщо він є */}
//               {work.description && Array.isArray(work.description) ? (
//                 work.description.map((paragraph, index) => (
//                   <p key={index} className={styles.description}>
//                     {paragraph}
//                   </p>
//                 ))
//               ) : (
//                 <p className={styles.description}>{work.description}</p>
//               )}

//               {/* Відображаємо список, якщо він є */}
//               {work.list && work.list.length > 0 && (
//                 <ol>
//                   {work.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ol>
//               )}

//               {/* Відображаємо ненумерований список постановників, якщо він є */}
//               {work.productionTeam && work.productionTeam.length > 0 && (
//                 <>
//                   <h3>{t("production_team")}</h3>
//                   <ul className={styles.productionTeam}>
//                     {work.productionTeam.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* Відображення одного відео посилання, якщо доступне */}
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

//               {/* Відображення кількох відео-посилань, якщо доступні */}
//               {work.videoUrls && work.videoUrls.length > 0 && (
//                 <div>
//                   {work.videoUrls.map((url, index) => (
//                     <p key={index}>
//                       <a
//                         className={styles.link}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {`${t("view_on_youtube")} ${index + 1}`}
//                       </a>
//                     </p>
//                   ))}
//                 </div>
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

//====================вбудоване відео==============================//

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

//               {/* Відображаємо опис, якщо він є */}
//               {work.description && Array.isArray(work.description) ? (
//                 work.description.map((paragraph, index) => (
//                   <p key={index} className={styles.description}>
//                     {paragraph}
//                   </p>
//                 ))
//               ) : (
//                 <p className={styles.description}>{work.description}</p>
//               )}

//               {/* Відображаємо список, якщо він є */}
//               {work.list && work.list.length > 0 && (
//                 <ol>
//                   {work.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ol>
//               )}

//               {/* Відображаємо ненумерований список постановників, якщо він є */}
//               {work.productionTeam && work.productionTeam.length > 0 && (
//                 <>
//                   <h3>{t("production_team")}</h3>
//                   <ul className={styles.productionTeam}>
//                     {work.productionTeam.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* Відображення одного відео посилання, якщо доступне */}
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

//               {/* Відображення кількох відео-посилань, якщо доступні */}
//               {work.videoUrls && work.videoUrls.length > 0 && (
//                 <div>
//                   {work.videoUrls.map((url, index) => (
//                     <p key={index}>
//                       <a
//                         className={styles.link}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {`${t("view_on_youtube")} ${index + 1}`}
//                       </a>
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className={styles.imageSection}>
//               {/* Додаємо перевірку на поле embedVideo */}
//               {work.embedVideo ? (
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={`https://www.youtube.com/embed/${new URL(
//                     work.videoUrl
//                   ).searchParams.get("v")}`}
//                   title={work.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <img
//                   className={styles.photo}
//                   src={work.imageUrl}
//                   alt={work.title}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkPage;

//=======================================рік========================================//

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
//               {/* Відображаємо назву і рік, якщо він є */}
//               <h1>
//                 {work.title} {work.year && `(${work.year})`}
//               </h1>

//               {/* Відображаємо опис, якщо він є */}
//               {work.description && Array.isArray(work.description) ? (
//                 work.description.map((paragraph, index) => (
//                   <p key={index} className={styles.description}>
//                     {paragraph}
//                   </p>
//                 ))
//               ) : (
//                 <p className={styles.description}>{work.description}</p>
//               )}

//               {/* Відображаємо список, якщо він є */}
//               {work.list && work.list.length > 0 && (
//                 <ol>
//                   {work.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ol>
//               )}

//               {/* Відображаємо ненумерований список постановників, якщо він є */}
//               {work.productionTeam && work.productionTeam.length > 0 && (
//                 <>
//                   <h3>{t("production_team")}</h3>
//                   <ul className={styles.productionTeam}>
//                     {work.productionTeam.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               {/* Відображення одного відео посилання, якщо доступне */}
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

//               {/* Відображення кількох відео-посилань, якщо доступні */}
//               {work.videoUrls && work.videoUrls.length > 0 && (
//                 <div>
//                   {work.videoUrls.map((url, index) => (
//                     <p key={index}>
//                       <a
//                         className={styles.link}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {/* {`${t("view_on_youtube")} ${index + 1}`} */}
//                         {`${t("view_on_youtube")} ${index + 2}`}{" "}
//                         {/* Додаємо +2 до індексу */}
//                         {/* {t("view_on_youtube")} */}
//                       </a>
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className={styles.imageSection}>
//               {/* Додаємо перевірку на поле embedVideo */}
//               {work.embedVideo ? (
//                 <iframe
//                   width="100%"
//                   height="315"
//                   src={`https://www.youtube.com/embed/${new URL(
//                     work.videoUrl
//                   ).searchParams.get("v")}`}
//                   title={work.title}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               ) : (
//                 <img
//                   className={styles.photo}
//                   src={work.imageUrl}
//                   alt={work.title}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkPage;

//=============================відео для мобілок=========================================//

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
//               <h1>
//                 {work.title} {work.year && `(${work.year})`}
//               </h1>

//               {work.description && Array.isArray(work.description) ? (
//                 work.description.map((paragraph, index) => (
//                   <p key={index} className={styles.description}>
//                     {paragraph}
//                   </p>
//                 ))
//               ) : (
//                 <p className={styles.description}>{work.description}</p>
//               )}

//               {work.list && work.list.length > 0 && (
//                 <ol>
//                   {work.list.map((item, index) => (
//                     <li key={index}>{item}</li>
//                   ))}
//                 </ol>
//               )}

//               {work.productionTeam && work.productionTeam.length > 0 && (
//                 <>
//                   <h3>{t("production_team")}</h3>
//                   <ul className={styles.productionTeam}>
//                     {work.productionTeam.map((item, index) => (
//                       <li key={index}>{item}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

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

//               {work.videoUrls && work.videoUrls.length > 0 && (
//                 <div>
//                   {work.videoUrls.map((url, index) => (
//                     <p key={index}>
//                       <a
//                         className={styles.link}
//                         href={url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         {`${t("view_on_youtube")} ${index + 2}`}
//                       </a>
//                     </p>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className={styles.imageSection}>
//               {work.embedVideo ? (
//                 <div className={styles.videoContainer}>
//                   <iframe
//                     src={`https://www.youtube.com/embed/${new URL(
//                       work.videoUrl
//                     ).searchParams.get("v")}`}
//                     title={work.title}
//                     frameBorder="0"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   ></iframe>
//                 </div>
//               ) : (
//                 <img
//                   className={styles.photo}
//                   src={work.imageUrl}
//                   alt={work.title}
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default WorkPage;

//=================витягуємо аудіо================================//

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
          content={`Опис твору ${work.title}, створеного Юрієм Шевченком. Description of the work ${work.title} by Yuri Shevchenko.`}
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
              <h1>
                {work.title} {work.year && `(${work.year})`}
              </h1>

              {work.description && Array.isArray(work.description) ? (
                work.description.map((paragraph, index) => (
                  <p key={index} className={styles.description}>
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className={styles.description}>{work.description}</p>
              )}

              {work.list && work.list.length > 0 && (
                <ol>
                  {work.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              )}

              {work.productionTeam && work.productionTeam.length > 0 && (
                <>
                  <h3>{t("production_team")}</h3>
                  <ul className={styles.productionTeam}>
                    {work.productionTeam.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}

              {work.videoUrl && (
                <p>
                  <a
                    className={styles.link}
                    href={work.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("view_on_youtube")}
                  </a>
                </p>
              )}

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
                        {`${t("view_on_youtube")} ${index + 2}`}
                      </a>
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className={styles.imageSection}>
              {work.embedVideo ? (
                <div className={styles.videoContainer}>
                  <iframe
                    src={`https://www.youtube.com/embed/${new URL(
                      work.videoUrl
                    ).searchParams.get("v")}`}
                    title={work.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : work.audioUrl ? (
                <div className={styles.audioContainer}>
                  <audio controls>
                    <source src={work.audioUrl} type="audio/mpeg" />
                    {t("audio_not_supported")}
                  </audio>
                </div>
              ) : (
                <img
                  className={styles.photo}
                  src={work.imageUrl}
                  alt={work.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPage;
