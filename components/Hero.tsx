"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { url: "https://images.unsplash.com/photo-1560472355-536de3962603?w=1920&q=90&auto=format", tag: "Strategy & Vision" },
  { url: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1920&q=90&auto=format", tag: "Leadership & Excellence" },
  { url: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=90&auto=format", tag: "Creative Media" },
  { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=90&auto=format", tag: "Consulting & Growth" },
  { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1920&q=90&auto=format", tag: "Events & Experiences" },
];

const WORDS = [
  { text: "Where", italic: false },
  { text: "Precision", italic: true, gradient: true },
  { text: "Meets", italic: false },
  { text: "Bold", italic: false },
  { text: "Vision.", italic: false },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [busy, setBusy] = useState(false);
  const [ready, setReady] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  const goTo = useCallback((idx: number) => {
    if (busy) return;
    setBusy(true);
    setCur(idx);
    setTimeout(() => setBusy(false), 1400);
  }, [busy]);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);
  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(next, 7000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  // Word-by-word entrance
  useEffect(() => {
    const t = setTimeout(() => {
      setReady(true);
      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.add("visible"), 500 + i * 100);
      });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  const btnStyle: React.CSSProperties = {
    width: 40, height: 40, borderRadius: "50%",
    border: "1px solid rgba(123,116,224,0.4)",
    background: "rgba(108,99,199,0.15)",
    color: "#fff", cursor: "pointer",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
    flexShrink: 0,
  };

  return (
    <section id="top" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>

      {/* BG images */}
      {slides.map((s, i) => (
        <div key={i} className="hero-bg" style={{ backgroundImage: `url(${s.url})`, opacity: i === cur ? 1 : 0, zIndex: 1 }} />
      ))}

      {/* Dark gradient overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(to bottom, rgba(9,7,26,0.45) 0%, rgba(9,7,26,0.3) 35%, rgba(9,7,26,0.82) 72%, rgba(9,7,26,0.98) 100%)" }} />
      {/* Purple tint */}
      <div style={{ position: "absolute", inset: 0, zIndex: 3, background: "radial-gradient(ellipse at 60% 30%, rgba(75,68,168,0.2) 0%, transparent 60%)" }} />

      {/* Vertical line */}
      <div className="hide-mobile" style={{ position: "absolute", top: 0, bottom: 0, right: "18%", width: 1, background: "linear-gradient(to bottom,transparent,rgba(123,116,224,0.18) 25%,rgba(123,116,224,0.18) 75%,transparent)", zIndex: 4, pointerEvents: "none" }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", maxWidth: 1280, margin: "0 auto", padding: "clamp(8rem,16vh,11rem) clamp(1.25rem,5vw,4rem) clamp(6rem,12vh,9rem)" }}>

        {/* Label */}
        <div data-reveal style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "clamp(1.5rem,3vh,2.5rem)" }}>
          <div style={{ width: 40, height: 1.5, background: "#7B74E0", flexShrink: 0 }} />
          <span className="section-label">Business Consulting · Creative Media · Advertising · Events</span>
        </div>

        {/* Headline */}
        <div style={{ marginBottom: "clamp(1.5rem,3vh,2.5rem)", lineHeight: 1.0 }}>
          {WORDS.map((w, i) => (
            <span key={i} className="word-wrap" style={{ marginRight: "0.25em" }}>
              <span
                ref={el => { wordsRef.current[i] = el; }}
                className="word-inner"
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: w.italic ? 700 : 900,
                  fontStyle: w.italic ? "italic" : "normal",
                  fontSize: "clamp(3rem,8.5vw,8.5rem)",
                  lineHeight: 1.0,
                  ...(w.gradient ? {
                    background: "linear-gradient(135deg,#d4cfff 0%,#7B74E0 55%,#6C63C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  } : { color: "#fff" }),
                }}
              >{w.text}</span>
            </span>
          ))}
        </div>

        {/* Sub */}
        <p data-reveal data-delay="2" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'DM Sans',sans-serif", fontSize: "clamp(1rem,1.4vw,1.15rem)", lineHeight: 1.85, maxWidth: 520, marginBottom: "clamp(1.5rem,3vh,2.5rem)" }}>
          A bold, multi-disciplinary firm partnering with organisations and leaders to diagnose complexity, design strategy, and drive measurable results — across Africa, Europe, and beyond.
        </p>

        {/* CTAs */}
        <div data-reveal data-delay="3" style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "clamp(2.5rem,5vh,4rem)" }}>
          <button onClick={() => { const el = document.querySelector("#contact"); if(el) el.scrollIntoView({behavior:"smooth"}); }} style={{ padding: "15px 34px", borderRadius: 100, background: "linear-gradient(135deg,#6C63C7,#4B44A8)", color: "#fff", fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer", boxShadow: "0 8px 40px rgba(108,99,199,0.42)", transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1),box-shadow 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px) scale(1.03)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 55px rgba(108,99,199,0.62)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(108,99,199,0.42)"; }}
          >Work With Us →</button>
          <button onClick={() => { const el = document.querySelector("#about"); if(el) el.scrollIntoView({behavior:"smooth"}); }} style={{ padding: "15px 34px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.75)", fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, background: "transparent", cursor: "pointer", transition: "all 0.3s" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(123,116,224,0.65)"; (e.currentTarget as HTMLElement).style.color = "#fff"; (e.currentTarget as HTMLElement).style.background = "rgba(108,99,199,0.12)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)"; (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.75)"; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
          >Our Story</button>
        </div>

        {/* Stats */}
        <div data-reveal data-delay="4" className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "clamp(1rem,2.5vw,2rem)", paddingTop: "clamp(1.5rem,3vh,2.5rem)", borderTop: "1px solid rgba(255,255,255,0.07)", maxWidth: 700 }}>
          {[{v:"12+",l:"Years"},{v:"56",l:"Countries"},{v:"10+",l:"Advisors"},{v:"£3M+",l:"Managed"}].map(s => (
            <div key={s.l}>
              <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(1.6rem,3.5vw,2.6rem)", color: "#fff", lineHeight: 1 }}>{s.v}</p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginTop: 5 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem", padding: "13px clamp(1.25rem,5vw,4rem)", background: "rgba(9,7,26,0.8)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", borderTop: "1px solid rgba(123,116,224,0.1)" }}>
        <span className="section-label" style={{ letterSpacing: "0.28em", color: "rgba(168,159,245,0.6)" }}>Authored with Intention · Delivered with Impact</span>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: "rgba(255,255,255,0.28)", letterSpacing: "0.08em" }} className="hide-mobile">{slides[cur].tag}</span>
          <div style={{ display: "flex", gap: 5 }}>
            {slides.map((_,i) => (
              <button key={i} onClick={() => goTo(i)} style={{ width: i===cur ? 22 : 6, height: 6, borderRadius: 100, border: "none", cursor: "pointer", background: i===cur ? "#7B74E0" : "rgba(255,255,255,0.2)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", padding: 0 }} />
            ))}
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <button onClick={prev} style={btnStyle} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.4)";(e.currentTarget as HTMLElement).style.transform="scale(1.1)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.15)";(e.currentTarget as HTMLElement).style.transform="scale(1)";}}><ChevronLeft size={16}/></button>
            <button onClick={next} style={btnStyle} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.4)";(e.currentTarget as HTMLElement).style.transform="scale(1.1)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.15)";(e.currentTarget as HTMLElement).style.transform="scale(1)";}}><ChevronRight size={16}/></button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{ position: "absolute", bottom: 70, left: "50%", transform: "translateX(-50%)", zIndex: 20, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: ready ? 1 : 0, transition: "opacity 0.8s ease 2s" }}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,rgba(123,116,224,0.6),transparent)" }} />
      </div>
    </section>
  );
}