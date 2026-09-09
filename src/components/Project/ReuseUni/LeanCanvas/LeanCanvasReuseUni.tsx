import {
  AlertCircle,
  Sparkles,
  Lightbulb,
  ShieldCheck,
  Users,
  Activity,
  Share2,
  Wallet,
  Layers,
} from "lucide-react";
import "./LeanCanvasReuseUni.css";
import { Trans, useTranslation } from "react-i18next";

interface LeanCanvasProps {
  className?: string;
}

export default function LeanCanvasReuseUni({
  className = "",
}: LeanCanvasProps) {
  const { t } = useTranslation();
  const problem = t("projects.lean.problem", {
    returnObjects: true,
  }) as string[];
  const solution = t("projects.lean.solution", {
    returnObjects: true,
  }) as string[];
  const customerSegments = t("projects.lean.customerSegments", {
    returnObjects: true,
  }) as string[];
  const metrics = t("projects.lean.metrics", {
    returnObjects: true,
  }) as string[];
  const advantage = t("projects.lean.advantage", {
    returnObjects: true,
  }) as string[];
  const channels = t("projects.lean.channels", {
    returnObjects: true,
  }) as string[];
  const cost = t("projects.lean.cost", { returnObjects: true }) as string[];
  const revenue = t("projects.lean.revenue", {
    returnObjects: true,
  }) as string[];

  return (
    <div className={`lean-canvas-section ${className}`} id="lean-canvas">
      <div className="canvas-header">
        <span className="canvas-tag">{t("projects.lean.tag")}</span>
        <h3>{t("projects.lean.title")}</h3>
        <p>{t("projects.lean.subtitle")}</p>
      </div>

      <div className="lean-canvas-grid">
        {/* 1. PROBLEM */}
        <div className="canvas-block block-problem">
          <div className="block-title">
            <AlertCircle size={15} /> PROBLEM
          </div>
          <ul className="canvas-list">
            {problem.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 2. SOLUTION & KEY METRICS */}
        <div className="canvas-column-split">
          <div className="canvas-block block-solution">
            <div className="block-title">
              <Lightbulb size={15} /> SOLUTION
            </div>
            <ul className="canvas-list">
              {solution.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="canvas-block block-metrics">
            <div className="block-title">
              <Activity size={15} /> KEY METRICS
            </div>
            <ul className="canvas-list">
              {metrics.map((item, index) => (
                <li key={item}>
                  <Trans
                    i18nKey={`projects.lean.metrics.${index}`}
                    components={[<strong />]}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. UNIQUE VALUE PROPOSITION */}
        <div className="canvas-block block-uvp">
          <div className="block-title highlight">
            <Sparkles size={15} /> UNIQUE VALUE PROPOSITION
          </div>
          <div className="uvp-statement">“{t("projects.lean.uvp")}”</div>
          <div className="high-level-tag">
            <span>High-level Concept:</span>{" "}
            <strong>{t("projects.lean.concept")}</strong>
          </div>
        </div>

        {/* 4. UNFAIR ADVANTAGE & CHANNELS */}
        <div className="canvas-column-split">
          <div className="canvas-block block-advantage">
            <div className="block-title">
              <ShieldCheck size={15} /> UNFAIR ADVANTAGE
            </div>
            <ul className="canvas-list">
              {advantage.map((item, index) => (
                <li key={item}>
                  <Trans
                    i18nKey={`projects.lean.advantage.${index}`}
                    components={[<strong />]}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="canvas-block block-channels">
            <div className="block-title">
              <Share2 size={15} /> CHANNELS
            </div>
            <ul className="canvas-list compact-channels">
              {channels.map((item, index) => (
                <li key={item}>
                  <Trans
                    i18nKey={`projects.lean.channels.${index}`}
                    components={[<strong />]}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 5. CUSTOMER SEGMENTS */}
        <div className="canvas-block block-customers">
          <div className="block-title">
            <Users size={15} /> CUSTOMER SEGMENTS
          </div>
          <ul className="canvas-list">
            {customerSegments.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="early-adopters-pill">
            <Trans
              i18nKey="projects.lean.earlyAdopters"
              components={[<strong />]}
            />
          </div>
        </div>

        {/* 6. COST STRUCTURE */}
        <div className="canvas-block block-cost">
          <div className="block-title">
            <Layers size={15} /> COST STRUCTURE (MVP)
          </div>
          <div className="bottom-row-items">
            {cost.map((item, index) => (
              <span key={item}>
                • <Trans
                  i18nKey={`projects.lean.cost.${index}`}
                  components={[<strong />]}
                />
              </span>
            ))}
          </div>
        </div>

        {/* 7. REVENUE STREAMS */}
        <div className="canvas-block block-revenue">
          <div className="block-title">
            <Wallet size={15} /> REVENUE STREAMS
          </div>
          <div className="bottom-row-items">
            {revenue.map((item, index) => (
              <span key={item}>
                • <Trans
                  i18nKey={`projects.lean.revenue.${index}`}
                  components={[<strong />]}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
