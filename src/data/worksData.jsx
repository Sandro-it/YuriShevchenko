import { useTranslation } from "react-i18next";
import enWorks from "../data/enWorks.json";
import ukWorks from "../data/ukWorks.json";
import deWorks from "../data/deWorks.json";

// const worksData = () => {
//   const { i18n } = useTranslation();
//   return i18n.language === "uk" ? ukWorks.works : enWorks.works;
// };

const worksData = () => {
  const { i18n } = useTranslation();

  switch (i18n.language) {
    case "en":
      return enWorks.works;
    case "de":
      return deWorks.works;
    default:
      return ukWorks.works;
  }
};

export default worksData;
