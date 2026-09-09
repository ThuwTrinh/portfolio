import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import vi from "./locales/vi.json";
import projectsEn from "./locales/projectsEn";
import projectsVi from "./locales/projectsVi";

export const supportedLanguages = ["vi", "en"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

const savedLanguage = localStorage.getItem("portfolio-language");
const initialLanguage: SupportedLanguage =
  savedLanguage === "en" || savedLanguage === "vi" ? savedLanguage : "vi";

void i18n.use(initReactI18next).init({
  resources: {
    vi: { translation: { ...vi, projects: projectsVi } },
    en: { translation: { ...en, projects: projectsEn } },
  },
  lng: initialLanguage,
  fallbackLng: "vi",
  interpolation: { escapeValue: false },
  parseMissingKeyHandler: () => "",
});

i18n.on("languageChanged", (language) => {
  const nextLanguage: SupportedLanguage = language === "en" ? "en" : "vi";
  document.documentElement.lang = nextLanguage;
  localStorage.setItem("portfolio-language", nextLanguage);
});

document.documentElement.lang = initialLanguage;

export default i18n;
