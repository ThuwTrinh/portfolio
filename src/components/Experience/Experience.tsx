import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Footprints, MapPin } from "lucide-react";
import "./Experience.css";
import { useTranslation } from "react-i18next";

// Mảng tọa độ chuẩn của bạn
const STAGE_OFFSETS = ["5%", "32%", "59%", "87%"];

const roadStages = [
  {
    index: 0,
    step: "01",
    km: "0.0",
    translationKey: "stage1",
    side: "left",
  },
  {
    index: 1,
    step: "02",
    km: "2.5",
    translationKey: "stage2",
    side: "right",
  },
  {
    index: 2,
    step: "03",
    km: "5.0",
    translationKey: "stage3",
    side: "left",
  },
  {
    index: 3,
    step: "04",
    km: "10.0",
    translationKey: "stage4",
    side: "right",
  },
];

export default function Experience() {
  const { t } = useTranslation();
  const [visibleStages, setVisibleStages] = useState<number[]>([0]);

  const handleStageEnter = (index: number) => {
    setVisibleStages((prev) => Array.from(new Set([...prev, index])));
  };

  const handleStageLeave = (index: number) => {
    setVisibleStages((prev) => {
      const next = prev.filter((i) => i !== index);
      return next.length > 0 ? next : [index];
    });
  };

  // Luôn lấy trạm lớn nhất đang hiển thị
  const activeStage = visibleStages.length > 0 ? Math.max(...visibleStages) : 0;

  return (
    <section className="road-section" id="experience">
      <div className="road-ambient-glow" aria-hidden="true" />

      {/* Header */}
      <header className="road-header">
        <div className="road-badge">
          <Sparkles size={14} className="text-sky-500" />
          <span>{t("experience.badge")}</span>
        </div>
        <h2>
          {t("experience.title")} <br />
          <em>{t("experience.titleAccent")}</em>
        </h2>
        <p>{t("experience.intro")}</p>
      </header>

      {/* Sân khấu Roadmap */}
      <div className="road-stage-arena">
        {/* TRỤC ĐƯỜNG TRUNG TÂM */}
        <div className="road-track-wrapper">
          <svg
            className="road-svg-canvas"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="roadGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="35%" stopColor="#6366f1" />
                <stop offset="70%" stopColor="#f43f5e" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>

            <line
              x1="50"
              y1="0"
              x2="50"
              y2="1000"
              className="road-base-track"
            />
            <line x1="50" y1="0" x2="50" y2="1000" className="road-dash-line" />

            <motion.line
              x1="50"
              y1="0"
              x2="50"
              y2="1000"
              className="road-active-laser"
              animate={{ pathLength: (activeStage + 0.6) / roadStages.length }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
            />
          </svg>

          {/* BƯỚC CHÂN DỪNG CHUẨN OFFSET */}
          <motion.div
            className="road-traveler-avatar"
            animate={{ top: STAGE_OFFSETS[activeStage] }}
            transition={{ type: "spring", stiffness: 65, damping: 18 }}
          >
            <div className="traveler-pulse" />
            <div className="traveler-core">
              <Footprints size={15} className="text-sky-500" />
            </div>
            <span className="traveler-tag">
              {t("experience.station", { number: `0${activeStage + 1}` })}
            </span>
          </motion.div>
        </div>

        {/* DANH SÁCH 4 CHẶNG ĐƯỜNG */}
        <div className="road-milestones-container">
          {roadStages.map((stage) => {
            const isLeft = stage.side === "left";
            const isCurrentActive = activeStage === stage.index;

            return (
              <div
                key={stage.step}
                className={`road-milestone-row ${isLeft ? "row-left" : "row-right"}`}
              >
                {/* VẾ TRÁI */}
                <div className="road-col col-left">
                  {isLeft ? (
                    <motion.div
                      className={`road-station-card ${isCurrentActive ? "card-highlight" : ""}`}
                      initial={{ opacity: 0, x: -30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      onViewportEnter={() => handleStageEnter(stage.index)}
                      onViewportLeave={() => handleStageLeave(stage.index)}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="card-top-bar">
                        <div className="card-badge-group">
                          <span className="stage-pill-tag">
                            {t(`experience.${stage.translationKey}.tag`)}
                          </span>
                          <span className="stage-lens-tag">
                            {t(`experience.${stage.translationKey}.lens`)}
                          </span>
                        </div>
                      </div>

                      <h3 className="stage-title">
                        {t(`experience.${stage.translationKey}.title`)}
                      </h3>
                      <p className="stage-desc">
                        {t(`experience.${stage.translationKey}.desc`)}
                      </p>

                      <div className="stage-takeaway-simple">
                        <p className="takeaway-text">
                          {t(`experience.${stage.translationKey}.takeaway`)}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    /* BIỂN BÁO CÓ ANIMATION ĐỒNG BỘ */
                    <motion.div
                      className={`road-signpost signpost-left ${isCurrentActive ? "signpost-highlight" : ""}`}
                      initial={{ opacity: 0, x: -20, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="signpost-head">
                        <MapPin size={12} className="text-sky-500" />
                        <span>
                          {t("experience.km", { distance: stage.km })}
                        </span>
                      </div>
                      <div className="signpost-body">
                        <strong>
                          {t("experience.station", { number: stage.step })}
                        </strong>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* TIM ĐƯỜNG */}
                <div className="road-col col-center" />

                {/* VẾ PHẢI */}
                <div className="road-col col-right">
                  {!isLeft ? (
                    <motion.div
                      className={`road-station-card ${isCurrentActive ? "card-highlight" : ""}`}
                      initial={{ opacity: 0, x: 30, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      onViewportEnter={() => handleStageEnter(stage.index)}
                      onViewportLeave={() => handleStageLeave(stage.index)}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="card-top-bar">
                        <div className="card-badge-group">
                          <span className="stage-pill-tag">
                            {t(`experience.${stage.translationKey}.tag`)}
                          </span>
                          <span className="stage-lens-tag">
                            {t(`experience.${stage.translationKey}.lens`)}
                          </span>
                        </div>
                      </div>

                      <h3 className="stage-title">
                        {t(`experience.${stage.translationKey}.title`)}
                      </h3>
                      <p className="stage-desc">
                        {t(`experience.${stage.translationKey}.desc`)}
                      </p>

                      <div className="stage-takeaway-simple">
                        <p className="takeaway-text">
                          {t(`experience.${stage.translationKey}.takeaway`)}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    /* BIỂN BÁO CÓ ANIMATION ĐỒNG BỘ */
                    <motion.div
                      className={`road-signpost signpost-right ${isCurrentActive ? "signpost-highlight" : ""}`}
                      initial={{ opacity: 0, x: 20, y: 15 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ amount: 0.35 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                    >
                      <div className="signpost-head">
                        <MapPin size={12} className="text-sky-500" />
                        <span>
                          {t("experience.km", { distance: stage.km })}
                        </span>
                      </div>
                      <div className="signpost-body">
                        <strong>
                          {t("experience.station", { number: stage.step })}
                        </strong>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
