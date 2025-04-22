import { useNavigate } from "react-router-dom";
import { RowCol } from "./RowCol";
import { useTranslation } from "react-i18next";

export const BentoGoBack = () => {
  const navigate = useNavigate();
  return (
    <RowCol
      onClick={() => navigate('/')}
      className={`left flex items-center justify-center relative  text-white flex-row-reverse lg:flex-col gap-4`}
      color="red"
    >
      <div className={"text-2xl lg:text-5xl"} >出口</div>
      <div className={"text-3xl lg:text-5xl"}>←</div>
    </RowCol>
  );
};

export const BentoGoMore = ({label = false}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return !label ? (
    <RowCol
      onClick={() => navigate('/projects')}
      className={`left flex items-center justify-center relative text-white flex-col gap-4 hidden lg:flex`}
      color="teal"
    >
      <div className="text-5xl ">続 </div>
      <div className="text-xl ">({t('goToProjects')})</div>
    </RowCol>
  ): <div
  onClick={() => navigate('/projects')}
  className={`text-3xl pepe italic hover:text-sky-500 lg:hidden flex items-center justify-center relative text-white`}
  >
    {t('goToProjects')}
  </div>;
};
