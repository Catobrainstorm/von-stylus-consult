"use client";

// ✅ NEW SECTION — approved copy brief included full Insights/Blog page
// ✅ 6 starter articles from the approved brief
const articles = [
  { cat:"Strategy & Consulting", title:"Why Strategy Without Creativity is Just a Spreadsheet", excerpt:"Every strategy document looks compelling in a presentation. Very few survive contact with the real world. Here's why the firms that succeed are the ones that never separate strategy from creative thinking.", author:"Kemi Vaughan-Aderibigbe", time:"5 min read", color:"#6C63C7", img:"https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { cat:"Advertising", title:"The 5 Advertising Mistakes Nigerian Brands Keep Making", excerpt:"After working with brands across Lagos, Abuja, and beyond, we've spotted five costly advertising mistakes that keep appearing — and they're all fixable with the right thinking.", author:"Adetokunbo Aderibigbe", time:"6 min read", color:"#7B74E0", img:"https://images.pexels.com/photos/3760814/pexels-photo-3760814.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { cat:"Events", title:"What Makes a Corporate Event Memorable? It's Not What You Think.", excerpt:"It's not the venue. It's not the catering. It's not even the keynote speaker. The thing that makes an event genuinely memorable is something most organisers completely overlook.", author:"Zika Taiwo", time:"4 min read", color:"#9B94F0", img:"https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { cat:"Strategy & Consulting", title:"From Startup to Scale-Up: The Strategic Moves That Actually Work", excerpt:"Most startups plateau not because of a lack of ambition, but because the strategies that got them to ₦50M won't get them to ₦500M. Here's what changes — and when.", author:"John Vaughan", time:"7 min read", color:"#6C63C7", img:"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { cat:"Creative Media", title:"How to Brief a Creative Agency: A Guide for Business Leaders", excerpt:"A weak brief produces weak work. A strong brief produces exceptional work. After reviewing hundreds of briefs, here's exactly what separates the two — and how to write one that gets results.", author:"Omobola Gidigbi", time:"5 min read", color:"#7B74E0", img:"https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
  { cat:"Industry Trends", title:"The Future of Advertising in Africa: Trends to Watch in 2025–2026", excerpt:"The advertising landscape across Africa is shifting faster than most brands are prepared for. From AI-generated content to hyper-local targeting, here's what's shaping the next 18 months.", author:"VON STYLUS Team", time:"8 min read", color:"#9B94F0", img:"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" },
];

export default function Insights() {
  return (
    <section id="insights" style={{ background:"#f8f6ff", padding:"clamp(5rem,10vw,8rem) 0" }}>
      <div className="max-w" style={{ padding:"0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label-dark" style={{ marginBottom:"1rem" }}>Insights</span>
          {/* ✅ APPROVED headline from copy brief */}
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem" }}>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"clamp(2rem,5vw,4.5rem)", color:"#09071a", lineHeight:1.05 }}>
              Sharp Thinking.{" "}
              <em className="g-text-p" style={{ fontStyle:"italic" }}>Published Regularly.</em>
            </h2>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#888", maxWidth:320, fontSize:"0.9rem", lineHeight:1.85 }}>Our consultants and creatives share what they're seeing in business, media, advertising, and events. No fluff. No filler.</p>
          </div>
        </div>

        {/* Articles grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:"1.25rem", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          {articles.map((a, i) => (
            <div key={i} data-reveal data-delay={String((i%3)+1)} style={{ background:"#fff", borderRadius:20, overflow:"hidden", border:"1px solid rgba(75,68,168,0.1)", boxShadow:"0 2px 20px rgba(75,68,168,0.06)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor:"pointer" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-6px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.16)";el.style.borderColor="rgba(123,116,224,0.3)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 2px 20px rgba(75,68,168,0.06)";el.style.borderColor="rgba(75,68,168,0.1)";}}
            >
              <div className="img-wrap" style={{ height:200, position:"relative", overflow:"hidden" }}>
                <img src={a.img} alt={a.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 60%,rgba(9,7,26,0.15))" }} />
                <span style={{ position:"absolute", top:14, left:14, fontFamily:"'DM Sans',sans-serif", fontSize:"0.56rem", fontWeight:600, letterSpacing:"0.18em", textTransform:"uppercase", color:"#fff", background:`${a.color}dd`, padding:"4px 10px", borderRadius:100 }}>{a.cat}</span>
              </div>
              <div style={{ padding:"1.5rem" }}>
                <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#09071a", fontSize:"1.05rem", lineHeight:1.4, marginBottom:"0.75rem" }}>{a.title}</h3>
                <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#888", fontSize:"0.82rem", lineHeight:1.85, marginBottom:"1.25rem", display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical" as const, overflow:"hidden" }}>{a.excerpt}</p>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                  <div>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, color:"#09071a", fontSize:"0.75rem" }}>{a.author}</p>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#aaa", fontSize:"0.68rem" }}>{a.time}</p>
                  </div>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:a.color, fontWeight:600 }}>Read →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div data-reveal style={{ background:"linear-gradient(135deg,#09071a,#1a1740)", borderRadius:24, padding:"clamp(2.5rem,5vw,4rem)", textAlign:"center", border:"1px solid rgba(123,116,224,0.15)" }}>
          <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"clamp(1.4rem,3vw,2.2rem)", marginBottom:"0.75rem" }}>Get the Insights That Matter.</h3>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.45)", fontSize:"0.9rem", lineHeight:1.85, maxWidth:480, margin:"0 auto 1.75rem" }}>Join the VON STYLUS community and receive our latest thinking on strategy, media, advertising, and events — delivered twice a month.</p>
          <div style={{ display:"flex", gap:"1rem", maxWidth:420, margin:"0 auto", flexWrap:"wrap" }}>
            <input placeholder="Your email address" style={{ flex:1, minWidth:200, background:"rgba(255,255,255,0.07)", border:"1px solid rgba(123,116,224,0.3)", borderRadius:100, padding:"13px 20px", color:"#fff", fontSize:13, outline:"none", fontFamily:"'DM Sans',sans-serif", transition:"border-color 0.3s" }} onFocus={e=>(e.target.style.borderColor="rgba(123,116,224,0.7)")} onBlur={e=>(e.target.style.borderColor="rgba(123,116,224,0.3)")} />
            <button className="btn-dark" style={{ whiteSpace:"nowrap" }}>Subscribe →</button>
          </div>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.22)", fontSize:"0.7rem", marginTop:"1rem" }}>No spam. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  );
}