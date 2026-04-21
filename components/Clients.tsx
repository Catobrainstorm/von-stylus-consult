"use client";

const clients = ["GIZ","VETToolbox","Glovo","Lifebank","Coronation Merchant Bank","Greenwich Merchant Bank","VisionSpring","Landing.Jobs","SKYE","Jobberman","Periscope Consulting","LATC","Omniverse","Edo Jobs","PUSH UP"];

const work = [
  { title:"VETtoolbox Workshop", cat:"Event", desc:"International vocational education workshop bringing together trainers across Africa.", img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=75&auto=format" },
  { title:"Virtual Career Fair", cat:"Virtual Event", desc:"A fully virtual career fair connecting thousands of young professionals with top employers.", img:"https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=75&auto=format" },
  { title:"Human Capital Development", cat:"Capacity Training", desc:"Capacity development training raising performance benchmarks across corporate teams.", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75&auto=format" },
  { title:"Office Space Murals", cat:"Wall Murals", desc:"Bold branded murals transforming workspaces into immersive brand environments.", img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=75&auto=format" },
  { title:"Trade Marketing", cat:"Brand Activation", desc:"Trade marketing activations driving consumer engagement at point of experience.", img:"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=75&auto=format" },
  { title:"Branded Collaterals", cat:"Campaigns", desc:"End-to-end branded campaign collaterals for product launches and market entry.", img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=75&auto=format" },
];

export default function Clients() {
  return (
    <section id="clients" style={{ background: "#09071a" }}>
      {/* Work */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>Key Moments in Action</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#fff", lineHeight: 1.05 }}>
              Work That <em style={{ fontStyle: "italic", color: "#a89ff5" }}>Speaks.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.3)", maxWidth: 280, fontSize: "0.875rem", lineHeight: 1.8 }}>A selection of engagements showcasing our range and commitment to impact.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem" }}>
          {work.map((w, i) => (
            <div key={i} data-reveal data-delay={String((i%3)+1)} style={{ borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 340, cursor: "default", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow="0 28px 80px rgba(75,68,168,0.28)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
            >
              <img src={w.img} alt={w.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(9,7,26,0.15) 0%,rgba(9,7,26,0.92) 65%,rgba(9,7,26,0.99) 100%)" }} />
              <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "1.5rem" }}>
                <span className="expertise-tag" style={{ marginBottom: "0.75rem", display: "inline-block", width: "fit-content" }}>{w.cat}</span>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: "1.15rem", marginBottom: "0.5rem" }}>{w.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.75 }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clients — light */}
      <div style={{ background: "#f8f6ff", padding: "clamp(4rem,8vw,6rem) 0" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem) clamp(2rem,4vw,3rem)" }}>
          <span className="section-label" data-reveal style={{ color: "#6C63C7", marginBottom: "0.75rem" }}>Trusted By</span>
          <h2 data-reveal style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(1.8rem,4.5vw,3.5rem)", color: "#09071a", lineHeight: 1.1 }}>
            Brands We've <em className="g-text-purple" style={{ fontStyle: "italic" }}>Worked With.</em>
          </h2>
        </div>

        <div style={{ position: "relative", overflow: "hidden", padding: "1.25rem 0" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to right,#f8f6ff,transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(to left,#f8f6ff,transparent)", zIndex: 10, pointerEvents: "none" }} />
          <div className="marquee-track">
            {[...clients,...clients].map((c,i) => (
              <div key={i} style={{ flexShrink: 0, padding: "12px 28px", borderRadius: 12, background: "#fff", border: "1px solid rgba(75,68,168,0.1)", boxShadow: "0 2px 12px rgba(75,68,168,0.06)", transition: "all 0.35s", cursor: "default", minWidth: 140 }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(108,99,199,0.35)";el.style.boxShadow="0 6px 24px rgba(75,68,168,0.14)";el.style.transform="translateY(-2px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(75,68,168,0.1)";el.style.boxShadow="0 2px 12px rgba(75,68,168,0.06)";el.style.transform="none";}}
              >
                <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, fontSize: "0.875rem", color: "#4B44A8", whiteSpace: "nowrap" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "clamp(3rem,6vw,5rem)" }}>
          <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: 140, height: 140, borderRadius: "50%", background: "linear-gradient(135deg,#09071a,#2D2660)", boxShadow: "0 12px 50px rgba(75,68,168,0.28)", transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.07) rotate(-4deg)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 60px rgba(75,68,168,0.42)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="0 12px 50px rgba(75,68,168,0.28)";}}
          >
            <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, color: "#fff", fontSize: "0.9rem", lineHeight: 1.45, textAlign: "center", textTransform: "uppercase", letterSpacing: "0.04em" }}>Whatever<br />It<br />Takes</p>
          </div>
        </div>
      </div>
    </section>
  );
}