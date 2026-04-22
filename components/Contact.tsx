"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:"", company:"", email:"", phone:"", service:"", message:"", source:"" });
  const [sent, setSent] = useState(false);
  const F = (k: string, v: string) => setForm(f=>({...f,[k]:v}));

  const inp: React.CSSProperties = { width:"100%", background:"rgba(9,7,26,0.65)", border:"1px solid rgba(123,116,224,0.22)", borderRadius:12, padding:"13px 18px", color:"#fff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif", transition:"border-color 0.3s" };
  const focus = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor="rgba(123,116,224,0.65)");
  const blur  = (e: React.FocusEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) => (e.target.style.borderColor="rgba(123,116,224,0.22)");

  return (
    <section id="contact" style={{ position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0 }}>
        <img src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop" alt="Black professionals in a business meeting" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(9,7,26,0.97) 0%,rgba(9,7,26,0.95) 100%)" }} />
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 25% 50%,rgba(108,99,199,0.14),transparent 60%)" }} />
      </div>

      <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>

        {/* ✅ APPROVED headline from copy brief */}
        <div data-reveal style={{ textAlign:"center", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label" style={{ marginBottom:"1rem" }}>Contact</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"#fff", lineHeight:1.05, fontSize:"clamp(2.5rem,7vw,6.5rem)" }}>
            Let's Build Something<br />
            <em className="g-text" style={{ fontStyle:"italic" }}>Bold Together.</em>
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", marginTop:"1.25rem", fontSize:"1rem", maxWidth:540, margin:"1.25rem auto 0" }}>Whether you have a clear brief or just a big ambition — we're ready to listen.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(2rem,5vw,4rem)", alignItems:"start" }} className="col-1">

          {/* Left — direct contact */}
          <div data-reveal="left" style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
            {/* ✅ APPROVED contact details from copy brief · ✅ REMOVED personal email */}
            {[
              { icon:<Mail size={17}/>, label:"Email Us", val:"info@stylusconsult.com", sub:"We respond within 24 hours", href:"mailto:info@stylusconsult.com" },
              { icon:<Phone size={17}/>, label:"Call Us", val:"+234 706 379 9373", sub:"Mon–Fri: 8am–6pm · Sat: 10am–2pm WAT", href:"tel:+2347063799373" },
              { icon:<MapPin size={17}/>, label:"Our Office", val:"8 Ekololu Street, Surulere", sub:"Lagos, Nigeria", href:"https://maps.google.com/?q=Surulere,Lagos" },
              { icon:<Clock size={17}/>, label:"Office Hours", val:"Mon – Fri: 8:00am – 6:00pm WAT", sub:"Saturday: 10:00am – 2:00pm (by appointment)", href:"#contact" },
            ].map(item=>(
              <a key={item.label} href={item.href} target={item.href.startsWith("https")?"_blank":"_self"} rel="noopener noreferrer" style={{ display:"flex", gap:"1.1rem", alignItems:"flex-start", padding:"1.25rem 1.4rem", borderRadius:16, textDecoration:"none", background:"rgba(45,38,96,0.28)", border:"1px solid rgba(123,116,224,0.15)", transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.55)";el.style.borderColor="rgba(123,116,224,0.45)";el.style.transform="translateY(-3px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.28)";el.style.borderColor="rgba(123,116,224,0.15)";el.style.transform="none";}}
              >
                <div style={{ width:38, height:38, borderRadius:"50%", flexShrink:0, background:"rgba(123,116,224,0.14)", border:"1px solid rgba(123,116,224,0.22)", display:"flex", alignItems:"center", justifyContent:"center", color:"#a89ff5" }}>{item.icon}</div>
                <div>
                  <span className="section-label" style={{ marginBottom:"0.25rem" }}>{item.label}</span>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#fff", fontWeight:500, fontSize:"0.875rem" }}>{item.val}</p>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.32)", fontSize:"0.75rem" }}>{item.sub}</p>
                </div>
              </a>
            ))}

            {/* Social */}
            <div style={{ background:"rgba(26,21,53,0.85)", border:"1px solid rgba(123,116,224,0.1)", borderRadius:16, padding:"1.4rem" }}>
              <span className="section-label" style={{ marginBottom:"0.75rem" }}>Follow Our Work</span>
              <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", marginTop:"0.4rem" }}>
                {[
                  { label:"LinkedIn", href:"https://linkedin.com/company/vonstylus" },
                  { label:"Instagram", href:"https://instagram.com/vonstylusconsuult" },
                  { label:"Twitter/X", href:"https://twitter.com/vonstylus" },
                  { label:"Facebook", href:"https://facebook.com/vonstylusconsuit" },
                ].map(s=>(
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ padding:"7px 16px", borderRadius:100, border:"1px solid rgba(123,116,224,0.25)", color:"rgba(255,255,255,0.55)", fontFamily:"'DM Sans',sans-serif", fontSize:"0.7rem", fontWeight:600, textDecoration:"none", transition:"all 0.3s" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(123,116,224,0.65)";(e.currentTarget as HTMLElement).style.color="#fff";(e.currentTarget as HTMLElement).style.background="rgba(108,99,199,0.18)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(123,116,224,0.25)";(e.currentTarget as HTMLElement).style.color="rgba(255,255,255,0.55)";(e.currentTarget as HTMLElement).style.background="transparent";}}
                  >{s.label}</a>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Form with ALL fields from approved copy brief */}
          <div data-reveal="right" style={{ background:"rgba(9,7,26,0.82)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", border:"1px solid rgba(123,116,224,0.15)", borderRadius:22, padding:"clamp(1.75rem,3.5vw,2.75rem)" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"4rem 1rem" }}>
                <div style={{ width:60, height:60, borderRadius:"50%", background:"rgba(123,116,224,0.15)", border:"1px solid rgba(123,116,224,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.25rem", color:"#a89ff5" }}><Send size={22}/></div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.5rem", marginBottom:"0.75rem" }}>Message Sent!</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"0.875rem", lineHeight:1.8 }}>Thank you. A member of our team will be in touch within 24 hours.</p>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"0.9rem" }}>
                {/* ✅ APPROVED form headline from copy brief */}
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.3rem", marginBottom:"0.5rem" }}>Start the Conversation</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.32)", fontSize:"0.78rem", lineHeight:1.7, marginBottom:"0.25rem" }}>Fill in the form and a member of our team will be in touch within 24 hours.</p>

                {/* Full Name + Company */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.9rem" }}>
                  <input placeholder="Full Name *" value={form.name} onChange={e=>F("name",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
                  <input placeholder="Company / Organisation *" value={form.company} onChange={e=>F("company",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
                </div>

                {/* Email + Phone */}
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.9rem" }}>
                  <input placeholder="Email Address *" type="email" value={form.email} onChange={e=>F("email",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
                  <input placeholder="Phone Number" type="tel" value={form.phone} onChange={e=>F("phone",e.target.value)} style={inp} onFocus={focus} onBlur={blur} />
                </div>

                {/* Service dropdown */}
                <select value={form.service} onChange={e=>F("service",e.target.value)} style={{...inp,cursor:"pointer"}}>
                  <option value="" disabled>Service You're Interested In *</option>
                  <option>Consulting</option>
                  <option>Creative Media</option>
                  <option>Advertising</option>
                  <option>Events</option>
                  <option>Multiple Services</option>
                </select>

                {/* Project message */}
                <textarea placeholder="Tell Us About Your Project *" value={form.message} onChange={e=>F("message",e.target.value)} rows={4} style={{...inp,resize:"none"}} onFocus={focus} onBlur={blur} />

                {/* ✅ How did you hear — field from approved brief */}
                <select value={form.source} onChange={e=>F("source",e.target.value)} style={{...inp,cursor:"pointer"}}>
                  <option value="" disabled>How Did You Hear About Us?</option>
                  <option>Google</option>
                  <option>Referral</option>
                  <option>Social Media</option>
                  <option>Event</option>
                  <option>Other</option>
                </select>

                <button onClick={()=>setSent(true)} style={{ width:"100%", padding:"14px", borderRadius:12, border:"none", cursor:"pointer", background:"linear-gradient(135deg,#6C63C7,#4B44A8)", color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, boxShadow:"0 8px 30px rgba(108,99,199,0.38)", transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)", display:"flex", alignItems:"center", justifyContent:"center", gap:10, marginTop:"0.25rem" }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 50px rgba(108,99,199,0.58)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="0 8px 30px rgba(108,99,199,0.38)";}}
                >Send Your Message <Send size={14}/></button>

                {/* ✅ APPROVED form footer note */}
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.22)", fontSize:"0.68rem", lineHeight:1.7, textAlign:"center" }}>We typically respond within 24 hours on business days. Your information is kept confidential and never shared with third parties.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}