"use client";

// ✅ UPDATED: Mixture of Black Professionals and Conceptual Imagery (No more "White Folks")
const articles = [
  { cat:"Strategy & Consulting", title:"Why Strategy Without Creativity is Just a Spreadsheet", excerpt:"Every strategy document looks compelling in a presentation. Very few survive contact with the real world. Here's why the firms that succeed never separate strategy from creative thinking.", author:"VON STYLUS Team", time:"5 min read", color:"#6C63C7", img:"https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" },
  { cat:"Advertising", title:"The 5 Advertising Mistakes Nigerian Brands Keep Making", excerpt:"After working with brands across Lagos, Abuja, and beyond, we've spotted five costly advertising mistakes that keep appearing — and they're all fixable.", author:"VON STYLUS Team", time:"6 min read", color:"#7B74E0", img:"https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800" }, // Concept: Light/Vision
  { cat:"Events", title:"What Makes a Corporate Event Memorable? It's Not What You Think.", excerpt:"It's not the venue. It's not the catering. It's not even the keynote speaker. The thing that makes an event genuinely memorable is something most organisers completely overlook.", author:"VON STYLUS Team", time:"4 min read", color:"#9B94F0", img:"https://images.pexels.com/photos/262669/pexels-photo-262669.jpeg?auto=compress&cs=tinysrgb&w=800" }, // Concept: Architecture/Space
  { cat:"Strategy & Consulting", title:"From Startup to Scale-Up: The Strategic Moves That Actually Work", excerpt:"Most startups plateau not because of a lack of ambition, but because the strategies that got them to ₦50M won't get them to ₦500M. Here's what changes.", author:"VON STYLUS Team", time:"7 min read", color:"#6C63C7", img:"https://images.pexels.com/photos/1250613/pexels-photo-1250613.jpeg?auto=compress&cs=tinysrgb&w=800" }, // ✅ FIXED: Growth/Mountain/Nature Concept
  { cat:"Creative Media", title:"How to Brief a Creative Agency: A Guide for Business Leaders", excerpt:"A weak brief produces weak work. After reviewing hundreds of briefs, here's exactly what separates the two — and how to write one that gets results.", author:"VON STYLUS Team", time:"5 min read", color:"#7B74E0", img:"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" }, // Black Team Collaboration
  { cat:"Industry Trends", title:"The Future of Advertising in Africa: Trends to Watch in 2025–2026", excerpt:"The advertising landscape across Africa is shifting faster than most brands are prepared for. From AI-generated content to hyper-local targeting, here's what's shaping the future.", author:"VON STYLUS Team", time:"8 min read", color:"#9B94F0", img:"https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=800" }, // Professional African context
];

