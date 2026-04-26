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
      
      {/* ✅ WHITE SECTION (Top Story) */}
      <div style={{ background: "#ffffff", padding: "clamp(5rem,10vw,8rem) 0" }}>
        <div className="max-w" style={{ margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap: "clamp(2rem,6vw,5rem)", alignItems: "center" }} className="col-1">
            
            {/* Left: Text Content */}
            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center" }}>
              <span className="section-label-dark" data-reveal style={{ marginBottom:"1.25rem" }}>Who We Are</span>
              
              <h2 data-reveal data-delay="1" style={{ 
                fontFamily:"'Young Serif', serif", 
                fontWeight: 400,
                fontSize:"clamp(2.5rem,4.5vw,4.5rem)", 
                color:"#09071a", 
                lineHeight:1.05, 
                marginBottom:"1.5rem" 
              }}>
                Authored With Intention.{" "}
                <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7" }}>Delivered With Impact.</em>
              </h2>

              <p data-reveal data-delay="2" style={{ fontFamily:"'DM Sans',sans-serif", color:"#4a4770", fontSize:"clamp(1rem,1.3vw,1.05rem)", lineHeight:1.85, marginBottom:"1rem" }}>
                A stylus is a tool of precision, intention, and craft. Every mark it makes is deliberate. That's the philosophy at the heart of everything we do at <strong style={{ color:"#09071a" }}>VON STYLUS Consult.</strong>
              </p>
              
              <p data-reveal data-delay="3" style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a789a", fontSize:"clamp(0.9rem,1.2vw,0.95rem)", lineHeight:1.85, marginBottom:"2.5rem" }}>
                Founded to bridge the gap between strategic thinking and creative execution, we've grown into a full-service consultancy operating at the intersection of business, media, and culture.
              </p>

              <div data-reveal data-delay="4">
                <button className="btn-light" onClick={()=>scroll("#services")} style={{ cursor: "pointer" }}>See What We Do →</button>
              </div>
            </div>

            {/* Right: The Image */}
            <div data-reveal="right" style={{ position:"relative", height: "100%", minHeight: "550px", borderRadius: "32px", overflow: "hidden", boxShadow: "0 40px 100px rgba(75,68,168,0.12)" }}>
              <img
                src="/images/image5.png"
                alt="Von Stylus team session"
                style={{ width:"100%", height:"100%", objectFit:"cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ DARK SECTION (The 4 Cards in 1 line) */}
      <div style={{ background:"#09071a", padding:"clamp(6rem,12vw,10rem) 0" }}>
        <div className="max-w" style={{ margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
          
          <span className="section-label" data-reveal style={{ textAlign:"center", marginBottom:"clamp(3rem,5vw,4rem)", display:"block", color: "#a89ff5" }}>What Drives Us Every Day</span>
          
          {/* ✅ FORCED 4 COLUMNS ON DESKTOP */}
          <div style={{ 
            display:"grid", 
            gridTemplateColumns: "repeat(4, 1fr)", 
            gap:"1.25rem" 
          }} className="pillar-grid">
            {pillars.map((p, i) => (
              <div key={p.n} data-reveal data-delay={String(i+1)} className="card" style={{ background:"rgba(45,38,96,0.28)", border:"1px solid rgba(123,116,224,0.12)", borderRadius:24, padding:"2rem 1.5rem", position:"relative", overflow:"hidden", transition: "all 0.4s" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.45)";el.style.background="rgba(75,68,168,0.22)";el.style.transform="translateY(-8px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.12)";el.style.background="rgba(45,38,96,0.28)";el.style.transform="none";}}
              >
                <span style={{ position:"absolute", top:12, right:16, fontFamily:"'Young Serif', serif", fontWeight:400, fontSize:"3.5rem", color:"rgba(123,116,224,0.08)", lineHeight:1 }}>{p.n}</span>
                <div style={{ width:18, height:18, transform:"rotate(45deg)", border:"1px solid rgba(123,116,224,0.4)", background:"rgba(123,116,224,0.1)", marginBottom:"1.5rem" }} />
                <h3 style={{ fontFamily:"'Young Serif', serif", fontWeight:400, color:"#fff", fontSize:"1.25rem", marginBottom:"0.75rem" }}>{p.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"0.85rem", lineHeight:1.75 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .pillar-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .pillar-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}