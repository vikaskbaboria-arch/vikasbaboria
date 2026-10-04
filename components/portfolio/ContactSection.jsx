"use client";

import React, { useState } from "react";
import { LotusFlower, CuttingChai, SloganBadge } from "./TruckArtDecorations";

export default function ContactSection({ active, email }) {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function submitContact(event) {
    event.preventDefault();
    setSending(true);
    setError("");
    const form = event.currentTarget;
    const values = new FormData(form);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: values.get("n"), email: values.get("e"), message: values.get("m"), website: values.get("website") }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Message could not be sent.");
      setSent(true);
      form.reset();
    } catch (submitError) {
      setError(submitError.message || "Message could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section className={active ? "on" : ""} id="contact">
      <div style={{ maxWidth: "1000px", margin: "0 auto", paddingBottom: "40px" }}>
        {/* Title Header */}
        <div className="truck-section-header">
          <div className="truck-title-wrap">
            <LotusFlower size={38} className="section-title-lotus" />
            <h2 className="truck-section-title">Contact</h2>
            <LotusFlower size={38} className="section-title-lotus" />
          </div>
          <div className="truck-section-subtitle">
            ★ बुकिंग ऑफिस एवं सीधा संपर्क — DIRECT LINE 24/7 ★
          </div>
        </div>

        {/* Truck Contact Box */}
        <div className="truck-contact-box">
          <div className="truck-hotline-banner">
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "13px",
                letterSpacing: "0.1em",
                color: "var(--mut)",
                marginBottom: "6px",
              }}
            >
              ✦ OFFICIAL INBOX & PROJECT DISPATCH ✦
            </div>
            <a className="truck-big-email" href={`mailto:${email}`}>
              {email}
            </a>
            <div style={{ marginTop: "10px" }}>
              <SloganBadge hindi="जल्दी मिलिए, चाय पीजिए" english="LET'S TALK OVER CHAI" theme="yellow" tilt={-1} />
            </div>
          </div>

          {/* Equal Height Contact Grid */}
          <div className="truck-contact-grid">
            {/* Left Card: Info & Note (Equal Height) */}
            <div className="truck-contact-card">
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "2px dashed #000", paddingBottom: "8px", marginBottom: "12px" }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "#d81e05" }}>
                    MISSION DISPATCH
                  </span>
                  <span style={{ fontSize: "11px", fontWeight: 800 }}>READY TO SHIP</span>
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "20px",
                    color: "#111",
                    marginBottom: "8px",
                  }}
                >
                  Got a Mission or Project?
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: "1.55",
                    color: "var(--mut)",
                    marginBottom: "16px",
                  }}
                >
                  Whether you need a full-stack Next.js web application, robust Node & MongoDB API services,
                  or a high-energy frontend with character and speed — let's build something unforgettable.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px",
                  background: "#fff9e6",
                  border: "2px dashed #ff9900",
                  borderRadius: "10px",
                  marginTop: "auto",
                }}
              >
                <CuttingChai size={44} />
                <div style={{ fontSize: "12px", fontWeight: 700, color: "#92400e" }}>
                  "चाय गरम, कोड मक्खन — Fast turnaround and zero downtime."
                </div>
              </div>
            </div>

            {/* Right Card: Form (Equal Height) */}
            <div className="truck-contact-card">
              {sent ? (
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ecfdf5",
                    border: "2px solid #059669",
                    padding: "20px",
                    borderRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <LotusFlower size={48} />
                  <h4 style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "#065f46", marginTop: "10px" }}>
                    संदेश रवाना! / MESSAGE DISPATCHED!
                  </h4>
                  <p style={{ fontSize: "13px", color: "#047857", marginTop: "6px" }}>
                    Your message has been delivered. Looking forward to connecting!
                  </p>
                </div>
              ) : (
                <form
                  className="truck-contact-form"
                  style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}
                  onSubmit={submitContact}
                >
                  <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="contact-honeypot" />
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input className="truck-input" name="n" placeholder="Your Name / आपका नाम" required />
                    <input className="truck-input" name="e" type="email" placeholder="Your Email / ईमेल पता" required />
                    <textarea
                      className="truck-textarea"
                      name="m"
                      rows={3}
                      minLength={5}
                      maxLength={5000}
                      placeholder="Tell me about your project, idea, or role..."
                      required
                    />
                  </div>
                  {error && <p role="alert" className="contact-error">{error}</p>}
                  <button className="truck-btn" type="submit" disabled={sending} style={{ width: "100%", padding: "12px", marginTop: "12px" }}>
                    {sending ? "Dispatching…" : "✦ Dispatch Message / संदेश भेजें ✦"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
