"use client";

import React from "react";
import { LotusFlower, NimbuMirchi, StarburstSaw } from "./TruckArtDecorations";

export default function ProfileSection({ active, me, skills, stack }) {
  return (
    <section className={active ? "on" : ""} id="profile">
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingBottom: "40px" }}>
        {/* Title Header */}
        <div className="truck-section-header">
          <div className="truck-title-wrap">
            <LotusFlower size={38} className="section-title-lotus" />
            <h2 className="truck-section-title">Profile</h2>
            <LotusFlower size={38} className="section-title-lotus" />
          </div>
          <div className="truck-section-subtitle">
            ★ प्रोफाइल एवं तकनीकी कौशल — SPEED, CRAFT & DISCIPLINE ★
          </div>
        </div>

        {/* Profile Layout with Matched Box Heights */}
        <div className="truck-profile-layout">
          {/* Left Box: Official All India Permit Board */}
          <div className="truck-permit-board">
            <div>
              <div className="truck-permit-header">
                <div className="truck-permit-tags">
                  <span className="truck-permit-seal">ALL INDIA PERMIT</span>
                  <span className="truck-permit-reg" style={{ fontSize: "11px", fontWeight: 800, marginLeft: "8px" }}>REG: DEV-2026</span>
                </div>
                <NimbuMirchi size={38} className="permit-charm" />
              </div>

              <p className="truck-bio-lead">{me.bio}</p>

              {me.hindiBio && (
                <div className="truck-hindi-bio">
                  {me.hindiBio}
                </div>
              )}
            </div>

            {/* Bottom Half of Left Box */}
            <div>
              {/* Stats Badges Grid with Equal Height Stat Boxes */}
              <div className="truck-stats-grid">
                {me.stats?.map((stat) => (
                  <div key={stat.label} className="truck-stat-box">
                    <div style={{ fontSize: "10px", fontWeight: 800, color: "var(--mut)", textTransform: "uppercase" }}>
                      {stat.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "18px",
                        color: "#b8140f",
                        lineHeight: 1.1,
                        margin: "2px 0",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "10px", color: "var(--mut)" }}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Stack Tags */}
              <div style={{ marginTop: "12px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "13px",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    color: "#111",
                  }}
                >
                  ★ Armed Technologies:
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {stack.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "10px",
                        fontWeight: 800,
                        background: "#ffd200",
                        color: "#000",
                        padding: "3px 8px",
                        borderRadius: "5px",
                        border: "1.5px solid #000",
                        boxShadow: "2px 2px 0 #000",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Box: Truck Dashboard Speedometers Board (Equal Height Box) */}
          <div className="truck-dashboard-board">
            <div>
              <div className="truck-permit-header">
                <div className="truck-permit-tags">
                  <span className="truck-permit-seal" style={{ borderColor: "#00a86b", color: "#00a86b" }}>
                    SPEEDOMETER DASHBOARD
                  </span>
                  <span className="truck-permit-reg" style={{ fontSize: "11px", fontWeight: 800, marginLeft: "8px" }}>SPEED: 100 KM/H</span>
                </div>
                <LotusFlower size={34} className="permit-charm" />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  marginTop: "8px",
                }}
              >
                {skills.map((skill) => (
                  <div key={skill.n} className="truck-gauge-row">
                    <div className="truck-gauge-info">
                      <span>{skill.n}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        {skill.badge && <span className="truck-gauge-badge">{skill.badge}</span>}
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "13px", color: "#d81e05" }}>
                          {skill.v}%
                        </span>
                      </div>
                    </div>
                    <div className="truck-meter-track">
                      <div className="truck-meter-fill" style={{ "--w": `${skill.v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stamp Badge */}
            <div className="truck-dashboard-footer">
              <span style={{ fontSize: "11px", fontWeight: 800, color: "var(--mut)" }}>
                ✦ 100% LIGHTHOUSE COMPLIANT
              </span>
              <div className="dashboard-footer-badge">
                <StarburstSaw text="0% JUNK" sub="VERIFIED" size={62} color="#00e5ff" edgeColor="#1040b8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
