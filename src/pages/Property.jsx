// src/pages/PropertyListingPage.jsx
import React, { useMemo, useState } from "react";
import CityLocalityExplorer from "../component/locality";
import Navbar from "../component/Navbar";
import { Link } from "react-router-dom";
import Footer from "../component/footer";
import {  Share2, MapPin, CheckCircle2 } from "lucide-react";

const primaryBlue = "#005596";
const primaryOrange = "#f58025";

// Preset ranges
const PRICE_RANGES = [
  { label: "Any budget", min: "", max: "" },
  { label: "₹0 – 25 Lac", min: 0, max: 2500000 },
  { label: "₹25 – 50 Lac", min: 2500000, max: 5000000 },
  { label: "₹50 – 75 Lac", min: 5000000, max: 7500000 },
  { label: "₹75 Lac – 1 Cr", min: 7500000, max: 10000000 },
  { label: "₹1 Cr +", min: 10000000, max: "" },
];

const AREA_RANGES = [
  { label: "Any size", min: "", max: "" },
  { label: "0 – 800 sq.ft", min: 0, max: 800 },
  { label: "800 – 1200 sq.ft", min: 800, max: 1200 },
  { label: "1200 – 1800 sq.ft", min: 1200, max: 1800 },
  { label: "1800 – 2500 sq.ft", min: 1800, max: 2500 },
  { label: "2500+ sq.ft", min: 2500, max: "" },
];

const AMENITY_OPTIONS = [
  "Lift", "24/7 Security", "Clubhouse", "Children's park", 
  "Corner", "Garden", "Swimming pool", "Gym", "Parking"
];

