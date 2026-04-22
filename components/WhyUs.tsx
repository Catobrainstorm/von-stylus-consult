"use client";

// ✅ APPROVED COPY from brief · ✅ BLACK PROFESSIONAL BG IMAGE · ✅ NO duplicate quote
const reasons = [
  { n:"01", title:"End-to-End Capability",   desc:"From whiteboard strategy to live event, we handle the full journey. You don't need five agencies — you need one that does it all." },
  { n:"02", title:"Industry Versatility",    desc:"Public sector, private enterprise, civil society — we've delivered exceptional results across them all." },
  { n:"03", title:"Commitment to Outcomes",  desc:"We advise, and we stay until the results speak for themselves. Not outputs — outcomes." },
  { n:"04", title:"Precision Thinking",      desc:"Every strategy, plan, and recommendation is grounded in data, logic, and lived expertise." },
  { n:"05", title:"Creative Edge",           desc:"Strategy without creativity is just a spreadsheet. We bring bold ideas that cut through noise and convert." },
  { n:"06", title:"Zero Compromise",         desc:"Mediocrity is not in our vocabulary. If it doesn't move the needle, we simply don't do it." },
];

export default function WhyUs() {
  const scroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior:"smooth" }); };

  return (
    <section id="why-us" style={{ position:"relative", overflow:"hidden" }}>
      {/* ✅ BLACK PROFESSIONAL BACKGROUND — replaces non-Black stock image */}
      <div style={{ position:"absolute", inset:0 }}>
        <img
          src="https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop"
          alt="Black professionals in a strategy meeting"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center 30%" }}
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(248,246,255,0.97) 0%,rgba(237,233,255,0.96) 100%)" }} />
      </div>

      <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        {/* ✅ APPROVED headline from copy brief */}
        <span className="section-label-dark" data-reveal style={{ marginBottom:"1rem" }}>Why VON STYLUS</span>
        <div data-reveal style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#09071a", lineHeight:1.1 }}>
            Precision Thinking.{" "}
            <em className="g-text-p" style={{ fontStyle:"italic" }}>Creative Edge.</em>
            <br />Zero Compromise.
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a789a", maxWidth:320, fontSize:"0.9rem", lineHeight:1.85 }}>
            We're not your average consultancy. At VON STYLUS Consult, strategy and creativity live in the same room.
          </p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem", marginBottom:"clamp(3.5rem,7vw,5.5rem)" }}>
          {reasons.map((r, i) => (
            <div key={r.n} data-reveal data-delay={String((i%3)+1)} style={{ background:"rgba(255,255,255,0.85)", backdropFilter:"blur(16px)", WebkitBackdropFilter:"blur(16px)", borderRadius:20, padding:"clamp(1.5rem,3vw,2.25rem)", border:"1px solid rgba(75,68,168,0.1)", boxShadow:"0 4px 24px rgba(75,68,168,0.07)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor:"default" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-6px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.18)";el.style.borderColor="rgba(123,116,224,0.35)";el.style.background="rgba(255,255,255,0.98)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 4px 24px rgba(75,68,168,0.07)";el.style.borderColor="rgba(75,68,168,0.1)";el.style.background="rgba(255,255,255,0.85)";}}
            >
              <span className="section-label-dark" style={{ marginBottom:"0.75rem" }}>{r.n}</span>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#09071a", fontSize:"1.1rem", marginBottom:"0.6rem" }}>{r.title}</h3>
              <div style={{ width:30, height:1.5, background:"#7B74E0", marginBottom:"0.9rem" }} />
              <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#7a789a", fontSize:"0.85rem", lineHeight:1.85 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* ✅ CTA ADDED — feedback requested */}
        <div data-reveal style={{ textAlign:"center" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontStyle:"italic", color:"#09071a", fontSize:"clamp(1.1rem,2.5vw,1.7rem)", marginBottom:"1.75rem" }}>
            Ready to Experience the Difference?
          </p>
          <button className="btn-light" onClick={()=>scroll("#contact")}>Get in Touch →</button>
        </div>
      </div>
    </section>
  );
}