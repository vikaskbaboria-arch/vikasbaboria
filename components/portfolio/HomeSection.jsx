"use client";

import React from "react";
import {
  LotusFlower,
  StarburstSaw,
  CuttingChai,
  NimbuMirchi,
  SloganBadge,
  ScallopBorder,
} from "./TruckArtDecorations";

export default function HomeSection({ active, me, stack, projects }) {
  return (
    <section className={active ? "on" : ""} id="home">
      <div className="hero-stage-container">
        {/* Central Ornate Truck Archway */}
        <div className="truck-central-arch">
          <ScallopBorder color="#ffd200" />

          {/* Arch Crown */}
          <div className="truck-arch-crown">
            <div className="crown-badge crown-badge-left">
              <StarburstSaw text="100%" sub="SPEED" size={60} color="#ffe000" edgeColor="#e30613" />
            </div>
            <div className="arch-ribbon">
              <span>🪷</span>
              <span>{me.slogans[0].en}</span>
              <span>🪷</span>
            </div>
            <div className="crown-badge crown-badge-right">
              <StarburstSaw text="PRO" sub="DEV" size={60} color="#00e5ff" edgeColor="#1040b8" />
            </div>
          </div>

          {/* Left Flank Lotus Flowers */}
          <div className="flank-decor-left">
            <LotusFlower size={52} className="floating-lotus" />
            <NimbuMirchi size={48} />
            <LotusFlower size={44} className="floating-lotus" />
          </div>

          {/* Right Flank Lotus Flowers */}
          <div className="flank-decor-right">
            <LotusFlower size={52} className="floating-lotus" />
            <CuttingChai size={48} />
            <LotusFlower size={44} className="floating-lotus" />
          </div>

          {/* Split-Tone Huge Lettering */}
          <div className="truck-split-hero">
            <span className="line-1">{me.short[0]}</span>
            <span className="line-2">{me.short[1]}</span>
          </div>

          {/* Devanagari Sign-Painted Subtitle */}
          <div className="truck-devanagari">
            <span>{me.hindiName}</span>
          </div>

          <div className="truck-role-banner">
            ★ {me.role} ★ {me.hindiRole} ★
          </div>

          {/* Truck Art Slogan Badges Cluster */}
          <div className="truck-slogans-cluster">
            <SloganBadge hindi="देखो मगर प्यार से" english="DEKHO MAGAR PYAAR SE" theme="yellow" tilt={-2} />
            <SloganBadge hindi="हॉर्न ओके प्लीज" english="HORN OK PLEASE" theme="blue" tilt={2} />
            <SloganBadge hindi="बुरी नज़र वाले तेरा मुँह काला" english="ZERO BUGS ALLOWED" theme="red" tilt={-1} />
          </div>

          {/* Tech Stack Interactive Stickers */}
          <div className="truck-sticker-cluster">
            {stack.map((item, idx) => (
              <span
                key={item}
                className="truck-tech-sticker"
                style={{ "--rot": (idx % 2 === 0 ? 1 : -1) * ((idx % 4) + 1) }}
              >
                <span>✦</span>
                <span>{item}</span>
              </span>
            ))}
          </div>

          {/* Bottom Card Deck with Equal Heights */}
          <div className="hero-bottom-deck">
            {/* Quote Card (Equal Height) */}
            <div className="hero-quote-card">
              <div>
                <span className="pill-badge" style={{ background: "var(--frame-blue)", marginBottom: "8px", display: "inline-block" }}>
                  DEV PHILOSOPHY
                </span>
                <q>“{me.quote}”</q>
              </div>
              <small>★ {me.name} — {me.hindiQuote}</small>
            </div>

            {/* Chai Glass Visual Break (Centered) */}
            <div className="hero-chai-break">
              <CuttingChai size={52} />
              <span className="hero-chai-label">
                CHAI FUEL ⚡
              </span>
            </div>

            {/* Featured Project Card (Equal Height) */}
            <div className="hero-featured-card">
              <div>
                <div className="hero-featured-top">
                  <span className="pill-badge">LATEST SHIPMENT</span>
                  <span style={{ fontSize: "10px", color: "var(--gold)", fontWeight: 800 }}>LIVE ON VERCEL</span>
                </div>
                <div style={{ fontSize: "17px", fontFamily: "var(--font-display)", color: "#fff", marginBottom: "4px" }}>
                  {projects[0].title}
                </div>
                <p style={{ fontSize: "12px", color: "#ccc", marginBottom: "12px", lineHeight: "1.4" }}>
                  {projects[0].desc.slice(0, 95)}...
                </p>
              </div>
              <a
                className="truck-btn"
                style={{ fontSize: "11px", padding: "8px 14px", width: "100%" }}
                href={projects[0].live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Test Drive Project ↗
              </a>
            </div>
          </div>

          <div style={{ marginTop: "18px" }}>
            <ScallopBorder color="#ffd200" flip={true} />
          </div>
        </div>

        {/* Continuous Smooth Infinite Marquee Ticker */}
        <div className="truck-ticker-wrap">
          <div className="truck-ticker-content">
            {[1, 2].map((loop) => (
              <React.Fragment key={loop}>
                <div className="truck-ticker-item">
                  <span>🪷</span>
                  <span>FULL STACK DEVELOPER</span>
                  <span>✦</span>
                  <span>REACT & NEXT.JS</span>
                  <span>✦</span>
                  <span>NODE & EXPRESS</span>
                  <span>✦</span>
                  <span>MONGODB ATLAS</span>
                  <span>✦</span>
                  <span>HORN OK PLEASE</span>
                  <span>✦</span>
                  <span>SPEED 100% NO CRASHES</span>
                  <span>✦</span>
                  <span>ALL INDIA PERMIT</span>
                  <span>✦</span>
                  <span>DEKHO MAGAR PYAAR SE</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
