import { motion, type Variants } from "framer-motion";
import {
  Layers,
  Sparkles,
  Layout,
  Smartphone,
  GitPullRequest,
  Terminal,
  ExternalLink,
  FileText,
  FolderGit2,
  Ticket,
} from "lucide-react";

import LeanCanvasReuseUni from "./LeanCanvas/LeanCanvasReuseUni";
import MVPReuseUni from "./MVPReuseUni/MVPReuseUni";
import flowImg from "../../../assets/userflow.png";
import screensOverviewImg from "../../../assets/figma-screens-overview.png";
import scrumImg from "../../../assets/scrum-board.png";
import testImg from "../../../assets/coverage.png";
import "./ReuseShowcase.css";
import { Trans, useTranslation } from "react-i18next";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const exhibits = [
  {
    id: "strategy",
    translationKey: "strategy",
    icon: <Layers size={14} />,
    align: "align-left",
    isCanvas: true,
  },
  {
    id: "mvp-scoping",
    translationKey: "mvp",
    icon: <Sparkles size={14} />,
    align: "align-right",
    isMVP: true,
  },
  {
    id: "ux",
    translationKey: "ux",
    icon: <Layout size={14} />,
    align: "align-left",
    image: flowImg,
    isCompactMedia: true,
    drawIOLink:
      "https://drive.google.com/file/d/1mcz3m8hW4O1EUFuDN8a3E2GBfzYDX5Nn/view?usp=sharing",
  },
  {
    id: "prototype",
    translationKey: "prototype",
    icon: <Smartphone size={14} />,
    align: "align-right",
    image: screensOverviewImg,
    figmaLink:
      "https://www.figma.com/design/k5GiTmZeSafBUGYg4avD0Z/Mobile-App?node-id=0-1&t=k5S1mUk0NzNdVujD-1",
  },
  {
    id: "scrum",
    translationKey: "scrum",
    icon: <GitPullRequest size={14} />,
    align: "align-left",
    image: scrumImg,
  },
  {
    id: "qa",
    translationKey: "qa",
    icon: <Terminal size={14} />,
    align: "align-right", // <-- Đã bổ sung thuộc tính này để Bức tranh 06 lệch sang phải
    image: testImg,
    isTerminal: true,
  },
];

