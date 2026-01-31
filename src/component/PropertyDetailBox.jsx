import React, { useState, useEffect, useRef } from "react";
import { Home, Sun, TreePine, CreditCard, Send } from "lucide-react";
import ThankYouModal from "./Thanks";

const PropertyPage = () => {
  const [activeNav, setActiveNav] = useState("About");
  const navRef = useRef(null);
  const [showThankYou, setShowThankYou] = useState(false);
  

  const handleSubmitInterest = (e) => {
    e.preventDefault();
    // TODO: send form data to backend or email
    
    setShowThankYou(true);
  };

  const handleSeeSimilar = () => {
    setShowThankYou(false);
    // Option 1: navigate to listing page with filters
    window.location.href = "/property";
    // or use react-router navigate with state/params
  };

  const sections = [
    { id: "about", label: "About" },
    { id: "map", label: "See on Map" },
    { id: "facing", label: "Facing" },
    { id: "amenities", label: "Amenities" },
    { id: "surroundings", label: "Surrounding Aminities" },
    { id: "billing", label: "Billing Plan" },
    { id: "reviews", label: "Reviews" },
  ];

  // Auto-scroll the horizontal nav bar when a section is active
  useEffect(() => {
    const activeElement = document.getElementById(`nav-${activeNav}`);
    if (activeElement && navRef.current) {
      const navWidth = navRef.current.offsetWidth;
      const elementOffset = activeElement.offsetLeft;
      const elementWidth = activeElement.offsetWidth;
      navRef.current.scrollTo({
        left: elementOffset - navWidth / 2 + elementWidth / 2,
        behavior: "smooth",
      });
    }
  }, [activeNav]);

  return (
    <div className="bg-[#F8FAFC] min-h-screen font-sans text-slate-900 pb-20">
      {/* 1. HORIZONTAL DRAGGABLE NAVIGATION */}
      <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div
          ref={navRef}
          className="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar whitespace-nowrap px-6 py-4 gap-8 scroll-smooth cursor-grab active:cursor-grabbing"
        >
          {sections.map((item) => (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => {
                setActiveNav(item.id);
                const sectionEl = document.getElementById(item.id);
                if (sectionEl) {
                  const y =
                    sectionEl.getBoundingClientRect().top +
                    window.scrollY -
                    100;
                  window.scrollTo({ top: y, behavior: "smooth" });
                }
              }}
              className={`text-sm font-semibold transition-all pb-1 border-b-2 ${
                activeNav === item.id
                  ? "text-[#034A91] border-[#034A91]"
                  : "text-slate-400 border-transparent hover:text-slate-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 mt-8 grid lg:grid-cols-3 gap-10">
        {/* LEFT COLUMN: PROPERTY CONTENT */}
        <div className="lg:col-span-2 border-r border-slate-200">
          {/* Property Header Card */}
          <div className="bg-white px-8 py-6 border-b border-slate-200">
            <h2 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">
              Shivangan Valley
            </h2>
            <h1 className="text-2xl font-bold text-[#034A91] mb-6">
              Residential Land / Plot for Sale in Dewas Road, Ujjain
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 py-6 border-y border-slate-200">
              <div className="px-4 py-0 border-r border-slate-100 last:border-r-0">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                  Price
                </p>
                <p className="font-bold text-lg text-slate-900">₹ 21.20 Lac</p>
              </div>
              <div className="px-4 py-0 border-r border-slate-100 last:border-r-0">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                  Plot Area
                </p>
                <p className="font-bold text-lg text-slate-900">800 sq.ft</p>
              </div>
              <div className="px-4 py-0 border-r border-slate-100 last:border-r-0">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                  Ownership
                </p>
                <p className="font-bold text-lg text-slate-900">Freehold</p>
              </div>
              <div className="px-4 py-0">
                <p className="text-xs text-slate-400 font-bold uppercase mb-1">
                  Location
                </p>
                <p className="font-bold text-lg text-slate-900">Ujjain</p>
              </div>
            </div>
          </div>

          {/* Section: About */}
          <section
            id="about"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              About Narwar Pride
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Broaden across 8 acres, Narwar Pride is designed for modern
              living. Strategically located on Dewas Road, these plots offer
              RERA-compliant, documented security for your family's future. The
              project features 24/7 surveillance and wide internal roads.
            </p>
          </section>

          {/* Section: Download */}
          <section
            id="download"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Download Documents
            </h3>
            <div className="space-y-3">
              {["Brochure", "Floor Plans"].map((doc, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-3 px-4 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-medium text-slate-900">
                    {doc}
                  </span>
                  <span className="text-xs text-slate-400">LOCKED</span>
                </div>
              ))}
            </div>
          </section>

          <section
            id="map"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              See on Map
            </h3>
            <div className="w-full h-64 md:h-80 border border-slate-200 overflow-hidden">
              <iframe
                title="Property location"
                src="https://www.google.com/maps/embed?pb=YOUR_LONG_EMBED_STRING_HERE"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </section>

          {/* Section: Facing */}
          <section
            id="facing"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Property Facing
            </h3>
            <div className="grid grid-cols-4 gap-0 border border-slate-200">
              {["North", "South", "East", "West"].map((direction, idx) => (
                <div
                  key={idx}
                  className="py-4 px-4 border-r border-slate-200 last:border-r-0 text-center bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <p className="font-semibold text-sm text-slate-900">
                    {direction}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Amenities */}
          <section
            id="amenities"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">Amenities</h3>
            <div className="grid grid-cols-4 gap-0 border border-slate-200">
              {[
                { icon: <TreePine size={20} />, label: "Party Lawn" },
                { icon: <Home size={20} />, label: "Club House" },
                { icon: <Sun size={20} />, label: "Yoga Zone" },
                { icon: <CreditCard size={20} />, label: "Library" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="py-6 px-4 border-r border-slate-200 last:border-r-0 flex flex-col items-center bg-slate-50 hover:bg-slate-100 transition-colors text-center"
                >
                  <div className="text-slate-600 mb-2">{item.icon}</div>
                  <span className="text-xs font-semibold text-slate-700">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Surrounding Amenities */}
          <section
            id="surroundings"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Surrounding Amenities
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  icon: "🏥",
                  name: "Hospital",
                  distance: "2 km",
                  note: "Multi‑speciality within 5 min drive",
                },
                {
                  icon: "🎓",
                  name: "School",
                  distance: "1.5 km",
                  note: "CBSE & local schools nearby",
                },
                {
                  icon: "🛒",
                  name: "Shopping",
                  distance: "3 km",
                  note: "Daily needs & groceries",
                },
                {
                  icon: "🚊",
                  name: "Transit",
                  distance: "5 km",
                  note: "Rail / bus connectivity",
                },
                {
                  icon: "🏬",
                  name: "Commercial Hub",
                  distance: "4 km",
                  note: "Markets & offices",
                },
                {
                  icon: "🌳",
                  name: "Garden / Park",
                  distance: "1 km",
                  note: "Public recreation zone",
                },
                {
                  icon: "⛽",
                  name: "Fuel Station",
                  distance: "1.2 km",
                  note: "24x7 petrol pump",
                },
                {
                  icon: "🕌",
                  name: "Temple / Worship",
                  distance: "2.5 km",
                  note: "Peaceful surroundings",
                },
              ].map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-5 text-center shadow-[0_10px_28px_rgba(15,23,42,0.06)] hover:bg-white hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] transition-all"
                >
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/5 text-3xl">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-[#f58025]">
                    {item.distance}
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500 leading-snug">
                    {item.note}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Billing Plan */}
          <section id="billing" className="bg-white px-8 py-6">
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Billing Plan
            </h3>
            <div className="space-y-0 border border-slate-200">
              {[
                { phase: "Registration", percent: "10%" },
                { phase: "On Site Possession", percent: "30%" },
                { phase: "On Possession", percent: "60%" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4 px-4 border-b border-slate-200 last:border-b-0 bg-slate-50"
                >
                  <span className="font-medium text-sm text-slate-900">
                    {item.phase}
                  </span>
                  <span className="font-bold text-slate-900">
                    {item.percent}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section id="reviews" className="bg-white px-8 py-6">
            <h3 className="text-lg font-bold mb-4 text-slate-900">Reviews</h3>

            {/* Average rating summary */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm font-semibold text-slate-900">4.6 / 5</p>
                <p className="text-xs text-slate-500">Based on 18 reviews</p>
              </div>
              <div className="flex items-center gap-1 text-[#f58025] text-sm">
                {"★★★★☆"}
              </div>
            </div>

            {/* Existing reviews list */}
            <div className="space-y-3 border border-slate-200">
              {[
                {
                  name: "Amit Sharma",
                  date: "Dec 2025",
                  rating: 5,
                  text: "Good location and clear documentation. Roads and layout are well planned.",
                },
                {
                  name: "Neha Patel",
                  date: "Nov 2025",
                  rating: 4,
                  text: "Appreciated the support from the team and transparency in pricing.",
                },
              ].map((rev, i) => (
                <div
                  key={i}
                  className="px-4 py-3 border-b border-slate-200 last:border-b-0 bg-slate-50"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm font-semibold text-slate-900">
                      {rev.name}
                    </p>
                    <span className="text-[11px] text-slate-400">
                      {rev.date}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[#f58025] mb-1">
                    {"★".repeat(rev.rating)}
                    {"☆".repeat(5 - rev.rating)}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {rev.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Write a review box */}
            <div className="mt-5 border border-slate-200 p-4 bg-slate-50">
              <p className="text-sm font-semibold text-slate-900 mb-3">
                Write a review
              </p>

              {/* Rating selector (simple for now) */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs text-slate-600">Your rating:</span>
                <div className="flex gap-1 text-lg cursor-pointer">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx}>☆</span>
                  ))}
                </div>
              </div>

              <textarea
                rows="3"
                placeholder="Share your experience about this property..."
                className="w-full bg-white border border-slate-200 p-2 text-xs rounded-sm focus:outline-none focus:ring-1 focus:ring-[#034A91]/30"
              ></textarea>

              <button
                type="button"
                className="mt-3 inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-[#034A91] hover:bg-[#023B75] transition-colors"
              >
                Submit Review
              </button>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: STICKY CONTACT FORM */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white p-8 rounded-md border border-slate-200 shadow-xl shadow-blue-900/5">
            <h3 className="text-lg font-bold mb-6">
              Interested in this Property?
            </h3>
            <form className="space-y-4" onSubmit={handleSubmitInterest}>
              <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    className="accent-[#034A91]"
                    defaultChecked
                  />
                  <span className="text-sm font-medium">Individual</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="type"
                    className="accent-[#034A91]"
                  />
                  <span className="text-sm font-medium">Agent</span>
                </label>
              </div>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-slate-50 border border-slate-100 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
              />
             
              <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full bg-slate-50 border border-slate-100 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
              />

              <textarea
                rows="4"
                placeholder="I am interested in this property..."
                className="w-full bg-slate-50 border border-slate-100 p-3 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
              ></textarea>

              <button className="w-full bg-[#f58025] hover:bg-[#023B75] text-white font-bold py-4 rounded-md flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/20">
                Submit Interest <Send size={16} />
              </button>

              <p className="text-[10px] text-slate-400 text-center mt-4">
                By submitting, you agree to be contacted by Prarambh Infra via
                call/WhatsApp/SMS.
              </p>
            </form>
             <ThankYouModal
        isOpen={showThankYou}
        onClose={() => setShowThankYou(false)}
        onSeeSimilar={handleSeeSimilar}
      />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PropertyPage;
