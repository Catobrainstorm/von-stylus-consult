"use client";

const clients = ["GIZ","VETToolbox","Glovo","Lifebank","Coronation Merchant Bank","Greenwich Merchant Bank","VisionSpring","Landing.Jobs","SKYE","Jobberman","Periscope Consulting","LATC","Omniverse","Edo Jobs","PUSH UP"];

// ✅ Array of local logo paths
const logoImages = Array.from({ length: 16 }, (_, i) => `/images/logo${i + 1}.png`);

const work = [
  { 
    title:"VETtoolbox Workshop", 
    cat:"Event", 
    desc:"International vocational education workshop bringing together trainers and stakeholders across Africa.", 
    img:"/images/image10.jpeg" 
  },
  { 
    title:"Virtual Career Fair", 
    cat:"Virtual Event", 
    desc:"A fully virtual career fair connecting thousands of young professionals with top employers.", 
    img:"/images/image11.jpeg" 
  },
  { 
    title:"Human Capital Development", 
    cat:"Capacity Training", 
    desc:"Capacity development training raising performance benchmarks for corporate teams across sectors.", 
    img:"/images/image12.jpeg" 
  },
  { 
    title:"Office Space Murals", 
    cat:"Brand Environment", 
    desc:"Bold branded murals transforming workspaces into immersive, identity-driven brand environments.", 
    img:"/images/image13.jpeg" 
  },
  { 
    title:"Trade Marketing Activation", 
    cat:"Brand Activation", 
    desc:"Creative trade marketing activations driving consumer engagement at point of experience.", 
    img:"/images/image14.jpeg" 
  },
  { 
    title:"Branded Campaign Collaterals", 
    cat:"Campaigns", 
    desc:"End-to-end branded campaign collaterals for product launches and market entry.", 
    img:"/images/image8.jpeg" 
  },
];

export default function Clients() {
  const scroll = (id: string) => { 
    const el = document.querySelector(id); 
    if (el) el.scrollIntoView({ behavior:"smooth" }); 
  };

  return (
    <section id="clients" style={{ background:"#09071a" }}>
      {/* Work Section */}
      <div className="max-w" style={{ margin: "0 auto", padding:"clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <div>
            <span className="section-label" style={{ marginBottom:"1rem", display: "block", color: "#a89ff5", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "2px" }}>Key Moments in Action</span>
            <h2 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#fff", lineHeight:1.05 }}>
              Work That <em style={{ fontStyle:"italic", color:"#a89ff5" }}>Speaks.</em>
            </h2>
          </div>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.3)", maxWidth:280, fontSize:"0.875rem", lineHeight:1.85 }}>A selection of engagements showcasing our range and impact.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap:"1.5rem", marginBottom:"clamp(3rem,5vw,4rem)" }}>
          {work.map((w, i) => (
            <div key={i} data-reveal data-delay={String((i%3)+1)} style={{ borderRadius:24, overflow:"hidden", position:"relative", minHeight:400, cursor:"default", transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-8px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow="0 32px 80px rgba(75,68,168,0.35)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={w.img} alt={w.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(9,7,26,0.1) 0%,rgba(9,7,26,0.85) 60%,#09071a 100%)" }} />
              <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"2rem" }}>
                <span className="tag" style={{ marginBottom:"0.85rem", display:"inline-block", width:"fit-content", background: "rgba(168, 159, 245, 0.15)", color: "#a89ff5", padding: "5px 14px", borderRadius: "100px", fontSize: "0.7rem", border: "1px solid rgba(168, 159, 245, 0.3)", backdropFilter: "blur(4px)" }}>{w.cat}</span>
                <h3 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, color:"#fff", fontSize:"1.4rem", marginBottom:"0.6rem" }}>{w.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.85rem", lineHeight:1.8 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal style={{ textAlign:"center" }}>
          <button className="btn-dark" onClick={()=>scroll("#contact")} style={{ cursor: "pointer" }}>Want Results Like These? →</button>
        </div>
      </div>

      {/* ✅ RESTORED MARQUEE WITH CARDS — Original Colors */}
      <div style={{ background:"#f8f6ff", padding:"clamp(5rem,10vw,8rem) 0", borderTop: "1px solid rgba(108,99,199,0.05)" }}>
        <div className="max-w" style={{ margin: "0 auto", padding:"0 clamp(1.25rem,5vw,4rem) 3.5rem" }}>
          <span className="section-label-dark" data-reveal style={{ marginBottom:"1rem", display: "block", color: "#6C63C7", textTransform: "uppercase", fontSize: "0.8rem", letterSpacing: "2px" }}>Trusted By</span>
          <h2 data-reveal style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, fontSize:"clamp(2rem,4.5vw,4rem)", color:"#09071a", lineHeight:1.1 }}>
            Brands We've <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7" }}>Worked With.</em>
          </h2>
        </div>

        <div style={{ position:"relative", overflow:"hidden", padding:"2rem 0" }}>
          {/* Edge Blurs */}
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:150, background:"linear-gradient(to right,#f8f6ff,transparent)", zIndex:10, pointerEvents:"none" }} />
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:150, background:"linear-gradient(to left,#f8f6ff,transparent)", zIndex:10, pointerEvents:"none" }} />
          
          <div className="marquee-container">
            <div className="marquee-content">
              {[...logoImages, ...logoImages, ...logoImages].map((src, i) => (
                <div key={i} className="client-card">
                  <img 
                    src={src} 
                    alt={`Client Logo ${i + 1}`} 
                    style={{ height: "40px", width: "auto", objectFit: "contain" }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
        }
        .marquee-content {
          display: flex;
          align-items: center;
          gap: 30px;
          animation: scroll 60s linear infinite;
        }
        .client-card {
          flex-shrink: 0;
          padding: 16px 40px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid rgba(75,68,168,0.08);
          box-shadow: 0 4px 15px rgba(75,68,168,0.04);
          transition: all 0.35s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .client-card:hover {
          border-color: rgba(108,99,199,0.3);
          box-shadow: 0 8px 30px rgba(75,68,168,0.12);
          transform: translateY(-4px);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-33.33%)); }
        }
      `}</style>
    </section>
  );
}