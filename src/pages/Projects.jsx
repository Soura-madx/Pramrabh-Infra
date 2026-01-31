import React, { useEffect, useState } from "react";
import ProjectGrid from "../component/projectGrid";
import Footer from "../component/footer";
import Navbar from "../component/Navbar";
const slides = [
  {
    title: "Curated Premium Projects",
    subtitle: "Handpicked townships, villas and plotted developments in Indore & Ujjain.",
    image: "/images/project1.jpg",
  },
  {
    title: "Ready‑to‑Move Residences",
    subtitle: "Move‑in ready homes with verified titles and clear documentation.",
    image: "/images/project2.jpg",
  },
  {
    title: "Investment‑Grade Plots",
    subtitle: "Strategic locations along Indore–Ujjain growth corridors.",
    image: "/images/project1.jpg",
  },
  {
    title: "Signature Lifestyle Projects",
    subtitle: "Club‑driven communities with amenities your buyers expect.",
    image: "/images/project3.jpg",
  },
];

export default function LuxuryProjectsBanner() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="space mt-20"></div>
    <section className="relative w-full h-[420px] sm:h-[380px] lg:h-[520px] overflow-hidden bg-transparent">
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
          >
            {/* Full Width Image with Ken Burns zoom */}
            <div
              className={`h-full w-full bg-center bg-cover transform transition-transform duration-[7000ms] ease-out
                ${isActive ? "scale-110" : "scale-100"}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />

            {/* Banner Content */}
            <div className="absolute flex items-center bottom-4.5">
              <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
                <div 
                  className={`max-w-2xl transition-all duration-700 delay-200 transform 
                  ${isActive ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
                >
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-orange-400 font-bold mb-2">
                    Prarambh Infra Projects
                  </p>
                  <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-slate-200 max-w-lg font-light">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress Line Indicators (Bottom Right) */}
      <div className="absolute bottom-6 right-6 sm:right-12 z-20 flex gap-2">
        {slides.map((_, index) => {
          const isActive = index === active;
          return (
            <button
              key={index}
              onClick={() => setActive(index)}
              className="h-1 bg-white/20 overflow-hidden transition-all duration-300"
              style={{ width: isActive ? "40px" : "20px" }}
            >
              <div 
                className={`h-full bg-[#f58025] transition-all duration-[4500ms] ease-linear
                ${isActive ? "w-full" : "w-0"}`}
              />
            </button>
          );
        })}
      </div>
    </section>
    <ProjectGrid/>
    <div className="space mt-20"></div>
    <Footer/>
    </div>
  );
}