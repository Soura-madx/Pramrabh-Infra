import React, { useState, useRef, useEffect } from "react";
import { Search, ChevronDown, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
const PRIMARY_BLUE = "#005596";
const ACCENT_ORANGE = "#f58025";

export default function HeroSection() {
  const [mode, setMode] = useState("buy");
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay was prevented. Highlighting 'Muted' fix.", error);
      });
    }
  }, []);
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute  inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/images/video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 ">
        {/* Compact Text Content UI */}
        <div className="mb-12">
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8 hover:border-white/20 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f58025]"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/90 font-semibold">
              Trusted Real Estate Partner
            </span>
          </div>

          <h1 className="text-2xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.05]">
            Your Dream Home 
            Is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Our Mission
            </span>
          </h1>

          <div className="max-w-xl relative group">
            <div className="absolute -left-1 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#f58025] to-transparent" />
            <p className="text-sm md:text-base text-white/70 leading-relaxed font-light pl-6 py-1 italic">
              "We filter out the noise to ensure you only see homes that offer
              legal clarity, high value, and guaranteed delivery."
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link to='/property'>
            
            <button
              style={{ backgroundColor: ACCENT_ORANGE }}
              className="px-6 py-3 rounded text-white font-bold text-sm flex items-center gap-2 hover:scale-105 transition-all shadow-lg shadow-orange-900/20"
            >
              Find a Home <Search size={16} />
            </button>
            </Link>
           <Link to='/contact-us'>
           <button className="px-4 py-2 rounded bg-white/10 backdrop-blur-md text-white font-bold text-sm border border-white/30 hover:bg-white hover:text-[#005596] transition-all">
              List Your Project
            </button>
           </Link>
            
          </div>
        </div>

        {/* Filter Box Component */}
        <div className="w-full mt-10">
          <div className="flex gap-1 ">
            <button
              onClick={() => setMode("buy")}
              style={{
                backgroundColor:
                  mode === "buy" ? "white" : "rgba(255,255,255,0.15)",
                color: mode === "buy" ? PRIMARY_BLUE : "white",
              }}
              className="px-8 py-2.5 rounded-t-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
            >
              For Sale
            </button>
            <button
              onClick={() => setMode("rent")}
              style={{
                backgroundColor:
                  mode === "rent" ? "white" : "rgba(255,255,255,0.15)",
                color: mode === "rent" ? PRIMARY_BLUE : "white",
              }}
              className="px-8 py-2 rounded-t-lg font-bold text-xs uppercase tracking-wider transition-all backdrop-blur-md"
            >
              For Rent
            </button>
          </div>

          {/* Filter White Card */}
          <div className="bg-white  p-4 shadow-md max-w-5xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 items-center">
              <FilterField label="Budget" icon={<Building2 size={14} />}>
                <option>All Budgets</option>
                <option>50L - 1Cr</option>
                <option>1Cr - 2.5Cr</option>
              </FilterField>

              <FilterField label="City" icon={<MapPin size={14} />}>
                <option> Indore</option>
                <option> Ujjain</option>
                
              </FilterField>

              <FilterField label="Type">
                <option>All Types</option>
                <option>Villa</option>
                <option>Plot</option>
              </FilterField>

              <FilterField label="Area">
                <option>Select Area</option>
                <option>1500 - 2500 Sqft</option>
                <option>2500 - 4000 Sqft</option>
              </FilterField>
<Link to='/property'>

              <button
                style={{ backgroundColor: ACCENT_ORANGE }}
                className="w-full py-2 rounded text-white font-bold flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-md self-end"
              >
                Search <Search size={18} />
              </button>
</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Sub-component for clean code
function FilterField({ label, children, icon }) {
  return (
    <div className="space-y-1.5 border-r-0 md:border-r border-slate-100 pr-4 last:border-0">
      <div className="flex items-center gap-2 text-slate-400">
        {icon}
        <label className="text-[10px] font-bold uppercase tracking-widest">
          {label}
        </label>
      </div>
      <div className="relative">
        <select className="w-full appearance-none bg-slate-50 border border-slate-100 rounded-md px-3 py-2.5 text-slate-700 text-sm focus:outline-none focus:ring-1 focus:ring-[#005596]">
          {children}
        </select>
        <ChevronDown
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
          size={14}
        />
      </div>
    </div>
  );
}
