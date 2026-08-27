import {
  Shield,
  Zap,
  Folder,
  Target,
  Search,
  Scale,
  LineChart,
} from "lucide-react";
import { CommitLayout } from "./ZaloCaseStudy";

import flow1 from "../../../assets/flow_page1.jpg";
import flow2 from "../../../assets/flow_page2.jpg";
import flow3 from "../../../assets/flow_page3.jpg";
import flow4 from "../../../assets/flow_page4.jpg";

export default function ShowcasePart1() {
  return (
    <>
      {/* ================= COMMIT 01: INIT ================= */}
      <CommitLayout
        hash="#a1f9c2"
        cmd="init(mindset)"
        tag={
          <span className="tag-wrap">
            <span>điểm chạm</span>
            <span className="skill-pill">
              <Target size={12} /> Problem Framing
            </span>
          </span>
        }
      >
        <h2>Khi "chạy đúng" không còn là thước đo duy nhất</h2>

        <p>
          Xuất phát điểm là dân kỹ thuật, mình từng tin sản phẩm tốt đơn giản là
          code mượt, thuật toán tối ưu. Đúng — là đủ.
        </p>

        <p style={{ color: "var(--ink-soft)" }}>
          Hai bài toán Zalo PMT 2026 không hỏi "hệ thống chạy đúng không", mà
          thử thách 2 tầng năng lực bổ trợ cho nhau:
        </p>

        <div className="brief" style={{ margin: "16px 0" }}>
          <div className="row">
            <span className="label">ASSIGNMENT 1</span>
            <span className="val">
              <b>Product Sense · Nhìn đúng vấn đề:</b> Nhạy bén quan sát hệ
              thống đang vận hành trơn tru để tìm ra khoảng trống trải nghiệm bị
              bỏ quên.
            </span>
          </div>
          <div className="row">
            <span className="label">ASSIGNMENT 2</span>
            <span className="val">
              <b>Critical Thinking & Creativity · Giải bài toán khả thi:</b> Tự
              dựng bối cảnh mới từ không gian mở, phản biện và cân nhắc
              trade-off để chứng minh hiệu quả trong 3 tháng.
            </span>
          </div>
        </div>

        <p>
          Đó là lần đầu tiên mình nhận ra:{" "}
          <strong>
            Tư duy kỹ thuật đi tìm lỗi sai trong hệ thống — còn tư duy product
            đi tìm khoảng trống trong trải nghiệm con người.
          </strong>
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              build(correctSystem){" "}
              <span className="code-comment">
                // góc nhìn kỹ thuật: tối ưu để hệ thống chạy đúng
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              solve(humanProblem){" "}
              <span className="code-comment">
                // góc nhìn product: tháo gỡ nỗi đau thực tế của người dùng
              </span>
            </span>
          </div>
        </div>
      </CommitLayout>

      {/* ================= COMMIT 02: EXPLORE ================= */}
      <CommitLayout
        hash="#b4e819"
        cmd="explore(gap)"
        tag={
          <span className="tag-wrap">
            <span>assignment 01</span>
            <span className="skill-pill">
              <Search size={12} /> Product Sense
            </span>
          </span>
        }
      >
        <h2>Đi tìm khoảng trống trong một hệ thống đã quá hoàn chỉnh</h2>

        <div className="brief">
          <div className="row">
            <span className="label">ĐỀ BÀI 01</span>
            <span className="val">
              Quan sát các tính năng AI trong Zalo và đề xuất tối ưu hoặc tính
              năng mới.
            </span>
          </div>
        </div>

        <p>
          Lần đầu đọc đề, mình khá... trống rỗng. Zalo đã quá trưởng thành —
          không có lỗi to nào để bắt bẻ. Cảm giác bị bỏ giữa một hệ thống hoàn
          chỉnh, chẳng biết bắt đầu từ đâu.
        </p>
        <p style={{ color: "var(--ink-soft)" }}>
          Thay vì săm soi một danh sách tính năng, mình chọn đi cùng hành trình
          thật của người dùng và tự hỏi:{" "}
          <strong>
            "Có điều gì họ đang phải tự xoay xở mà lẽ ra sản phẩm có thể đỡ
            đần?"
          </strong>
          . Hóa ra, AI hỗ trợ rất mượt mà khi cuộc gọi đang diễn ra, nhưng khi
          vừa gác máy, trải nghiệm ấy cũng dừng lại và để người dùng tự nhớ, tự
          ghi chép.
        </p>

        <div
          className="icon-strip"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "20px 0",
            flexWrap: "wrap",
          }}
        >
          <span className="icon-pill">🎙️ Voice-to-text</span>
          <span style={{ color: "var(--ink-faint)" }}>·</span>
          <span className="icon-pill">💬 Subtitle</span>
          <span style={{ color: "var(--ink-faint)" }}>·</span>
          <span className="icon-pill">🌐 Dịch tin</span>
          <span
            style={{
              color: "var(--ink-faint)",
              fontSize: "16px",
              margin: "0 8px",
            }}
          >
            ┄┄→
          </span>
          <span
            className="icon-gap"
            style={{ fontSize: "20px", fontWeight: 700, color: "var(--ink)" }}
          >
            ?
          </span>
        </div>

        <p className="callout-line">
          Hóa ra khoảng trống không nằm ở những phút giây trò chuyện, mà bắt đầu
          ngay khoảnh khắc tiếng 'tút' vừa dứt.
        </p>
      </CommitLayout>

      {/* ================= COMMIT 03: SOLUTION ================= */}
      <CommitLayout
        type="warm"
        hash="#7d2e88"
        cmd="feat(trust)"
        tag={
          <span className="tag-wrap">
            <span>assignment 01</span>
            <span className="skill-pill">
              <Scale size={12} /> Trade-off Thinking
            </span>
          </span>
        }
      >
        <h2>Cân bằng giữa dữ liệu và niềm tin</h2>

        <div className="brief">
          <div className="row">
            <span className="label">ĐỀ BÀI</span>
            <span className="val">
              Đề xuất tính năng AI mới dựa trên hệ sinh thái AI có sẵn của Zalo.
            </span>
          </div>
          <div className="row">
            <span className="label">GIẢI PHÁP</span>
            <span className="val">
              <b>AI Call Note</b> — tóm tắt cuộc gọi, gửi thẳng vào khung chat
              kèm nút đặt lịch 1-chạm.
            </span>
          </div>
        </div>

        <p>
          Tìm ra khoảng trống là nửa dễ. Nửa khó là bài toán lòng tin: một AI
          can thiệp vào cuộc trò chuyện riêng tư chỉ có giá trị khi người dùng
          thực sự cảm thấy an tâm.
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              record(fullCall){" "}
              <span className="code-comment">
                // càng nhiều dữ liệu càng "chuẩn"
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              extract(onlyNecessary) &amp;&amp; requireConsent(all){" "}
              <span className="code-comment">
                // niềm tin trước, tối ưu sau
              </span>
            </span>
          </div>
        </div>

        <p style={{ color: "var(--ink-soft)", marginTop: "16px" }}>
          Thay vì tối ưu độ "xịn" của công nghệ bằng cách thu thập tối đa dữ
          liệu, mình đặt ra 3 ranh giới thiết kế để đặt sự riêng tư lên hàng
          đầu:
        </p>

        <div className="card-row">
          <div className="card red">
            <span className="card-icon">
              <Shield size={16} />
            </span>
            <span className="card-title">1. Từ chối Full Recording</span>
            <p>
              Chỉ bóc tách text thời gian thực và hủy dữ liệu sau cuộc gọi,
              tuyệt đối không lưu file âm thanh để triệt tiêu nỗi sợ bị ghi âm
              lén.
            </p>
          </div>
          <div className="card green">
            <span className="card-icon">
              <Zap size={16} />
            </span>
            <span className="card-title">2. Nguyên tắc 100% Consent</span>
            <p>
              AI chỉ kích hoạt khi tất cả thành viên trong cuộc gọi bấm "Đồng ý"
              — xây dựng lòng tin trước khi tính đến adoption.
            </p>
          </div>
          <div className="card blue">
            <span className="card-icon">
              <Folder size={16} />
            </span>
            <span className="card-title">3. MVP Summary Card</span>
            <p>
              Đóng gói ngắn gọn dưới dạng thẻ trong khung chat kèm nút "Đặt lịch
              ngay" điền sẵn thông tin, không bắt user mở app/tab phụ.
            </p>
          </div>
        </div>

        <p style={{ marginTop: "20px", fontWeight: 600 }}>
          Toàn bộ nguyên tắc này được cụ thể hóa qua luồng trải nghiệm 4 bước:
        </p>

        <div className="wf-grid-container">
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">01</span>
              <div className="wf-step-info">
                <h4>Bật AI Call Note trong cuộc gọi</h4>
                <p>
                  Người dùng chủ động bật tính năng trong giao diện cuộc gọi.
                </p>
              </div>
            </div>
            <div className="wf-img-box">
              <img src={flow1} alt="Bật AI Call Note trong cuộc gọi" />
            </div>
            <div className="wf-card-note">
              <ul>
                <li>Nút đặt cạnh các nút điều khiển cuộc gọi.</li>
                <li>
                  Chỉ báo hiển thị khi AI đang hoạt động để đảm bảo minh bạch.
                </li>
              </ul>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">02</span>
              <div className="wf-step-info">
                <h4>Các thành viên đồng ý</h4>
                <p>Tất cả thành viên xác nhận đồng ý sử dụng tính năng.</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img src={flow2} alt="Các thành viên đồng ý" />
            </div>
            <div className="wf-card-note">
              <ul>
                <li>
                  Nếu có người từ chối hoặc không phản hồi sau 1 phút, tính năng
                  không bắt đầu.
                </li>
              </ul>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">03</span>
              <div className="wf-step-info">
                <h4>Summary Card trong khung chat</h4>
                <p>
                  Sau khi cuộc gọi kết thúc, AI gửi Summary Card vào khung chat.
                </p>
              </div>
            </div>
            <div className="wf-img-box">
              <img src={flow3} alt="Summary Card trong khung chat" />
            </div>
            <div className="wf-card-note single-text">
              <p>Hiển thị tóm tắt và thông tin quan trọng được trích xuất.</p>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">04</span>
              <div className="wf-step-info">
                <h4>User nhấn "Đặt lịch ngay"</h4>
                <p>Zalo tự động điền sẵn thông tin nhắc hẹn.</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img src={flow4} alt="User nhấn Đặt lịch ngay" />
            </div>
            <div className="wf-card-note single-text">
              <p>Người dùng chỉ cần kiểm tra và bấm Lưu.</p>
            </div>
          </div>
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          Bốn bước này không phải để "cho đẹp demo" — mỗi bước đều là một lần
          hỏi lại: liệu người dùng có đang cảm thấy an toàn ở bước này không?
        </p>
      </CommitLayout>

      {/* ================= COMMIT 04: MEASURE ================= */}
      <CommitLayout
        hash="#9c3fa0"
        cmd="measure(trust)"
        tag={
          <span className="tag-wrap">
            <span>assignment 01</span>
            <span className="skill-pill">
              <LineChart size={12} /> Metrics Design
            </span>
          </span>
        }
      >
        <h2>Một tính năng "chạy được" chưa chắc là một tính năng "đáng tin"</h2>

        <p>
          Thiết kế xong 4 bước là lúc phản xạ kỹ thuật trong mình muốn dừng lại
          — mọi thứ đã "hoạt động đúng". Nhưng tư duy product hỏi tiếp một câu
          khó hơn: làm sao biết người dùng có thực sự tin và dùng lại tính năng
          này, hay chỉ bấm thử một lần rồi thôi?
        </p>

        <div
          className="metrics-stat-grid"
          style={{
            marginTop: "24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "12px",
          }}
        >
          <div
            className="stat-card primary"
            style={{
              background: "rgba(37, 99, 235, 0.04)",
              border: "1px solid rgba(37, 99, 235, 0.2)",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <span
              className="stat-badge"
              style={{ fontSize: "10px", fontWeight: 700, color: "#2563eb" }}
            >
              NORTH STAR
            </span>
            <div
              className="stat-value"
              style={{ fontSize: "28px", fontWeight: 800, margin: "4px 0" }}
            >
              60%
            </div>
            <div
              className="stat-label"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              Summary Engagement Rate
            </div>
            <p
              className="stat-sub"
              style={{
                fontSize: "12px",
                color: "var(--ink-soft)",
                margin: "4px 0 0 0",
              }}
            >
              % người mở xem hoặc chỉnh sửa Note sau khi cuộc gọi kết thúc. Đây
              là North Star, không phải Adoption, vì mở lại xem mới chứng minh
              nội dung tóm tắt thực sự hữu ích.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "var(--bg-muted)",
              border: "1px solid var(--border-subtle)",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <span
              className="stat-badge"
              style={{ fontSize: "10px", fontWeight: 700, color: "#16a34a" }}
            >
              ADOPTION
            </span>
            <div
              className="stat-value"
              style={{ fontSize: "28px", fontWeight: 800, margin: "4px 0" }}
            >
              20%
            </div>
            <div
              className="stat-label"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              Call Note Adoption
            </div>
            <p
              className="stat-sub"
              style={{
                fontSize: "12px",
                color: "var(--ink-soft)",
                margin: "4px 0 0 0",
              }}
            >
              % cuộc gọi thoại có tất cả thành viên đồng ý bật AI Call Note.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "var(--bg-muted)",
              border: "1px solid var(--border-subtle)",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <span
              className="stat-badge"
              style={{ fontSize: "10px", fontWeight: 700, color: "#16a34a" }}
            >
              CONVERSION
            </span>
            <div
              className="stat-value"
              style={{ fontSize: "28px", fontWeight: 800, margin: "4px 0" }}
            >
              25%
            </div>
            <div
              className="stat-label"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              Reminder Conversion
            </div>
            <p
              className="stat-sub"
              style={{
                fontSize: "12px",
                color: "var(--ink-soft)",
                margin: "4px 0 0 0",
              }}
            >
              % bấm "Đặt lịch ngay" và lưu thành công vào Lịch Zalo.
            </p>
          </div>

          <div
            className="stat-card guardrail"
            style={{
              background: "rgba(239, 68, 68, 0.04)",
              border: "1px solid rgba(239, 68, 68, 0.2)",
              padding: "16px",
              borderRadius: "8px",
            }}
          >
            <span
              className="stat-badge guard"
              style={{ fontSize: "10px", fontWeight: 700, color: "#ef4444" }}
            >
              GUARDRAIL
            </span>
            <div
              className="stat-value"
              style={{ fontSize: "28px", fontWeight: 800, margin: "4px 0" }}
            >
              &lt; 30%
            </div>
            <div
              className="stat-label"
              style={{ fontWeight: 600, fontSize: "13px" }}
            >
              Opt-out / Dismiss Rate
            </div>
            <p
              className="stat-sub"
              style={{
                fontSize: "12px",
                color: "var(--ink-soft)",
                margin: "4px 0 0 0",
              }}
            >
              Tỷ lệ từ chối bật tính năng hoặc gạt bỏ thông báo. Vượt ngưỡng này
              nghĩa là cơ chế xin quyền đang có vấn đề — dừng lại xem trước khi
              mở rộng.
            </p>
          </div>
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          Vì với một tính năng đụng vào lòng tin, con số quan trọng nhất không
          phải là bao nhiêu người bấm thử, mà là bao nhiêu người quay lại lần
          thứ hai.
        </p>
      </CommitLayout>
    </>
  );
}
