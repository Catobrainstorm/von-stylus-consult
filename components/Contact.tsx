"use client";
import { useState } from "react";
import { Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name:"",email:"",org:"",service:"",msg:"" });
  const [sent, setSent] = useState(false);

  const inp: React.CSSProperties = { width:"100%", background:"rgba(9,7,26,0.65)", border:"1px solid rgba(123,116,224,0.2)", borderRadius:12, padding:"13px 18px", color:"#fff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif", transition:"border-color 0.3s" };

  return (
    <section id="contact" style={{ position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", inset:0 }}>
        <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80&auto=format" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(9,7,26,0.97) 0%,rgba(9,7,26,0.94) 100%)" }} />
        <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 25% 50%,rgba(108,99,199,0.14),transparent 60%)" }} />
      </div>

      <div style={{ position:"relative", zIndex:2, maxWidth:1280, margin:"0 auto", padding:"clamp(5rem,10vw,8rem) clamp(1.25rem,5vw,4rem)" }}>
        <div data-reveal style={{ textAlign:"center", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label" style={{ marginBottom:"1rem" }}>Get In Touch</span>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"#fff", lineHeight:1.05, fontSize:"clamp(2.5rem,7vw,6.5rem)" }}>
            Ready to Work<br />
            <em className="g-text" style={{ fontStyle:"italic" }}>With Intention?</em>
          </h2>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.38)", marginTop:"1.25rem", fontSize:"1rem" }}>Let's build something bold together.</p>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"clamp(2rem,5vw,4rem)", alignItems:"start" }} className="grid-1-mobile">
          {/* Left */}
          <div data-reveal="left" style={{ display:"flex", flexDirection:"column", gap:"1.25rem" }}>
            {[
              { icon:<Mail size={18}/>, label:"Email Us", val:"info@stylusconsult.com", sub:"kemivaughan@yahoo.com", href:"mailto:info@stylusconsult.com" },
              { icon:<Phone size={18}/>, label:"Call Us", val:"+234 706 379 9373", sub:"Mon – Fri, 9am – 6pm WAT", href:"tel:+2347063799373" },
            ].map(item => (
              <a key={item.label} href={item.href} style={{ display:"flex", gap:"1.25rem", alignItems:"flex-start", padding:"1.5rem", borderRadius:18, textDecoration:"none", background:"rgba(45,38,96,0.28)", border:"1px solid rgba(123,116,224,0.15)", transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)" }}
                onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.55)";el.style.borderColor="rgba(123,116,224,0.45)";el.style.transform="translateY(-3px)";}}
                onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.background="rgba(45,38,96,0.28)";el.style.borderColor="rgba(123,116,224,0.15)";el.style.transform="none";}}
              >
                <div style={{ width:42, height:42, borderRadius:"50%", flexShrink:0, background:"rgba(123,116,224,0.14)", border:"1px solid rgba(123,116,224,0.22)", display:"flex", alignItems:"center", justifyContent:"center", color:"#a89ff5" }}>{item.icon}</div>
                <div>
                  <span className="section-label" style={{ marginBottom:"0.3rem" }}>{item.label}</span>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#fff", fontWeight:500, fontSize:"0.9rem" }}>{item.val}</p>
                  <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.35)", fontSize:"0.8rem" }}>{item.sub}</p>
                </div>
              </a>
            ))}
            <div style={{ background:"rgba(26,21,53,0.85)", border:"1px solid rgba(123,116,224,0.12)", borderRadius:18, padding:"1.75rem" }}>
              <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontStyle:"italic", color:"#fff", fontSize:"clamp(1rem,1.5vw,1.2rem)", lineHeight:1.65 }}>"No fluff, no guesswork — only sharp thinking and outcomes that speak for themselves."</p>
              <div style={{ width:36, height:1.5, background:"#7B74E0", marginTop:"1.25rem" }} />
            </div>
          </div>

          {/* Form */}
          <div data-reveal="right" style={{ background:"rgba(9,7,26,0.8)", backdropFilter:"blur(20px)", WebkitBackdropFilter:"blur(20px)", border:"1px solid rgba(123,116,224,0.15)", borderRadius:22, padding:"clamp(1.75rem,3.5vw,2.75rem)" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"4rem 1rem" }}>
                <div style={{ width:60, height:60, borderRadius:"50%", background:"rgba(123,116,224,0.15)", border:"1px solid rgba(123,116,224,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 1.25rem", color:"#a89ff5" }}><Send size={22}/></div>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.5rem", marginBottom:"0.75rem" }}>Message Sent!</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"0.875rem", lineHeight:1.8 }}>Thank you for reaching out. We'll be in touch with intention — very soon.</p>
              </div>
            ) : (
              <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"1.3rem", marginBottom:"0.5rem" }}>Start a Conversation</h3>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"1rem" }}>
                  <input placeholder="Your Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="rgba(123,116,224,0.6)")} onBlur={e=>(e.target.style.borderColor="rgba(123,116,224,0.2)")} />
                  <input placeholder="Email Address" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="rgba(123,116,224,0.6)")} onBlur={e=>(e.target.style.borderColor="rgba(123,116,224,0.2)")} />
                </div>
                <input placeholder="Organisation" value={form.org} onChange={e=>setForm({...form,org:e.target.value})} style={inp} onFocus={e=>(e.target.style.borderColor="rgba(123,116,224,0.6)")} onBlur={e=>(e.target.style.borderColor="rgba(123,116,224,0.2)")} />
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} style={{...inp,cursor:"pointer"}}>
                  <option value="" disabled>Select a Service</option>
                  <option>Business & Management Consulting</option>
                  <option>Creative Media</option>
                  <option>Advertising</option>
                  <option>Events</option>
                  <option>Other</option>
                </select>
                <textarea placeholder="Tell us about your project..." value={form.msg} onChange={e=>setForm({...form,msg:e.target.value})} rows={5} style={{...inp,resize:"none"}} onFocus={e=>(e.target.style.borderColor="rgba(123,116,224,0.6)")} onBlur={e=>(e.target.style.borderColor="rgba(123,116,224,0.2)")} />
                <button onClick={()=>setSent(true)} style={{ width:"100%", padding:"14px", borderRadius:12, border:"none", cursor:"pointer", background:"linear-gradient(135deg,#6C63C7,#4B44A8)", color:"#fff", fontFamily:"'DM Sans',sans-serif", fontSize:14, fontWeight:600, boxShadow:"0 8px 30px rgba(108,99,199,0.38)", transition:"all 0.35s cubic-bezier(0.16,1,0.3,1)", display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}
                  onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-2px) scale(1.01)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 50px rgba(108,99,199,0.58)";}}
                  onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="0 8px 30px rgba(108,99,199,0.38)";}}
                >Send Message <Send size={14}/></button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}