"use client";

const team = [
  { n:"01", name:"Kemi Vaughan-Aderibigbe", role:"Founder, Lead Consultant & Marketing Strategist", bio:"A global communications and marketing strategist with CIM UK certifications. Founder of VON STYLUS Consult, delivering strategy, creative media, advertising, and events across Africa, Europe, North America, and Asia. Client portfolio spans GIZ, VETToolbox, Glovo, Lifebank, Coronation Merchant Bank and more.", expertise:["Global Communications","Marketing Strategy","Business Consulting","Employability Training","Youth Development"], initials:"KV", color:"#6C63C7", photo:"/images/kemi.jpeg", isFounder:true },
  { n:"02", name:"Zika Taiwo", role:"HR Consultant", bio:"A Human Resources professional with expertise in project management, team strategy, capacity building, and operational reporting. Provides the people strategy that makes bold business plans executable.", expertise:["HR Strategy","Capacity Building","Project Management","Operational Reporting"], color:"#4B44A8", photo:"/images/zika_taiwo.png" },
  { n:"03", name:"Oluwatobi A. Ogunjimi", role:"Creative Lead", bio:"A multidisciplinary creative professional specialising in brand design, UI design, and UX research. Leads all creative output ensuring every visual asset is intentional, precise, and aligned with client objectives.", expertise:["Brand Design","UI Design","UX Research","Visual Storytelling"], color:"#7B74E0", photo:"/images/oluwatobi.jpeg" },
  { n:"04", name:"Rachael Ayodeji", role:"Communications Officer", bio:"A digital communications professional specialising in brand strategy, content development, and audience engagement. Builds communications strategies for brands targeting the GenZ market.", expertise:["Digital Communications","Brand Strategy","GenZ Marketing","Content Development"], color:"#9B94F0", photo:"" },
  { n:"05", name:"Adetokunbo Aderibigbe", role:"Corporate Affairs & Communications Advisor", bio:"A corporate affairs professional specialising in strategic communication planning and stakeholder engagement. Works closely with business leadership to develop communications strategies that deliver measurable outcomes.", expertise:["Corporate Affairs","Strategic Communications","Executive Messaging","Brand Positioning"], color:"#6C63C7", photo:"/images/adetokunbo_aderibigbe.jpeg" },
  { n:"06", name:"John Vaughan", role:"Cloud Security & Technology Advisor", bio:"A cloud security engineer and identity architect with 6+ years across Azure, AWS, and GCP. Senior IAM Security Engineer at Scopely. Based in Portugal, working across global markets.", expertise:["Cloud Security","Identity & Access Mgmt","Zero-Trust Architecture","Multi-Cloud"], color:"#4B44A8", photo:"/images/john_vaughan.jpeg" },
  { n:"07", name:"Omobola Gidigbi", role:"Finance & Accounting Consultant", bio:"An accounting professional with 8+ years in financial reporting across corporate institutions and boutique firms. Known for accurate, detailed, and reliable financial results.", expertise:["Financial Reporting","Bookkeeping","Budget Preparation","Auditing"], color:"#7B74E0", photo:"/images/omobola_gidigbi.png" },
  { n:"08", name:"Ilawole Oluwatosin", role:"International Development & Strategy Advisor", bio:"An international development professional with 12+ years across 56 countries. MEL specialist who has delivered FCDO and GIZ-funded programmes, managing budgets up to £3 million.", expertise:["Programme Strategy","Monitoring & Evaluation","International Development","Donor Relations"], color:"#9B94F0", photo:"" },
  { n:"09", name:"Omotola Spence", role:"Growth, Expansion & Digital Marketing Consultant", bio:"A marketing and business expansion strategist with 4+ years at Glovo Nigeria. Currently leads business expansion as City Manager for Priority Cities.", expertise:["Business Expansion","Digital Marketing","Product Marketing","Go-to-Market Strategy"], color:"#6C63C7", photo:"/images/tola_spence.jpeg" },
  { n:"10", name:"Funmi Shodipe, Ph.D.", role:"Advisor & Communications Consultant", bio:"A media and communications expert spanning academia, broadcasting, and strategic media management. Lecturer at Miva Open University and Deputy Director of its Lagos Study Centre. Ph.D. from Redeemer's University.", expertise:["Media & Communications","Nation Branding","Development Communication","AI & Journalism"], color:"#4B44A8", photo:"/images/funmi_shodipe.jpeg" },
];

