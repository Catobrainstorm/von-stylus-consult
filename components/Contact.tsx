"use client";
import { useState } from "react";
import { Mail, Phone, Send, MessageCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"", source:"" });
  const F = (k: string, v: string) => setForm(f=>({...f,[k]:v}));

  const WHATSAPP_NUMBER = "2349162147820";

  // ✅ HANDLER: Compiles form data and redirects to WhatsApp
  const handleWhatsAppSend = () => {
    const text = `*New Inquiry: VON STYLUS Consult*%0A%0A` +
                 `*Name:* ${form.name}%0A` +
                 `*Company:* ${form.company}%0A` +
                 `*Service:* ${form.service}%0A` +
                 `*Message:* ${form.message}%0A%0A` +
                 `_Sent via vonstylus.com_`;
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const inp: React.CSSProperties = { width:"100%", background:"rgba(9,7,26,0.7)", border:"1px solid rgba(123,116,224,0.18)", borderRadius:14, padding:"14px 20px", color:"#fff", fontSize:14, outline:"none", fontFamily:"'DM Sans',sans-serif", transition:"all 0.3s ease" };
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.target.style.borderColor="rgba(123,116,224,0.6)";
    e.target.style.background="rgba(9,7,26,0.9)";
  };
  const blur = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => {
    e.target.style.borderColor="rgba(123,116,224,0.18)";
    e.target.style.background="rgba(9,7,26,0.7)";
  };

  return (
    <section id="contact" style={{ position:"relative", overflow:"hidden" }}>
      
      {/* ✅ BG: LOCAL IMAGE 11 */}
      <div style={{ position:"absolute", inset:0 }}>
        <img 
          src="/images/image11.jpeg" 
          alt="Von Stylus Strategic Context" 
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition: "center 20%" }} 
        />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(9,7,26,0.98) 0%,rgba(9,7,26,0.94) 100%)" }} />
      </div>

      <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"clamp(6rem,12vw,10rem) clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ textAlign:"center", marginBottom:"clamp(4rem,7vw,6rem)" }}>
          <span className="section-label" style={{ marginBottom:"1.25rem", color: "#a89ff5", letterSpacing: "0.35em" }}>Inquiry</span>
          <h2 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, color:"#fff", lineHeight:1.1, fontSize:"clamp(2.5rem,6vw,4.8rem)" }}>
            Let's Build Something<br />
            <em className="g-text" style={{ fontStyle:"italic" }}>Bold Together.</em>
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", marginTop:"1.5rem", fontSize:"1.05rem", maxWidth:500, margin:"1.5rem auto 0", lineHeight: 1.8 }}>Whether you have a clear brief or just a big ambition — our team is ready to listen.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"0.8fr 1.2fr", gap:"clamp(3rem,6vw,5rem)", alignItems:"start" }} className="col-1">

          {/* Left Side: Connect Direct */}
          <div data-reveal="left" style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            
            {[
              { icon:<Mail size={18}/>, label:"Email Us", val:"info@stylusconsult.com", sub:"Strategic inquiries & partnerships", href:"mailto:info@stylusconsult.com" },
              { icon:<Phone size={18}/>, label:"Call Us", val:"+234 916 214 7820", sub:"Available Mon–Fri, 8am–6pm WAT", href:"tel:+2349162147820" },
              { icon:<MessageCircle size={18}/>, label:"WhatsApp", val:"Direct Message", sub:"Instant response via wa.link", href:"https://wa.link/kubv1g" },
            ].map(item=>(
              <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" style={{ display:"flex", gap:"1.25rem", alignItems:"center", padding:"1.5rem", borderRadius:20, textDecoration:"none", background:"rgba(45,38,96,0.15)", border:"1px solid rgba(123,116,224,0.12)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.35)";el.style.borderColor="rgba(123,116,224,0.4)";el.style.transform="translateX(8px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.15)";el.style.borderColor="rgba(123,116,224,0.12)";el.style.transform="none";}}
              >
                <div style={{ width:44, height:44, borderRadius:"50%", flexShrink:0, background:"rgba(123,116,224,0.1)", border:"1px solid rgba(123,116,224,0.2)", display:"flex", alignItems:"center", justifyContent:"center", color:"#a89ff5" }}>{item.icon}</div>
                <div>
                  <span className="section-label" style={{ marginBottom:"2px", fontSize: "0.55rem" }}>{item.label}</span>
                  <p style={{ fontFamily:"'Playfair Display', serif", color:"#fff", fontWeight:700, fontSize:"1.05rem" }}>{item.val}</p>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.3)", fontSize:"0.75rem" }}>{item.sub}</p>
                </div>
              </a>
            ))}

            {/* ✅ UPDATED SOCIALS */}
            <div style={{ background:"rgba(26,21,53,0.4)", border:"1px solid rgba(123,116,224,0.08)", borderRadius:20, padding:"2rem" }}>
              <span className="section-label" style={{ marginBottom:"1rem" }}>Digital Footprint</span>
              <div style={{ display:"flex", gap:"0.7rem", flexWrap:"wrap" }}>
                {[
                  { label:"LinkedIn", href:"https://www.linkedin.com/company/stylus-consult/" },
                  { label:"Instagram", href:"https://www.instagram.com/stylus_consult" },
                  { label:"TikTok", href:"https://www.tiktok.com/@stylus.consult" },
                ].map(s=>(
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding:"8px 18px", borderRadius:100, border:"1px solid rgba(123,116,224,0.2)", color:"rgba(255,255,255,0.4)", fontFamily:"'DM Sans',sans-serif", fontSize:"0.75rem", fontWeight:600, textDecoration:"none", transition:"0.3s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#a89ff5";(e.currentTarget as HTMLElement).style.color="#fff";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(123,116,224,0.2)";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.4)";}}
                  >{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div data-reveal="right" style={{ background:"rgba(255,255,255,0.02)", backdropFilter:"blur(30px)", WebkitBackdropFilter:"blur(30px)", border:"1px solid rgba(123,116,224,0.12)", borderRadius:32, padding:"clamp(2rem,5vw,3.5rem)" }}>
            <div style={{ display:"flex", flexDirection:"column", gap:"1.2rem" }}>
              <h3 style={{ fontFamily:"'Playfair Display', serif", fontWeight:700, color:"#fff", fontSize:"1.6rem" }}>Start the Conversation</h3>
              
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                <input placeholder="Full Name *" value={form.name} onChange={e=>F("name",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
                <input placeholder="Company *" value={form.company} onChange={e=>F("company",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
              </div>

              <select value={form.service} onChange={e=>F("service",e.target.value)} style={{...inp, cursor:"pointer"}} onFocus={focus} onBlur={blur}>
                <option value="" disabled>Service Interest *</option>
                <option>Strategy & Consulting</option>
                <option>Creative Media</option>
                <option>Advertising</option>
                <option>Corporate Events</option>
              </select>

              <textarea placeholder="Tell Us About Your Project *" value={form.message} onChange={e=>F("message",e.target.value)} rows={5} style={{...inp, resize:"none"}} onFocus={focus} onBlur={blur} />

              {/* ✅ WHATSAPP BUTTON */}
              <button 
                onClick={handleWhatsAppSend} 
                style={{ width:"100%", padding:"16px", borderRadius:100, border:"none", cursor:"pointer", background:"linear-gradient(135deg,#6C63C7,#4B44A8)", color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:700, boxShadow:"0 10px 40px rgba(108,99,199,0.3)", transition:"all 0.4s", display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginTop: "1rem" }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="scale(1.02)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 60px rgba(108,99,199,0.5)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="0 10px 40px rgba(108,99,199,0.3)";}}
              >
                Reach Us on WhatsApp <MessageCircle size={18}/>
              </button>

              <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.2)", fontSize:"0.7rem", textAlign:"center", marginTop: "0.5rem" }}>
                Response time: Within 24 hours on business days.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}