import "./App.css";
import Hero from "./components/Hero";
import Snapshot from "./components/Snapshot/Snapshot";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ZaloCaseStudy from "./components/Project/Zalo/ZaloCaseStudy";
import ReuseUniShowcase from "./components/Project/ReuseUni/ReuseShowcase";
import TechnicalToolbox from "./components/TechnicalToolbox/TechnicalToolbox";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";
import { Globe } from "lucide-react";

function App() {
  const { t } = useTranslation();
  const isVietnamese = i18n.language === "vi";

  const toggleLanguage = () => {
    void i18n.changeLanguage(isVietnamese ? "en" : "vi");
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label={t("nav.backToTop")}>
          <span className="wordmark-mark">C</span>
          <span>{t("hero.name")} / Product</span>
        </a>
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLanguage}
          aria-label={t("language.switchTo")}
        >
          <Globe size={14} strokeWidth={1.8} aria-hidden="true" />
          <span>{isVietnamese ? "EN" : "VI"}</span>
        </button>
        <nav aria-label={t("nav.main")}>
          <a href="#about">{t("nav.about")}</a>
          <a href="#work">{t("nav.work")}</a>
          <a href="#experience">{t("nav.experience")}</a>
          <a className="nav-contact" href="#contact">
            {t("nav.contact")} <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="top">
        <Hero />
        <Snapshot />
        <Experience />
        <ZaloCaseStudy />
        <ReuseUniShowcase />
        <TechnicalToolbox />

        <Contact />
      </main>
      <footer>
        <span>© 2024 {t("hero.name")}</span>
        <span>{t("footer.builtWith")}</span>
      </footer>
    </div>
  );
}

export default App;
