"use client";

import React from "react";
import { LotusFlower } from "./TruckArtDecorations";

export default function Header({ current, sections, onNavigate, dark, onToggleTheme, me }) {
  const sectionHindi = {
    home: "होम",
    projects: "प्रोजेक्ट्स",
    profile: "प्रोफाइल",
    contact: "संपर्क",
  };

  const sectionIcons = {
    home: "🪷",
    projects: "🚀",
    profile: "★",
    contact: "✉",
  };

  return (
    <>
      <header className="truck-header">
        <div className="truck-header-inner">
          {/* Brand / Logo */}
          <button className="truck-logo-btn" onClick={() => onNavigate("home")} aria-label="Go to Home">
            <LotusFlower size={22} />
            <div className="truck-brand-text">
              <span className="truck-brand-name">{me.name}</span>
              <span className="truck-brand-role">{me.role}</span>
            </div>
          </button>

          {/* Desktop & Tablet Navigation */}
          <nav className="truck-nav truck-nav-desktop" aria-label="Main Navigation">
            {sections.map((section) => (
              <button
                key={section}
                className={current === section ? "on" : ""}
                onClick={() => onNavigate(section)}
              >
                <span>{sectionHindi[section] || "★"}</span>
                <span className="nav-text">{section}</span>
              </button>
            ))}
          </nav>

          {/* Social links & Theme Switcher */}
          <div className="header-actions">
            <div className="soc" style={{ display: "flex", gap: "5px" }}>
              <a
                className="soc-pill"
                href={me.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Profile"
              >
                GH
              </a>
              <a
                className="soc-pill"
                href={me.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                IN
              </a>
              <a
                className="soc-pill"
                href={me.x}
                target="_blank"
                rel="noopener noreferrer"
                title="X / Twitter"
              >
                X
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              className="theme-toggle-btn"
              onClick={onToggleTheme}
              aria-label="Toggle Color Theme"
              title={dark ? "Switch to Rang Mahal (Day Pop)" : "Switch to Neon Dhaba (Night Kitsch)"}
            >
              <span>{dark ? "🌙" : "☀️"}</span>
              <span className="theme-toggle-text" style={{ fontSize: "10px" }}>
                {dark ? "NEON" : "RANG"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Dock (Visible on screens < 680px) */}
      <nav className="truck-mobile-dock" aria-label="Mobile Bottom Navigation">
        {sections.map((section) => {
          const isActive = current === section;
          return (
            <button
              key={section}
              className={`mobile-dock-btn ${isActive ? "on" : ""}`}
              onClick={() => onNavigate(section)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="dock-icon">{sectionIcons[section] || "✦"}</span>
              <div className="dock-labels">
                <span className="dock-hindi">{sectionHindi[section]}</span>
                <span className="dock-en">{section}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </>
  );
}
