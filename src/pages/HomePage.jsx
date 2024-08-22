// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
// import styles from "../styles/HomePage.module.css";

// const HomePage = () => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <Helmet>
//         <title>
//           {t("home_title")} | Home - Юрій Шевченко | Yuri Shevchenko
//         </title>
//         <meta name="description" content={t("home_description")} />
//       </Helmet>
//       <div className="container">
//         <div className={styles.homePage}>
//           <div className={styles.leftSection}>
//             <img
//               className={styles.newPhoto}
//               src="/images/Sheva-black-min.png"
//               alt={t("home_photo_alt")}
//             />
//             <p className={styles.description}>{t("home_content")}</p>
//           </div>
//           <img
//             className={styles.photo}
//             src="/images/ShevaHome-min.jpg"
//             alt={t("home_photo_alt")}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

//=============================слайд шоу 1=================================//

// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
// import styles from "../styles/HomePage.module.css";

// const HomePage = () => {
//   const { t } = useTranslation();

//   const images = [
//     "/images/ShevaHome1.jpg",
//     "/images/ShevaHome2.jpg", // Додайте інші зображення
//     "/images/ShevaHome3.jpg",
//     "/images/ShevaHome4.jpg",
//     "/images/ShevaHome5.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // Змінювати зображення кожні 3 секунди

//     return () => clearInterval(interval); // Очищення інтервалу при розмонтаженні компонента
//   }, [images.length]);

//   return (
//     <>
//       <Helmet>
//         <title>
//           {t("home_title")} | Home - Юрій Шевченко | Yuri Shevchenko
//         </title>
//         <meta name="description" content={t("home_description")} />
//       </Helmet>
//       <div className="container">
//         <div className={styles.homePage}>
//           <div className={styles.leftSection}>
//             <img
//               className={styles.newPhoto}
//               src="/images/Sheva-black-min.png"
//               alt={t("home_photo_alt")}
//             />
//             <p className={styles.description}>{t("home_content")}</p>
//           </div>
//           <div className={styles.rightSection}>
//             <img
//               className={styles.photo}
//               src={images[currentImageIndex]}
//               alt={t("home_photo_alt")}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

//=============================слайд шоу 1 плавна зміна=================================//

// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
// import styles from "../styles/HomePage.module.css";

// const HomePage = () => {
//   const { t } = useTranslation();

//   const images = [
//     "/images/ShevaHome1.jpg",
//     "/images/ShevaHome2.jpg",
//     "/images/ShevaHome3.jpg",
//     "/images/ShevaHome4.jpg",
//     "/images/ShevaHome5.jpg",
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [fadeTransition, setFadeTransition] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setFadeTransition(true);
//       setTimeout(() => {
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setFadeTransition(false);
//       }, 600); // Швидкість зникнення фото (0.5 секунди)
//     }, 4000); // Інтервал між змінами зображень

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <>
//       <Helmet>
//         <title>
//           {t("home_title")} | Home - Юрій Шевченко | Yuri Shevchenko
//         </title>
//         <meta name="description" content={t("home_description")} />
//       </Helmet>
//       <div className="container">
//         <div className={styles.homePage}>
//           <div className={styles.leftSection}>
//             <img
//               className={styles.newPhoto}
//               src="/images/Sheva-black-min.png"
//               alt={t("home_photo_alt")}
//             />
//             <p className={styles.description}>{t("home_content")}</p>
//           </div>
//           <div className={styles.rightSection}>
//             <img
//               className={`${styles.photo} ${
//                 fadeTransition ? styles.fadeOut : styles.fadeIn
//               }`}
//               src={images[currentImageIndex]}
//               alt={t("home_photo_alt")}
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;

//=====================transition-transform==============//

import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  const { t } = useTranslation();

  const images = [
    "/images/ShevaHome1.jpg",
    "/images/ShevaHome2.jpg",
    "/images/ShevaHome3.jpg",
    "/images/ShevaHome4.jpg",
    "/images/ShevaHome5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Інтервал між змінами зображень

    return () => clearInterval(interval);
  }, [images.length]);

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
          <div className={styles.rightSection}>
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
      </div>
    </>
  );
};

export default HomePage;
