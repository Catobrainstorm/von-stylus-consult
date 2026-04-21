"use client";

const R = [
  { n:"01", title:"Precision Thinking", desc:"Every strategy, plan, and recommendation is grounded in data, logic, and lived expertise. We don't do vague." },
  { n:"02", title:"End-to-End Capability", desc:"From boardroom strategy to billboard campaigns, we deliver across the full spectrum of business growth." },
  { n:"03", title:"Bold Execution", desc:"We commit to outcomes, not just outputs. Our team stays engaged until real results are achieved." },
  { n:"04", title:"Client-First Always", desc:"Every decision is made with your success at the centre. Your goals are our goals — full stop." },
  { n:"05", title:"Creative Edge", desc:"Our consulting is infused with creative thinking. We see opportunities others miss and craft solutions that stand out." },
  { n:"06", title:"Zero Tolerance for Average", desc:"Mediocrity is not in our vocabulary. If it doesn't move the needle, we simply don't do it." },
];

export default function WhyUs() {
  return (
    <section id="why-us" style={{ position: "relative", overflow: "hidden" }}>
      {/* BG image with heavy overlay */}
      <div style={{ position: "absolute", inset: 0 }}>
        <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1600&q=80&auto=format" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(248,246,255,0.97) 0%,rgba(240,237,255,0.96) 100%)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", padding: "clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <span className="section-label" data-reveal style={{ color: "#6C63C7", marginBottom: "1rem" }}>Why Choose Us</span>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "clamp(3rem,6vw,5rem)" }}>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: "clamp(2rem,5vw,4.5rem)", color: "#09071a", lineHeight: 1.1 }}>
            The VON STYLUS{" "}
            <em className="g-text-purple" style={{ fontStyle: "italic" }}>Difference.</em>
          </h2>
          <p style={{ fontFamily: "'DM Sans',sans-serif", color: "#7a789a", maxWidth: 300, fontSize: "0.875rem", lineHeight: 1.8 }}>Six commitments we make to every client, every engagement, every time.</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", marginBottom: "clamp(4rem,8vw,6rem)" }}>
          {R.map((r, i) => (
            <div key={r.n} data-reveal data-delay={String((i%3)+1)} style={{ background: "rgba(255,255,255,0.82)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", borderRadius: 20, padding: "clamp(1.5rem,3vw,2.25rem)", border: "1px solid rgba(75,68,168,0.1)", boxShadow: "0 4px 24px rgba(75,68,168,0.07)", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor: "default" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-6px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.18)";el.style.borderColor="rgba(123,116,224,0.35)";el.style.background="rgba(255,255,255,0.98)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 4px 24px rgba(75,68,168,0.07)";el.style.borderColor="rgba(75,68,168,0.1)";el.style.background="rgba(255,255,255,0.82)";}}
            >
              <span className="section-label" style={{ color: "#6C63C7", marginBottom: "0.75rem" }}>{r.n}</span>
              <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#09071a", fontSize: "1.1rem", marginBottom: "0.6rem" }}>{r.title}</h3>
              <div style={{ width: 30, height: 1.5, background: "#7B74E0", marginBottom: "0.9rem" }} />
              <p style={{ fontFamily: "'DM Sans',sans-serif", color: "#7a789a", fontSize: "0.85rem", lineHeight: 1.8 }}>{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div data-reveal style={{ background: "linear-gradient(135deg,#09071a,#1a1740)", borderRadius: 24, padding: "clamp(3rem,6vw,5rem)", textAlign: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: "-30%", right: "-8%", width: "45%", height: "150%", background: "radial-gradient(circle,rgba(108,99,199,0.18),transparent 65%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: "-30%", left: "-8%", width: "40%", height: "120%", background: "radial-gradient(circle,rgba(75,68,168,0.12),transparent 65%)", pointerEvents: "none" }} />
          <span style={{ fontFamily: "'Playfair Display',serif", fontSize: "5rem", color: "rgba(123,116,224,0.14)", lineHeight: 1, display: "block", marginBottom: "1rem", userSelect: "none" }}>"</span>
          <p style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontStyle: "italic", color: "#fff", fontSize: "clamp(1.3rem,3vw,2.5rem)", lineHeight: 1.45, maxWidth: 700, margin: "0 auto 1rem", position: "relative", zIndex: 1 }}>We don't just advise — we commit. Every strategy we craft is one we'd stake our reputation on.</p>
          <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic", color: "#a89ff5", fontSize: "clamp(1rem,2vw,1.35rem)", position: "relative", zIndex: 1 }}>That's the VON STYLUS standard.</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: "1.5rem", position: "relative", zIndex: 1 }}>
            <div style={{ width: 36, height: 1.5, background: "#7B74E0" }} />
            <span className="section-label">The VON STYLUS Promise</span>
          </div>
        </div>
      </div>
    </section>
  );
}