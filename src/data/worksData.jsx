import { useTranslation } from "react-i18next";
import enWorks from "../data/enWorks.json";
import ukWorks from "../data/ukWorks.json";

const worksData = () => {
  const { i18n } = useTranslation();
  return i18n.language === "uk" ? ukWorks.works : enWorks.works;
};

export default worksData;
