"use client";

export default function Footer() {
  return (
    <footer style={{ background:"#040210", borderTop:"1px solid rgba(123,116,224,0.08)" }}>
      <div className="max-w" style={{ padding:"clamp(4rem,8vw,6rem) clamp(1.25rem,5vw,4rem) clamp(2rem,4vw,2.5rem)" }}>

        <div id="ft" style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:"clamp(2rem,4vw,4rem)", paddingBottom:"clamp(2.5rem,5vw,4rem)", borderBottom:"1px solid rgba(123,116,224,0.07)", marginBottom:"clamp(1.5rem,3vw,2rem)" }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom:"1.25rem" }}>
              {/* ✅ Logo Image Replacement */}
              <img 
                src="/images/logo-w.png" 
                alt="Von Stylus Logo" 
                style={{ height: "40px", width: "auto" }} 
              />
            </div>
            
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.25)", fontSize:"0.8rem", lineHeight:1.9, maxWidth:260, marginBottom:"1.25rem" }}>
              VON STYLUS Consult is a full-service business and management consultancy specialising in strategy, creative media, advertising, and events. Based in Lagos, Nigeria — working across Africa and beyond.
            </p>

            <span className="section-label" style={{ color:"#7B74E0", lineHeight:1.9 }}>Authored With Intention.<br />Delivered With Impact.</span>

            {/* ✅ Updated Social links with official URLs */}
            <div style={{ display:"flex", gap:10, marginTop:"1.5rem", flexWrap:"wrap" }}>
              {[
                { l:"Li", href:"https://www.linkedin.com/company/stylus-consult/" },
                { l:"Ig", href:"https://www.instagram.com/stylus_consult?igsh=MW5nZ2dsb290bGppZQ==" },
                { l:"Tk", href:"https://www.tiktok.com/@stylus.consult?_r=1&_t=ZS-95vGuNy66wj" },
                { l:"Wa", href:"https://wa.link/kubv1g" },
              ].map(s=>(
                <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" style={{ width:36, height:36, borderRadius:"50%", border:"1px solid rgba(123,116,224,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"rgba(255,255,255,0.28)", fontSize:"11px", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textDecoration:"none", transition:"all 0.35s" }}
                  onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.borderColor="rgba(123,116,224,0.6)";el.style.color="#fff";el.style.background="rgba(108,99,199,0.22)";el.style.transform="translateY(-3px)";}}
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
                { l:"LinkedIn", href:"https://www.linkedin.com/company/stylus-consult/" },
                { l:"Instagram", href:"https://www.instagram.com/stylus_consult?igsh=MW5nZ2dsb290bGppZQ==" },
                { l:"WhatsApp", href:"https://wa.link/kubv1g" },
                { l:"+234 916 214 7820", href:"tel:+2349162147820" },
              ].map(item=><li key={item.l}><a href={item.href} target={item.href.startsWith("http")?"_blank":"_self"} rel="noopener noreferrer" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.28)", fontSize:"0.84rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.28)")}>{item.l}</a></li>)}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:"1rem" }}>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.18)", fontSize:"0.72rem" }}>© {new Date().getFullYear()} VON STYLUS Consult Limited. All rights reserved.</p>
          <div style={{ display:"flex", gap:"1.5rem" }}>
            {["Privacy Policy","Terms of Use"].map(t=><a key={t} href="#" style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.18)", fontSize:"0.72rem", textDecoration:"none", transition:"color 0.25s" }} onMouseEnter={e=>(e.currentTarget.style.color="#fff")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.18)")}>{t}</a>)}
          </div>
        </div>

        {/* Watermark */}
        <div style={{ marginTop:"clamp(2rem,4vw,3rem)", overflow:"hidden", userSelect:"none", pointerEvents:"none" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"rgba(45,38,96,0.2)", fontSize:"clamp(3rem,10vw,9rem)", lineHeight:1, textAlign:"center", whiteSpace:"nowrap" }}>VON STYLUS</p>
        </div>
      </div>
      <style>{`@media(max-width:900px){#ft{grid-template-columns:1fr 1fr!important;}}`}</style>
    </footer>
  );
}