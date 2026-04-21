"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Approach from "@/components/Approach";
import Team from "@/components/Team";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [showBtt, setShowBtt] = useState(false);

  useEffect(() => {
    // Scroll reveal — pure IntersectionObserver, zero lag
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            // Don't unobserve — keeps animation on re-entry clean
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = document.querySelectorAll("[data-reveal]");
    els.forEach((el) => observer.observe(el));

    // Back to top
    const onScroll = () => setShowBtt(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Approach />
      <Team />
      <Clients />
      <Contact />
      <Footer />

      {/* Back to top */}
      <button
        className={`btt ${showBtt ? "show" : ""}`}
        onClick={scrollTop}
        aria-label="Back to top"
      >
        <ChevronUp size={20} strokeWidth={2.5} />
      </button>
    </main>
  );
}