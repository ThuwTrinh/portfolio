import {
  Sparkles,
  ShieldCheck,
  Layout,
  TrendingUp,
  Lock,
  MessageSquareShare,
  UserCheck,
  Brain,
  BellOff,
  History,
  Layers,
  ArrowRight,
} from "lucide-react";
import "./ZaloShowcaseDetail.css";

import wireframeImg from "../../../assets/wireframe.png";
import ZaloRoadmap from "./ZaloRoadmap/ZaloRoadmap";

export default function ZaloShowcaseDetail() {
  const [activeTab, setActiveTab] = useState<"part1" | "part2">("part1");

  return (
    <div className="zalo-detail-container">
      {/* 1. VẠCH NGĂN CÁCH PHÂN ĐOẠN */}
      <div className="zalo-section-divider" />

      {/* 2. TIÊU ĐỀ PHÂN ĐOẠN DẪN VÀO 2 BÀI TOÁN */}
      <div className="detail-section-head">
        <span className="detail-eyebrow">STRATEGIC PROPOSALS</span>
        <h3 className="detail-main-title">Two Strategic Product Bets</h3>
        <p className="detail-sub-title">
          Chi tiết 2 bài toán nâng cấp trải nghiệm: Tối ưu cuộc gọi với AI thực
          chiến và giải quyết quá tải hội thoại cho Gen Z.
        </p>
      </div>

      {/* 3. COMPACT PILL SWITCH NAVIGATOR */}
      <div className="zalo-compact-switch">
        <button
          type="button"
          className={`switch-segment ${activeTab === "part1" ? "active" : ""}`}
          onClick={() => setActiveTab("part1")}
        >
          <Sparkles size={15} />
          <span>Part 01 • AI Call Note</span>
        </button>

        <button
          type="button"
          className={`switch-segment ${activeTab === "part2" ? "active" : ""}`}
          onClick={() => setActiveTab("part2")}
        >
          <Brain size={15} />
          <span>Part 02 • Mindful Workspace</span>
        </button>
      </div>

      {/* 4. SHOWCASE CHI TIẾT */}
      <div className="case-content-full">
        {/* =========================================================================
            BÀI TOÁN 1: AI CALL NOTE
            ========================================================================= */}
        {activeTab === "part1" && (
          <section className="zalo-case-part animate-fade">
            {/* TRẠM 1: PROBLEM & SHIFT */}
            <div className="story-step-card">
              <span className="step-tag">01 • THE TENSION SHIFT</span>
              <div className="tension-shift-row">
                <div className="tension-box before">
                  <span className="status-badge red">BEFORE</span>
                  <h5>Khoảng trống sau thoại</h5>
                  <p>
                    Tự ghi chú gây gián đoạn; trôi mất lịch hẹn sau khi gác máy.
                  </p>
                </div>
                <div className="shift-arrow">
                  <ArrowRight size={18} />
                </div>
                <div className="tension-box after">
                  <span className="status-badge blue">AFTER (ZALO AI)</span>
                  <h5>Khép kín 1-Chạm</h5>
                  <p>
                    Auto trích xuất Todo &amp; Lịch hẹn gửi thẳng vào khung
                    chat.
                  </p>
                </div>
              </div>
            </div>

            {/* TRẠM 2: 3 TRADE-OFFS */}
            <div className="story-step-card">
              <span className="step-tag">
                <ShieldCheck size={13} /> 02 • STRATEGIC TRADE-OFFS
              </span>
              <div className="tradeoffs-modern-grid">
                <div className="tradeoff-glass-card theme-red">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box red">
                        <Lock size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">PILLAR 01</span>
                        <h5>Privacy First</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Chỉ bóc tách text thời gian thực, tự động hủy toàn bộ file
                      ghi âm ngay sau cuộc gọi.
                    </p>
                  </div>
                </div>

                <div className="tradeoff-glass-card theme-blue">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box blue">
                        <MessageSquareShare size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">PILLAR 02</span>
                        <h5>Zero Friction</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Summary Card &amp; nút Tạo lịch nhúng trực tiếp ngay trong
                      luồng chat nhóm.
                    </p>
                  </div>
                </div>

                <div className="tradeoff-glass-card theme-green">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box green">
                        <UserCheck size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">PILLAR 03</span>
                        <h5>100% Consent</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Bảo vệ lòng tin: Bắt buộc toàn bộ thành viên đồng thuận
                      trước khi kích hoạt.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRẠM 3: WIREFRAME FRAME */}
            <div className="story-step-card">
              <span className="step-tag">
                <Layout size={13} /> 03 • INTERACTION FLOW
              </span>
              <div className="art-frame-box">
                <img src={wireframeImg} alt="Wireframe Flow" />
              </div>
              <div className="stepper-dots">
                <span>00. Cuộc gọi</span>
                <em>→</em>
                <span>01. Bật AI</span>
                <em>→</em>
                <span>02. 100% Opt-in</span>
                <em>→</em>
                <span>04. In-Chat Card</span>
                <em>→</em>
                <span className="highlight">05. Đặt lịch 1-click</span>
              </div>
            </div>

            {/* TRẠM 4: METRICS */}
            <div className="story-step-card">
              <span className="step-tag">
                <TrendingUp size={13} /> 04 • SUCCESS MEASUREMENT
              </span>
              <div className="metrics-compact-quad">
                <div className="m-pill north-star">
                  <span className="num">60%</span>
                  <strong>Summary Engagement</strong>
                  <p>North Star • Tương tác Card</p>
                </div>
                <div className="m-pill">
                  <span className="num">20%</span>
                  <strong>Adoption Rate</strong>
                  <p>Cuộc gọi kích hoạt AI</p>
                </div>
                <div className="m-pill">
                  <span className="num">25%</span>
                  <strong>Reminder Conv.</strong>
                  <p>Chuyển thành lịch hẹn</p>
                </div>
                <div className="m-pill guardrail">
                  <span className="num">&lt; 30%</span>
                  <strong>Opt-out Rate</strong>
                  <p>Guardrail • Tránh gây phiền</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =========================================================================
            BÀI TOÁN 2: MINDFUL WORKSPACE
            ========================================================================= */}
        {activeTab === "part2" && (
          <section className="zalo-case-part animate-fade">
            {/* TRẠM 1: 3 TRỤ CỘT THEO ICE */}
            <div className="story-step-card">
              <span className="step-tag">
                <Brain size={13} /> 01 • SOLUTION TRIAD (ICE SCORE)
              </span>
              <div className="tradeoffs-modern-grid">
                <div className="tradeoff-glass-card theme-blue">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box blue">
                        <History size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">#1 BUILD FIRST</span>
                        <h5>Smart Reminder</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Nhắc nhẹ tin chưa đọc; nút "Reply Later" gỡ bỏ áp lực phản
                      hồi tức thì.
                    </p>
                  </div>
                </div>

                <div className="tradeoff-glass-card theme-red">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box red">
                        <BellOff size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">#2 EXPLORE NEXT</span>
                        <h5>Focus Mode</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Lọc thông báo theo nhóm ưu tiên; gom tóm tắt tránh FOMO.
                    </p>
                  </div>
                </div>

                <div className="tradeoff-glass-card theme-green">
                  <div className="card-accent-bar" />
                  <div className="tradeoff-card-body">
                    <div className="tradeoff-card-header">
                      <div className="icon-glass-box green">
                        <Layers size={16} />
                      </div>
                      <div className="title-group">
                        <span className="pillar-label">#3 QUICK WIN</span>
                        <h5>Smart Org Banner</h5>
                      </div>
                    </div>
                    <p className="tradeoff-explanation">
                      Nhận diện quá tải để gợi ý tạo tab Công việc / Học tập.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* TRẠM 2: ROADMAP FRAME */}
            <div className="story-step-card">
              <span className="step-tag">02 • 3-MONTH EXECUTION ROADMAP</span>
              <div className="art-frame-box roadmap-clean">
                <ZaloRoadmap />
              </div>
              <div className="stepper-dots">
                <span>T1: Logic &amp; Internal</span>
                <em>→</em>
                <span>T2: A/B Test 10–20%</span>
                <em>→</em>
                <span className="highlight">T3: Rollout 50%+</span>
              </div>
            </div>

            {/* TRẠM 3: NORTH STAR & BOUNDARY */}
            <div className="story-step-card">
              <span className="step-tag">
                <TrendingUp size={13} /> 03 • TARGET &amp; DEFINITION
              </span>
              <div className="target-def-grid">
                <div className="target-box">
                  <span className="big-num">+15–20%</span>
                  <div className="target-info">
                    <strong>Reply Rate within 24h for Important Chats</strong>
                    <p>Tối ưu phản hồi việc gấp mà không gây quá tải tâm lý.</p>
                  </div>
                </div>
                <div className="def-box">
                  <span className="def-head">
                    Định nghĩa Hội thoại quan trọng:
                  </span>
                  <ul>
                    <li>
                      Tab user gắn tag: <em>Công việc / Gia đình</em>
                    </li>
                    <li>
                      Thuộc <strong>Top 15%</strong> tương tác 30 ngày qua
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
