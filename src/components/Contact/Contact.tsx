import { motion, type Variants } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import "./Contact.css";
import avatarImg from "../../assets/img2.jpg";

// Hiệu ứng container điều phối xuất hiện tuần tự
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14, // Mỗi phần tử con xuất hiện cách nhau 0.14s
      delayChildren: 0.1,
    },
  },
};

// Hiệu ứng lướt lên và hiện rõ của từng badge / block con
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "trinhthianhthu1808@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section" id="contact">
      {/* ẢNH AVATAR: Nổi mượt mà từ góc phải */}
      <motion.img
        className="contact-avatar-bg"
        src={avatarImg}
        alt="Trịnh Thị Anh Thư"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      />

      <div className="contact-container">
        {/* NỘI DUNG CHỮ & BADGES XUẤT HIỆN TỪNG BƯỚC */}
        <motion.div
          className="contact-left-col"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge 1: Status Pill */}
          <motion.div variants={itemVariants} className="status-pill-clean">
            <span className="status-dot-clean" />
            <span>SẴN SÀNG CHO CƠ HỘI MỚI</span>
          </motion.div>

          {/* Badge 2: Tiêu đề chính */}
          <motion.h2 variants={itemVariants} className="contact-title-clean">
            Let’s build <br />
            <em>something real.</em>
          </motion.h2>

          {/* Badge 3: Cụm nút CTA & Copy */}
          <motion.div variants={itemVariants} className="contact-actions-clean">
            <a href={`mailto:${email}`} className="btn-primary-clean">
              <Mail size={18} />
              <span>Gửi email</span>
            </a>

            <button
              onClick={handleCopy}
              className="btn-icon-clean"
              title="Copy Email"
            >
              {copied ? (
                <Check size={18} className="text-emerald-600" />
              ) : (
                <Copy size={18} />
              )}
            </button>
          </motion.div>

          {/* Badge 4: Social Links */}
          <motion.div variants={itemVariants} className="contact-socials-clean">
            <a
              href="https://www.linkedin.com/in/thuwtrinh/"
              target="_blank"
              rel="noreferrer"
              className="social-link-clean"
            >
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <span className="social-divider">/</span>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="social-link-clean"
            >
              GitHub <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}