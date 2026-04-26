"use client";

// ✅ BLACK PROFESSIONALS — Pexels diversity-focused images
const services = [
  {
    n:"01", color:"#4B44A8",
    img:"https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Business & Management Consulting",
    headline:"Strategy That Holds Up Under Pressure.",
    desc:"Great strategy isn't about having all the answers — it's about asking better questions. We work alongside your leadership team to design plans that are bold enough to inspire.",
    tags:["Strategy","Growth","Transformation"],
  },
  {
    n:"02", color:"#6C63C7",
    img:"https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Creative Media",
    headline:"Content That Connects. Stories That Convert.",
    desc:"In a world drowning in content, relevance is everything. We create media that earns attention — from brand films to editorial campaigns that move your audience.",
    tags:["Content","Visuals","Brand"],
  },
  {
    n:"03", color:"#7B74E0",
    /* ✅ UPDATED IMAGE: Black Professional in Advertising Context */
    img:"https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Advertising",
    headline:"Campaigns That Cut Through the Noise.",
    desc:"Every naira, pound, or dollar spent should be working hard. We plan and execute campaigns rooted in insight and tracked to metrics that matter.",
    tags:["Digital","Performance","ROI"],
  },
  {
    n:"04", color:"#9B94F0",
    img:"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Events",
    headline:"From Concept to Curtain Call.",
    desc:"Events are not logistics — they are experiences. We design and deliver events that communicate your brand and create moments people talk about.",
    tags:["Corporate","Activations","Live"],
  },
];

export default function Services() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior:"smooth" }); 
  };

  return (
    <section id="services" style={{ background:"#09071a", padding:"clamp(6rem,12vw,10rem) 0" }}>
      <div className="max-w" style={{ margin: "0 auto", padding:"0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label" style={{ marginBottom:"1rem", color: "#a89ff5", letterSpacing: "3px" }}>What We Do</span>
          <h2 style={{ 
            fontFamily:"'Young Serif', serif", 
            fontWeight:400, 
            fontSize:"clamp(2.2rem,5vw,4.5rem)", 
            color:"#fff", 
            lineHeight:1.1, 
            marginBottom:"1.5rem" 
          }}>
            Four Disciplines. <em className="g-text-p" style={{ fontStyle:"italic" }}>One Focused Team.</em>
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", maxWidth:600, fontSize:"clamp(0.95rem,1.2vw,1.1rem)", lineHeight:1.8 }}>
            We don't believe in doing everything for everyone. We believe in doing four things exceptionally well and bringing them together to create impact.
          </p>
        </div>

        {/* ✅ GRID: FORCED 4 COLUMNS ON DESKTOP */}
        <div style={{ 
          display:"grid", 
          gridTemplateColumns: "repeat(4, 1fr)", 
          gap:"1.25rem" 
        }} className="services-grid">
          {services.map((s, i) => (
            <div key={s.n} data-reveal data-delay={String(i+1)} style={{ borderRadius:24, overflow:"hidden", position:"relative", minHeight:520, cursor:"default", transition:"transform 0.45s cubic-bezier(0.16,1,0.3,1), box-shadow 0.45s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-10px)"; (e.currentTarget as HTMLElement).style.boxShadow=`0 32px 90px ${s.color}35`;}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none"; (e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={s.img} alt={s.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.7s ease" }} />
              <div style={{ position:"absolute", inset:0, background:`linear-gradient(165deg,${s.color}44 0%,rgba(9,7,26,0.85) 55%,rgba(9,7,26,0.98) 100%)` }} />
              
              <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"1.75rem" }}>
                <span style={{ fontFamily:"'Young Serif', serif", fontSize:"3.5rem", color:`${s.color}25`, lineHeight:1, display:"block", marginBottom:"0.5rem" }}>{s.n}</span>
                <div style={{ width:30, height:2, background:s.color, marginBottom:"1rem" }} />
                
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.15em", color:s.color, textTransform:"uppercase", marginBottom:"0.5rem" }}>{s.headline}</p>
                <h3 style={{ fontFamily:"'Young Serif', serif", fontWeight:400, color:"#fff", fontSize:"1.3rem", lineHeight:1.2, marginBottom:"0.8rem" }}>{s.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.85rem", lineHeight:1.7, marginBottom:"1.25rem" }}>{s.desc}</p>
                
                <button onClick={()=>scroll("#contact")} style={{ alignSelf:"flex-start", padding:"10px 20px", borderRadius:100, background:"rgba(255,255,255,0.05)", border:`1px solid ${s.color}60`, color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:11, fontWeight:600, cursor:"pointer", transition:"0.3s", backdropFilter:"blur(8px)" }}
                  onMouseEnter={e=>{ (e.currentTarget as HTMLElement).style.background=s.color; }}
                  onMouseLeave={e=>{ (e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.05)"; }}
                >Discovery Call →</button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Band */}
        <div data-reveal style={{ marginTop:"clamp(4rem,8vw,6rem)", textAlign: "center", padding: "4rem 2rem", borderRadius: 32, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
          <h3 style={{ fontFamily:"'Young Serif', serif", fontSize:"2rem", color:"#fff", marginBottom:"1rem" }}>Not Sure Where to Start?</h3>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"1rem", marginBottom:"2rem", maxWidth: 500, margin: "0 auto 2rem" }}>Tell us your challenge. We'll design the approach that fits your specific goals.</p>
          <button className="btn-primary" onClick={()=>scroll("#contact")}>Book a Free Discovery Call →</button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 650px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}