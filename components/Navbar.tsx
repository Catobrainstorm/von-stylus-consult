"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home",     href: "#top" },
  { label: "About",    href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us" },
  { label: "Approach", href: "#approach" },
  { label: "Team",     href: "#team" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClick = (href: string) => {
    setOpen(false);
    if (href === "#top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: scrolled ? "12px 0" : "22px 0",
        background: scrolled ? "rgba(9,7,26,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(123,116,224,0.1)" : "none",
        transition: "padding 0.5s ease, background 0.5s ease",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 clamp(1.25rem,4vw,2.5rem)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <button onClick={() => navClick("#top")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#6C63C7,#9B94F0)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: 15, boxShadow: "0 4px 18px rgba(108,99,199,0.38)", flexShrink: 0 }}>S</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: 17, lineHeight: 1 }}>Stylus</div>
              <div style={{ fontSize: "0.45rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(168,159,245,0.45)", fontFamily: "'DM Sans',sans-serif" }}>Consult</div>
            </div>
          </button>

          {/* Desktop links */}
          <ul id="dsk-links" style={{ listStyle: "none", display: "flex", gap: "1.8rem", alignItems: "center" }}>
            {links.map(l => (
              <li key={l.label}>
                <button onClick={() => navClick(l.href)} style={{ background: "none", border: "none", fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)", cursor: "pointer", transition: "color 0.25s", letterSpacing: "0.02em", padding: "4px 0" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
                >{l.label}</button>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button id="dsk-cta" onClick={() => navClick("#contact")} style={{ padding: "10px 22px", borderRadius: 100, border: "1px solid rgba(123,116,224,0.45)", background: "rgba(108,99,199,0.1)", color: "#fff", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.3s", fontFamily: "'DM Sans',sans-serif" }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(108,99,199,0.28)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 24px rgba(108,99,199,0.28)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(108,99,199,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
          >Let's Talk →</button>

          {/* Hamburger */}
          <button id="ham" onClick={() => setOpen(true)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none", padding: 4 }}><Menu size={24} /></button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div style={{ position: "fixed", inset: 0, zIndex: 2000, background: "#09071a", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.5rem", transform: open ? "translateX(0)" : "translateX(100%)", transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}>
        <button onClick={() => setOpen(false)} style={{ position: "absolute", top: 22, right: 24, background: "none", border: "none", color: "#fff", cursor: "pointer" }}><X size={28} /></button>
        <div style={{ position: "absolute", top: 20, left: 24, display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#6C63C7,#9B94F0)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: 13 }}>S</div>
          <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", fontSize: 16 }}>Stylus</span>
        </div>
        {links.map(l => (
          <button key={l.label} onClick={() => navClick(l.href)} style={{ background: "none", border: "none", fontFamily: "'Playfair Display',serif", fontWeight: 700, color: "#fff", cursor: "pointer", fontSize: "clamp(1.8rem,6vw,3rem)", lineHeight: 1, transition: "color 0.25s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#a89ff5")}
            onMouseLeave={e => (e.currentTarget.style.color = "#fff")}
          >{l.label}</button>
        ))}
        <button onClick={() => navClick("#contact")} style={{ marginTop: 8, padding: "13px 36px", borderRadius: 100, background: "linear-gradient(135deg,#6C63C7,#4B44A8)", color: "#fff", fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 600, border: "none", cursor: "pointer" }}>Let's Talk</button>
      </div>

      <style>{`
        @media(max-width:1023px){#dsk-links,#dsk-cta{display:none!important;}#ham{display:flex!important;}}
      `}</style>
    </>
  );
}