export default function ReuseUniShowcase() {
  const { t } = useTranslation();

  return (
    <section className="gallery-showcase-section" id="reuseuni">
      <div className="section-head">
        <span className="pill-tag">{t("projects.reuse.tag")}</span>
        <h2>{t("projects.reuse.title")}</h2>

        <p className="one-liner">{t("projects.reuse.intro")}</p>

        {/* NÚT TÀI LIỆU DỰ ÁN */}
        <div className="project-links-bar">
          <a
            href="https://drive.google.com/file/d/1vCoCGkduFmCh8rTPT2GtD6Y0qeeOVHhj/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="link-pill pdf-link"
          >
            <FileText size={15} />
            <span>{t("projects.reuse.pdf")}</span>
            <ExternalLink size={13} className="ext-icon" />
          </a>

          <a
            href="https://github.com/maycongabietgi"
            target="_blank"
            rel="noreferrer"
            className="link-pill gh-link"
          >
            <FolderGit2 size={15} />
            <span>{t("projects.reuse.github")}</span>
            <ExternalLink size={13} className="ext-icon" />
          </a>
        </div>

        {/* CON DẤU SÁP NIÊM PHONG (EXHIBIT ENTRY) */}
        <motion.div
          className="gallery-seal-divider"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="seal-line-top" />
          <div className="seal-badge">
            <Sparkles size={13} className="seal-icon" />
            <span>{t("projects.reuse.entry")}</span>
          </div>
          <div className="seal-line-bottom" />
        </motion.div>

        {/* THẺ VÉ THAM QUAN */}
        <motion.div
          className="art-ticket-wrapper"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="art-ticket-card">
            <div className="ticket-stub">
              <div className="stub-header">
                <Ticket size={14} className="text-sky-500" />
                <span>{t("projects.reuse.galleryPass")}</span>
              </div>
              <span className="stub-code">
                {t("projects.reuse.exhibitCode")}
              </span>
            </div>

            <div className="ticket-tear-line" />

            <div className="ticket-body">
              <span className="ticket-tagline">
                {t("projects.reuse.curatedJourney")}
              </span>
              <p className="ticket-narrative">
                <Trans
                  i18nKey="projects.reuse.ticket"
                  components={[<strong />, <strong />]}
                />
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* DÒNG SCROLL TO EXPLORE */}
      <motion.div
        className="scroll-cue-wrapper"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="scroll-side-cue">
          <span>{t("projects.reuse.scroll")}</span>
          <span className="side-cue-line" />
        </div>
      </motion.div>

      {/* TRACK 6 BỨC TRANH */}
      <div className="gallery-track">
        {exhibits.map((item) => (
          <div className={`gallery-frame-row ${item.align}`} key={item.id}>
            <motion.div
              className={`art-frame ${item.isCompactMedia ? "compact-frame" : ""}`}
              variants={itemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="placard-tag">
                {item.icon}
                <span>
                  {t(`projects.reuse.exhibits.${item.translationKey}.tag`)}
                </span>
              </div>

              <div
                className={`frame-canvas ${item.isTerminal ? "dark-theme" : ""} ${
                  item.isCompactMedia ? "flow-compact-canvas" : ""
                }`}
              >
                {item.isCanvas ? (
                  <LeanCanvasReuseUni className="gallery-canvas" />
                ) : item.isMVP ? (
                  <MVPReuseUni />
                ) : (
                  <img
                    src={item.image}
                    alt={t(
                      `projects.reuse.exhibits.${item.translationKey}.alt`,
                    )}
                  />
                )}
              </div>

              <div className="frame-placard">
                <div className="placard-head">
                  <h3 className="placard-title">
                    {t(`projects.reuse.exhibits.${item.translationKey}.title`)}
                  </h3>
                  {item.figmaLink && (
                    <a
                      href={item.figmaLink}
                      target="_blank"
                      rel="noreferrer"
                      className="figma-live-btn"
                    >
                      <span>{t("projects.reuse.prototype")}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                  {item.drawIOLink && (
                    <a
                      href={item.drawIOLink}
                      target="_blank"
                      rel="noreferrer"
                      className="figma-live-btn"
                    >
                      <span>{t("projects.reuse.flowSpecs")}</span>
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>

                <p className="placard-curator-note">
                  <strong>{t("projects.reuse.execution")}</strong>{" "}
                  {t(`projects.reuse.exhibits.${item.translationKey}.desc`)}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* KHU VỰC TỔNG KẾT KẾT QUẢ ĐẠT ĐƯỢC (POST-EXHIBIT IMPACT) */}
      <div className="outcomes-summary-section">
        {/* CON DẤU PHÂN CÁCH POST-EXHIBIT IMPACT */}
        <motion.div
          className="gallery-seal-divider"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="seal-line-top" />
          <div className="seal-badge">
            <Sparkles size={13} className="seal-icon" />
            <span>{t("projects.reuse.impact")}</span>
          </div>
          <div className="seal-line-bottom" />
        </motion.div>

        {/* TIÊU ĐỀ & LỜI DẪN STORYTELLING */}
        <motion.div
          className="outcomes-header"
          variants={itemVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3>{t("projects.reuse.outcomeTitle")}</h3>
          <p>{t("projects.reuse.outcomeIntro")}</p>
        </motion.div>

        {/* 3 THẺ METRICS GỌN GÀNG */}
        <div className="outcomes-cards-grid">
          {/* Cột 1: Hiệu năng */}
          <motion.div
            className="outcome-pillar-card pillar-sky"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 01</span>
                <h4>{t("projects.reuse.outcomes.performance")}</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>{t("projects.reuse.outcomes.api")}:</strong>{" "}
                {t("projects.reuse.outcomes.apiValue")}
              </li>
              <li>
                <strong>{t("projects.reuse.outcomes.screen")}:</strong>{" "}
                {t("projects.reuse.outcomes.screenValue")}
              </li>
            </ul>
          </motion.div>

          {/* Cột 2: Trải nghiệm người dùng */}
          <motion.div
            className="outcome-pillar-card pillar-emerald"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 02</span>
                <h4>{t("projects.reuse.outcomes.ux")}</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>{t("projects.reuse.outcomes.visual")}:</strong>{" "}
                {t("projects.reuse.outcomes.visualValue")}
              </li>
              <li>
                <strong>{t("projects.reuse.outcomes.smooth")}:</strong>{" "}
                {t("projects.reuse.outcomes.smoothValue")}
              </li>
              <li>
                <strong>{t("projects.reuse.outcomes.interactions")}:</strong>{" "}
                {t("projects.reuse.outcomes.interactionsValue")}
              </li>
            </ul>
          </motion.div>

          {/* Cột 3: Khám phá & Roadmap */}
          <motion.div
            className="outcome-pillar-card pillar-amber"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="card-top-header">
              <div className="pillar-title-wrap">
                <span className="pillar-tag">PILLAR 03</span>
                <h4>{t("projects.reuse.outcomes.discovery")}</h4>
              </div>
            </div>
            <ul className="pillar-list">
              <li>
                <strong>{t("projects.reuse.outcomes.verification")}:</strong>{" "}
                {t("projects.reuse.outcomes.verificationValue")}
              </li>
              <li>
                <strong>{t("projects.reuse.outcomes.next")}:</strong>{" "}
                {t("projects.reuse.outcomes.nextValue")}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
