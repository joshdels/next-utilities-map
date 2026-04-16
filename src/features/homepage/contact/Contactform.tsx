"use client";

import Script from "next/script";
import { useState, useEffect, useRef } from "react";
import { useInquiryForm } from "@/hooks/apis/useInquires";
import styles from "./ContactForm.module.css";

declare global {
  interface Window {
    turnstile: any;
    onTurnstileSuccess: (token: string) => void;
  }
}

export default function ContactForm() {
  const [turnstileReady, setTurnstileReady] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const {
    name,
    email,
    message,
    file,
    setName,
    setEmail,
    setMessage,
    setFile,
    handleSubmit,
    loading,
    error,
    success,
    captchaToken,
    setCaptchaToken,
  } = useInquiryForm();

  useEffect(() => {
    if (!turnstileReady) return;

    const interval = setInterval(() => {
      if (window.turnstile && turnstileRef.current) {
        clearInterval(interval);

        window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAAC-h3ZsmhYxc8-V_",
          callback: (token: string) => {
            console.log("TOKEN:", token);
            setCaptchaToken(token);
          },
        });
      }
    }, 100);

    return () => clearInterval(interval);
  }, [turnstileReady]);

  return (
    <>
      <div className="heading-container">
        <span className="sub-heading">Prefer to skip the call?</span>
        <h1 className="heading">
          We'll take a look and tell you exactly what's possible
        </h1>
        <h2 className="description">
          No back-and-forth. No sales pressure. Just drop your info and we'll
          come back with a clear answer.
        </h2>
      </div>

      <div className={styles["form-card"]}>
        <div className={styles.filed}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>

        <div className={styles.filed}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            className={styles.input}
          />
        </div>

        <div className={styles.filed}>
          <label htmlFor="message">Tell us about your problem</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="e.g. We have old scanned utility maps from the 90s..."
            rows={5}
          />
        </div>

        <div className={styles.filed}>
          <label htmlFor="file" className={styles["upload-button"]}>
            Attach a file (optional)
          </label>

          <input
            id="file"
            type="file"
            accept=".pdf,.dwg,.dxf,.png,.jpg,.jpeg,.zip"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            className={styles["hidden-input"]}
          />

          {file && <p className={styles["file-name"]}>{file.name}</p>}
        </div>

        {error && <p className={styles["form-error"]}>{error}</p>}
        {success && (
          <p className={styles["form-success"]}>
            Got it! We'll review your info and get back to you soon.
          </p>
        )}

        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onLoad={() => setTurnstileReady(true)}
        />

        <div ref={turnstileRef}></div>

        <button
          className="primary-button"
          onClick={() => handleSubmit(undefined, captchaToken)}
          disabled={loading || !captchaToken}
        >
          {loading ? "Sending..." : "Send Your Problem"}
        </button>
      </div>

      <p className="quote">We typically respond within 1 - 2 business day.</p>
    </>
  );
}
