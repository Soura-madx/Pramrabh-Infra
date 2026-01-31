import React, { useRef } from 'react';
import { MapPin, ChevronRight, ChevronLeft } from 'lucide-react';

// Property Card Component
const PropertyCard = ({ property }) => {
  return (
    <div className="flex-shrink-0 w-72 border p-3 rounded-sm border-slate-100 bg-gray-100 hover:shadow-md transition-shadow duration-300 group cursor-pointer overflow-hidden">
      {/* Image */}
      <div className="relative rounded-sm h-48 bg-slate-100 overflow-hidden border-b border-slate-200">
        <img 
          src={property.image} 
          alt={property.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-0 ">
        {/* Property Name */}
        <div className="px-4 pt-4 pb-2">
          <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#005596] transition-colors">
            {property.name}
          </h3>
        </div>

        {/* Address */}
        <div className="px-4 pb-4">
          <div className="flex items-start gap-2">
            <MapPin size={14} className="text-[#005596] flex-shrink-0 mt-0.5" />
            <p className="text-xs text-slate-600 font-semibold">{property.address}</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200" />

        {/* Price & Size Grid */}
        <div className="px-4 py-4 grid grid-cols-2 gap-4 bg-slate-50">
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide mb-1">Price</p>
            <p className="text-sm font-bold text-slate-900">{property.price}</p>
          </div>
          <div>
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wide mb-1">Size</p>
            <p className="text-sm font-bold text-slate-900">{property.size}</p>
          </div>
        </div>

        {/* View Details Button */}
        <button className="w-full rounded-sm py-3 px-4 bg-[#005596] hover:bg-[#f58025]  hover:text-white text-white font-bold text-sm transition-all border-t border-slate-200 flex items-center justify-center gap-2">
          DETAILS
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

// Property Data
const similarPropertiesData = [
  {
    id: 1,
    name: "Narwar Pride - Plot A",
    address: "Dewas Road, Ujjain",
    price: "₹ 21.20 Lac",
    size: "800 sq.ft",
    image: "/images/property1.jpg"
  },
  {
    id: 2,
    name: "Narwar Pride - Plot B",
    address: "Dewas Road, Ujjain",
    price: "₹ 24.50 Lac",
    size: "950 sq.ft",
    image: "/images/property2.jpg"
  },
  {
    id: 3,
    name: "Narwar Pride - Plot C",
    address: "Dewas Road, Ujjain",
    price: "₹ 18.75 Lac",
    size: "700 sq.ft",
    image: "/images/property3.jpg"
  },
  {
    id: 4,
    name: "Godrej Nirvaan - Phase 2",
    address: "Thane, Mumbai",
    price: "₹ 45.00 Lac",
    size: "1200 sq.ft",
    image: "/images/property4.jpg"
  },
  {
    id: 5,
    name: "Green Valley - Premium",
    address: "Indore Highway, Indore",
    price: "₹ 16.80 Lac",
    size: "650 sq.ft",
    image: "/images/property1.jpg"
  },
  {
    id: 6,
    name: "Premium Plots - Sector 5",
    address: "Ujjain Bypass, Ujjain",
    price: "₹ 19.50 Lac",
    size: "850 sq.ft",
    image: "/images/property2.jpg"
  }
];

// Similar Properties Section Component
const SimilarPropertiesSection = () => {
  const scrollContainerRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right function
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white border-t border-slate-200 px-0 py-0">
      {/* Section Header */}
      <div className="px-8 py-6 border-b border-slate-200 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">Similar Properties</h2>
        <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">
          Explore {similarPropertiesData.length} properties available in the area
        </p>
      </div>

      {/* Properties Grid with Scroll Controls */}
      <div className="px-8 py-6 max-w-7xl mx-auto">
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200  p-2 transition-all shadow-sm"
          >
            <ChevronLeft size={20} className="text-[#005596]" />
          </button>

          {/* Scroll Container - Hidden Scrollbar */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scroll-smooth"
            style={{
              scrollBehavior: 'smooth',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none'
            }}
          >
            <style>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            <div className="flex gap-6 min-w-min pb-2  ">
              {similarPropertiesData.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-slate-200 hover:bg-slate-50 p-2 transition-all shadow-md"
          >
            <ChevronRight size={20} className="text-[#0005596]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SimilarPropertiesSection;
