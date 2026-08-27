import React from "react";
import { motion, type Variants } from "framer-motion";
import { Video, FileText } from "lucide-react";

import ShowcasePart1 from "./ShowcasePart1";
import ShowcasePart2 from "./ShowcasePart2";
import "./ZaloCaseStudy.css";

export const commitVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const ZALO_LINKS = {
  PRESENTATION_VIDEO:
    "https://drive.google.com/file/d/1rprZN5L4oDJ_QhNZiaVV6ATzfaA9oGoG/view?usp=sharing",
  FULL_ASSIGNMENT_PDF:
    "https://drive.google.com/file/d/1iSWwweYIsStnVLg8KgI8oF3c6OCImjFA/view?usp=sharing",
};

export default function ZaloCaseStudy() {
  return (
    <section className="zalo-mockup-section" id="work">
      <div className="zalo-wrap">
        {/* HERO SECTION */}
        <div className="zalo-hero">
          <div className="eyebrow">⑂ case study · zalo pmt 2026</div>
          <h1>
            Bước ngoặt: khoảnh khắc mình
            <br />
            tìm thấy <span>tư duy Product</span>
          </h1>
          <p className="lede">
            Từ một người quen nhìn thế giới qua dòng lệnh, đến lúc nhận ra: công
            nghệ chỉ có ý nghĩa khi tháo gỡ được một nỗi đau có thật.
          </p>
          <div className="cta-row">
            <a
              className="btn primary"
              href={ZALO_LINKS.PRESENTATION_VIDEO}
              target="_blank"
              rel="noreferrer"
            >
              <Video size={15} /> Xem video thuyết trình
            </a>
            <a
              className="btn ghost"
              href={ZALO_LINKS.FULL_ASSIGNMENT_PDF}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={15} /> Tài liệu Assignment (PDF)
            </a>
          </div>
        </div>

        {/* TIMELINE LOG */}
        <div className="log">
          <div className="log-head">⑂</div>

          <ShowcasePart1 />
          <ShowcasePart2 />
        </div>

        {/* FOOTER */}
        <footer>
          <div className="merge">merge branch 'product-mindset' into main</div>
          <div>Case Study · Zalo Product Management Trainee 2026</div>
        </footer>
      </div>
    </section>
  );
}

/* =========================================================================
   HELPER COMPONENT: COMMIT LAYOUT DÙNG CHUNG CHO CẢ 2 PHẦN
   ========================================================================= */
interface CommitLayoutProps {
  type?: "default" | "warm" | "mint" | "final";
  hash: string;
  cmd: string;
  tag: React.ReactNode;
  children: React.ReactNode;
}

export function CommitLayout({
  type = "default",
  hash,
  cmd,
  tag,
  children,
}: CommitLayoutProps) {
  const commitClass = `commit ${type !== "default" ? type : ""}`.trim();

  return (
    <motion.div
      className={commitClass}
      variants={commitVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="commit-dot" />
      <div className="commit-meta">
        <span className="hash-line">
          <span className="hash">{hash}</span> {cmd}
        </span>
        <span className="tag">{tag}</span>
      </div>
      {children}
    </motion.div>
  );
}
