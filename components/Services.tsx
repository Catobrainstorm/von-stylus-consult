"use client";

const S = [
  { n:"01", title:"Business & Management Consulting", desc:"Strategic planning, organisational design, growth advisory, and business transformation built to deliver real, lasting results.", tags:["Strategy","Growth Advisory","Transformation","Org Design"], color:"#4B44A8", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format" },
  { n:"02", title:"Creative Media", desc:"Content strategy, visual storytelling, branded media production — creative that connects deeply and converts with clarity and precision.", tags:["Content Strategy","Visual Storytelling","Brand Media"], color:"#6C63C7", img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format" },
  { n:"03", title:"Advertising", desc:"Campaigns that cut through the noise. Bold, targeted advertising across digital and traditional channels that consistently perform.", tags:["Digital Campaigns","Traditional Media","Performance"], color:"#7B74E0", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format" },
  { n:"04", title:"Events", desc:"From concept to curtain call — corporate events, brand activations, and immersive experiences that leave a lasting mark.", tags:["Corporate Events","Brand Activations","Experiences"], color:"#9B94F0", img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format" },
];

export default function Services() {
  return (
    <section id="services" style={{ background: "#09071a", padding: "clamp(5rem,10vw,8rem) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#fff", lineHeight: 1.05 }}>
              Our Core <em style={{ fontStyle: "italic", color: "#a89ff5" }}>Services.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.3)", maxWidth: 300, fontSize: "0.875rem", lineHeight: 1.8 }}>Four disciplines. One standard. Precision-engineered impact at every touchpoint.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
          {S.map((s, i) => (
            <div key={s.n} data-reveal data-delay={String(i+1)} style={{ borderRadius: 22, overflow: "hidden", position: "relative", minHeight: 440, cursor: "default", transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1),box-shadow 0.45s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-8px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow=`0 32px 90px ${s.color}35`;}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={s.img} alt={s.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position: "absolute", inset: 0, background: `linear-gradient(165deg,${s.color}55 0%,rgba(9,7,26,0.88) 50%,rgba(9,7,26,0.99) 100%)` }} />
              <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(1.5rem,3vw,2.25rem)" }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,4vw,3.5rem)", color: `${s.color}35`, lineHeight: 1, display: "block", marginBottom: "0.75rem" }}>{s.n}</span>
                <div style={{ width: 30, height: 1.5, background: s.color, marginBottom: "1rem", transition: "width 0.4s" }} />
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: "clamp(1.1rem,2vw,1.4rem)", lineHeight: 1.3, marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.48)", fontSize: "0.82rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                  {s.tags.map(t => <span key={t} className="expertise-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}