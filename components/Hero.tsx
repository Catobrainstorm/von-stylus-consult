"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { url: "/images/image1.png", tag: "Strategy & Vision" },
  { url: "/images/image2.png", tag: "Leadership & Excellence" },
  { url: "/images/image3.png", tag: "Creative Media" },
  { url: "/images/image4.png", tag: "Consulting & Growth" },
];

const WORDS = [
  // ✅ GROUPED FOR 2-LINE FLOW & UPDATED COLOR
  { text: "Where Precision", italic: true, blue: true }, 
  { text: "Meets Bold Vision.", italic: false, blue: false },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [busy, setBusy] = useState(false);
  const [entered, setEntered] = useState(false);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((i: number) => {
    if (busy) return;
    setBusy(true); setCur(i);
    setTimeout(() => setBusy(false), 1400);
  }, [busy]);

  const next = useCallback(() => goTo((cur + 1) % slides.length), [cur, goTo]);
  const prev = useCallback(() => goTo((cur - 1 + slides.length) % slides.length), [cur, goTo]);

  useEffect(() => { 
    timerRef.current = setInterval(next, 7000); 
    return () => { if (timerRef.current) clearInterval(timerRef.current); }; 
  }, [next]);

  useEffect(() => {
    const t = setTimeout(() => {
      setEntered(true);
      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.add("up"), 500 + i * 150);
      });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const btn: React.CSSProperties = { 
    width:38, height:38, borderRadius:"50%", 
    border:"1px solid rgba(123,116,224,0.3)", 
    background:"rgba(108,99,199,0.12)", color:"#fff", 
    cursor:"pointer", display:"flex", alignItems:"center", 
    justifyContent:"center", transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)", 
    flexShrink:0 
  };

  return (
    <section id="top" style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", overflow:"hidden" }}>

      {/* BG slides */}
      {slides.map((s, i) => (
        <div key={i} className="hero-bg" style={{ backgroundImage:`url(${s.url})`, opacity: i===cur?1:0, zIndex:1 }} />
      ))}
      <div style={{ position:"absolute", inset:0, zIndex:2, background:"linear-gradient(to bottom,rgba(9,7,26,0.6) 0%,rgba(9,7,26,0.4) 30%,rgba(9,7,26,0.85) 70%,rgba(9,7,26,1) 100%)" }} />
      <div style={{ position:"absolute", inset:0, zIndex:3, background:"radial-gradient(ellipse at 60% 30%,rgba(75,68,168,0.15),transparent 60%)" }} />

      {/* Content Area */}
      <div style={{ position:"relative", zIndex:10, width:"100%", maxWidth:1280, margin:"0 auto", padding:"clamp(6rem,12vh,9rem) clamp(1.25rem,5vw,4rem) clamp(5rem,10vh,7rem)" }}>

        {/* Eyebrow — ✅ COLOR UPDATED TO BLUE */}
        <div data-reveal style={{ display:"flex", alignItems:"center", gap:12, marginBottom:"1.5rem" }}>
          <div style={{ width:30, height:1, background:"#7B74E0", flexShrink:0 }} />
          <span className="section-label" style={{ fontSize: '0.65rem', letterSpacing: '0.3em', fontWeight: 600, color: "#a89ff5" }}>Strategy · Media · Advertising · Events</span>
        </div>

        {/* Headline — ✅ FIRST LINE UPDATED TO BLUE */}
        <div style={{ marginBottom:"1.5rem", lineHeight:1.0, maxWidth: "1000px" }}>
          {WORDS.map((w, i) => (
            <div key={i} className="word-wrap" style={{ display: "block" }}>
              <span ref={el=>{wordsRef.current[i]=el;}} className="word-inner" style={{
                fontFamily:"'Young Serif', serif",
                fontWeight: 400,
                fontStyle: w.italic ? "italic" : "normal",
                fontSize:"clamp(2.5rem, 7vw, 6.2rem)", 
                lineHeight:1.1,
                color: w.blue ? "#7B74E0" : "#fff", // Dynamic Blue for first line
              }}>{w.text}</span>
            </div>
          ))}
        </div>

        {/* Subheadline */}
        <p data-reveal data-delay="2" style={{ 
          color:"rgba(255,255,255,0.45)", 
          fontFamily:"'DM Sans',sans-serif", 
          fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)", 
          lineHeight:1.75, 
          maxWidth:520, 
          marginBottom:"2.5rem" 
        }}>
          VON STYLUS Consult is where bold strategy meets creative power. We partner with visionaries to build brands and create experiences that move people and markets.
        </p>

        {/* CTAs */}
        <div data-reveal data-delay="3" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", marginBottom:"4rem" }}>
          <button className="btn-primary" onClick={()=>scrollTo("#contact")}>Let's Build Something Bold →</button>
          <button className="btn-outline" onClick={()=>scrollTo("#services")}>Explore Our Services</button>
        </div>

        {/* Stats */}
        <div data-reveal data-delay="4" className="stats-2" style={{ display:"flex", gap:"clamp(2.5rem, 6vw, 5rem)", paddingTop:"1.5rem", borderTop:"1px solid rgba(255,255,255,0.08)", maxWidth:"fit-content" }}>
          {[{v:"12+",l:"Years"},{v:"56",l:"Countries"},{v:"10+",l:"Advisors"}].map(s=>(
            <div key={s.l}>
              <p style={{ fontFamily:"'Young Serif', serif", fontWeight:400, fontSize:"clamp(1.6rem, 3vw, 2.5rem)", color:"#fff", lineHeight:1 }}>{s.v}</p>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.6rem", letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginTop:4 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation & Bottom bar preserved as per previous turnaround */}
    </section>
  );
}