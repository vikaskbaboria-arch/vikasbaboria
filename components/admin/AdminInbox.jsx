"use client";

import { useCallback, useEffect, useState } from "react";

export default function AdminInbox() {
  const [messages, setMessages] = useState([]);
  const [mode, setMode] = useState("checking");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  const loadMessages = useCallback(async () => {
    try {
      const response = await fetch("/api/admin/messages", { cache: "no-store" });
      const body = await response.json();
      if (response.status === 401) { setMode("gate"); return; }
      if (!response.ok) throw new Error(body.error || "Could not load the inbox.");
      setMessages(body.messages || []);
      setMode("inbox");
      setError("");
    } catch (loadError) {
      setMode((current) => current === "checking" ? "gate" : current);
      setError(loadError.message);
    }
  }, []);

  useEffect(() => { loadMessages(); }, [loadMessages]);

  async function signIn(event) {
    event.preventDefault();
    setBusy(true);
    setError("");
    const values = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.get("email"), password: values.get("password") }),
      });
      const body = await response.json();
      if (!response.ok) throw new Error(body.error || "Could not sign in.");
      await loadMessages();
    } catch (loginError) { setError(loginError.message); }
    finally { setBusy(false); }
  }

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    setMessages([]);
    setMode("gate");
  }

  return (
    <main className="admin-shell">
      <a className="admin-back" href="/">← Back to portfolio</a>
      <div className="admin-board">
        <div className="admin-stamp">PRIVATE DISPATCH OFFICE · NO PUBLIC ENTRY</div>
        {mode === "checking" ? <p className="admin-muted">Checking the gate…</p> : mode === "inbox" ? (
          <>
            <div className="admin-title-row">
              <div><p className="admin-kicker">INCOMING TRANSMISSIONS</p><h1>Contact Inbox</h1></div>
              <button className="truck-btn outline" onClick={signOut}>Log out</button>
            </div>
            <div className="admin-count">{messages.length} {messages.length === 1 ? "MESSAGE" : "MESSAGES"}</div>
            {error && <p role="alert" className="contact-error">{error}</p>}
            {messages.length === 0 ? <div className="admin-empty">No messages yet. The dispatch desk is quiet.</div> : (
              <div className="admin-messages">
                {messages.map((message) => <article className="admin-message" key={message.id}>
                  <div className="admin-message-head"><h2>{message.name}</h2><time>{new Date(message.createdAt).toLocaleString()}</time></div>
                  <a className="admin-email" href={`mailto:${encodeURIComponent(message.email)}`}>{message.email}</a>
                  <p className="admin-message-body">{message.message}</p>
                </article>)}
              </div>
            )}
          </>
        ) : (
          <div className="admin-gate-layout">
            <div className="admin-road-sign" aria-hidden="true"><span>⛔</span><strong>NO<br />ROAD</strong><small>ADMIN ONLY</small></div>
            <div className="admin-gate-copy">
              <p className="admin-kicker">RESTRICTED ROUTE · PRIVATE PROPERTY</p>
              <h1>Hold it right there.</h1>
              <p>This dispatch road is closed to visitors. Admin credentials required to open the inbox.</p>
              <form className="admin-login" onSubmit={signIn}>
                <label>Email<input className="truck-input" name="email" type="email" autoComplete="username" required /></label>
                <label>Password<input className="truck-input" name="password" type="password" autoComplete="current-password" required /></label>
                {error && <p role="alert" className="contact-error">{error}</p>}
                <button className="truck-btn" disabled={busy}>{busy ? "Checking pass…" : "Show admin pass"}</button>
              </form>
              <a className="admin-back-inline" href="/">← Turn back to the portfolio</a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
