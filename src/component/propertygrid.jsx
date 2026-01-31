import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const PropertyGridCompact = () => {
  // Array of 12 properties
  const properties = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: i % 2 === 0 ? "Divine Heights" : "Silver Enclave",
    city: i % 3 === 0 ? "Ujjain" : "Indore",
    price: "₹45.5 L",
    image: `https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=400`, 
  }));

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="mb-8 border-l-4 border-[#f58025] pl-4">
          <h2 className="text-2xl font-bold text-[#005596] uppercase tracking-tight">
            Featured Listings
          </h2>
          <p className="text-sm text-gray-500">Fast navigation to top properties in MP</p>
        </div>

        {/* 6-Column Grid for Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="group cursor-pointer bg-white border border-gray-100 rounded-lg overflow-hidden hover:border-[#f58025] hover:shadow-md transition-all duration-300"
            >
              {/* Compact Image */}
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                   <p className="text-white text-[10px] font-bold flex items-center gap-1">
                    <MapPin size={10} className="text-[#f58025]" /> {property.city}
                  </p>
                </div>
              </div>

              {/* Minimalist Details */}
              <div className="p-3">
                <h3 className="text-sm font-bold text-[#005596] truncate mb-1">
                  {property.name}
                </h3>
                
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[#f58025] text-sm font-extrabold">
                    {property.price}
                  </span>
                  <div className="bg-gray-100 group-hover:bg-[#005596] group-hover:text-white p-1 rounded transition-colors">
                    <ChevronRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyGridCompact;