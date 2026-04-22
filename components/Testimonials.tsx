"use client";

// ✅ REPLACES "Whatever It Takes" section — feedback said it was vague/disconnected
// ✅ Uses approved quote from copy brief + client names
const testimonials = [
  {
    quote: "VON STYLUS didn't just give us a strategy; they gave us a direction. Our project results exceeded every target we set.",
    name: "Stephen Agwu",
    title: "Skills Advisor, GIZ",
    initials: "SA",
    color: "#6C63C7",
  },
  {
    quote: "Working with VON STYLUS was seamless from start to finish. Their ability to bridge strategy with creative execution is genuinely rare.",
    name: "Brand Partner",
    title: "Financial Services Sector",
    initials: "BP",
    color: "#7B74E0",
  },
  {
    quote: "The event they produced for us was flawless. Every detail was intentional. Every guest left talking about it. That's the VON STYLUS difference.",
    name: "Senior Director",
    title: "Corporate Enterprise",
    initials: "SD",
    color: "#9B94F0",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background:"linear-gradient(135deg,#09071a,#1a1740)", padding:"clamp(5rem,10vw,8rem) 0", position:"relative", overflow:"hidden" }}>
      {/* Ambient glow */}
      <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"60vw", height:"60vw", borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,199,0.1),transparent 65%)", pointerEvents:"none" }} />

      <div className="max-w" style={{ padding:"0 clamp(1.25rem,5vw,4rem)", position:"relative", zIndex:2 }}>
        <span className="section-label" data-reveal style={{ textAlign:"center", marginBottom:"1rem", display:"block" }}>What Clients Say</span>
        <h2 data-reveal style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4rem)", color:"#fff", lineHeight:1.05, textAlign:"center", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          Results That <em style={{ fontStyle:"italic", color:"#a89ff5" }}>Speak For Themselves.</em>
        </h2>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
          {testimonials.map((t, i) => (
            <div key={i} data-reveal data-delay={String(i+1)} style={{ background:"rgba(45,38,96,0.35)", border:"1px solid rgba(123,116,224,0.15)", borderRadius:22, padding:"clamp(1.75rem,3vw,2.5rem)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor:"default", position:"relative", overflow:"hidden" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.45)";el.style.transform="translateY(-5px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.22)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.15)";el.style.transform="none";el.style.boxShadow="none";}}
            >
              <div style={{ position:"absolute", top:"-30%", right:"-15%", width:"50%", height:"80%", borderRadius:"50%", background:`radial-gradient(circle,${t.color}18,transparent 65%)`, pointerEvents:"none" }} />
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:"3.5rem", color:`${t.color}30`, lineHeight:1, display:"block", marginBottom:"1rem", userSelect:"none" }}>"</span>
              <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontStyle:"italic", color:"#fff", fontSize:"clamp(1rem,1.8vw,1.2rem)", lineHeight:1.65, marginBottom:"1.75rem", position:"relative", zIndex:1 }}>{t.quote}</p>
              <div style={{ display:"flex", alignItems:"center", gap:12, position:"relative", zIndex:1 }}>
                <div style={{ width:40, height:40, borderRadius:"50%", background:`linear-gradient(135deg,${t.color},#a89ff5)`, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'DM Sans',sans-serif", fontWeight:700, color:"#fff", fontSize:13, flexShrink:0 }}>{t.initials}</div>
                <div>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, color:"#fff", fontSize:"0.85rem" }}>{t.name}</p>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.38)", fontSize:"0.72rem" }}>{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}