"use client";

const clients = ["GIZ","VETToolbox","Glovo","Lifebank","Coronation Merchant Bank","Greenwich Merchant Bank","VisionSpring","Landing.Jobs","SKYE","Jobberman","Periscope Consulting","LATC","Omniverse","Edo Jobs","PUSH UP"];

// ✅ Work section uses Black professionals in professional settings
const work = [
  { title:"VETtoolbox Workshop", cat:"Event", desc:"International vocational education workshop bringing together trainers and stakeholders across Africa.", img:"https://images.pexels.com/photos/8761541/pexels-photo-8761541.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
  { title:"Virtual Career Fair", cat:"Virtual Event", desc:"A fully virtual career fair connecting thousands of young professionals with top employers.", img:"https://images.pexels.com/photos/7688460/pexels-photo-7688460.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
  { title:"Human Capital Development", cat:"Capacity Training", desc:"Capacity development training raising performance benchmarks for corporate teams across sectors.", img:"https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
  { title:"Office Space Murals", cat:"Brand Environment", desc:"Bold branded murals transforming workspaces into immersive, identity-driven brand environments.", img:"https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
  { title:"Trade Marketing Activation", cat:"Brand Activation", desc:"Creative trade marketing activations driving consumer engagement and brand recall at point of experience.", img:"https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
  { title:"Branded Campaign Collaterals", cat:"Campaigns", desc:"End-to-end branded campaign collaterals for product launches, market entry, and brand activations.", img:"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop" },
];

export default function Clients() {
  const scroll = (id: string) => { const el = document.querySelector(id); if (el) el.scrollIntoView({ behavior:"smooth" }); };

  return (
    <section id="clients" style={{ background:"#09071a" }}>

      {/* Work */}
      <div className="max-w" style={{ padding:"clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <div>
            <span className="section-label" style={{ marginBottom:"1rem" }}>Key Moments in Action</span>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#fff", lineHeight:1.05 }}>
              Work That <em style={{ fontStyle:"italic", color:"#a89ff5" }}>Speaks.</em>
            </h2>
          </div>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.3)", maxWidth:280, fontSize:"0.875rem", lineHeight:1.85 }}>A selection of engagements showcasing our range and impact.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem", marginBottom:"clamp(3rem,5vw,4rem)" }}>
          {work.map((w, i) => (
            <div key={i} data-reveal data-delay={String((i%3)+1)} style={{ borderRadius:20, overflow:"hidden", position:"relative", minHeight:340, cursor:"default", transition:"transform 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow="0 28px 80px rgba(75,68,168,0.28)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={w.img} alt={w.title} style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(9,7,26,0.15) 0%,rgba(9,7,26,0.92) 65%,rgba(9,7,26,0.99) 100%)" }} />
              <div style={{ position:"relative", zIndex:2, height:"100%", display:"flex", flexDirection:"column", justifyContent:"flex-end", padding:"1.5rem" }}>
                <span className="tag" style={{ marginBottom:"0.75rem", display:"inline-block", width:"fit-content" }}>{w.cat}</span>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.15rem", marginBottom:"0.5rem" }}>{w.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.8rem", lineHeight:1.8 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ CTA for work section */}
        <div data-reveal style={{ textAlign:"center" }}>
          <button className="btn-dark" onClick={()=>scroll("#contact")}>Want Results Like These? →</button>
        </div>
      </div>

      {/* Clients marquee — light */}
      <div style={{ background:"#f8f6ff", padding:"clamp(4rem,8vw,6rem) 0" }}>
        <div className="max-w" style={{ padding:"0 clamp(1.25rem,5vw,4rem) clamp(2rem,4vw,3rem)" }}>
          <span className="section-label-dark" data-reveal style={{ marginBottom:"0.75rem" }}>Trusted By</span>
          <h2 data-reveal style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(1.8rem,4.5vw,3.5rem)", color:"#09071a", lineHeight:1.1 }}>
            Brands We've <em className="g-text-p" style={{ fontStyle:"italic" }}>Worked With.</em>
          </h2>
        </div>

        <div style={{ position:"relative", overflow:"hidden", padding:"1.25rem 0" }}>
          <div style={{ position:"absolute", left:0, top:0, bottom:0, width:80, background:"linear-gradient(to right,#f8f6ff,transparent)", zIndex:10, pointerEvents:"none" }} />
          <div style={{ position:"absolute", right:0, top:0, bottom:0, width:80, background:"linear-gradient(to left,#f8f6ff,transparent)", zIndex:10, pointerEvents:"none" }} />
          <div className="marquee-track">
            {[...clients,...clients].map((c,i)=>(
              <div key={i} style={{ flexShrink:0, padding:"12px 28px", borderRadius:12, background:"#fff", border:"1px solid rgba(75,68,168,0.1)", boxShadow:"0 2px 12px rgba(75,68,168,0.06)", transition:"all 0.35s", cursor:"default", minWidth:140 }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(108,99,199,0.35)";el.style.boxShadow="0 6px 24px rgba(75,68,168,0.14)";el.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(75,68,168,0.1)";el.style.boxShadow="0 2px 12px rgba(75,68,168,0.06)";el.style.transform="none";}}
              >
                <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:600, fontSize:"0.875rem", color:"#4B44A8", whiteSpace:"nowrap" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}