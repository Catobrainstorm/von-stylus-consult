"use client";

const pillars = [
  { n:"01", title:"Strategy", desc:"Sharp thinking anchored in data, logic, and lived expertise across industries and borders worldwide." },
  { n:"02", title:"Creativity", desc:"Bold ideas that cut through noise and leave a lasting mark that clients and audiences remember." },
  { n:"03", title:"Execution", desc:"We stay committed until outcomes are delivered — not just promised, not just planned." },
  { n:"04", title:"Impact", desc:"Measurable results that move organisations, people, and entire sectors forward at scale." },
];

export default function About() {
  return (
    <section id="about" style={{ background: "#f8f6ff" }}>

      {/* Split — text | image */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "88vh" }} className="grid-1-mobile">

        {/* Left — text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "clamp(4rem,8vw,7rem) clamp(2rem,6vw,5rem)" }}>
          <span className="section-label" data-reveal style={{ color: "#6C63C7", marginBottom: "1.25rem" }}>Who We Are</span>
          <h2 data-reveal data-delay="1" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,4.5vw,4.5rem)", color: "#09071a", lineHeight: 1.1, marginBottom: "1.75rem" }}>
            Built for Leaders<br />Who{" "}
            <em className="g-text-purple" style={{ fontStyle: "italic" }}>Refuse to Stand Still.</em>
          </h2>
          <p data-reveal data-delay="2" style={{ fontFamily: "'DM Sans',sans-serif", color: "#4a4770", fontSize: "clamp(0.95rem,1.3vw,1.05rem)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
            <strong style={{ color: "#09071a" }}>VON STYLUS Consult</strong> is a bold, multi-disciplinary firm that partners with organisations and leaders to diagnose complexity, design strategy, and drive measurable results.
          </p>
          <p data-reveal data-delay="3" style={{ fontFamily: "'DM Sans',sans-serif", color: "#7a789a", fontSize: "clamp(0.875rem,1.2vw,0.95rem)", lineHeight: 1.9, marginBottom: "2rem" }}>
            Our name says it all: a stylus is a tool of <strong style={{ color: "#4B44A8" }}>precision, intention, and craft.</strong> Every engagement is authored with that same deliberate energy — no fluff, no guesswork, only sharp thinking and outcomes that speak for themselves.
          </p>
          <div data-reveal data-delay="4">
            <button onClick={() => { const el = document.querySelector("#services"); if(el) el.scrollIntoView({behavior:"smooth"}); }} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, color: "#6C63C7", background: "none", border: "none", cursor: "pointer", padding: 0, transition: "gap 0.35s cubic-bezier(0.16,1,0.3,1)" }}
              onMouseEnter={e => (e.currentTarget.style.gap = "16px")}
              onMouseLeave={e => (e.currentTarget.style.gap = "8px")}
            >Explore our services →</button>
          </div>
        </div>

        {/* Right — full bleed image */}
        <div data-reveal="right" className="img-wrap" style={{ position: "relative", minHeight: "60vh" }}>
          <img src="/images/kemi.jpeg" alt="Leadership" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(248,246,255,0.25) 0%,transparent 35%)" }} />
          {/* Floating stat */}
          <div style={{ position: "absolute", bottom: "2rem", left: "2rem", background: "rgba(9,7,26,0.88)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 18, padding: "1.25rem 1.5rem", border: "1px solid rgba(123,116,224,0.2)", boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, color: "#fff", fontSize: "2rem", lineHeight: 1 }}>12+</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.42)", fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 5 }}>Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Pillars — dark */}
      <div style={{ background: "#09071a", padding: "clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem)" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <span className="section-label" data-reveal style={{ textAlign: "center", marginBottom: "clamp(2rem,4vw,3rem)", display: "block" }}>Our Four Pillars</span>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.25rem" }}>
            {pillars.map((p, i) => (
              <div key={p.n} data-reveal data-delay={String(i+1)} className="card-lift" style={{ background: "rgba(45,38,96,0.28)", border: "1px solid rgba(123,116,224,0.12)", borderRadius: 20, padding: "clamp(1.5rem,3vw,2.25rem)", position: "relative", overflow: "hidden", cursor: "default" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(123,116,224,0.45)";(e.currentTarget as HTMLElement).style.background="rgba(75,68,168,0.22)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(123,116,224,0.12)";(e.currentTarget as HTMLElement).style.background="rgba(45,38,96,0.28)";}}
              >
                <span style={{ position: "absolute", top: 12, right: 16, fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "3.5rem", color: "rgba(123,116,224,0.08)", lineHeight: 1, userSelect: "none" }}>{p.n}</span>
                <div style={{ width: 18, height: 18, transform: "rotate(45deg)", border: "1px solid rgba(123,116,224,0.4)", background: "rgba(123,116,224,0.1)", marginBottom: "1.5rem" }} />
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: "1.2rem", marginBottom: "0.65rem" }}>{p.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.36)", fontSize: "0.85rem", lineHeight: 1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}