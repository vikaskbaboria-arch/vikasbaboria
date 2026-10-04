"use client";

import React from "react";
import { LotusFlower, StarburstSaw, SloganBadge, CuttingChai } from "./TruckArtDecorations";

export default function ProjectsSection({ active, projects, github }) {
  return (
    <section className={active ? "on" : ""} id="projects">
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "40px" }}>
        {/* Title Header */}
        <div className="truck-section-header">
          <div className="truck-title-wrap">
            <LotusFlower size={38} className="section-title-lotus" />
            <h2 className="truck-section-title">Projects</h2>
            <LotusFlower size={38} className="section-title-lotus" />
          </div>
          <div className="truck-section-subtitle">
            ★ प्रोजेक्ट्स एवं क्रिएशन्स — SUPERHIT PRODUCTIONS ★
          </div>
        </div>

        {/* Project Cards Grid with Equal Heights */}
        <div className="truck-projects-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="truck-project-card">
              {/* Top Banner Bar */}
              <div className="truck-card-header-bar">
                <span>✦ PERMIT NO. {index + 1}08</span>
                <span style={{ color: "var(--gold)", fontWeight: 900 }}>
                  {project.badge || "FEATURED"}
                </span>
              </div>

              {/* Screenshot Frame */}
              <div className="truck-shot">
                <img src={project.img} alt={`${project.title} screenshot`} />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                  }}
                >
                  <StarburstSaw text="HOT" sub="NEW" size={56} color="#ffd200" edgeColor="#e60000" />
                </div>
              </div>

              {/* Card Body */}
              <div className="truck-card-body">
                <div>
                  {project.hindiTitle && (
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "13px",
                        color: "#b8140f",
                        marginBottom: "4px",
                      }}
                    >
                      ★ {project.hindiTitle} ★
                    </div>
                  )}
                  <h3 className="truck-card-title">{project.title}</h3>
                  <p className="truck-card-desc">{project.desc}</p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="truck-tags-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="truck-tag-badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="truck-card-actions">
                    <a
                      className="truck-btn"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Launch Live ↗
                    </a>
                    <a
                      className="truck-btn outline"
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}

          {/* "More on GitHub" Card - Built with Exact Same Height & Structural Sizing */}
          <article className="truck-project-card">
            {/* Top Banner Bar */}
            <div
              className="truck-card-header-bar"
              style={{ background: "#0a2d85" }}
            >
              <span>✦ PERMIT NO. GH-99</span>
              <span style={{ color: "var(--gold)", fontWeight: 900 }}>
                OPEN SOURCE
              </span>
            </div>

            {/* Matching Graphic Banner Frame (Exact Same 16/10 Aspect Ratio) */}
            <div
              className="truck-shot"
              style={{
                background: "radial-gradient(circle at 50% 50%, #1642b8 0%, #0c2670 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <LotusFlower size={52} className="floating-lotus" />
              <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <CuttingChai size={38} />
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "14px",
                    color: "var(--gold)",
                    letterSpacing: "0.08em",
                    textShadow: "1px 1px 0 #000",
                  }}
                >
                  MORE REPOSITORIES
                </span>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                <StarburstSaw text="ALL" sub="CODE" size={56} color="#00e5ff" edgeColor="#0a2d85" />
              </div>
            </div>

            {/* Matching Card Body */}
            <div className="truck-card-body">
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    color: "#b8140f",
                    marginBottom: "4px",
                  }}
                >
                  ★ ओपन सोर्स भंडार ★
                </div>
                <h3 className="truck-card-title">More Work on GitHub</h3>
                <p className="truck-card-desc">
                  Explore full repositories, micro-services, frontend experiments, custom API integrations,
                  and work in progress. Constantly shipping clean code and open-source solutions.
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="truck-tags-list">
                  <span className="truck-tag-badge">Open Source</span>
                  <span className="truck-tag-badge">Git & GitHub</span>
                  <span className="truck-tag-badge">REST APIs</span>
                  <span className="truck-tag-badge">Full Stack</span>
                </div>

                {/* Action Buttons */}
                <div className="truck-card-actions">
                  <a
                    className="truck-btn"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: "100%" }}
                  >
                    Open GitHub Profile ↗
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
