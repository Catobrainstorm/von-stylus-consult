"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ✅ BLACK PROFESSIONALS — Pexels diversity-focused images
const slides = [
  { url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", tag: "Strategy & Vision" },
  { url: "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", tag: "Leadership & Excellence" },
  { url: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", tag: "Creative Media" },
  { url: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", tag: "Consulting & Growth" },
  { url: "https://images.pexels.com/photos/7551442/pexels-photo-7551442.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop", tag: "Events & Experiences" },
];

const WORDS = [
  { text: "Where",    italic: false },
  { text: "Precision", italic: true, grad: true },
  { text: "Meets",    italic: false },
  { text: "Bold",     italic: false },
  { text: "Vision.",  italic: false },
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

  useEffect(() => { timerRef.current = setInterval(next, 7000); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [next]);

  useEffect(() => {
    const t = setTimeout(() => {
      setEntered(true);
      wordsRef.current.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => el.classList.add("up"), 500 + i * 100);
      });
    }, 200);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const btn: React.CSSProperties = { width:40, height:40, borderRadius:"50%", border:"1px solid rgba(123,116,224,0.4)", background:"rgba(108,99,199,0.18)", color:"#fff", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.3s cubic-bezier(0.16,1,0.3,1)", flexShrink:0 };

  return (
    <section id="top" style={{ position:"relative", minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"flex-end", overflow:"hidden" }}>

      {/* BG slides — BLACK PROFESSIONALS */}
      {slides.map((s, i) => (
        <div key={i} className="hero-bg" style={{ backgroundImage:`url(${s.url})`, opacity: i===cur?1:0, zIndex:1 }} />
      ))}
      <div style={{ position:"absolute", inset:0, zIndex:2, background:"linear-gradient(to bottom,rgba(9,7,26,0.52) 0%,rgba(9,7,26,0.3) 30%,rgba(9,7,26,0.8) 70%,rgba(9,7,26,0.98) 100%)" }} />
      <div style={{ position:"absolute", inset:0, zIndex:3, background:"radial-gradient(ellipse at 60% 30%,rgba(75,68,168,0.18),transparent 60%)" }} />
      <div className="hide-mob" style={{ position:"absolute", top:0, bottom:0, right:"18%", width:1, background:"linear-gradient(to bottom,transparent,rgba(123,116,224,0.15) 25%,rgba(123,116,224,0.15) 75%,transparent)", zIndex:4, pointerEvents:"none" }} />

      {/* Content */}
      <div style={{ position:"relative", zIndex:10, width:"100%", maxWidth:1280, margin:"0 auto", padding:"clamp(8rem,16vh,11rem) clamp(1.25rem,5vw,4rem) clamp(6rem,12vh,8.5rem)" }}>

        {/* Eyebrow */}
        <div data-reveal style={{ display:"flex", alignItems:"center", gap:14, marginBottom:"clamp(1.5rem,3vh,2.5rem)" }}>
          <div style={{ width:40, height:1.5, background:"#7B74E0", flexShrink:0 }} />
          <span className="section-label">Strategy · Media · Advertising · Events</span>
        </div>

        {/* Headline — word by word */}
        <div style={{ marginBottom:"clamp(1.5rem,3vh,2.5rem)", lineHeight:1.0 }}>
          {WORDS.map((w, i) => (
            <span key={i} className="word-wrap" style={{ marginRight:"0.22em" }}>
              <span ref={el=>{wordsRef.current[i]=el;}} className="word-inner" style={{
                fontFamily:"'Playfair Display',serif",
                fontWeight: w.italic ? 700 : 900,
                fontStyle: w.italic ? "italic" : "normal",
                fontSize:"clamp(2.8rem,8.5vw,8.5rem)",
                lineHeight:1.0,
                ...(w.grad ? {
                  background:"linear-gradient(135deg,#d4cfff 0%,#7B74E0 55%,#6C63C7 100%)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
                } : { color:"#fff" }),
              }}>{w.text}</span>
            </span>
          ))}
        </div>

        {/* ✅ APPROVED SUBHEADLINE from copy brief */}
        <p data-reveal data-delay="2" style={{ color:"rgba(255,255,255,0.52)", fontFamily:"'DM Sans',sans-serif", fontSize:"clamp(1rem,1.4vw,1.15rem)", lineHeight:1.85, maxWidth:560, marginBottom:"clamp(1.5rem,3vh,2.5rem)" }}>
          VON STYLUS Consult is where bold strategy meets creative power. We partner with businesses, governments, and visionaries to build brands, launch campaigns, and create experiences that move people and markets.
        </p>

        {/* ✅ UPDATED CTAs from copy brief */}
        <div data-reveal data-delay="3" style={{ display:"flex", flexWrap:"wrap", gap:"1rem", marginBottom:"clamp(2.5rem,5vh,4rem)" }}>
          <button className="btn-primary" onClick={()=>scrollTo("#contact")}>Let's Build Something Bold →</button>
          <button className="btn-outline" onClick={()=>scrollTo("#services")}>Explore Our Services</button>
        </div>

        {/* Stats */}
        <div data-reveal data-delay="4" className="stats-2" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"clamp(1rem,2.5vw,2rem)", paddingTop:"clamp(1.5rem,3vh,2.5rem)", borderTop:"1px solid rgba(255,255,255,0.07)", maxWidth:700 }}>
          {[{v:"12+",l:"Years"},{v:"56",l:"Countries"},{v:"10+",l:"Advisors"},{v:"£3M+",l:"Managed"}].map(s=>(
            <div key={s.l}>
              <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(1.6rem,3.5vw,2.6rem)", color:"#fff", lineHeight:1 }}>{s.v}</p>
              <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.57rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)", marginTop:5 }}>{s.l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, zIndex:20, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:"0.75rem", padding:"13px clamp(1.25rem,5vw,4rem)", background:"rgba(9,7,26,0.82)", backdropFilter:"blur(12px)", WebkitBackdropFilter:"blur(12px)", borderTop:"1px solid rgba(123,116,224,0.1)" }}>
        <span className="section-label" style={{ letterSpacing:"0.28em", color:"rgba(168,159,245,0.55)" }}>Authored with Intention · Delivered with Impact</span>
        <div style={{ display:"flex", alignItems:"center", gap:"1rem" }}>
          <span className="hide-mob" style={{ fontFamily:"'DM Sans',sans-serif", fontSize:11, color:"rgba(255,255,255,0.25)", letterSpacing:"0.08em" }}>{slides[cur].tag}</span>
          <div style={{ display:"flex", gap:5 }}>
            {slides.map((_,i)=><button key={i} onClick={()=>goTo(i)} style={{ width:i===cur?22:6, height:6, borderRadius:100, border:"none", cursor:"pointer", background:i===cur?"#7B74E0":"rgba(255,255,255,0.2)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", padding:0 }} />)}
          </div>
          <div style={{ display:"flex", gap:6 }}>
            <button onClick={prev} style={btn} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.42)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.18)";}}><ChevronLeft size={16}/></button>
            <button onClick={next} style={btn} onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.42)";}} onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.18)";}}><ChevronRight size={16}/></button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="scroll-cue" style={{ position:"absolute", bottom:70, left:"50%", transform:"translateX(-50%)", zIndex:20, display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity: entered?1:0, transition:"opacity 0.8s ease 2.2s" }}>
        <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.54rem", letterSpacing:"0.22em", textTransform:"uppercase", color:"rgba(255,255,255,0.2)" }}>Scroll</span>
        <div style={{ width:1, height:34, background:"linear-gradient(to bottom,rgba(123,116,224,0.6),transparent)" }} />
      </div>
    </section>
  );
}