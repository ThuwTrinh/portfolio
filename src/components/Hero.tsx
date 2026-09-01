import { useEffect, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/img1.jpg";
import cvFile from "../assets/cv.pdf";
import Sparkles from "./Sparkles";


const typewriterLines = [
  "Gỡ rối bài toán giữa những điều mơ hồ",
  "Biến insight người dùng thành ưu tiên phát triển",
  "Xây dựng sản phẩm có chủ đích & tạo giá trị thật",
];

function Hero() {
  const [lineIndex, setLineIndex] = useState(0);
  const [typedLine, setTypedLine] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentLine = typewriterLines[lineIndex];
    const isComplete = typedLine === currentLine;
    const delay = isComplete && !isDeleting ? 1500 : isDeleting ? 45 : 80;
    const timer = window.setTimeout(() => {
      if (!isDeleting && isComplete) {
        setIsDeleting(true);
      } else if (isDeleting && typedLine.length === 0) {
        setIsDeleting(false);
        setLineIndex((index) => (index + 1) % typewriterLines.length);
      } else {
        setTypedLine(
          isDeleting
            ? currentLine.slice(0, typedLine.length - 1)
            : currentLine.slice(0, typedLine.length + 1),
        );
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [isDeleting, lineIndex, typedLine]);

  const handleVisualMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    setTilt({ x, y });
  };

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <Sparkles count={6} />
      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <p className="eyebrow">
          <span className="status-dot" /> SẴN SÀNG CHO CƠ HỘI PRODUCT · Thành
          Phố Hồ Chí Minh
        </p>
        <h1 id="hero-title">
          Chào bạn, mình là <span className="hero-name">Anh Thư</span>
          <br />
          <span className="hero-role">Product Management</span>
        </h1>
        <p className="typewriter" aria-live="polite">
          “{typedLine}
          <span className="caret" />”
        </p>
        <p className="hero-intro">
          Đi lên từ nền tảng kỹ thuật tới tư duy sản phẩm — mình thích gỡ rối
          những bài toán mơ hồ và biến chúng thành trải nghiệm số đơn giản, hữu
          ích.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#experience">
            Khám phá hành trình <span aria-hidden="true">↓</span>
          </a>
          <a className="text-link" href="#work">
            Dự án tiêu biểu
          </a>
          <a
            className="text-link"
            href={cvFile}
            target="_blank"
            rel="noreferrer"
          >
            Xem CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </motion.div>
      <div
        className="hero-visual"
        aria-label="Product management visual"
        onMouseMove={handleVisualMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <motion.div
          className="aura-glow"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1 }}
        />
        <div className="visual-caption">
          CS
          <br />→ Product
        </div>
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <motion.div
          className="hero-image-frame"
          animate={{ rotateX: tilt.y, rotateY: tilt.x }}
          transition={{ type: "spring", stiffness: 180, damping: 18 }}
        >
          <img src={heroImg} alt="Portrait of Trịnh Thị Anh Thư" />
        </motion.div>
        <motion.div
          className="floating-card card-build"
          animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <span>
            Builder <strong>Mindset</strong>
          </span>
        </motion.div>
        <motion.div
          className="floating-card card-learn"
          animate={{ y: [0, -15, 0], rotate: [2, -2, 2] }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.4,
          }}
        >
          <span>
            Continuous <strong>Learner</strong>
          </span>
        </motion.div>
        <motion.div
          className="floating-card card-shape"
          animate={{ y: [0, -10, 0], rotate: [-1, 2, -1] }}
          transition={{
            duration: 4.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <span>User-Centric</span>
        </motion.div>
      </div>
      {/* <div className="scroll-note">
        <span>Scroll to explore</span>
        <span className="scroll-line" />
      </div> */}
      <div className="hero-bottom-space" aria-hidden="true" />
    </section>
  );
}

export default Hero;
