"use client";

// ✅ APPROVED COPY from brief + ✅ BLACK PROFESSIONAL IMAGES from Pexels
const services = [
  {
    n:"01", color:"#4B44A8",
    img:"https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Business & Management Consulting",
    headline:"Strategy That Holds Up Under Pressure.",
    desc:"Great strategy isn't about having all the answers — it's about asking better questions. We work alongside your leadership team to diagnose challenges, define direction, and design plans that are bold enough to inspire and grounded enough to execute.",
    bullets:["Strategic Planning & Corporate Roadmapping","Organisational Design & Restructuring","Growth Advisory & Market Entry Strategy","Business Transformation & Change Management"],
    tags:["Strategy","Growth","Transformation","Org Design"],
  },
  {
    n:"02", color:"#6C63C7",
    img:"https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Creative Media",
    headline:"Content That Connects. Stories That Convert.",
    desc:"In a world drowning in content, the only thing that matters is relevance. We create media that earns attention — from brand films and social content to editorial campaigns and digital storytelling that actually moves your audience.",
    bullets:["Brand Film & Video Production","Social Media Content Strategy & Creation","Photography & Visual Identity Campaigns","Editorial Strategy & Content Calendars"],
    tags:["Content Strategy","Visual Storytelling","Brand Media"],
  },
  {
    n:"03", color:"#7B74E0",
    img:"https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Advertising",
    headline:"Campaigns That Cut Through the Noise.",
    desc:"Every naira, pound, or dollar you spend on advertising should be working hard. We plan, create, and execute advertising campaigns rooted in insight, built for your audience, and tracked to the metrics that actually matter.",
    bullets:["Integrated Campaign Strategy (Digital + Traditional)","Media Planning & Buying","Social Media Advertising (Meta, Google, TikTok, LinkedIn)","Performance Marketing & ROI Tracking"],
    tags:["Digital Campaigns","Traditional Media","Performance"],
  },
  {
    n:"04", color:"#9B94F0",
    img:"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
    title:"Events",
    headline:"From Concept to Curtain Call.",
    desc:"Events are not logistics — they are experiences. We design and deliver events that communicate your brand, engage your audience, and create the kind of moments people talk about long after they leave the room.",
    bullets:["Corporate Conferences & Summits","Product Launches & Brand Activations","Award Ceremonies & Galas","Hybrid & Virtual Event Production"],
    tags:["Corporate Events","Brand Activations","Experiences"],
  },
];

export default function Services() {
  const scroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior:"smooth" }); };

  return (
    <section id="services" style={{ background:"#09071a", padding:"clamp(5rem,10vw,8rem) 0" }}>
      <div className="max-w" style={{ padding:"0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label" style={{ marginBottom:"1rem" }}>What We Do</span>
          {/* ✅ APPROVED hook from services page */}
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#fff", lineHeight:1.05, marginBottom:"1rem" }}>
            Four Disciplines. <em style={{ fontStyle:"italic", color:"#a89ff5" }}>One Focused Team.</em>
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.38)", maxWidth:580, fontSize:"clamp(0.9rem,1.2vw,1rem)", lineHeight:1.8 }}>We don't believe in doing everything for everyone. We believe in doing four things exceptionally well — and bringing them together in ways that create results no single-discipline firm could deliver.</p>
        </div>

        {/* Cards */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))", gap:"1.25rem" }}>
          {services.map((s, i) => (
            <div key={s.n} data-reveal data-delay={String(i+1)} style={{ borderRadius:22, overflow:"hidden", position:"relative", minHeight:480, cursor:"default", transition:"transform 0.45s cubic-bezier(0.16,1,0.3,1),box-shadow 0.45s", display:"flex", flexDirection:"column" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-8px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow=`0 32px 90px ${s.color}35`;}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={s.img} alt={s.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position:"absolute", inset:0, background:`linear-gradient(165deg,${s.color}55 0%,rgba(9,7,26,0.88) 50%,rgba(9,7,26,0.99) 100%)` }} />
              <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"clamp(1.5rem,3vw,2.25rem)" }}>
                <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,4vw,3.5rem)", color:`${s.color}35`, lineHeight:1, display:"block", marginBottom:"0.75rem" }}>{s.n}</span>
                <div style={{ width:30, height:1.5, background:s.color, marginBottom:"0.85rem" }} />
                {/* ✅ Approved headline */}
                <p style={{ fontFamily:"'DM Sans',sans-serif", fontSize:"0.65rem", fontWeight:600, letterSpacing:"0.12em", color:s.color, textTransform:"uppercase", marginBottom:"0.5rem" }}>{s.headline}</p>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"clamp(1.1rem,2vw,1.35rem)", lineHeight:1.3, marginBottom:"0.75rem" }}>{s.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.82rem", lineHeight:1.8, marginBottom:"1rem" }}>{s.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"0.35rem", marginBottom:"1.25rem" }}>
                  {s.tags.map(t=><span key={t} className="tag">{t}</span>)}
                </div>
                {/* ✅ CTA per service — feedback requested */}
                <button onClick={()=>scroll("#contact")} style={{ alignSelf:"flex-start", padding:"10px 22px", borderRadius:100, background:"rgba(255,255,255,0.1)", border:`1px solid ${s.color}60`, color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:12, fontWeight:600, cursor:"pointer", transition:"all 0.3s", backdropFilter:"blur(8px)" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background=`${s.color}40`;(e.currentTarget as HTMLElement).style.borderColor=s.color;}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(255,255,255,0.1)";(e.currentTarget as HTMLElement).style.borderColor=`${s.color}60`;}}
                >Book a Discovery Call →</button>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Section CTA — feedback requested */}
        <div className="cta-band" data-reveal style={{ borderRadius:24, marginTop:"clamp(3rem,6vw,5rem)", background:"linear-gradient(135deg,rgba(26,21,53,0.9),rgba(45,38,96,0.7))", border:"1px solid rgba(123,116,224,0.2)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"clamp(1.4rem,3vw,2.2rem)", color:"#fff", marginBottom:"0.75rem" }}>Not Sure Where to Start?</h3>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.95rem", lineHeight:1.8, maxWidth:480, margin:"0 auto 1.75rem" }}>Tell us your challenge. We'll tell you exactly how we'd approach it.</p>
          <button className="btn-primary" onClick={()=>scroll("#contact")}>Book a Free Discovery Call →</button>
        </div>
      </div>
    </section>
  );
}