"use client";

// ✅ APPROVED COPY from brief
const reasons = [
  { n:"01", title:"End-to-End Capability",   desc:"From whiteboard strategy to live event, we handle the full journey. You don't need five agencies — you need one that does it all." },
  { n:"02", title:"Industry Versatility",    desc:"Public sector, private enterprise, civil society — we've delivered exceptional results across them all." },
  { n:"03", title:"Commitment to Outcomes",  desc:"We advise, and we stay until the results speak for themselves. Not outputs — outcomes." },
  { n:"04", title:"Precision Thinking",      desc:"Every strategy, plan, and recommendation is grounded in data, logic, and lived expertise." },
  { n:"05", title:"Creative Edge",           desc:"Strategy without creativity is just a spreadsheet. We bring bold ideas that cut through noise and convert." },
  { n:"06", title:"Zero Compromise",         desc:"Mediocrity is not in our vocabulary. If it doesn't move the needle, we simply don't do it." },
];

export default function WhyUs() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior:"smooth" }); 
  };

  return (
    <section id="why-us" style={{ position:"relative", overflow:"hidden" }}>
      
      {/* ✅ BG IMAGE WITH REFINED OVERLAY */}
      <div style={{ position:"absolute", inset:0 }}>
        <img
          src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Black professionals in a strategy meeting"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%" }}
        />
        {/* Subtle glass effect overlay */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(248,246,255,0.98) 0%, rgba(240,237,255,0.94) 100%)" }} />
      </div>

      <div className="max-w" style={{ position:"relative", zIndex:2, margin:"0 auto", padding:"clamp(6rem,12vw,10rem) clamp(1.25rem,5vw,4rem)" }}>
        
        <span className="section-label-dark" data-reveal style={{ marginBottom:"1.25rem", color: "#6C63C7", letterSpacing: "0.3em" }}>Why VON STYLUS</span>
        
        {/* ✅ TWO-LINE HEADLINE EXECUTION */}
        <div data-reveal style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"2rem", marginBottom:"clamp(4rem,7vw,6rem)" }}>
          <h2 style={{ 
            fontFamily:"'Playfair Display', serif", 
            fontWeight: 700, 
            fontSize:"clamp(2.5rem, 4.8vw, 4.2rem)", 
            color:"#09071a", 
            lineHeight:1.15,
            letterSpacing: "-0.02em"
          }}>
            Precision Thinking. <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7", fontWeight: 400 }}>Creative Edge.</em>
            <br className="hide-mob" /> Zero Compromise.
          </h2>
          
          <p style={{ 
            fontFamily:"'DM Sans', sans-serif", 
            color:"#5a587a", 
            maxWidth:380, 
            fontSize:"clamp(0.95rem, 1.2vw, 1.1rem)", 
            lineHeight:1.8 
          }}>
            We're not your average consultancy. At VON STYLUS Consult, strategy and creativity live in the same room to drive actual results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))", gap:"1.5rem", marginBottom:"clamp(4rem,8vw,6rem)" }}>
          {reasons.map((r, i) => (
            <div key={r.n} data-reveal data-delay={String((i % 3) + 1)} className="card" 
              style={{ 
                background:"rgba(255,255,255,0.7)", 
                backdropFilter:"blur(20px)", 
                WebkitBackdropFilter:"blur(20px)", 
                borderRadius:24, 
                padding:"2.5rem 2rem", 
                border:"1px solid rgba(108,99,199,0.08)", 
                boxShadow:"0 10px 30px rgba(75,68,168,0.04)", 
                transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)" 
              }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-10px)";el.style.background="rgba(255,255,255,0.95)";el.style.borderColor="rgba(108,99,199,0.25)";el.style.boxShadow="0 30px 60px rgba(75,68,168,0.12)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.background="rgba(255,255,255,0.7)";el.style.borderColor="rgba(108,99,199,0.08)";el.style.boxShadow="0 10px 30px rgba(75,68,168,0.04)";}}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, color: "#6C63C7", fontSize: "0.8rem", letterSpacing: "0.1em", display: "block", marginBottom: "1rem" }}>{r.n}</span>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontWeight: 700, color:"#09071a", fontSize:"1.35rem", marginBottom:"0.75rem" }}>{r.title}</h3>
              <div style={{ width:24, height:2, background:"#7B74E0", marginBottom:"1.25rem" }} />
              <p style={{ fontFamily:"'DM Sans', sans-serif", color:"#5a587a", fontSize:"0.9rem", lineHeight:1.8 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div data-reveal style={{ textAlign:"center" }}>
          <p style={{ 
            fontFamily:"'Playfair Display', serif", 
            fontWeight: 700, 
            fontStyle:"italic", 
            color:"#09071a", 
            fontSize:"clamp(1.2rem, 2.5vw, 1.8rem)", 
            marginBottom:"2rem" 
          }}>
            Ready to Experience the Difference?
          </p>
          <button className="btn-light" onClick={()=>scroll("#contact")} style={{ padding: "16px 36px" }}>Get in Touch →</button>
        </div>
      </div>
    </section>
  );
}