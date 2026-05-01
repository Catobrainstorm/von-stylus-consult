"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",     href: "#top" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Team",     href: "#team" },
  { label: "Insights", href: "#insights" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 55);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { 
    document.body.style.overflow = open ? "hidden" : ""; 
    return () => { document.body.style.overflow = ""; }; 
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    if (href === "#top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // ✅ Updated typography to Playfair Display for links
  const T = { 
    fontFamily:"'Playfair Display', serif", 
    fontSize:14, 
    fontWeight:500, 
    color:"rgba(255,255,255,0.7)", 
    background:"none", 
    border:"none", 
    cursor:"pointer", 
    transition:"all 0.25s", 
    letterSpacing:"0.01em", 
    padding:"4px 0" 
  } as const;

  return (
    <>
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:1000, padding: scrolled?"12px 0":"24px 0", background: scrolled?"rgba(9,7,26,0.98)":"transparent", backdropFilter: scrolled?"blur(24px)":"none", WebkitBackdropFilter: scrolled?"blur(24px)":"none", borderBottom: scrolled?"1px solid rgba(123,116,224,0.12)":"none", transition:"all 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 clamp(1.25rem,5vw,4rem)", display:"flex", alignItems:"center", justifyContent:"space-between" }}>

          {/* ✅ Logo Image Replacement */}
          <button onClick={()=>go("#top")} style={{ display:"flex", alignItems:"center", background:"none", border:"none", cursor:"pointer", padding:0 }}>
            <img 
              src="/images/logo-w.png" 
              alt="Von Stylus Logo" 
              style={{ height: scrolled ? "32px" : "38px", width: "auto", transition: "height 0.5s ease" }} 
            />
          </button>

          {/* Desktop Links */}
          <ul id="dlinks" style={{ listStyle:"none", display:"flex", gap:"2rem", alignItems:"center" }}>
            {links.map(l=>(
              <li key={l.label}>
                <button 
                  onClick={()=>go(l.href)} 
                  style={T} 
                  onMouseEnter={e=>(e.currentTarget.style.color="#fff")} 
                  onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.7)")}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <button id="dcta" onClick={()=>go("#contact")} style={{ padding:"12px 26px", borderRadius:100, border:"1px solid rgba(123,116,224,0.4)", background:"rgba(108,99,199,0.15)", color:"#fff", fontSize:13, fontWeight:600, cursor:"pointer", transition:"all 0.3s", fontFamily:"'DM Sans',sans-serif" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.35)";(e.currentTarget as HTMLElement).style.boxShadow="0 8px 24px rgba(108,99,199,0.25)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.15)";(e.currentTarget as HTMLElement).style.boxShadow="none";}}
          >
            Get in Touch
          </button>

          <button id="ham" onClick={()=>setOpen(true)} style={{ background:"none", border:"none", color:"#fff", cursor:"pointer", display:"none", padding:4 }}><Menu size={26}/></button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{ position:"fixed", inset:0, zIndex:2000, background:"#09071a", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"1.8rem", transform:open?"translateX(0)":"translateX(100%)", transition:"transform 0.6s cubic-bezier(0.16,1,0.3,1)" }}>
        <button onClick={()=>setOpen(false)} style={{ position:"absolute", top:22, right:24, background:"none", border:"none", color:"#fff", cursor:"pointer" }}><X size={32}/></button>
        
        {/* Mobile Logo Branding */}
        <div style={{ position:"absolute", top:20, left:24 }}>
          <img src="/images/logo-w.png" alt="Logo" style={{ height: "30px", width: "auto" }} />
        </div>

        {links.map(l=>(
          <button key={l.label} onClick={()=>go(l.href)} style={{ background:"none", border:"none", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", cursor:"pointer", fontSize:"clamp(1.8rem,6vw,3rem)", lineHeight:1, transition:"color 0.25s" }}
            onMouseEnter={e=>(e.currentTarget.style.color="#a89ff5")} onMouseLeave={e=>(e.currentTarget.style.color="#fff")}
          >
            {l.label}
          </button>
        ))}
        
        <button onClick={()=>go("#contact")} style={{ marginTop:12, padding:"15px 44px", borderRadius:100, background:"linear-gradient(135deg,#6C63C7,#4B44A8)", color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:15, fontWeight:600, border:"none", cursor:"pointer" }}>
          Get in Touch
        </button>
      </div>

      <style>{`@media(max-width:1023px){#dlinks,#dcta{display:none!important;}#ham{display:flex!important;}}`}</style>
    </>
  );
}