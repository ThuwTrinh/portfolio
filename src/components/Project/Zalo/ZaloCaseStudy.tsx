import { motion } from "framer-motion";
import { FileText, Video, ArrowUpRight } from "lucide-react";
import ZaloContext from "./ZaloContext";
import "./ZaloCaseStudy.css";
import ZaloShowcaseDetail from "./ZaloShowcaseDetail";


const ZALO_LINKS = {
  PRESENTATION_VIDEO:
    "https://drive.google.com/file/d/1rprZN5L4oDJ_QhNZiaVV6ATzfaA9oGoG/view?usp=sharing",
  FULL_ASSIGNMENT_PDF:
    "https://drive.google.com/file/d/1iSWwweYIsStnVLg8KgI8oF3c6OCImjFA/view?usp=sharing",
};

export default function ZaloCaseStudy() {
  return (
    <section className="zalo-section" id="work" aria-label="Zalo Case Study">
      <div className="zalo-container">
        {/* HEADER & ACTIONS */}
        <motion.div
          className="zalo-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="zalo-eyebrow">
            <span className="zalo-pulse" /> CASE STUDY • PRODUCT MANAGEMENT
            TRAINEE 2026
          </div>
          <h2 className="zalo-title">
            Zalo — Product Management Case Studies (2026)
          </h2>
          <p className="zalo-subtitle">
            Vượt qua vòng Assignment chương trình Zalo Product Management
            Trainee (PMT) 2026 với 2 bài toán chiến lược: Tối ưu hóa tính năng
            AI thực chiến và giải quyết bài toán trải nghiệm cho người dùng trẻ
            trên siêu ứng dụng.
          </p>

          <div className="zalo-action-bar">
            <a
              href={ZALO_LINKS.PRESENTATION_VIDEO}
              target="_blank"
              rel="noreferrer"
              className="zalo-action-btn primary"
            >
              <Video size={16} /> Watch Presentation Video{" "}
              <ArrowUpRight size={14} />
            </a>
            <a
              href={ZALO_LINKS.FULL_ASSIGNMENT_PDF}
              target="_blank"
              rel="noreferrer"
              className="zalo-action-btn secondary"
            >
              <FileText size={16} /> View Full Assignment PDF{" "}
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* 1. CONTEXT */}
        <ZaloContext />

        {/* 2. SHOWCASE */}
        <ZaloShowcaseDetail />
      </div>
    </section>
  );
}
