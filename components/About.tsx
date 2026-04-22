"use client";

const pillars = [
  { n:"01", title:"Strategy", desc:"Sharp thinking anchored in data, logic, and lived expertise. Every recommendation is grounded, deliberate, and defensible." },
  { n:"02", title:"Creativity", desc:"Strategy without creativity is just a spreadsheet. We bring both to every table, every engagement." },
  { n:"03", title:"Execution", desc:"We stay committed until outcomes are delivered — not just promised, not just planned." },
  { n:"04", title:"Impact", desc:"We measure success by outcomes, not outputs. Results are what we're here for." },
];

export default function About() {
  const scroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior: "smooth" }); };

  return (
    <section id="about" style={{ background:"#f8f6ff" }}>
      {/* Split — text | image */}
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"88vh" }} className="col-1">
        {/* Left */}
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"clamp(4rem,8vw,7rem) clamp(2rem,6vw,5rem)" }}>
          {/* ✅ APPROVED page headline from copy brief */}
          <span className="section-label-dark" data-reveal style={{ marginBottom:"1.25rem" }}>Who We Are</span>
          <h2 data-reveal data-delay="1" style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,4.5vw,4.5rem)", color:"#09071a", lineHeight:1.1, marginBottom:"1.5rem" }}>
            Authored With Intention.{" "}
            <em className="g-text-p" style={{ fontStyle:"italic" }}>Delivered With Impact.</em>
          </h2>
          {/* ✅ APPROVED story copy */}
          <p data-reveal data-delay="2" style={{ fontFamily:"'DM Sans',sans-serif", color:"#4a4770", fontSize:"clamp(0.95rem,1.3vw,1.05rem)", lineHeight:1.9, marginBottom:"1rem" }}>
            A stylus is a tool of precision, intention, and craft. Every mark it makes is deliberate. That's the philosophy at the heart of everything we do at <strong style={{ color:"#09071a" }}>VON STYLUS Consult.</strong>
          </p>
          <p data-reveal data-delay="3" style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a789a", fontSize:"clamp(0.875rem,1.2vw,0.95rem)", lineHeight:1.9, marginBottom:"2rem" }}>
            Founded to bridge the gap between strategic thinking and creative execution, we've grown into a full-service consultancy operating at the intersection of business, media, and culture — serving corporate enterprises, SMEs, government agencies, and NGOs.
          </p>
          {/* ✅ CTA ADDED — feedback requested this */}
          <div data-reveal data-delay="4">
            <button className="btn-light" onClick={()=>scroll("#services")}>See What We Do →</button>
          </div>
        </div>

        {/* Right — ✅ BLACK PROFESSIONAL IMAGE */}
        <div data-reveal="right" className="img-wrap" style={{ position:"relative", minHeight:"60vh" }}>
          <img
            src="/images/kemi.jpeg"
            alt="Black business professionals in strategy session"
            style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}
          />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(248,246,255,0.2) 0%,transparent 35%)" }} />
          {/* Floating badge */}
          <div style={{ position:"absolute", bottom:"2rem", left:"2rem", background:"rgba(9,7,26,0.9)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", borderRadius:18, padding:"1.25rem 1.5rem", border:"1px solid rgba(123,116,224,0.22)", boxShadow:"0 12px 40px rgba(0,0,0,0.3)" }}>
            <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"#fff", fontSize:"2rem", lineHeight:1 }}>12+</p>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.42)", fontSize:"0.58rem", letterSpacing:"0.18em", textTransform:"uppercase", marginTop:5 }}>Years of Excellence</p>
          </div>
        </div>
      </div>

      {/* Values / Pillars */}
      <div style={{ background:"#09071a", padding:"clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem)" }}>
        <div className="max-w">
          <span className="section-label" data-reveal style={{ textAlign:"center", marginBottom:"clamp(2rem,4vw,3rem)", display:"block" }}>What Drives Us Every Day</span>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:"1.25rem" }}>
            {pillars.map((p, i) => (
              <div key={p.n} data-reveal data-delay={String(i+1)} className="card" style={{ background:"rgba(45,38,96,0.28)", border:"1px solid rgba(123,116,224,0.12)", borderRadius:20, padding:"clamp(1.5rem,3vw,2.25rem)", position:"relative", overflow:"hidden", cursor:"default" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.45)";el.style.background="rgba(75,68,168,0.22)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.2)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.12)";el.style.background="rgba(45,38,96,0.28)";el.style.boxShadow="none";}}
              >
                <span style={{ position:"absolute", top:12, right:16, fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"3.5rem", color:"rgba(123,116,224,0.08)", lineHeight:1, userSelect:"none" }}>{p.n}</span>
                <div style={{ width:18, height:18, transform:"rotate(45deg)", border:"1px solid rgba(123,116,224,0.4)", background:"rgba(123,116,224,0.1)", marginBottom:"1.5rem" }} />
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.2rem", marginBottom:"0.65rem" }}>{p.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.36)", fontSize:"0.85rem", lineHeight:1.8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}