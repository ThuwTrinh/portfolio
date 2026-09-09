import { motion, type Variants } from "framer-motion";
import { Languages, Target, FileText, ArrowUpRight } from "lucide-react";
import bkuLogo from "../../assets/bku.png";
import "./Snapshot.css";
import Sparkles from "../Sparkles";
import { useTranslation } from "react-i18next";

const snapshotData = [
  {
    id: 1,
    size: "large",
    icon: <img src={bkuLogo} alt="" className="snapshot-logo-img" />,
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
      </div>
    </section>
  );
}
