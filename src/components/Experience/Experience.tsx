import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Sparkles } from "lucide-react";
import "./Experience.css";



const editorialStories = [
  {
    step: "01",
    tag: "CHUYÊN QUANG TRUNG (TOÁN)",
    lens: "First-Principles Thinking",
    headline: "Bóc tách bài toán từ những ẩn số mơ hồ",
    story:
      "Những năm tháng học chuyên Toán không có sẵn công thức rập khuôn. Phải tự mò mẫm từ con số 0 rèn cho mình tính kỷ luật và phản xạ không sợ sự mơ hồ (ambiguity).",
    takeawayLabel: "Tư duy cốt lõi",
    takeaway:
      "Luôn tìm về bản chất gốc rễ của vấn đề thay vì chạy theo bề nổi hay phụ thuộc vào các giải pháp mẫu có sẵn.",
  },
  {
    step: "02",
    tag: "BÁCH KHOA HCMUT (Computer Science)",
    lens: "System & Feasibility",
    headline: "Hiểu bản chất công nghệ và sức bền thực thi",
    story:
      "Đối mặt với những bài tập lớn dài hàng ngàn dòng code và áp lực debug rèn cho mình bản lĩnh làm chủ kỹ thuật và thấu hiểu cách một hệ thống vận hành.",
    takeawayLabel: "Tư duy cốt lõi",
    takeaway:
      "Nắm chắc tính khả thi kỹ thuật (technical feasibility), hiểu rõ những đánh đổi (trade-offs) để làm việc và thấu cảm sâu sắc với đội ngũ kỹ sư.",
  },
  {
    step: "03",
    tag: "STARTUP (MOBILE DEV)",
    lens: "User-Centric Shift",
    headline: "Code tối ưu đến mấy mà sai nhu cầu thì vẫn là con số 0",
    story:
      "Trực tiếp làm app thực chiến và quan sát biểu đồ drop-off của người dùng giúp mình nhận ra: một tính năng code rất kỳ công nhưng luồng trải nghiệm rối rắm thì người dùng vẫn rời bỏ.",
    takeawayLabel: "Bước ngoặt chuyển dịch",
    takeaway:
      "Chuyển từ người thực thi thuần kỹ thuật sang người định hình giải pháp: xác định đúng bài toán đáng để giải, kiểm chứng tính khả thi và đảm bảo mỗi tính năng làm ra đều mang lại giá trị thực tế cho người dùng.",
  },
  {
    step: "04",
    tag: "ĐÍCH ĐẾN • PRODUCT MANAGEMENT",
    lens: "AI-Driven & High Ownership",
    headline:
      "Nơi hội tụ giữa Logic toán, Năng lực kỹ thuật và Tư duy AI-First",
    story:
      "Mình không rời bỏ công nghệ mà dùng nền tảng CS để tiếp cận làn sóng AI một cách thực tế: hiểu rõ mô hình vận hành, đánh giá đúng tính khả thi và ứng dụng AI để tự động hóa, giải quyết những bài toán phức tạp cho người dùng.",
    takeawayLabel: "Định vị bản thân",
    takeaway:
      "Một Product Builder có nền tảng Tech & AI vững vàng — sẵn sàng nhận trọn trách nhiệm (End-to-End Ownership) để biến công nghệ thành trải nghiệm số đơn giản, mượt mà và tạo ra giá trị kinh doanh.",
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section className="editorial-section" id="experience" ref={sectionRef}>
      <div className="editorial-ambient" aria-hidden="true" />

      <header className="editorial-header">
        <span className="editorial-badge">
          <Sparkles size={14} className="inline mr-2 text-sky-500" />
          THE PIVOT STORY
        </span>
        <h2>
          From Math &amp; Code to <br />
          <em>Product Intuition</em>
        </h2>
        <p>
          Hành trình từng bước chuyển hóa từ người trực tiếp gõ lệnh sang người
          định hình chiến lược và trải nghiệm sản phẩm.
        </p>
      </header>

      <div className="editorial-stage">
        <svg
          className="thread-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="thread-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#bae6fd" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
          </defs>
          <path
            className="thread-base"
            d="M50 0 L50 100"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="thread-glow"
            d="M50 0 L50 100"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            className="thread-active"
            d="M50 0 L50 100"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: smoothProgress }}
          />
        </svg>

        <div className="editorial-feed">
          {editorialStories.map((item) => (
            <article key={item.step} className="editorial-entry">
              {/* CỘT 1: Bullet cố định, ẩn hiện 2 chiều mượt mà */}
              <div className="editorial-node-col">
                <motion.div
                  className="thread-node"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <span className="thread-node-num">{item.step}</span>
                </motion.div>
              </div>

              {/* CỘT 2: Nội dung lướt lên/xuống và ẩn/hiện 2 chiều */}
              <motion.div
                className="editorial-content"
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  delay: 0.1,
                }}
              >
                <div className="editorial-meta">
                  <span className="editorial-tag">{item.tag}</span>
                  <span className="editorial-lens">{item.lens}</span>
                </div>

                <h3 className="editorial-headline">“{item.headline}”</h3>
                <p className="editorial-story">{item.story}</p>

                <div className="editorial-takeaway">
                  <span className="takeaway-label">{item.takeawayLabel}: </span>
                  <span className="takeaway-text">{item.takeaway}</span>
                </div>
              </motion.div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