export default function Team() {
  const founder = team[0];
  return (
    <section id="team" style={{ background: "#f8f6ff", padding: "clamp(5rem,10vw,8rem) 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <span className="section-label" style={{ color: "#6C63C7", marginBottom: "1rem" }}>The People Behind the Work</span>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem" }}>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#09071a", lineHeight: 1.1 }}>
              Meet the <em className="g-text-purple" style={{ fontStyle: "italic" }}>Team.</em>
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", color: "#888", maxWidth: 320, fontSize: "0.875rem", lineHeight: 1.8 }}>A collective of experts united by one standard — precision thinking and measurable impact.</p>
          </div>
        </div>

        {/* Founder — full feature */}
        <div data-reveal style={{ borderRadius: 24, overflow: "hidden", marginBottom: "1.5rem", display: "grid", gridTemplateColumns: "400px 1fr", minHeight: 400, boxShadow: "0 20px 80px rgba(75,68,168,0.2)" }} className="grid-1-mobile">
          <div className="img-wrap" style={{ position: "relative", minHeight: 360 }}>
            <img src={founder.photo} alt={founder.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,transparent 55%,rgba(9,7,26,0.65))" }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, background: "linear-gradient(135deg,#6C63C7,#4B44A8)", backdropFilter: "blur(8px)", padding: "5px 16px", borderRadius: 100 }}>
              <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "0.58rem", fontWeight: 600, color: "#fff", letterSpacing: "0.16em", textTransform: "uppercase" }}>Founder</span>
            </div>
          </div>
          <div style={{ background: "linear-gradient(135deg,#09071a,#1a1740)", padding: "clamp(2rem,4vw,3rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span className="section-label" style={{ marginBottom: "0.5rem" }}>{founder.n}</span>
            <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: "clamp(1.4rem,2.5vw,2rem)", marginBottom: "0.4rem" }}>{founder.name}</h3>
            <p style={{ fontFamily: "'DM Sans',sans-serif", color: "#a89ff5", fontSize: "0.875rem", fontWeight: 500, marginBottom: "1.25rem" }}>{founder.role}</p>
            <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.44)", fontSize: "0.875rem", lineHeight: 1.9, marginBottom: "1.5rem" }}>{founder.bio}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
              {founder.expertise.map(e => <span key={e} className="expertise-tag">{e}</span>)}
            </div>
          </div>
        </div>

        {/* Team grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(270px,1fr))", gap: "1.25rem" }}>
          {team.slice(1).map((m, i) => (
            <div key={m.n} data-reveal data-delay={String((i%3)+1)} style={{ background: "#fff", borderRadius: 20, overflow: "hidden", border: "1px solid rgba(75,68,168,0.1)", boxShadow: "0 2px 20px rgba(75,68,168,0.06)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-6px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.16)";el.style.borderColor="rgba(123,116,224,0.3)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 2px 20px rgba(75,68,168,0.06)";el.style.borderColor="rgba(75,68,168,0.1)";}}
            >
              <div className="img-wrap" style={{ height: 210, position: "relative" }}>
                <img src={(m as any).photo} alt={m.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,transparent 55%,rgba(9,7,26,0.22))" }} />
              </div>
              <div style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                  <div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#09071a", fontSize: "1rem", lineHeight: 1.3 }}>{m.name}</h3>
                    <p style={{ fontFamily: "'DM Sans',sans-serif", color: m.color, fontSize: "0.72rem", fontWeight: 600, marginTop: 3 }}>{m.role}</p>
                  </div>
                  <span className="section-label" style={{ color: `${m.color}80`, flexShrink: 0, marginLeft: 8 }}>{m.n}</span>
                </div>
                <div style={{ width: 26, height: 1.5, background: m.color+"50", marginBottom: "0.75rem" }} />
                <p style={{ fontFamily: "'DM Sans',sans-serif", color: "#888", fontSize: "0.78rem", lineHeight: 1.8, marginBottom: "1rem", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{m.bio}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem" }}>
                  {m.expertise.slice(0,3).map(e => <span key={e} className="expertise-tag" style={{ borderColor:`${m.color}28`, color:m.color, fontSize:"0.57rem" }}>{e}</span>)}
                  {m.expertise.length > 3 && <span className="expertise-tag" style={{ borderColor:`${m.color}28`, color:m.color, fontSize:"0.57rem" }}>+{m.expertise.length-3}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}