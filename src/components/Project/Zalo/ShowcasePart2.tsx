import {
  Users,
  ListOrdered,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { CommitLayout } from "./ZaloCaseStudy";
import ZaloRoadmap from "./ZaloRoadmap/ZaloRoadmap";
import loopDiagram from "../../../assets/loop_diagram.png";
import { Trans, useTranslation } from "react-i18next";

export default function ShowcasePart2() {
  const { t, i18n } = useTranslation();
  const commit6Cards = t("projects.zalo.part2.commit6.cards", {
    returnObjects: true,
  }) as Array<{ title: string; tag: string; body: string }>;
  const personaChats = t("projects.zalo.part2.commit5.personaChats", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      {/* ================= COMMIT 05: EMPATHIZE ================= */}
      <CommitLayout
        hash="#c93a15"
        cmd="empathize(pain)"
        tag={
          <span className="tag-wrap">
            <span>assignment 02</span>
            <span className="skill-pill">
              <Users size={12} /> User Research
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part2.commit5.title")}</h2>

        <div className="brief">
          <div className="row">
            <span className="label">
              {t("projects.zalo.part2.commit5.promptLabel")}
            </span>
            <span className="val">
              {t("projects.zalo.part2.commit5.prompt")}
            </span>
          </div>
          <div className="row">
            <span className="label">
              {t("projects.zalo.part2.commit5.solutionLabel")}
            </span>
            <span className="val">
              <Trans i18nKey="projects.zalo.part2.commit5.solution">
                <strong />
              </Trans>
            </span>
          </div>
        </div>

        <p>{t("projects.zalo.part2.commit5.intro")}</p>
        <p style={{ color: "var(--ink-soft)" }}>
          {t("projects.zalo.part2.commit5.insightBefore")}{" "}
          <Trans i18nKey="projects.zalo.part2.commit5.insightQuestion">
            <strong />
          </Trans>{" "}
          {t("projects.zalo.part2.commit5.insightAfter")}
        </p>

        {/* PERSONA CARD */}
        <div className="persona">
          <div className="persona-head">
            <span className="persona-badge">
              "{t("projects.zalo.part2.commit5.personaBadge")}"
            </span>
          </div>
          <p className="persona-sub">
            {t("projects.zalo.part2.commit5.personaSub")}
          </p>
          <div className="persona-chats">
            {personaChats.map((chat) => (
              <span className="persona-chip" key={chat}>
                {chat}
              </span>
            ))}
          </div>
          <div className="persona-grid">
            <div className="persona-col">
              <span className="pc-label">
                {t("projects.zalo.part2.commit5.personaLabels.0")}
              </span>
              <ul>
                <li>{t("projects.zalo.part2.commit5.personaItems.0.0")}</li>
                <li>{t("projects.zalo.part2.commit5.personaItems.0.1")}</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">
                {t("projects.zalo.part2.commit5.personaLabels.1")}
              </span>
              <ul>
                <li>{t("projects.zalo.part2.commit5.personaItems.1.0")}</li>
                <li>{t("projects.zalo.part2.commit5.personaItems.1.1")}</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">
                {t("projects.zalo.part2.commit5.personaLabels.2")}
              </span>
              <ul>
                <li>{t("projects.zalo.part2.commit5.personaItems.2.0")}</li>
                <li>{t("projects.zalo.part2.commit5.personaItems.2.1")}</li>
              </ul>
            </div>
            <div className="persona-col">
              <span className="pc-label">
                {t("projects.zalo.part2.commit5.personaLabels.3")}
              </span>
              <ul>
                <li>{t("projects.zalo.part2.commit5.personaItems.3.0")}</li>
                <li>{t("projects.zalo.part2.commit5.personaItems.3.1")}</li>
              </ul>
            </div>
          </div>
        </div>

        <p>{t("projects.zalo.part2.commit5.anxiety")}</p>

        <div className="zalo-mock">
          <span className="badge">23</span>{" "}
          {t("projects.zalo.part2.commit5.unread")}
        </div>

        {i18n.language !== "en" && (
          <div className="loop-image-wrap">
            <img src={loopDiagram} alt="Vòng lặp tâm lý Reply Anxiety" />
          </div>
        )}
      </CommitLayout>

      {/* ================= COMMIT 06: PLAN ================= */}
      <CommitLayout
        type="mint"
        hash="#f3a021"
        cmd="plan(cut)"
        tag={
          <span className="tag-wrap">
            <span>assignment 02</span>
            <span className="skill-pill">
              <ListOrdered size={12} /> Prioritization
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part2.commit6.title")}</h2>

        <p>{t("projects.zalo.part2.commit6.intro")}</p>
        <p style={{ color: "var(--ink-soft)" }}>
          {t("projects.zalo.part2.commit6.constraint")}
        </p>

        <p style={{ margin: "18px 0 10px" }}>
          {t("projects.zalo.part2.commit6.lead")}
        </p>

        <div className="card-row">
          <div className="card blue">
            <span className="card-title">{commit6Cards[0].title}</span>
            <span className="card-tag">{commit6Cards[0].tag}</span>
            <p>{commit6Cards[0].body}</p>
          </div>
          <div className="card green">
            <span className="card-title">{commit6Cards[1].title}</span>
            <span className="card-tag">{commit6Cards[1].tag}</span>
            <p>{commit6Cards[1].body}</p>
          </div>
          <div className="card red">
            <span className="card-title">{commit6Cards[2].title}</span>
            <span className="card-tag">{commit6Cards[2].tag}</span>
            <p>{commit6Cards[2].body}</p>
          </div>
        </div>

        <p className="wf-flow-lead" style={{ margin: "26px 0 14px" }}>
          {t("projects.zalo.part2.commit6.roadmapLead")}
        </p>

        <div className="roadmap-wrapper-box">
          <ZaloRoadmap />
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          {t("projects.zalo.part2.commit6.callout")}
        </p>
      </CommitLayout>

      {/* ================= COMMIT 07: MEASURE IMPACT ================= */}
      <CommitLayout
        hash="#a02f4c"
        cmd="measure(impact)"
        tag={
          <span className="tag-wrap">
            <span>assignment 02</span>
            <span className="skill-pill">
              <TrendingUp size={12} /> Goal Setting
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part2.commit7.title")}</h2>

        <p>{t("projects.zalo.part2.commit7.intro")}</p>

        <div className="brief" style={{ marginTop: "16px" }}>
          <div className="row">
            <span className="label">
              {t("projects.zalo.part2.commit7.northStarLabel")}
            </span>
            <span className="val">
              <b>+15% – 20% Reply Rate within 24h</b>{" "}
              {t("projects.zalo.part2.commit7.northStar")}
            </span>
          </div>
          <div className="row">
            <span className="label">
              {t("projects.zalo.part2.commit7.definitionLabel")}
            </span>
            <span className="val">
              {t("projects.zalo.part2.commit7.definition")}
            </span>
          </div>
        </div>

        <p style={{ marginTop: "20px" }}>
          {t("projects.zalo.part2.commit7.benchmark")}
        </p>

        <div className="card-row" style={{ marginTop: "16px" }}>
          <div className="card blue" style={{ flex: 1 }}>
            <span
              className="card-title"
              style={{ fontSize: "18px", marginTop: "4px" }}
            >
              18–22%
            </span>
            <p
              style={{ fontWeight: 600, color: "var(--ink)", margin: "4px 0" }}
            >
              {t("projects.zalo.part2.commit7.cards.0")}
            </p>
            <p style={{ fontSize: "12px", color: "var(--ink-soft)" }}>
              {t("projects.zalo.part2.commit7.cardBodies.0")}
            </p>
          </div>
          <div className="card blue" style={{ flex: 1 }}>
            <span
              className="card-title"
              style={{ fontSize: "18px", marginTop: "4px" }}
            >
              25–30%
            </span>
            <p
              style={{ fontWeight: 600, color: "var(--ink)", margin: "4px 0" }}
            >
              {t("projects.zalo.part2.commit7.cards.1")}
            </p>
            <p style={{ fontSize: "12px", color: "var(--ink-soft)" }}>
              {t("projects.zalo.part2.commit7.cardBodies.1")}
            </p>
          </div>
          <div className="card blue" style={{ flex: 1 }}>
            <span
              className="card-title"
              style={{ fontSize: "18px", marginTop: "4px" }}
            >
              4–6% DAU
            </span>
            <p
              style={{ fontWeight: 600, color: "var(--ink)", margin: "4px 0" }}
            >
              {t("projects.zalo.part2.commit7.cards.2")}
            </p>
            <p style={{ fontSize: "12px", color: "var(--ink-soft)" }}>
              {t("projects.zalo.part2.commit7.cardBodies.2")}
            </p>
          </div>
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          {t("projects.zalo.part2.commit7.callout")}
        </p>
      </CommitLayout>

      {/* ================= COMMIT 08: MITIGATE RISKS ================= */}
      <CommitLayout
        hash="#e62d19"
        cmd="mitigate(risks)"
        tag={
          <span className="tag-wrap">
            <span>assignment 02</span>
            <span className="skill-pill">
              <ShieldCheck size={12} /> Risk Management
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part2.commit8.title")}</h2>

        <p>{t("projects.zalo.part2.commit8.intro")}</p>

        <div className="risk-matrix">
          {[0, 1, 2].map((riskIndex) => (
            <article
              className={`risk-card risk-card--${riskIndex}`}
              key={riskIndex}
            >
              <div className="risk-top">
                <span className="risk-name">
                  {t(`projects.zalo.part2.commit8.risks.${riskIndex}.name`)}
                </span>
              </div>
              <div className="risk-section">
                <p className="risk-desc">
                  {t(`projects.zalo.part2.commit8.risks.${riskIndex}.signal`)}
                </p>
              </div>
              <div className="risk-control">
                <span className="risk-label">
                  {i18n.language === "en" ? "CONTROL" : "KIỂM SOÁT"}
                </span>
                <p>
                  {t(`projects.zalo.part2.commit8.risks.${riskIndex}.control`)}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          className="callout"
          style={{
            marginTop: "20px",
            borderColor: "rgba(239, 68, 68, 0.3)",
            background: "rgba(239, 68, 68, 0.04)",
          }}
        >
          <Trans
            i18nKey="projects.zalo.part2.commit8.guardrail"
            components={[<b style={{ color: "#b91c1c" }} />]}
          />
        </div>

        <p className="callout-line" style={{ marginTop: "24px" }}>
          {t("projects.zalo.part2.commit8.callout")}
        </p>
      </CommitLayout>

      {/* ================= COMMIT 09: MERGE ================= */}
      <CommitLayout
        type="final"
        hash="#f1nal"
        cmd="merge(identity)"
        tag={
          <span className="tag-wrap">
            <span>{t("projects.zalo.part2.commit9.tag")}</span>
            <span className="skill-pill">
              <Lightbulb size={12} /> Product Philosophy
            </span>
          </span>
        }
      >
        <h2>{t("projects.zalo.part2.commit9.title")}</h2>

        <p>
          <Trans
            i18nKey="projects.zalo.part2.commit9.intro"
            components={[<strong />]}
          />
        </p>

        <div className="diff">
          <div className="diff-row minus">
            <span className="sign">−</span>
            <span>
              canWeBuildThis(){" "}
              <span className="code-comment">
                {t("projects.zalo.part2.commit9.technical")}
              </span>
            </span>
          </div>
          <div className="diff-row plus">
            <span className="sign">+</span>
            <span>
              howShouldItBeBuilt(){" "}
              <span className="code-comment">
                {t("projects.zalo.part2.commit9.product")}
              </span>
            </span>
          </div>
        </div>

        <blockquote className="pullquote">
          {t("projects.zalo.part2.commit9.quote")}
        </blockquote>

        <p
          style={{
            textAlign: "center",
            color: "var(--ink-soft)",
            marginTop: "22px",
          }}
        >
          {t("projects.zalo.part2.commit9.closing")}
        </p>
      </CommitLayout>
    </>
  );
}
