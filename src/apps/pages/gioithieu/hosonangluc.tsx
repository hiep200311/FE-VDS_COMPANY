// pages/hosonangluc.tsx
import HosoBookViewer from "@/components/inmutable-components/AbilityProfileBook";
import LangSwitcher from "@/components/inmutable-components/LangSwitcher";
import "@/utils/i18n";
import { useTranslation } from "react-i18next";


const HosoNangLucPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-frontground p-6 flex flex-col items-center">
      <LangSwitcher />
      <h1 className="text-3xl font-bold text-title my-4">{t("title")}</h1>
      <HosoBookViewer />
    </div>
  );
};

export default HosoNangLucPage;