export default function Insights() {
  return (
    <section id="insights" style={{ background:"#f8f6ff", padding:"clamp(6rem,12vw,10rem) 0" }}>
      <div className="max-w" style={{ margin: "0 auto", padding:"0 clamp(1.25rem,5vw,4rem)" }}>

        {/* Header */}
        <div data-reveal style={{ marginBottom:"clamp(3rem,6vw,5rem)" }}>
          <span className="section-label-dark" style={{ marginBottom:"1rem", color: "#6C63C7", letterSpacing: "3px" }}>Insights</span>
          <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-end", justifyContent:"space-between", gap:"1.5rem" }}>
            <h2 style={{ 
              fontFamily:"'Young Serif', serif", 
              fontWeight: 400, 
              fontSize:"clamp(2.5rem,6vw,5rem)", 
              color:"#09071a", 
              lineHeight:1.1 
            }}>
              Sharp Thinking.{" "}
              <em className="g-text-p" style={{ fontStyle:"italic", color: "#6C63C7" }}>Published Regularly.</em>
            </h2>
            <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#666", maxWidth:380, fontSize:"0.95rem", lineHeight:1.8 }}>Our consultants and creatives share what they're seeing in business, media, advertising, and events.</p>
          </div>
        </div>

        {/* Articles grid */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(min(100%, 350px), 1fr))", gap:"1.5rem", marginBottom:"clamp(3rem,6vw,5rem)" }}>
          {articles.map((a, i) => (
            <div key={i} data-reveal data-delay={String((i%3)+1)} style={{ background:"#fff", borderRadius:24, overflow:"hidden", border:"1px solid rgba(75,68,168,0.08)", boxShadow:"0 4px 20px rgba(75,68,168,0.04)", transition:"all 0.4s cubic-bezier(0.16,1,0.3,1)", cursor:"pointer" }}
              onMouseEnter={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="translateY(-8px)";el.style.boxShadow="0 24px 70px rgba(75,68,168,0.12)";el.style.borderColor="rgba(123,116,224,0.3)";}}
              onMouseLeave={e=>{const el=e.currentTarget as HTMLElement;el.style.transform="none";el.style.boxShadow="0 4px 20px rgba(75,68,168,0.04)";el.style.borderColor="rgba(75,68,168,0.08)";}}
            >
              <div className="img-wrap" style={{ height:220, position:"relative", overflow:"hidden" }}>
                <img src={a.img} alt={a.title} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,transparent 60%,rgba(9,7,26,0.1))" }} />
                <span style={{ position:"absolute", top:15, left:15, fontFamily:"'DM Sans',sans-serif", fontSize:"0.6rem", fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"#fff", background:`${a.color}dd`, padding:"5px 12px", borderRadius:100 }}>{a.cat}</span>
              </div>
              <div style={{ padding:"2rem" }}>
                <h3 style={{ fontFamily:"'Young Serif', serif", color:"#09071a", fontSize:"1.25rem", lineHeight:1.4, marginBottom:"1rem" }}>{a.title}</h3>
                <p className="clamp3" style={{ fontFamily:"'DM Sans',sans-serif", color:"#777", fontSize:"0.85rem", lineHeight:1.85, marginBottom:"1.5rem" }}>{a.excerpt}</p>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", borderTop: "1px solid rgba(0,0,0,0.05)", paddingTop: "1rem" }}>
                  <div>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", fontWeight:600, color:"#09071a", fontSize:"0.8rem" }}>{a.author}</p>
                    <p style={{ fontFamily:"'DM Sans',sans-serif", color:"#aaa", fontSize:"0.75rem" }}>{a.time}</p>
                  </div>
                  <span style={{ fontFamily:"'DM Sans',sans-serif", fontSize:12, color:a.color, fontWeight:700 }}>READ →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter signup */}
        <div data-reveal style={{ background:"linear-gradient(135deg,#09071a,#1a1740)", borderRadius:32, padding:"clamp(3rem,6vw,5rem)", textAlign:"center", border:"1px solid rgba(123,116,224,0.15)" }}>
          <h3 style={{ fontFamily:"'Young Serif', serif", color:"#fff", fontSize:"clamp(1.6rem,3.5vw,2.5rem)", marginBottom:"1rem" }}>Get the Insights That Matter.</h3>
          <p style={{ fontFamily:"'DM Sans',sans-serif", color:"rgba(255,255,255,0.4)", fontSize:"1rem", lineHeight:1.8, maxWidth:520, margin:"0 auto 2.5rem" }}>Join the VON STYLUS community and receive our latest thinking.</p>
          <div style={{ display:"flex", gap:"1rem", maxWidth:460, margin:"0 auto", flexWrap:"wrap" }}>
            <input placeholder="Your email address" style={{ flex:1, minWidth:240, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(123,116,224,0.2)", borderRadius:100, padding:"16px 24px", color:"#fff", fontSize:14, outline:"none", fontFamily:"'DM Sans',sans-serif" }} />
            <button className="btn-primary" style={{ whiteSpace:"nowrap" }}>Subscribe →</button>
          </div>
        </div>
      </div>
    </section>
  );
}