"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { n:"01", title:"Business Consulting", desc:"Strategic planning and growth advisory built for lasting results.", tags:["Strategy","Growth","Org Design"], color:"#4B44A8", img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=800" },
  { n:"02", title:"Creative Media", desc:"Visual storytelling that connects deeply and converts with precision.", tags:["Content","Video","Brand"], color:"#6C63C7", img:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800" },
  { n:"03", title:"Advertising", desc:"Bold, targeted campaigns that consistently outperform the noise.", tags:["Digital","Performance","Media"], color:"#7B74E0", img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" },
  { n:"04", title:"Events", desc:"Corporate activations and immersive experiences that leave a mark.", tags:["Corporate","Activations","Live"], color:"#9B94F0", img:"https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800" },
];

const LOGOS = ["Google", "Apple", "Meta", "Amazon", "Netflix", "Tesla", "Microsoft"];

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} style={{ background: "#050410", padding: "100px 0", overflow: "hidden" }}>
      
      {/* --- INFINITE LOGO MARQUEE --- */}
      <div style={{ marginBottom: "120px", opacity: 0.5 }}>
        <p style={{ textAlign: "center", color: "#fff", fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "3px", marginBottom: "30px" }}>Trusted by Industry Leaders</p>
        <div className="marquee-container">
          <div className="marquee-content">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span key={i} className="logo-item">{logo}</span>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 5vw" }}>
        {/* --- HEADER --- */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px", gap: "2rem" }}>
          <div style={{ maxWidth: "600px" }}>
            <span style={{ color: "#a89ff5", fontSize: "0.9rem", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase" }}>What We Do</span>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "#fff", marginTop: "1rem", lineHeight: 1.1 }}>
              Our Core <em style={{ color: "#a89ff5" }}>Services.</em>
            </h2>
          </div>
          <p style={{ color: "rgba(255,255,255,0.4)", maxWidth: "300px", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Four disciplines. One standard. Precision-engineered impact at every touchpoint.
          </p>
        </div>

        {/* --- HORIZONTAL CAROUSEL/GRID --- */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "24px",
          perspective: "1000px" 
        }}>
          {SERVICES.map((s) => (
            <div key={s.n} className="service-card" style={cardStyle}>
              {/* Background Image with Zoom Effect */}
              <div className="card-bg" style={{ ...bgStyle, backgroundImage: `url(${s.img})` }} />
              
              {/* Dark Overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,4,16,0) 20%, rgba(5,4,16,0.95) 90%)", zIndex: 1 }} />

              {/* Content */}
              <div style={{ position: "relative", zIndex: 2, padding: "40px", height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <span style={{ fontSize: "5rem", fontFamily: "'Playfair Display'", fontWeight: 900, color: "rgba(255,255,255,0.05)", position: "absolute", top: 20, right: 30 }}>{s.n}</span>
                
                <div style={{ width: "40px", height: "2px", background: s.color, marginBottom: "20px" }} />
                <h3 style={{ color: "#fff", fontSize: "1.8rem", marginBottom: "15px", fontFamily: "'Playfair Display'" }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "25px" }}>{s.desc}</p>
                
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ background: "rgba(255,255,255,0.05)", padding: "5px 12px", borderRadius: "100px", color: "#fff", fontSize: "0.7rem", border: "1px solid rgba(255,255,255,0.1)" }}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
        .marquee-content {
          display: flex;
          gap: 80px;
          animation: scroll 30s linear infinite;
        }
        .logo-item {
          color: #fff;
          font-size: 2rem;
          font-weight: 800;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .service-card {
          position: relative;
          height: 500px;
          border-radius: 30px;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .service-card:hover {
          transform: translateY(-15px);
          border-color: rgba(168, 159, 245, 0.3);
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
        }
        .service-card:hover .card-bg {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}

const cardStyle: React.CSSProperties = {
  cursor: "pointer",
};

const bgStyle: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 1s cubic-bezier(0.23, 1, 0.32, 1)",
};