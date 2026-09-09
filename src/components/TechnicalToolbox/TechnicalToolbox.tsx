import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Code2,
  Database,
  Network,
  LineChart,
  BarChart,
} from "lucide-react";
import "./TechnicalToolbox.css";
import Sparkles from "../Sparkles";

import sspsUseCaseImg from "../../assets/ssps_usecase_diagram.png";
import sqlResultImg from "../../assets/restaurant_sql_revenue_result.png";
import erdDiagramImg from "../../assets/restaurant_erd_diagram.png";
import ga4AnalyticsImg from "../../assets/ga4_funnel_analytics.png";
import dashboardImg from "../../assets/dashboard.png";
import { useTranslation } from "react-i18next";

interface SkillProof {
  id: string;
  translationKey: string;
  projectUrl: string;
  image: string;
  icon: React.ReactNode;
}

const skillsList: SkillProof[] = [
  {
    id: "skill-ga4",
    translationKey: "ga4",
    projectUrl:
      "https://docs.google.com/document/d/18VIstypqma6MsIB18-lnOJ-fVFW1H-Px4uAQARu93qs/edit?usp=sharing",
    image: ga4AnalyticsImg,
    icon: <LineChart size={15} />,
  },
  {
    id: "skill-powerbi",
    translationKey: "powerbi",
    projectUrl: "https://github.com/MartinDawn/CompanyX.git",
    image: dashboardImg,
    icon: <BarChart size={15} />,
  },
  {
    id: "skill-prd",
    translationKey: "prd",
    projectUrl:
      "https://drive.google.com/file/d/1U-PeyDG1E-8cjje1H9uiDZ3M1eyCZt8Q/view?usp=sharing",
    image: sspsUseCaseImg,
    icon: <Code2 size={15} />,
  },
  {
    id: "skill-sql",
    translationKey: "sql",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    image: sqlResultImg,
    icon: <Database size={15} />,
  },
  {
    id: "skill-erd",
    translationKey: "erd",
    projectUrl: "https://github.com/PTToNhu/Database-System-Assignment-2",
    image: erdDiagramImg,
    icon: <Network size={15} />,
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

export default function TechnicalToolbox() {
  const { t } = useTranslation();

  return (
    <section
      className="toolbox-section"
      id="skills"
      aria-label={t("toolbox.ariaLabel")}
    >
      <Sparkles count={8} />

      <div className="toolbox-container">
        {/* Header Block */}
        <motion.div
          className="toolbox-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="toolbox-tag">
            <span className="toolbox-tag-dot" />
            <span>{t("toolbox.eyebrow")}</span>
          </div>
          <h2>{t("toolbox.title")}</h2>
          <p>{t("toolbox.intro")}</p>
        </motion.div>

        {/* Danh sách Skills */}
        <div className="toolbox-list">
          {skillsList.map((skill) => (
            <motion.div
              key={skill.id}
              className="toolbox-item-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {/* CỘT TRÁI */}
              <div className="toolbox-content-col">
                <div className="toolbox-meta-row">
                  <span className="toolbox-category-pill">
                    {skill.icon}
                    {t(`toolbox.items.${skill.translationKey}.category`)}
                  </span>

                  <a
                    href={skill.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="toolbox-source-project"
                  >
                    <span>
                      {t(`toolbox.items.${skill.translationKey}.project`)}
                    </span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>

                <h3 className="toolbox-item-title">
                  {t(`toolbox.items.${skill.translationKey}.title`)}
                </h3>
                <p className="toolbox-item-desc">
                  {t(`toolbox.items.${skill.translationKey}.description`)}
                </p>

                <div className="toolbox-takeaway-box">
                  <CheckCircle2 size={16} className="toolbox-takeaway-icon" />
                  <span>
                    {t(`toolbox.items.${skill.translationKey}.takeaway`)}
                  </span>
                </div>
              </div>

              {/* CỘT PHẢI */}
              <div className="toolbox-preview-col">
                <div className="toolbox-preview-window">
                  <div className="toolbox-window-header">
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-dot" />
                    <span className="toolbox-window-title">
                      {t(`toolbox.items.${skill.translationKey}.artifact`)}
                    </span>
                  </div>
                  <div className="toolbox-window-canvas">
                    <img
                      src={skill.image}
                      alt={t(`toolbox.items.${skill.translationKey}.title`)}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
