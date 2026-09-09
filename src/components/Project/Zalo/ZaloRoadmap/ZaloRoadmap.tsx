import { motion } from "framer-motion";
import "./ZaloRoadmap.css";
import { useTranslation } from "react-i18next";

const roadmapData = [
  {
    id: "smart-reply",
    translationKey: "smartReply",
    colorClass: "theme-blue",
    tracks: [
      {
        translationKey: "reNotify",
      },
      {
        translationKey: "replyLater",
      },
    ],
  },
  {
    id: "focus-mode",
    translationKey: "focusMode",
    colorClass: "theme-coral",
    tracks: [
      {
        translationKey: "main",
      },
    ],
  },
  {
    id: "smart-org",
    translationKey: "smartOrg",
    colorClass: "theme-teal",
    tracks: [
      {
        translationKey: "main",
      },
    ],
  },
];

export default function ZaloRoadmap() {
  const { t } = useTranslation();
  const months = t("projects.roadmap.months", {
    returnObjects: true,
  }) as string[];
  const monthSubtitles = t("projects.roadmap.monthSubtitles", {
    returnObjects: true,
  }) as string[];
  const categories = t("projects.roadmap.categories", {
    returnObjects: true,
  }) as Record<
    string,
    {
      title: string;
      tracks: Record<
        string,
        { name: string; m1: string[]; m2: string[]; m3: string[] }
      >;
    }
  >;

  return (
    <div className="roadmap-section" id="roadmap">
      <div className="roadmap-header">
        <h3>{t("projects.roadmap.title")}</h3>
        <p>{t("projects.roadmap.subtitle")}</p>
      </div>

      <div className="gantt-container">
        {/* HEADER: TIMELINE */}
        <div className="gantt-timeline-header">
          <div className="gantt-corner"></div>
          <div className="gantt-month">
            <strong>{months[0]}</strong>
            <span>{monthSubtitles[0]}</span>
          </div>
          <div className="gantt-month">
            <strong>{months[1]}</strong>
            <span>{monthSubtitles[1]}</span>
          </div>
          <div className="gantt-month">
            <strong>{months[2]}</strong>
            <span>{monthSubtitles[2]}</span>
          </div>
        </div>

        {/* BODY: LANES & TASKS */}
        <div className="gantt-body">
          {roadmapData.map((category, catIndex) => (
            <motion.div
              className={`gantt-category-group ${category.colorClass}`}
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: catIndex * 0.15 }}
            >
              {/* Cột trái: Tên nhóm tính năng */}
              <div className="gantt-category-label">
                <span>{categories[category.translationKey].title}</span>
              </div>

              {/* Các Sub-tracks bên trong */}
              <div className="gantt-tracks-wrapper">
                {category.tracks.map((track, tIndex) => (
                  <div className="gantt-track-row" key={tIndex}>
                    {/* Sub-label (A. Re-notify / B. Reply Later) */}
                    <div className="track-sub-label">
                      {categories[category.translationKey].tracks[
                        track.translationKey
                      ].name && (
                        <span>
                          {
                            categories[category.translationKey].tracks[
                              track.translationKey
                            ].name
                          }
                        </span>
                      )}
                    </div>

                    {/* Khối nhiệm vụ Tháng 1, 2, 3 */}
                    <div className="track-cell">
                      <div className="task-bar m1-bar">
                        <ul>
                          {categories[category.translationKey].tracks[
                            track.translationKey
                          ].m1.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="track-cell">
                      <div className="task-bar m2-bar">
                        <ul>
                          {categories[category.translationKey].tracks[
                            track.translationKey
                          ].m2.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="track-cell">
                      <div className="task-bar m3-bar">
                        <ul>
                          {categories[category.translationKey].tracks[
                            track.translationKey
                          ].m3.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
