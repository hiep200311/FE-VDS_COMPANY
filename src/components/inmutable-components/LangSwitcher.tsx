// components/LangSwitcher.tsx
import { useTranslation } from "react-i18next";

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={() => i18n.changeLanguage("vi")}
        className={`px-3 w-30 py-1 rounded ${i18n.language === "vi" ? "rgb-button text-white" : "bg-gray-200"}`}
      >
        Tiếng Việt
      </button>
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-3 w-30 py-1 rounded ${i18n.language === "en" ? "rgb-button text-white" : "bg-gray-200"}`}
      >
          English
      </button>
    </div>
  );
};

export default LangSwitcher;
