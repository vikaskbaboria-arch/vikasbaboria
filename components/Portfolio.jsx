"use client";

import { useEffect, useRef, useState } from "react";
import { me, skills, stack, projects } from "@/data/portfolio";
import ContactSection from "./portfolio/ContactSection";
import Header from "./portfolio/Header";
import HomeSection from "./portfolio/HomeSection";
import ProfileSection from "./portfolio/ProfileSection";
import ProjectsSection from "./portfolio/ProjectsSection";
import { LotusFlower, ChevronStrip } from "./portfolio/TruckArtDecorations";

const NAV = ["home", "projects", "profile", "contact"];
const NAV_HINDI = {
  home: "होम / MAIN STAGE",
  projects: "प्रोजेक्ट्स / CREATIONS",
  profile: "प्रोफाइल / STATS & GAUGES",
  contact: "संपर्क / BOOKING OFFICE",
};

export default function Portfolio() {
  const [current, setCurrent] = useState("home");
  const [wipe, setWipe] = useState({ state: "", target: "" });
  const [dark, setDark] = useState(false);
  const busy = useRef(false);
  const currentRef = useRef(current);
  const navigateRef = useRef(null);

  useEffect(() => {
    const theme = document.documentElement.dataset.theme;
    setDark(theme ? theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches);
    const hash = location.hash.slice(1);
    if (NAV.includes(hash)) setCurrent(hash);
  }, []);

  const toggleTheme = () => {
    const theme = dark ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    setDark(!dark);
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  };

  const navigate = (section) => {
    if (busy.current || section === currentRef.current) return;
    busy.current = true;
    setWipe({ state: "in", target: section });
    window.setTimeout(() => {
      currentRef.current = section;
      setCurrent(section);
      history.replaceState(null, "", `#${section}`);
      setWipe((previous) => ({ ...previous, state: "out" }));
    }, 560);
    window.setTimeout(() => {
      setWipe({ state: "", target: "" });
      busy.current = false;
    }, 1150);
  };
  currentRef.current = current;
  navigateRef.current = navigate;

  useEffect(() => {
    let locked = false;
    let unlockTimer;
    let touchStart = null;

    const move = (direction, event) => {
      if (locked || busy.current) return;
      const nextIndex = NAV.indexOf(currentRef.current) + direction;
      if (nextIndex < 0 || nextIndex >= NAV.length) return;

      event?.preventDefault();
      locked = true;
      navigateRef.current(NAV[nextIndex]);
      unlockTimer = window.setTimeout(() => { locked = false; }, 1200);
    };

    const onWheel = (event) => {
      if (event.ctrlKey || Math.abs(event.deltaY) < 30) return;
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (locked || busy.current) {
        event.preventDefault();
        return;
      }

      const section = document.querySelector("main section.on");
      if (!section) return;
      const atTop = section.scrollTop <= 1;
      const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 1;
      if (event.deltaY < 0 && atTop) move(-1, event);
      if (event.deltaY > 0 && atBottom) move(1, event);
    };

    const onTouchStart = (event) => {
      if (!event.touches.length || (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']"))) {
        touchStart = null;
        return;
      }
      touchStart = event.touches[0].clientY;
    };

    const onTouchEnd = (event) => {
      if (touchStart === null || !event.changedTouches.length) return;
      const distance = event.changedTouches[0].clientY - touchStart;
      touchStart = null;
      if (Math.abs(distance) < 95) return;

      const section = document.querySelector("main section.on");
      if (!section) return;
      const isScrollable = section.scrollHeight > section.clientHeight + 8;
      const atTop = section.scrollTop <= 3;
      const atBottom = section.scrollTop + section.clientHeight >= section.scrollHeight - 3;

      if (isScrollable) {
        if (distance > 0 && atTop) move(-1);
        if (distance < 0 && atBottom) move(1);
      } else {
        if (Math.abs(distance) >= 120) {
          if (distance > 0) move(-1);
          if (distance < 0) move(1);
        }
      }
    };

    const onKeyDown = (event) => {
      if (event.target instanceof Element && event.target.closest("input, textarea, select, [contenteditable='true']")) return;
      if (event.key === "ArrowRight" || event.key === "ArrowDown") {
        move(1, event);
      } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
        move(-1, event);
      } else if (["1", "2", "3", "4"].includes(event.key)) {
        const idx = parseInt(event.key, 10) - 1;
        if (NAV[idx]) navigateRef.current(NAV[idx]);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false, capture: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true, capture: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true, capture: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("wheel", onWheel, true);
      window.removeEventListener("touchstart", onTouchStart, true);
      window.removeEventListener("touchend", onTouchEnd, true);
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(unlockTimer);
    };
  }, []);

  return (
    <>
      {/* Decorative Outer Truck Frame (Matches Sabrina Carpenter Poster Border) */}
      <div className="truck-viewport-frame" aria-hidden="true" />

      <Header
        current={current}
        sections={NAV}
        onNavigate={navigate}
        dark={dark}
        onToggleTheme={toggleTheme}
        me={me}
      />

      <main>
        <HomeSection active={current === "home"} me={me} stack={stack} projects={projects} />
        <ProjectsSection active={current === "projects"} projects={projects} github={me.github} />
        <ProfileSection active={current === "profile"} me={me} skills={skills} stack={stack} />
        <ContactSection active={current === "contact"} email={me.email} />
      </main>

      {/* Cinematic Maximalist Smooth Transition Curtain */}
      <div id="truckWipe" className={wipe.state} aria-hidden="true">
        <ChevronStrip direction="horizontal" height={20} />
        <div className="wipe-slogan-wrap">
          <LotusFlower size={64} className="floating-lotus" />
          <div className="wipe-hindi">✦ हॉर्न ओके प्लीज ✦</div>
          <div className="wipe-english">
            {NAV_HINDI[wipe.target] || wipe.target}
          </div>
          <div
            style={{
              fontSize: "12px",
              letterSpacing: "0.2em",
              color: "var(--frame-cyan)",
              marginTop: "8px",
              fontWeight: 800,
            }}
          >
            ★ ALL INDIA PERMIT • SPEED 100% ★
          </div>
        </div>
        <ChevronStrip direction="horizontal" height={20} />
      </div>
    </>
  );
}
