"use client";

export default function Footer() {
  return (
    <footer style={{ background:"#040210", borderTop:"1px solid rgba(123,116,224,0.08)" }}>
      <div className="max-w" style={{ padding:"clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem) clamp(2rem,4vw,2.5rem)" }}>

        <div id="ft" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"clamp(2rem,4vw,4rem)", paddingBottom:"clamp(2.5rem,5vw,4rem)", borderBottom:"1px solid rgba(123,116,224,0.07)", marginBottom:"clamp(1.5rem,3vw,2rem)" }}>

          {/* Brand */}
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:"1.25rem" }}>
              <div style={{ width:36, height:36, borderRadius:"50%", background:"linear-gradient(135deg,#6C63C7,#9B94F0)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:15, boxShadow:"0 4px 18px rgba(108,99,199,0.4)" }}>S</div>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:18, lineHeight:1 }}>Stylus</div>
                <div style={{ fontSize:"0.44rem", letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(168,159,245,0.4)", fontFamily:"'DM Sans',sans-serif" }}>Consult</div>
              </div>
            </div>
            {/* ✅ APPROVED footer blurb */}
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.25)", fontSize:"0.8rem", lineHeight:1.9, maxWidth:260, marginBottom:"1.25rem" }}>
              VON STYLUS Consult is a full-service business and management consultancy specialising in strategy, creative media, advertising, and events. Based in Lagos, Nigeria — working across Africa and beyond.
            </p>
            {/* ✅ APPROVED tagline */}
            <span className="section-label" style={{ color:"#7B74E0", lineHeight:1.9 }}>Authored With Intention.<br />Delivered With Impact.</span>

            {/* ✅ Social links ACTIVATED */}
            <div style={{ display:"flex", gap:8, marginTop:"1.25rem", flexWrap:"wrap" }}>
              {[
                { l:"Li", href:"https://linkedin.com/company/vonstylus" },
                { l:"Ig", href:"https://instagram.com/vonstylusconsuult" },
                { l:"X",  href:"https://twitter.com/vonstylus" },
                { l:"Fb", href:"https://facebook.com/vonstylusconsuit" },
              ].map(s=>(
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:34, height:34, borderRadius:"50%", border:"1px solid rgba(123,116,224,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.28)", fontSize:"10px", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none", transition:"all 0.35s" }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.6)";el.style.color="#fff";el.style.background="rgba(108,99,199,0.22)";el.style.transform="translateY(-2px)";}}
                  onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.2)";el.style.color="rgba(255,255,255,0.28)";el.style.background="transparent";el.style.transform="none";}}
                >{s.l}</a>
              ))}
            </div>
          </div>

          {/* Company links */}
          <div>
            <span className="section-label" style={{ marginBottom:"1.1rem", display:"block" }}>Company</span>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.7rem", marginTop:"0.4rem" }}>
              {["About Us","Our Team","Insights","Careers"].map(l=><li key={l}><a href="#" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.28)", fontSize:"0.84rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}>{l}</a></li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <span className="section-label" style={{ marginBottom:"1.1rem", display:"block" }}>Services</span>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.7rem", marginTop:"0.4rem" }}>
              {["Consulting","Creative Media","Advertising","Events"].map(l=><li key={l}><a href="#services" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.28)", fontSize:"0.84rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}>{l}</a></li>)}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <span className="section-label" style={{ marginBottom:"1.1rem", display:"block" }}>Connect</span>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"0.7rem", marginTop:"0.4rem" }}>
              {[
                { l:"LinkedIn", href:"https://linkedin.com/company/vonstylus" },
                { l:"Instagram", href:"https://instagram.com/vonstylusconsuult" },
                { l:"Twitter/X", href:"https://twitter.com/vonstylus" },
                { l:"Contact Us", href:"#contact" },
              ].map(item=><li key={item.l}><a href={item.href} target={item.href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.28)", fontSize:"0.84rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}>{item.l}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
          {/* ✅ APPROVED legal from copy brief */}
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.18)", fontSize:"0.72rem" }}>© {new Date().getFullYear()} VON STYLUS Consult Limited. All rights reserved.</p>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.18)", fontSize:"0.72rem" }}>8 Ekololu Street, Surulere, Lagos, Nigeria</p>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {["Privacy Policy","Terms of Use"].map(t=><a key={t} href="#" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.18)", fontSize:"0.72rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.18)")}>{t}</a>)}
          </div>
        </div>

        {/* ✅ VON STYLUS watermark — retained */}
        <div style={{ marginTop:"clamp(2rem,4vw,3rem)", overflow:"hidden", userSelect:"none", pointerEvents:"none" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"rgba(45,38,96,0.2)", fontSize:"clamp(3rem,10vw,9rem)", lineHeight:1, textAlign:"center", whiteSpace:"nowrap" }}>VON STYLUS</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){#ft{grid-template-columns:1fr 1fr!important;}}`}</style>
    </footer>
  );
}