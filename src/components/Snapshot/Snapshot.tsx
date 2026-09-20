import { motion, type Variants } from "framer-motion";
import { Languages, Target, FileText, ArrowUpRight } from "lucide-react";
import {
  SiFigma,
  SiGoogleanalytics,
  SiClaude,
  SiDiagramsdotnet,
  SiReact,
  SiPython,
  SiTypescript,
} from "react-icons/si";
import bkuLogo from "../../assets/bku.webp";
import postgresqlLogo from "../../assets/postgresql.svg";
import powerbiLogo from "../../assets/Power-BI.svg";
import "./Snapshot.css";
import Sparkles from "../Sparkles";
import { useTranslation } from "react-i18next";

const snapshotData = [
  {
    id: 1,
    size: "large",
    icon: (
      <img src={bkuLogo} alt="" className="snapshot-logo-img" loading="lazy" />
    ),
    titleKey: "snapshot.degree",
    subKey: "snapshot.degreeSub",
    detailsKey: "snapshot.degreeDetails",
    linkKey: "snapshot.transcript",
    linkUrl:
      "https://drive.google.com/file/d/13-fcWCkcF__h7Fv7qSqrjjtk-NJ29sSu/view?usp=sharing",
  },
  {
    id: 2,
    size: "medium",
    icon: <Languages size={24} strokeWidth={1.5} />,
    titleKey: "snapshot.language",
    subKey: "snapshot.languageSub",
    detailsKey: "snapshot.languageDetails",
  },
  {
    id: 3,
    size: "small",
    icon: <Target size={22} strokeWidth={1.5} />,
    titleKey: "snapshot.mindset",
    subKey: "snapshot.mindsetSub",
    detailsKey: "snapshot.mindsetDetails",
  },
];

const toolsData = [
  { id: "figma", name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { id: "ga4", name: "GA4", Icon: SiGoogleanalytics, color: "#F9AB00" },
  { id: "claude", name: "Claude", Icon: SiClaude, color: "#D97757" },
  { id: "powerbi", name: "Power BI", imgSrc: powerbiLogo },
  { id: "drawio", name: "draw.io", Icon: SiDiagramsdotnet, color: "#F08705" },
];

// Ngôn ngữ/công nghệ tự code — khác bản chất với "tools thao tác" ở trên,
// nên tách thành hàng phụ, kích thước nhỏ hơn
const techStackData = [
  { id: "react", name: "React", Icon: SiReact, color: "#61DAFB" },
  {
    id: "typescript",
    name: "TypeScript",
    Icon: SiTypescript,
    color: "#3178C6",
  },
  { id: "python", name: "Python", Icon: SiPython, color: "#3776AB" },
  {
    id: "postgresql",
    name: "PostgreSQL",
    imgSrc: postgresqlLogo,
    color: "#64748b",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Snapshot() {
  const { t } = useTranslation();

  return (
    <section
      className="snapshot-transition"
      id="about"
      aria-label={t("snapshot.ariaLabel")}
    >
      {/* Hiệu ứng hạt lấp lánh đồng bộ từ Hero */}
      <Sparkles count={8} />

      <div className="snapshot-wrapper">
        <motion.div
          className="snapshot-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="snapshot-eyebrow">
            <span className="snapshot-pulse" /> {t("snapshot.eyebrow")}
          </span>
          <h2>{t("snapshot.title")}</h2>
        </motion.div>

        <motion.div
          className="snapshot-grid-staggered"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {snapshotData.map((item) => (
            <motion.div
              key={item.id}
              className={`snapshot-block-tier ${item.size}`}
              variants={itemVariants}
            >
              <div className="snapshot-icon-float">{item.icon}</div>

              <div className="snapshot-text-group">
                <span className="snapshot-title-clean">{t(item.titleKey)}</span>
                <span className="snapshot-sub-clean">{t(item.subKey)}</span>
                <span className="snapshot-details-clean">
                  {t(item.detailsKey)}
                </span>

                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transcript-link"
                  >
                    <FileText size={13} /> {t(item.linkKey!)}{" "}
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="snapshot-tools-row"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="tools-row-label">{t("snapshot.toolsLabel")}</span>
          <div className="tools-row-list">
            {toolsData.map(({ id, name, Icon, color, imgSrc }) => (
              <div className="tool-chip" key={id}>
                {Icon ? (
                  <Icon size={28} color={color} aria-hidden="true" />
                ) : (
                  <img
                    src={imgSrc}
                    alt=""
                    className="tool-chip-img"
                    loading="lazy"
                  />
                )}
                <span className="tool-chip-name">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="snapshot-tech-row"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <span className="tech-row-label">{t("snapshot.techLabel")}</span>
          <div className="tech-row-list">
            {techStackData.map(({ id, name, Icon, imgSrc, color }) => (
              <div className="tech-chip" key={id}>
                {Icon ? ( <Icon size={20} color={color} aria-hidden="true" />
                ) : (
                  <img
                    src={imgSrc}
                    alt=""
                    className="tech-chip-img"
                    loading="lazy"
                  />
                )}
                <span className="tech-chip-name">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
