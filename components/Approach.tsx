"use client";

const steps = [
  { n:"1", title:"Discover", desc:"Deep-dive diagnosis of your business: challenges, goals, and market position. We listen before we lead." },
  { n:"2", title:"Design",   desc:"We craft a bold, precision-engineered strategy tailored to your specific context — no templates, no guesswork." },
  { n:"3", title:"Deploy",   desc:"Hands-on implementation support. We stay involved through execution — not just in the planning room." },
  { n:"4", title:"Deliver",  desc:"Measurable results, clear reporting, and continuous optimisation until the needle definitively moves." },
];

export default function Approach() {
  const scroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior:"smooth" }); };

  return (
    <section id="approach" style={{ background:"#09071a" }}>

      {/* ✅ BLACK TEAM IMAGE — replaces generic office stock */}
      <div className="img-wrap" style={{ position:"relative", height:"clamp(240px,36vh,420px)", overflow:"hidden" }}>
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop"
          alt="Black team collaborating in a workshop"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 40%" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(9,7,26,0.35),rgba(9,7,26,0.98))" }} />
        <div style={{ position:"absolute", bottom:"2.5rem", left:"clamp(1.25rem,5vw,4rem)", zIndex:2 }}>
          <span className="section-label" style={{ marginBottom:"0.75rem" }}>How We Work</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#fff", lineHeight:1.05 }}>
            Our <em style={{ fontStyle:"italic", color:"#a89ff5" }}>Approach.</em>
          </h2>
        </div>
      </div>

      <div className="max-w" style={{ padding:"clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(2rem,5vw,5rem)", alignItems:"start" }} className="col-1">

          {/* Steps */}
          <div>
            {steps.map((s, i) => (
              <div key={s.n} data-reveal data-delay={String(i+1)} style={{ display:"flex", gap:"1.5rem", paddingBottom:"2.5rem", position:"relative" }}>
                {i < steps.length-1 && <div style={{ position:"absolute", left:22, top:50, bottom:0, width:1, background:"linear-gradient(to bottom,rgba(123,116,224,0.35),transparent)" }} />}
                <div style={{ width:44, height:44, borderRadius:"50%", flexShrink:0, background:"linear-gradient(135deg,#6C63C7,#4B44A8)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:15, boxShadow:"0 4px 20px rgba(108,99,199,0.38)" }}>{s.n}</div>
                <div style={{ paddingTop:6 }}>
                  <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.25rem", marginBottom:"0.5rem" }}>{s.title}</h3>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.38)", fontSize:"0.875rem", lineHeight:1.85 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ Quote appears ONCE only — removed from WhyUs to avoid duplicate */}
          <div data-reveal="right" style={{ background:"rgba(26,21,53,0.82)", border:"1px solid rgba(123,116,224,0.15)", borderRadius:22, padding:"clamp(2rem,4vw,3.25rem)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", bottom:"-20%", right:"-15%", width:"60%", height:"60%", borderRadius:"50%", background:"radial-gradient(circle,rgba(75,68,168,0.25),transparent 65%)", pointerEvents:"none" }} />
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"4.5rem", color:"rgba(123,116,224,0.14)", lineHeight:1, display:"block", marginBottom:"1rem", userSelect:"none" }}>"</span>
            <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontStyle:"italic", color:"#fff", fontSize:"clamp(1.15rem,2vw,1.65rem)", lineHeight:1.55, position:"relative", zIndex:1 }}>We don't just advise — we commit. Every strategy we craft is one we'd stake our reputation on. That's the VON STYLUS standard.</p>
            <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:"1.5rem", position:"relative", zIndex:1 }}>
              <div style={{ width:32, height:1.5, background:"#7B74E0" }} />
              <span className="section-label">The VON STYLUS Promise</span>
            </div>
          </div>
        </div>

        {/* ✅ CTA ADDED */}
        <div data-reveal style={{ textAlign:"center", marginTop:"clamp(3rem,6vw,4.5rem)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.95rem", marginBottom:"1.5rem" }}>Let's Start With Discover.</p>
          <button className="btn-dark" onClick={()=>scroll("#contact")}>Book a Discovery Call →</button>
        </div>
      </div>
    </section>
  );
}