// Demo data – replace with API / DB data
const initialProperties = [
  {
    id: 1,
    title: "Sun‑drenched 3BHK with Garden Views",
    type: "Apartment",
    transactionType: "Sale",
    price: 7500000,
    priceLabel: "₹75 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Nagziri",
    landmark: "Near Ring Road",
    areaBuiltUp: 1500,
    areaCarpet: 1180,
    bhk: 3,
    baths: 3,
    balconies: 2,
    floor: 6,
    totalFloors: 12,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "East",
    photos: [
      "/images/room9.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: [
      "Lift",
      "24/7 Security",
      "Clubhouse",
      "Children's park",
      "Power backup",
    ],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "Featured",
    project: "Shivangan Valley", // Real project from brochure
  },
  {
    id: 2,
    title: "Vaastu‑friendly Residential Plot in Prime Township",
    type: "Plot/Land",
    transactionType: "Sale",
    price: 2500000,
    priceLabel: "₹25 Lac",
    negotiable: false,
    city: "Ujjain",
    locality: "Indore Road",
    landmark: "Near Divine Valley",
    areaBuiltUp: 1000,
    areaCarpet: 1000,
    bhk: null,
    baths: null,
    balconies: null,
    floor: null,
    totalFloors: null,
    furnishing: "NA",
    age: "New",
    facing: "North‑East",
    photos: [
      "/images/room3.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Garden", "Street lights", "Water & electricity lines"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "New Launch",
    project: "RK NIVAS", // Real project referenced in Ujjain
  },
  {
    id: 3,
    title: "Premium 4BHK Villa with Private Lawn",
    type: "Villa",
    transactionType: "Sale",
    price: 13500000,
    priceLabel: "₹1.35 Cr",
    negotiable: true,
    city: "Indore",
    locality: "Super Corridor",
    landmark: "Near IT Park",
    areaBuiltUp: 2600,
    areaCarpet: 2100,
    bhk: 4,
    baths: 4,
    balconies: 3,
    floor: 2,
    totalFloors: 2,
    furnishing: "Fully‑furnished",
    age: "New",
    facing: "West",
    photos: [
      "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Clubhouse", "Swimming pool", "Gym", "24/7 Security"],
    parking: "2 Covered",
    rera: "MP‑RERA‑XXXX",
    tag: "Luxury",
    project: "Mangal Murti Nivas", // Dummy premium name
  },
  {
    id: 4,
    title: "Compact 2BHK Flat near City Center",
    type: "Apartment",
    transactionType: "Sale",
    price: 4200000,
    priceLabel: "₹42 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Freeganj",
    landmark: "Near Tower Chowk",
    areaBuiltUp: 900,
    areaCarpet: 750,
    bhk: 2,
    baths: 2,
    balconies: 1,
    floor: 3,
    totalFloors: 8,
    furnishing: "Unfurnished",
    age: "5–10 years",
    facing: "North",
    photos: [
      "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Lift", "Security", "Covered parking"],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "",
    project: "Central Plaza Residences",
  },
  {
    id: 5,
    title: "Corner Residential Plot in Gated Township",
    type: "Plot/Land",
    transactionType: "Sale",
    price: 3200000,
    priceLabel: "₹32 Lac",
    negotiable: false,
    city: "Ujjain",
    locality: "Dewas Road",
    landmark: "Near Ring Road Junction",
    areaBuiltUp: 1200,
    areaCarpet: 1200,
    bhk: null,
    baths: null,
    balconies: null,
    floor: null,
    totalFloors: null,
    furnishing: "NA",
    age: "New",
    facing: "East",
    photos: [
      "/images/room8.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Wide roads", "Street lights"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "",
    project: "Greenfield Meadows",
  },
  {
    id: 6,
    title: "Modern 3BHK Apartment with Club Access",
    type: "Apartment",
    transactionType: "Sale",
    price: 6400000,
    priceLabel: "₹64 Lac",
    negotiable: true,
    city: "Indore",
    locality: "Vijay Nagar",
    landmark: "Near Malls & Offices",
    areaBuiltUp: 1400,
    areaCarpet: 1100,
    bhk: 3,
    baths: 3,
    balconies: 2,
    floor: 7,
    totalFloors: 14,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "South",
    photos: [
      "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Pool", "Gym", "Clubhouse", "Security"],
    parking: "Covered",
    rera: "MP‑RERA‑XXXX",
    tag: "",
    project: "Metro Heights",
  },
  {
    id: 7,
    title: "1BHK Starter Home near College",
    type: "Apartment",
    transactionType: "Sale",
    price: 2200000,
    priceLabel: "₹22 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Nanakhheda",
    landmark: "Near Engineering College",
    areaBuiltUp: 550,
    areaCarpet: 450,
    bhk: 1,
    baths: 1,
    balconies: 1,
    floor: 2,
    totalFloors: 4,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "West",
    photos: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=120",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Parking", "Lift"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "Budget",
    project: "Academic Enclave",
  },
  {
    id: 8,
    title: "Ready‑to‑move 2BHK House with Terrace",
    type: "House",
    transactionType: "Sale",
    price: 5800000,
    priceLabel: "₹58 Lac",
    negotiable: false,
    city: "Ujjain",
    locality: "Rishi Nagar",
    landmark: "Near Divine Valley",
    areaBuiltUp: 1600,
    areaCarpet: 1300,
    bhk: 2,
    baths: 2,
    balconies: 1,
    floor: 1,
    totalFloors: 1,
    furnishing: "Unfurnished",
    age: "5–10 years",
    facing: "North‑East",
    photos: [
      "/images/room2.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Terrace", "Parking"],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "",
    project: "Rishi Heritage",
  },
  {
    id: 9,
    title: "Commercial Shop on Main Road",
    type: "Commercial",
    transactionType: "Sale",
    price: 9000000,
    priceLabel: "₹90 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Freeganj",
    landmark: "Main Market",
    areaBuiltUp: 600,
    areaCarpet: 520,
    bhk: null,
    baths: 1,
    balconies: null,
    floor: 0,
    totalFloors: 3,
    furnishing: "Bare shell",
    age: "0–5 years",
    facing: "East",
    photos: [
      "/images/room3.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["High street frontage"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "Commercial",
    project: "Freeganj Business Hub",
  },
  {
    id: 10,
    title: "4BHK Independent Bungalow with Garden",
    type: "House",
    transactionType: "Sale",
    price: 15500000,
    priceLabel: "₹1.55 Cr",
    negotiable: true,
    city: "Indore",
    locality: "Old Palasia",
    landmark: "Near Park",
    areaBuiltUp: 3000,
    areaCarpet: 2500,
    bhk: 4,
    baths: 4,
    balconies: 2,
    floor: 2,
    totalFloors: 2,
    furnishing: "Semi‑furnished",
    age: "10+ years",
    facing: "South",
    photos: [
      "/images/room6.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Garden", "Car parking"],
    parking: "2 Covered",
    rera: "MP‑RERA‑XXXX",
    tag: "Premium",
    project: "The Palasia Manor",
  },
  {
    id: 11,
    title: "Sun‑drenched 3BHK with Garden Views",
    type: "Apartment",
    transactionType: "Sale",
    price: 7500000,
    priceLabel: "₹75 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Nagziri",
    landmark: "Near Ring Road",
    areaBuiltUp: 1500,
    areaCarpet: 1180,
    bhk: 3,
    baths: 3,
    balconies: 2,
    floor: 6,
    totalFloors: 12,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "East",
    photos: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: [
      "Lift",
      "24/7 Security",
      "Clubhouse",
      "Children's park",
      "Power backup",
    ],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "Featured",
    possessionStatus: "Ready to move",
    project: "Shivangan Valley",
  },
  {
    id: 12,
    title: "Sun‑drenched 3BHK with Garden Views",
    type: "Apartment",
    transactionType: "Sale",
    price: 7500000,
    priceLabel: "₹75 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Nagziri",
    landmark: "Near Ring Road",
    areaBuiltUp: 1500,
    areaCarpet: 1180,
    bhk: 3,
    baths: 3,
    balconies: 2,
    floor: 6,
    totalFloors: 12,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "East",
    photos: [
      "/images/room7.jpg",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: [
      "Lift",
      "24/7 Security",
      "Clubhouse",
      "Children's park",
      "Power backup",
    ],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "Featured",
    possessionStatus: "Ready to move",
    project: "Shivangan Valley",
  },
  {
    id: 13,
    title: "Sun‑drenched 3BHK with Garden Views",
    type: "Apartment",
    transactionType: "Sale",
    price: 7500000,
    priceLabel: "₹75 Lac",
    negotiable: true,
    city: "Ujjain",
    locality: "Nagziri",
    landmark: "Near Ring Road",
    areaBuiltUp: 1500,
    areaCarpet: 1180,
    bhk: 3,
    baths: 3,
    balconies: 2,
    floor: 6,
    totalFloors: 12,
    furnishing: "Semi‑furnished",
    age: "0–5 years",
    facing: "East",
    photos: [
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: [
      "Lift",
      "24/7 Security",
      "Clubhouse",
      "Children's park",
      "Power backup",
    ],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "Featured",
    possessionStatus: "Ready to move",
    project: "Shivangan Valley",
  },
];

const PropertyListingPage = () => {
  const [filters, setFilters] = useState({
    city: "",
    type: "",
    transactionType: "",
    minPrice: "",
    maxPrice: "",
    minArea: "",
    maxArea: "",
    minBhk: "",
    facing: "",
    priceRange: "",
    areaRange: "",
    possessionStatus: "",
    project: "",
    amenities: [],
  });
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const cities = Array.from(new Set(initialProperties.map((p) => p.city)));
  const types = Array.from(new Set(initialProperties.map((p) => p.type)));
  const projects = Array.from(
    new Set(initialProperties.map((p) => p.project).filter(Boolean))
  );

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const toggleAmenity = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
    setCurrentPage(1);
  };
  const filteredAndSorted = useMemo(() => {
    let list = [...initialProperties];

    if (filters.city) list = list.filter((p) => p.city === filters.city);
    if (filters.type) list = list.filter((p) => p.type === filters.type);
    if (filters.transactionType)
      list = list.filter((p) => p.transactionType === filters.transactionType);

    if (filters.project)
      list = list.filter((p) => p.project === filters.project);
    if (filters.minPrice)
      list = list.filter((p) => p.price >= Number(filters.minPrice));
    if (filters.maxPrice)
      list = list.filter((p) => p.price <= Number(filters.maxPrice));

    if (filters.minArea)
      list = list.filter((p) => p.areaBuiltUp >= Number(filters.minArea));
    if (filters.maxArea)
      list = list.filter((p) => p.areaBuiltUp <= Number(filters.maxArea));

    if (filters.possessionStatus)
      list = list.filter(
        (p) => p.possessionStatus === filters.possessionStatus
      );

    if (filters.minBhk)
      list = list.filter((p) => (p.bhk || 0) >= Number(filters.minBhk));
    if (filters.facing) list = list.filter((p) => p.facing === filters.facing);
if (filters.amenities.length > 0) {
      list = list.filter((p) => 
        filters.amenities.every(amenity => p.amenities?.includes(amenity))
      );}
    if (sortBy === "priceLow") list.sort((a, b) => a.price - b.price);
    else if (sortBy === "priceHigh") list.sort((a, b) => b.price - a.price);
    else if (sortBy === "areaHigh")
      list.sort((a, b) => b.areaBuiltUp - a.areaBuiltUp);

    return list;
  }, [filters, sortBy]);

  const totalProperties = filteredAndSorted.length;
  const totalPages = Math.max(1, Math.ceil(totalProperties / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageItems = filteredAndSorted.slice(
    startIndex,
    startIndex + pageSize
  );

  return (
    <div className="min-h-screen bg-[#f5f6fa] text-slate-900">
      <Navbar />
      <div className="space mt-20"></div>
      <main className="mx-auto max-w-7xl px-4 lg:px-8 py-10 lg:py-14 space-y-10">
        {/* Locality explorer */}
        <CityLocalityExplorer
          properties={initialProperties}
          onSelectCity={(city) => handleFilterChange("city", city)}
          onSelectLocality={(city, locality) => {
            handleFilterChange("city", city);
            // optional locality-specific filter if you add it
          }}
        />

        {/* MAIN: filters left, content right */}
        <section className="mt-4 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)] items-start">
          {/* LEFT – Filters */}
          <div className="space-y-4 lg:sticky lg:top-2 self-start">
            <div className="rounded-md bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)] border border-slate-100 px-4 sm:px-5 py-4 sm:py-5 space-y-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs sm:text-sm font-medium text-slate-700">
                  Filter by city, budget, size and more.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFilters({
                      city: "",
                      type: "",
                      transactionType: "",
                      minPrice: "",
                      maxPrice: "",
                      minArea: "",
                      maxArea: "",
                      minBhk: "",
                      facing: "",
                      priceRange: "",
                      areaRange: "",
                      possessionStatus: "",
                      project: "",
                    });
                    setCurrentPage(1);
                  }}
                  className="text-[11px] sm:text-xs text-slate-500 underline"
                >
                  Clear
                </button>
              </div>

              <div className="space-y-3">
                <FilterSelect
                  label="Property type"
                  value={filters.type}
                  onChange={(v) => handleFilterChange("type", v)}
                  options={types}
                  placeholder="All types"
                />
                <FilterSelect
                  label="Transaction"
                  value={filters.transactionType}
                  onChange={(v) => handleFilterChange("transactionType", v)}
                  options={["Buy","Sale", "Rent",]}
                  placeholder="Sale / Rent"
                />
                <FilterSelect
                  label="Project"
                  value={filters.project}
                  onChange={(v) => handleFilterChange("project", v)}
                  options={projects}
                  placeholder="All projects"
                />

                <FilterSelect
                  label="Min BHK"
                  value={filters.minBhk}
                  onChange={(v) => handleFilterChange("minBhk", v)}
                  options={["1", "2", "3", "4"]}
                  placeholder="Any"
                />
                <FilterSelect
                  label="Possession status"
                  value={filters.possessionStatus}
                  onChange={(v) => handleFilterChange("possessionStatus", v)}
                  options={["Ready to move", "Under construction", "Upcoming"]}
                  placeholder="Any"
                />

                {/* New dropdowns */}
                <FilterRangeSelect
                  label="Price range"
                  value={filters.priceRange}
                  onChange={(v) => {
                    const range =
                      PRICE_RANGES.find((r) => r.label === v) ||
                      PRICE_RANGES[0];
                    handleFilterChange("priceRange", v);
                    handleFilterChange(
                      "minPrice",
                      range.min === "" ? "" : String(range.min)
                    );
                    handleFilterChange(
                      "maxPrice",
                      range.max === "" ? "" : String(range.max)
                    );
                  }}
                  options={PRICE_RANGES.map((r) => r.label)}
                  placeholder="Select budget"
                />

                <FilterRangeSelect
                  label="Built‑up area"
                  value={filters.areaRange}
                  onChange={(v) => {
                    const range =
                      AREA_RANGES.find((r) => r.label === v) || AREA_RANGES[0];
                    handleFilterChange("areaRange", v);
                    handleFilterChange(
                      "minArea",
                      range.min === "" ? "" : String(range.min)
                    );
                    handleFilterChange(
                      "maxArea",
                      range.max === "" ? "" : String(range.max)
                    );
                  }}
                  options={AREA_RANGES.map((r) => r.label)}
                  placeholder="Select size"
                />

                <FilterSelect
                  label="Facing"
                  value={filters.facing}
                  onChange={(v) => handleFilterChange("facing", v)}
                  options={["East", "West", "North", "South",]}
                  placeholder="Any"
                />

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Amenities</label>
                  <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar">
                    {AMENITY_OPTIONS.map((amenity) => (
                      <label key={amenity} className="flex items-center gap-2 group cursor-pointer">
                        <input
                          type="checkbox"
                          checked={filters.amenities.includes(amenity)}
                          onChange={() => toggleAmenity(amenity)}
                          className="w-4 h-4 rounded border-slate-300 text-[#005596] focus:ring-[#005596]"
                        />
                        <span className="text-xs text-slate-600 group-hover:text-slate-900 transition-colors">
                          {amenity}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-md bg-white border border-slate-100 px-4 py-3 shadow-sm">
              <label className="block text-[11px] font-medium text-slate-600 mb-1">
                Sort by
              </label>
              <select
                className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
              >
                <option value="newest">Recommended</option>
                <option value="priceLow">Price – Low to High</option>
                <option value="priceHigh">Price – High to Low</option>
                <option value="areaHigh">Area – Large to Small</option>
              </select>
            </div>
          </div>

          {/* RIGHT – cards + pagination */}
          <div className="space-y-4">
            <section className="space-y-4">
              <div className="flex items-center justify-between text-xs sm:text-sm text-slate-600">
                <span>
                  Showing{" "}
                  <span className="font-semibold">
                    {currentPageItems.length}
                  </span>{" "}
                  of <span className="font-semibold">{totalProperties}</span>{" "}
                  properties
                </span>
              </div>

              <div className="space-y-4">
                {currentPageItems.map((p) => (
                  <PropertyCard key={p.id} property={p} />
                ))}
              </div>

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

/* Filters */

const FilterSelect = ({ label, value, onChange, options, placeholder }) => (
  <div className="flex flex-col">
    <label className="text-[11px] font-medium text-slate-600 mb-1">
      {label}
    </label>
    <select
      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const FilterRangeSelect = ({
  label,
  value,
  onChange,
  options,
  placeholder,
}) => (
  <div className="flex flex-col">
    <label className="text-[11px] font-medium text-slate-600 mb-1">
      {label}
    </label>
    <select
      className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-xs sm:text-sm outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

/* Smaller property card */

const PropertyCard = ({ property }) => {
  const {
    id,
    title,
    type,
    transactionType,
    priceLabel,
    negotiable,
    city,
    locality,
    areaBuiltUp,
    bhk,
    rera,
    photos,
    tag,
  } = property;

  const [liked, setLiked] = useState(false);
  const primaryBlue = "#005596";
  const accentOrange = "#f58025";

  const handleShare = (e) => {
    e.preventDefault(); // Prevents Link navigation
    // Add your sharing logic here
  };

  return (
    <Link to={`/property/${id}`} target="_blank" className="block group">
      <article className="rounded-sm bg-white border border-slate-100 shadow-sm overflow-hidden  transition-all duration-500">
        <div className="grid gap-0 md:grid-cols-[0.4fr_0.6fr]">
          {/* Image Column */}
          <div className="relative h-48 sm:h-52 md:h-full overflow-hidden">
            <img
              src={photos[0]}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Professional Tag */}
            {tag && (
              <span className="absolute left-3 top-3 rounded-lg bg-slate-900/80 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-white px-3 py-1.5 shadow-lg">
                {tag}
              </span>
            )}

            {/* Action Buttons: Top Right Positioned */}
            <div className="absolute right-3 top-3 flex flex-col gap-2">
              <button
                   type="button"
                   onClick={handleShare}
                   className="
                     group relative
                     h-10 w-10 sm:h-11 sm:w-11 rounded-full
                     bg-white/90 backdrop-blur-md border border-slate-200
                     flex items-center justify-center
                     shadow-[0_4px_12px_rgba(0,0,0,0.05)]
                     hover:bg-white hover:border-slate-300 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]
                     transition-all duration-300 ease-in-out
                     active:scale-90
                   "
                   aria-label="Share Property"
                 >
                   <Share2 
                     size={20} 
                     strokeWidth={2.2}
                     className="text-slate-600 transition-colors group-hover:text-[#005596]" 
                   />
             
                   {/* Subtle Tooltip for Desktop */}
                   <span className="absolute -bottom-10 scale-0 group-hover:scale-100 transition-all duration-200 bg-slate-900 text-white text-[10px] px-2 py-1.5 rounded-lg font-bold tracking-widest pointer-events-none shadow-xl">
                     SHARE
                   </span>
                 </button>
            </div>
          </div>

          {/* Content Column */}
          <div className="p-5 flex flex-col gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-lg  text-slate-900   ">{title}</h1>
                  <div className="flex items-center gap-1 text-slate-400 mt-1">
                    <MapPin size={12} />
                    <p className="text-[11px]  uppercase tracking-tighter">
                      {locality}, {city}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg  text-slate-900 leading-none">
                    {priceLabel}
                  </p>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase mt-1">
                    {negotiable ? "Negotiable" : "Fixed Price"}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Specs Bar */}
            <div className="flex items-center gap-4 py-3 border-y border-slate-50">
              <div className="text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Size
                </p>
                <p className="text-xs  text-slate-800">
                  {areaBuiltUp}{" "}
                  <span className="text-[9px] text-slate-400">Sqft</span>
                </p>
              </div>
              {bhk && (
                <>
                  <div className="w-px h-6 bg-slate-100" />
                  <div className="text-center">
                    <p className="text-[10px] text-slate-400 font-bold uppercase">
                      Type
                    </p>
                    <p className="text-xs  text-slate-800">{bhk} BHK</p>
                  </div>
                </>
              )}
              <div className="w-px h-6 bg-slate-100" />
              <div className="text-center">
                <p className="text-[10px] text-slate-400 font-bold uppercase">
                  Facing
                </p>
                <p className="text-xs  text-slate-800">
                  {property.facing || "N/A"}
                </p>
              </div>
            </div>

            {/* RERA & Footer */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-[#f58025]" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  RERA: {rera}
                </span>
              </div>
              <button
                className="px-5 py-2 rounded-sm text-white text-[11px] font-black uppercase tracking-widest shadow-lg transition-all hover:brightness-110 active:scale-95"
                style={{ backgroundColor: primaryBlue }}
              >
                Details
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};

/* Pagination */

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i += 1) pages.push(i);

  return (
    <nav
      className="flex items-center justify-center gap-2 pt-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className={`px-3 py-1.5 rounded-md text-xs sm:text-sm border ${
          currentPage === 1
            ? "text-slate-300 border-slate-200 bg-white"
            : "text-slate-700 border-slate-200 bg-white hover:bg-slate-50"
        }`}
      >
        Prev
      </button>

      <div className="flex items-center gap-1">
        {pages.map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            className={`w-8 h-8 rounded-md text-xs sm:text-sm border ${
              p === currentPage
                ? "bg-slate-900 text-white border-slate-900"
                : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className={`px-3 py-1.5 rounded-md text-xs sm:text-sm border ${
          currentPage === totalPages
            ? "text-slate-300 border-slate-200 bg-white"
            : "text-slate-700 border-slate-200 bg-white hover:bg-slate-50"
        }`}
      >
        Next
      </button>
    </nav>
  );
};

export default PropertyListingPage;
