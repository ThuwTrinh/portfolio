import { motion, type Variants } from "framer-motion";
import { Languages, Target, FileText, ArrowUpRight } from "lucide-react";
import bkuLogo from "../../assets/bku.png";
import "./Snapshot.css";
import Sparkles from "../Sparkles";

const snapshotData = [
  {
    id: 1,
    size: "large",
    icon: <img src={bkuLogo} alt="HCMUT Logo" className="snapshot-logo-img" />,
    title: "Tốt nghiệp Xuất Sắc",
    sub: "HCMUT • Khoa Học Máy Tính",
    details: "GPA: 3.6 / 4.0 (8.32/10)\nTốt nghiệp T11/2026",
    linkText: "Xem Bảng Điểm",
    linkUrl:
      "https://drive.google.com/file/d/13-fcWCkcF__h7Fv7qSqrjjtk-NJ29sSu/view?usp=sharing",
  },
  {
    id: 2,
    size: "medium",
    icon: <Languages size={24} strokeWidth={1.5} />,
    title: "Năng lực Ngoại ngữ",
    sub: "TOEIC 760 (Listening & Reading)",
    details: "Giao tiếp tự tin & làm việc hiệu quả trong môi trường quốc tế",
  },
  {
    id: 3,
    size: "small",
    icon: <Target size={22} strokeWidth={1.5} />,
    title: "Product Mindset",
    sub: "Technical Feasibility",
    details:
      "Cầu nối giữa kỹ thuật & bài toán kinh doanh, tối ưu hóa thực thi với AI.",
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
  return (
    <section
      className="snapshot-transition"
      id="about"
      aria-label="Quick Snapshot"
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
            <span className="snapshot-pulse" /> TỔNG QUAN NHANH
          </span>
          <h2>Đôi Nét Nổi Bật Về Mình</h2>
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
                <span className="snapshot-title-clean">{item.title}</span>
                <span className="snapshot-sub-clean">{item.sub}</span>
                <span className="snapshot-details-clean">{item.details}</span>

                {item.linkUrl && (
                  <a
                    href={item.linkUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="transcript-link"
                  >
                    <FileText size={13} /> {item.linkText}{" "}
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
