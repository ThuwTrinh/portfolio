import { motion } from "framer-motion";
import { Mail, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import "./Contact.css";
import avatarImg from "../../assets/img2.jpg";

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
      {/* ẢNH AVATAR: Chỉ hiển thị ở nửa bên phải màn hình */}
      <motion.img
        className="contact-avatar-bg"
        src={avatarImg}
        alt="Trịnh Thị Anh Thư"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      />

      <div className="contact-container">
        {/* NỘI DUNG CHỮ: Ép chặt vào cột bên trái */}
        <motion.div
          className="contact-left-col"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <h2 className="contact-title-clean">
            Let’s build <br />
            <em>something real.</em>
          </h2>

          <div className="contact-actions-clean">
            <a href={`mailto:${email}`} className="btn-primary-clean">
              <Mail size={18} />
              <span>Email me</span>
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
          </div>

          {/* Social Links Tối Giản */}
          <div className="contact-socials-clean">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
