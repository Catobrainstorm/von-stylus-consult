"use client";

// ✅ EXACT TEAM ORDER
const team = [
  { n:"01", name:"Kemi Vaughan-Aderibigbe", role:"Founder & Lead Strategist", bio:"A global communications strategist with CIM UK certifications. Delivering strategy, creative media, and advertising across four continents.", expertise:["Global Communications","Marketing Strategy","Business Consulting"], color:"#6C63C7", photo:"/images/kemi.jpeg" },
  { n:"02", name:"Ilawole Oluwatosin", role:"International Development Advisor", bio:"MEL specialist with 12+ years across 56 countries managing budgets up to £3 million for FCDO and GIZ-funded programmes.", expertise:["Programme Strategy","Monitoring & Evaluation","Development"], color:"#4B44A8", photo:"/images/ilawole.jpeg" },
  { n:"03", name:"Funmi Shodipe, Ph.D.", role:"Advisor & Communications Consultant", bio:"Media expert spanning academia and broadcasting. Lecturer at Miva Open University and strategic media management authority.", expertise:["Media & Communications","Nation Branding","AI & Journalism"], color:"#7B74E0", photo:"/images/funmi_shodipe.jpeg" },
  { n:"04", name:"John Vaughan", role:"Cloud Security & Tech Advisor", bio:"Senior IAM Security Engineer at Scopely with 6+ years across Azure, AWS, and GCP. Identity architect based in Portugal.", expertise:["Cloud Security","Identity Architecture","Zero-Trust"], color:"#9B94F0", photo:"/images/johnvaughan.jpeg" },
  { n:"05", name:"Adetokunbo Aderibigbe", role:"Corporate Affairs Advisor", bio:"Specialising in strategic communication planning, stakeholder engagement, and executive messaging for high-level brand positioning.", expertise:["Corporate Affairs","Strategic Comms","Executive Messaging"], color:"#6C63C7", photo:"/images/adetokunbo_aderibigbe.jpeg" },
  { n:"06", name:"Omotola Spence", role:"Growth & Expansion Consultant", bio:"Marketing strategist with 4+ years at Glovo Nigeria, currently leading expansion as City Manager for Priority Cities.", expertise:["Business Expansion","Digital Marketing","Go-to-Market"], color:"#4B44A8", photo:"/images/tola_spence.jpeg" },
  { n:"07", name:"Omobola Gidigbi", role:"Finance & Accounting Consultant", bio:"Accounting professional with 8+ years in financial reporting across corporate institutions and boutique accounting firms.", expertise:["Financial Reporting","Bookkeeping","Auditing"], color:"#7B74E0", photo:"/images/omobola_gidigbi.png" },
  { n:"08", name:"Rachael Ayodeji", role:"Communications Officer", bio:"Digital professional specialising in brand strategy, content development, and audience engagement for the GenZ market.", expertise:["Digital Comms","Brand Strategy","GenZ Marketing"], color:"#9B94F0", photo:"/images/rachel.jpeg" },
  { n:"09", name:"Zika Taiwo", role:"HR Consultant", bio:"Expertise in project management, team strategy, capacity building, and operational reporting for corporate efficiency.", expertise:["HR Strategy","Capacity Building","Project Management"], color:"#6C63C7", photo:"/images/zika_taiwo.png" },
  { n:"10", name:"Oluwatobi A. Ogunjimi", role:"Creative Lead", bio:"Multidisciplinary creative specializing in brand design and UX research. Leads all creative output for intentional visual assets.", expertise:["Brand Design","UI Design","Visual Storytelling"], color:"#4B44A8", photo:"/images/oluwatobi.jpeg" },
];

export default function Team() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior:"smooth" }); 
  };

  return (
    <section id="team" style={{ background:"#f8f6ff", padding:"clamp(6rem,12vw,10rem) 0" }}>
      <div className="max-w" style={{ margin: "0 auto", padding:"0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label-dark" style={{ marginBottom:"1rem", color: "#6C63C7", letterSpacing: "3px" }}>The People Behind the Precision</span>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem" }}>
            <h2 style={{ fontFamily:"'Young Serif', serif", fontWeight: 400, fontSize:"clamp(2.2rem,5vw,4.5rem)", color:"#09071a", lineHeight:1.1 }}>
              Meet the <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7" }}>Team.</em>
            </h2>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#666", maxWidth:380, fontSize:"0.95rem", lineHeight:1.8 }}>
              Our team brings together expertise in management consulting, creative direction, advertising strategy, and international development.
            </p>
          </div>
        </div>

        {/* GRID: 4, 3, 3 Dynamic Structure */}
        <div style={{ 
          display:"grid", 
          gridTemplateColumns: "repeat(12, 1fr)", 
          gap:"1.5rem", 
          marginBottom:"clamp(3rem,6vw,5rem)" 
        }} className="team-grid">
          {team.map((m, i) => {
            const gridSpan = i < 4 ? 3 : 4; 
            
            // ✅ Fix specifically for Rachael Ayodeji (08)
            const photoPosition = m.n === "08" ? "center 20%" : "center top";

            return (
              <div key={m.n} data-reveal data-delay={String((i % 4) + 1)} 
                style={{ 
                  gridColumn: `span ${gridSpan}`,
                  background:"#fff", borderRadius:24, overflow:"hidden", border:"1px solid rgba(75,68,168,0.08)", boxShadow:"0 4px 25px rgba(75,68,168,0.04)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor:"default" 
                }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-8px)";el.style.boxShadow="0 30px 70px rgba(75,68,168,0.12)";el.style.borderColor="rgba(123,116,224,0.3)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 4px 25px rgba(75,68,168,0.04)";el.style.borderColor="rgba(75,68,168,0.08)";}}
              >
                <div className="img-wrap" style={{ height:260, position:"relative", overflow: "hidden" }}>
                  {/* ✅ Using photoPosition to fix Rachael's image */}
                  <img src={m.photo} alt={m.name} style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition: photoPosition }} />
                  {i === 0 && (
                     <div style={{ position:"absolute", top:15, left:15, background:"linear-gradient(135deg,#6C63C7,#4B44A8)", padding:"4px 12px", borderRadius:100, zIndex: 2 }}>
                      <span style={{ fontSize:"0.55rem", fontWeight:700, color:"#fff", letterSpacing:"0.1em", textTransform:"uppercase" }}>Founder</span>
                    </div>
                  )}
                </div>
                
                <div style={{ padding:"1.5rem" }}>
                  <div style={{ marginBottom:"1rem" }}>
                    <h3 style={{ fontFamily:"'Young Serif', serif", color:"#09071a", fontSize:"1.15rem", lineHeight:1.2 }}>{m.name}</h3>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", color:m.color, fontSize:"0.75rem", fontWeight:600, marginTop:4 }}>{m.role}</p>
                  </div>
                  <p className="clamp3" style={{ fontFamily:"'DM Sans',sans-serif", color:"#777", fontSize:"0.8rem", lineHeight:1.7, marginBottom:"1.25rem", minHeight: "4rem" }}>{m.bio}</p>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"0.4rem" }}>
                    {m.expertise.map(e=><span key={e} className="tag" style={{ borderColor:`${m.color}20`, color:m.color, fontSize:"0.6rem", background: `${m.color}08` }}>{e}</span>)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div data-reveal style={{ textAlign:"center" }}>
          <button className="btn-light" onClick={()=>scroll("#contact")}>Work With Our Team →</button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1200px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid > div { grid-column: span 1 !important; }
        }
        @media (max-width: 650px) {
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}