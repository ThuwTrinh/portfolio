import {
  Target,
  Search,
  Scale,
  LineChart,
} from "lucide-react";
import { CommitLayout } from "./ZaloCaseStudy";
import { Trans, useTranslation } from "react-i18next";

import flow1 from "../../../assets/flow_page1.jpg";
import flow2 from "../../../assets/flow_page2.jpg";
import flow3 from "../../../assets/flow_page3.jpg";
import flow4 from "../../../assets/flow_page4.jpg";

export default function ShowcasePart1() {
  const { t } = useTranslation();

  return (
    <>
      {/* ================= COMMIT 01: INIT ================= */}
      <CommitLayout
        hash="#a1f9c2"
        cmd="init(mindset)"
        tag={
          <span className="tag-wrap">
            <span>{t("projects.zalo.part1.commit1.tag")}</span>
            <span className="skill-pill">
              <Target size={12} /> Problem Framing
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part1.commit1.title")}</h2>

        <p>{t("projects.zalo.part1.commit1.intro")}</p>

        <p style={{ color: "var(--ink-soft)" }}>
          {t("projects.zalo.part1.commit1.setup")}
        </p>

        <div className="brief" style={{ margin: "16px 0" }}>
          <div className="row">
            <span className="label">ASSIGNMENT 1</span>
            <span className="val">
              <b>{t("projects.zalo.part1.commit1.assignment1")}</b>{" "}
              {t("projects.zalo.part1.commit1.assignment1Body")}
            </span>
          </div>
          <div className="row">
            <span className="label">ASSIGNMENT 2</span>
            <span className="val">
              <b>{t("projects.zalo.part1.commit1.assignment2")}</b>{" "}
              {t("projects.zalo.part1.commit1.assignment2Body")}
            </span>
          </div>
        </div>

        <p>
          {t("projects.zalo.part1.commit1.realization")}{" "}
          <strong>{t("projects.zalo.part1.commit1.realizationStrong")}</strong>
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              build(correctSystem){" "}
              <span className="code-comment">
                {t("projects.zalo.part1.commit1.technicalComment")}
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              solve(humanProblem){" "}
              <span className="code-comment">
                {t("projects.zalo.part1.commit1.productComment")}
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
            <span>{t("projects.zalo.part1.commit2.tag")}</span>
            <span className="skill-pill">
              <Search size={12} /> Product Sense
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part1.commit2.title")}</h2>

        <div className="brief">
          <div className="row">
            <span className="label">
              {t("projects.zalo.part1.commit2.briefLabel")}
            </span>
            <span className="val">
              {t("projects.zalo.part1.commit2.brief")}
            </span>
          </div>
        </div>

        <p>{t("projects.zalo.part1.commit2.intro")}</p>
        <p style={{ color: "var(--ink-soft)" }}>
          <Trans i18nKey="projects.zalo.part1.commit2.insight">
            <strong />
          </Trans>
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
          <span className="icon-pill">
            🎙️ {t("projects.zalo.part1.commit2.voice")}
          </span>
          <span style={{ color: "var(--ink-faint)" }}>·</span>
          <span className="icon-pill">
            💬 {t("projects.zalo.part1.commit2.subtitle")}
          </span>
          <span style={{ color: "var(--ink-faint)" }}>·</span>
          <span className="icon-pill">
            🌐 {t("projects.zalo.part1.commit2.translate")}
          </span>
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
          {t("projects.zalo.part1.commit2.callout")}
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
        <h2>{t("projects.zalo.part1.commit3.title")}</h2>

        <div className="brief">
          <div className="row">
            <span className="label">
              {t("projects.zalo.part1.commit3.promptLabel")}
            </span>
            <span className="val">
              {t("projects.zalo.part1.commit3.prompt")}
            </span>
          </div>
          <div className="row">
            <span className="label">
              {t("projects.zalo.part1.commit3.solutionLabel")}
            </span>
            <span className="val">
              <Trans i18nKey="projects.zalo.part1.commit3.solution">
                <strong />
              </Trans>
            </span>
          </div>
        </div>

        <p>{t("projects.zalo.part1.commit3.intro")}</p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              record(fullCall){" "}
              <span className="code-comment">
                {t("projects.zalo.part1.commit3.diffBefore")}
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              extract(onlyNecessary) &amp;&amp; requireConsent(all){" "}
              <span className="code-comment">
                {t("projects.zalo.part1.commit3.diffAfter")}
              </span>
            </span>
          </div>
        </div>

        <p style={{ color: "var(--ink-soft)", marginTop: "16px" }}>
          {t("projects.zalo.part1.commit3.setup")}
        </p>

        <div className="card-row">
          <div className="card red">
            <span className="card-title">
              {t("projects.zalo.part1.commit3.card1Title")}
            </span>
            <p>{t("projects.zalo.part1.commit3.card1Body")}</p>
          </div>
          <div className="card green">
            <span className="card-title">
              {t("projects.zalo.part1.commit3.card2Title")}
            </span>
            <p>{t("projects.zalo.part1.commit3.card2Body")}</p>
          </div>
          <div className="card blue">
            <span className="card-title">
              {t("projects.zalo.part1.commit3.card3Title")}
            </span>
            <p>{t("projects.zalo.part1.commit3.card3Body")}</p>
          </div>
        </div>

        <p style={{ marginTop: "20px", fontWeight: 600 }}>
          {t("projects.zalo.part1.commit3.flowLead")}
        </p>

        <div className="wf-grid-container">
          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">01</span>
              <div className="wf-step-info">
                <h4>{t("projects.zalo.part1.commit3.step1Title")}</h4>
                <p>{t("projects.zalo.part1.commit3.step1Body")}</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img
                src={flow1}
                alt={t("projects.zalo.part1.commit3.step1Title")}
              />
            </div>
            <div className="wf-card-note">
              <ul>
                <li>{t("projects.zalo.part1.commit3.step1a")}</li>
                <li>{t("projects.zalo.part1.commit3.step1b")}</li>
              </ul>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">02</span>
              <div className="wf-step-info">
                <h4>{t("projects.zalo.part1.commit3.step2Title")}</h4>
                <p>{t("projects.zalo.part1.commit3.step2Body")}</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img
                src={flow2}
                alt={t("projects.zalo.part1.commit3.step2Title")}
              />
            </div>
            <div className="wf-card-note">
              <ul>
                <li>{t("projects.zalo.part1.commit3.step2a")}</li>
              </ul>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">03</span>
              <div className="wf-step-info">
                <h4>{t("projects.zalo.part1.commit3.step3Title")}</h4>
                <p>{t("projects.zalo.part1.commit3.step3Body")}</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img
                src={flow3}
                alt={t("projects.zalo.part1.commit3.step3Title")}
              />
            </div>
            <div className="wf-card-note single-text">
              <p>{t("projects.zalo.part1.commit3.step3a")}</p>
            </div>
          </div>

          <div className="wf-card">
            <div className="wf-card-header">
              <span className="wf-step-badge">04</span>
              <div className="wf-step-info">
                <h4>{t("projects.zalo.part1.commit3.step4Title")}</h4>
                <p>{t("projects.zalo.part1.commit3.step4Body")}</p>
              </div>
            </div>
            <div className="wf-img-box">
              <img
                src={flow4}
                alt={t("projects.zalo.part1.commit3.step4Title")}
              />
            </div>
            <div className="wf-card-note single-text">
              <p>{t("projects.zalo.part1.commit3.step4a")}</p>
            </div>
          </div>
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          {t("projects.zalo.part1.commit3.callout")}
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
        <h2>{t("projects.zalo.part1.commit4.title")}</h2>

        <p>{t("projects.zalo.part1.commit4.intro")}</p>

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
              {t("projects.zalo.part1.commit4.northStar")}
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
              {t("projects.zalo.part1.commit4.adoption")}
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
              {t("projects.zalo.part1.commit4.conversion")}
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
              {t("projects.zalo.part1.commit4.guardrail")}
            </p>
          </div>
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          {t("projects.zalo.part1.commit4.callout")}
        </p>
      </CommitLayout>
    </>
  );
}
