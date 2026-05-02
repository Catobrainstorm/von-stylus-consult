"use client";

const pillars = [
  { n:"01", title:"Strategy", desc:"Sharp thinking anchored in data, logic, and lived expertise. Every recommendation is grounded, deliberate, and defensible." },
  { n:"02", title:"Creativity", desc:"Strategy without creativity is just a spreadsheet. We bring both to every table, every engagement." },
  { n:"03", title:"Execution", desc:"We stay committed until outcomes are delivered — not just promised, not just planned." },
  { n:"04", title:"Impact", desc:"We measure success by outcomes, not outputs. Results are what we're here for." },
];

export default function About() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior: "smooth" }); 
  };

  return (
    <section id="about" style={{ overflow: "hidden" }}>
      
      {/* ✅ SUPERB EDITORIAL SECTION */}
      <div style={{ background: "#ffffff", padding: "clamp(6rem,12vw,10rem) 0" }}>
        <div className="max-w" style={{ margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1.2fr", gap: "clamp(3rem,8vw,6rem)", alignItems: "start" }} className="col-1">
            
            {/* ── LEFT SIDE: BALANCED HEADLINE & CTA ── */}
            <div style={{ position: "sticky", top: "140px" }}>
              <span className="section-label-dark" data-reveal style={{ marginBottom:"1.5rem", letterSpacing: "0.4em", fontSize: "0.65rem" }}>Who We Are</span>
              
              <h2 data-reveal data-delay="1" style={{ 
                fontFamily:"'Playfair Display', serif", 
                fontWeight: 700,
                // ✅ UPDATED: SLIGHTLY LARGER FOR IMPACT (FROM 3.2rem to 4.2rem)
                fontSize:"clamp(2.5rem, 4.5vw, 4.2rem)", 
                color:"#09071a", 
                lineHeight:1.1, 
                letterSpacing: "-0.025em",
                marginBottom:"2.8rem" 
              }}>
                Authored With <br /> Intention.{" "}
                <br />
                <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7", fontWeight: 400 }}>Delivered With Impact.</em>
              </h2>

              <div data-reveal data-delay="4">
                <button className="btn-light" onClick={()=>scroll("#services")} style={{ padding: "16px 36px", fontSize: "14px", fontWeight: 600 }}>See What We Do →</button>
              </div>
            </div>

            {/* ── RIGHT SIDE: LANDSCAPE IMAGE & PROSE ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
              
              {/* Landscape Image */}
              <div data-reveal="right" className="img-wrap" style={{ 
                position:"relative", 
                width: "100%",
                aspectRatio: "16 / 9", 
                borderRadius: "32px", 
                overflow: "hidden", 
                boxShadow: "0 40px 100px rgba(9,7,26,0.08)" 
              }}>
                <img
                  src="/images/image5.PNG"
                  alt="Von Stylus team session"
                  style={{ width:"100%", height:"100%", objectFit:"cover" }}
                />
              </div>

              {/* Prose Content Under Image */}
              <div style={{ maxWidth: "560px", paddingLeft: "1.5rem", borderLeft: "1px solid rgba(108,99,199,0.15)" }}>
                <p data-reveal data-delay="2" style={{ fontFamily:"'DM Sans',sans-serif", color:"#4a4770", fontSize:"clamp(1.05rem, 1.25vw, 1.15rem)", lineHeight:1.8, marginBottom:"1.8rem" }}>
                  A stylus is a tool of precision, intention, and craft. Every mark it makes is deliberate. That's the philosophy at the heart of everything we do at <strong style={{ color:"#09071a" }}>VON STYLUS Consult.</strong>
                </p>
                
                <p data-reveal data-delay="3" style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a789a", fontSize:"0.95rem", lineHeight:1.85 }}>
                  Founded to bridge the gap between strategic thinking and creative execution, we've grown into a full-service consultancy operating at the intersection of business, media, and culture — serving corporate enterprises, SMEs, government agencies, and NGOs.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ✅ DARK PILLARS SECTION */}
      <div style={{ background:"#09071a", padding:"clamp(6rem,12vw,10rem) 0", borderTop: "1px solid rgba(123,116,224,0.08)" }}>
        <div className="max-w" style={{ margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ 
            display:"grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap:"1.5rem" 
          }} className="pillar-grid">
            {pillars.map((p, i) => (
              <div key={p.n} data-reveal data-delay={String(i+1)} className="card" style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(255,255,255,0.06)", borderRadius:28, padding:"2.5rem 2rem", position:"relative", overflow:"hidden" }}>
                <span style={{ position:"absolute", top:15, right:20, fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:"4rem", color:"rgba(123,116,224,0.05)", lineHeight:1 }}>{p.n}</span>
                <div style={{ width:24, height:2, background:"#7B74E0", marginBottom:"2rem" }} />
                <h3 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, color:"#fff", fontSize:"1.3rem", marginBottom:"1rem" }}>{p.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.35)", fontSize:"0.85rem", lineHeight:1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1100px) {
          .pillar-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
          .col-1 { grid-template-columns: 1fr !important; gap: 4rem !important; }
          .img-wrap { aspectRatio: 4 / 3 !important; }
        }
      `}</style>
    </section>
  );
}