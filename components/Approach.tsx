"use client";

const steps = [
  { n:"1", title:"Discover", desc:"Deep-dive diagnosis of your business: challenges, goals, and market position. We listen before we lead." },
  { n:"2", title:"Design",   desc:"We craft a bold, precision-engineered strategy tailored to your specific context — no templates, no guesswork." },
  { n:"3", title:"Deploy",   desc:"Hands-on implementation support. We stay involved through execution — not just in the planning room." },
  { n:"4", title:"Deliver",  desc:"Measurable results, clear reporting, and continuous optimisation until the needle definitively moves." },
];

export default function Approach() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior:"smooth" }); 
  };

  return (
    <section id="approach" style={{ background:"#09071a" }}>

      {/* ✅ HEADER WITH BACKGROUND IMAGE */}
      <div className="img-wrap" style={{ position:"relative", height:"clamp(300px,45vh,500px)", overflow:"hidden", display: "flex", alignItems: "flex-end" }}>
        <img
          src="/images/image6.PNG" 
          alt="Black team holding hands in unity"
          style={{ position: "absolute", inset: 0, width:"100%", height:"100%", objectFit:"cover", objectPosition:"center" }}
        />
        {/* Dark Overlays for depth and text legibility */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(9,7,26,0.2), rgba(9,7,26,0.95))" }} />
        
        {/* ✅ ALIGNED HEADER CONTENT */}
        <div className="max-w" style={{ position: "relative", zIndex: 10, width: "100%", margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem) 3rem" }}>
          <span className="section-label" style={{ marginBottom:"1rem", color: "#a89ff5", letterSpacing: "3px" }}>How We Work</span>
          <h2 style={{ 
            fontFamily:"'Young Serif', serif", 
            fontWeight: 400, 
            fontSize:"clamp(2.5rem,6vw,5.5rem)", 
            color:"#fff", 
            lineHeight:1.05 
          }}>
            Our <em style={{ fontStyle:"italic", color:"#a89ff5" }}>Approach.</em>
          </h2>
        </div>
      </div>

      <div className="max-w" style={{ margin: "0 auto", padding:"clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1.1fr 0.9fr", gap:"clamp(3rem,6vw,6rem)", alignItems:"start" }} className="col-1">

          {/* Steps List */}
          <div>
            {steps.map((s, i) => (
              <div key={s.n} data-reveal data-delay={String(i+1)} style={{ display:"flex", gap:"1.5rem", paddingBottom:"3rem", position:"relative" }}>
                {/* Vertical Line Connector */}
                {i < steps.length-1 && (
                  <div style={{ position:"absolute", left:22, top:55, bottom:0, width:1, background:"linear-gradient(to bottom, rgba(123,116,224,0.4), transparent)" }} />
                )}
                
                {/* Step Number in Young Serif */}
                <div style={{ 
                  width:48, height:48, borderRadius:"50%", flexShrink:0, 
                  background:"linear-gradient(135deg,#6C63C7,#4B44A8)", 
                  display:"flex", alignItems:"center", justifyContent:"center", 
                  fontFamily:"'Young Serif', serif", color:"#fff", fontSize:18, 
                  boxShadow:"0 8px 25px rgba(108,99,199,0.3)" 
                }}>
                  {s.n}
                </div>

                <div style={{ paddingTop:8 }}>
                  <h3 style={{ fontFamily:"'Young Serif', serif", fontWeight: 400, color:"#fff", fontSize:"1.5rem", marginBottom:"0.75rem" }}>{s.title}</h3>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"0.95rem", lineHeight:1.85 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Side Quote Card */}
          <div data-reveal="right" style={{ 
            background:"rgba(255,255,255,0.02)", 
            border:"1px solid rgba(255,255,255,0.08)", 
            borderRadius:32, 
            padding:"clamp(2rem,4vw,3.5rem)", 
            position:"relative", 
            overflow:"hidden",
            marginTop: "1rem"
          }}>
            <div style={{ position:"absolute", bottom:"-20%", right:"-15%", width:"60%", height:"60%", borderRadius:"50%", background:"radial-gradient(circle,rgba(168,159,245,0.15),transparent 70%)", pointerEvents:"none" }} />
            
            <span style={{ 
              fontFamily:"'Young Serif', serif", fontSize:"6rem", 
              color:"rgba(168,159,245,0.1)", lineHeight:1, 
              display:"block", marginBottom:"-1rem" 
            }}>"</span>
            
            <p style={{ 
              fontFamily:"'Young Serif', serif", 
              fontWeight: 400,
              fontStyle:"italic", 
              color:"#fff", 
              fontSize:"clamp(1.2rem,2.2vw,1.8rem)", 
              lineHeight:1.5, 
              position:"relative", 
              zIndex:1 
            }}>
              We don't just advise — we commit. Every strategy we craft is one we'd stake our reputation on. That's the VON STYLUS standard.
            </p>
            
            <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:"2.5rem", position:"relative", zIndex:1 }}>
              <div style={{ width:40, height:1, background:"#a89ff5" }} />
              <span className="section-label" style={{ fontSize: "0.6rem", color: "#a89ff5" }}>The VON STYLUS Promise</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div data-reveal style={{ textAlign:"center", marginTop:"clamp(4rem,8vw,6rem)" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"1rem", marginBottom:"2rem" }}>Let's Start With Discover.</p>
          <button className="btn-dark" onClick={()=>scroll("#contact")}>Book a Discovery Call →</button>
        </div>
      </div>
    </section>
  );
}