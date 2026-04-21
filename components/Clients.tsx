"use client";
import React from "react";

const clients = [
  "GIZ", "VETToolbox", "Glovo", "Lifebank", "Coronation Merchant Bank", 
  "Greenwich Merchant Bank", "VisionSpring", "Landing.Jobs", "SKYE", 
  "Jobberman", "Periscope Consulting", "LATC", "Omniverse", "Edo Jobs", "PUSH UP"
];

const work = [
  { title: "VETtoolbox Workshop", cat: "Event", desc: "International vocational education workshop bringing together trainers across Africa.", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=75&auto=format" },
  { title: "Virtual Career Fair", cat: "Virtual Event", desc: "A fully virtual career fair connecting thousands of young professionals with top employers.", img: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=700&q=75&auto=format" },
  { title: "Human Capital Development", cat: "Capacity Training", desc: "Capacity development training raising performance benchmarks across corporate teams.", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=75&auto=format" },
  { title: "Office Space Murals", cat: "Wall Murals", desc: "Bold branded murals transforming workspaces into immersive brand environments.", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=75&auto=format" },
  { title: "Trade Marketing", cat: "Brand Activation", desc: "Trade marketing activations driving consumer engagement at point of experience.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=75&auto=format" },
  { title: "Branded Collaterals", cat: "Campaigns", desc: "End-to-end branded campaign collaterals for product launches and market entry.", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=700&q=75&auto=format" },
];

export default function Clients() {
  return (
    <section id="clients" style={{ background: "#09071a", paddingBottom: "100px" }}>
      
      {/* --- WORK SECTION --- */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <div>
            <span className="section-label" style={{ marginBottom: "1rem" }}>Key Moments in Action</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#fff", lineHeight: 1.05 }}>
              Work That <em style={{ fontStyle: "italic", color: "#a89ff5" }}>Speaks.</em>
            </h2>
          </div>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: "rgba(255,255,255,0.3)", maxWidth: 280, fontSize: "0.875rem", lineHeight: 1.8 }}>
            A selection of engagements showcasing our range and commitment to impact.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.25rem" }}>
          {work.map((w, i) => (
            <div key={i} data-reveal data-delay={String((i % 3) + 1)} style={{ borderRadius: 20, overflow: "hidden", position: "relative", minHeight: 340, cursor: "default", transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px) scale(1.01)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 28px 80px rgba(75,68,168,0.28)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              {/* FIX: Check if image exists before rendering to avoid empty src error */}
              {w.img && (
                <img src={w.img} alt={w.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s cubic-bezier(0.16,1,0.3,1)" }} />
              )}
              
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

      {/* --- SLEEK BRANDS CAROUSEL --- */}
      <div style={{ marginTop: "40px" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.7rem", letterSpacing: "4px", textTransform: "uppercase" }}>Trusted Global Partners</span>
        </div>

        <div className="marquee-container">
          <div className="marquee-track">
            {[...clients, ...clients].map((c, i) => (
              <div key={i} className="client-pill">
                {c}
              </div>
            ))}
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "100px" }}>
          <div className="cta-blob">
            <p>Whatever<br />It<br />Takes</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 30px;
          animation: scroll 40s linear infinite;
        }
        .client-pill {
          flex-shrink: 0;
          padding: 18px 45px;
          border-radius: 100px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.4s ease;
          cursor: default;
        }
        .client-pill:hover {
          background: rgba(168, 159, 245, 0.15);
          border-color: #a89ff5;
          transform: translateY(-3px);
        }
        .cta-blob {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 160px;
          height: 160px;
          border-radius: 50%;
          border: 1px solid rgba(168, 159, 245, 0.3);
          background: transparent;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          margin: 0 auto;
        }
        .cta-blob p {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          color: #fff;
          font-size: 0.85rem;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0;
        }
        .cta-blob:hover {
          background: #a89ff5;
          transform: scale(1.1) rotate(10deg);
        }
        .cta-blob:hover p {
          color: #09071a;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}