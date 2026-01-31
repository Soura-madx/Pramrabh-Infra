import React, { useState, useEffect, useRef } from "react";
import { Home, Sun, TreePine, CreditCard, Send } from "lucide-react";
import { NavLink, useParams } from "react-router-dom";
import PropertyImageGallery from "../component/property-images";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import ThankYouModal from "../component/Thanks";
const PRIMARY = "#005596";
const ACCENT = "#f58025";


const PROPERTY_OPTIONS = [
  { bhk: "2 BHK", label: "2 BHK Apartments", range: "800 – 950 sq.ft", price: "₹ 32 – 38 Lac" },
  { bhk: "3 BHK", label: "3 BHK Apartments", range: "1100 – 1350 sq.ft", price: "₹ 44 – 55 Lac" },
  { bhk: "4 BHK", label: "4 BHK Apartments", range: "1500 – 1800 sq.ft", price: "₹ 62 – 75 Lac" },
];


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
      "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Garden", "Street lights", "Water & electricity lines"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "New Launch",
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
      "https://images.pexels.com/photos/220182/pexels-photo-220182.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Wide roads", "Street lights"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "",
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
      "https://images.pexels.com/photos/4392274/pexels-photo-4392274.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Parking", "Lift"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "Budget",
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
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Terrace", "Parking"],
    parking: "Covered",
    rera: "A‑UJN‑25‑2120",
    tag: "",
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
      "https://images.pexels.com/photos/3735419/pexels-photo-3735419.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["High street frontage"],
    parking: "Open",
    rera: "A‑UJN‑25‑2120",
    tag: "Commercial",
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
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    floorPlan: null,
    videoUrl: null,
    mapsUrl: "https://maps.google.com",
    amenities: ["Garden", "Car parking"],
    parking: "2 Covered",
    rera: "MP‑RERA‑XXXX",
    tag: "Premium",
  },
];


const images = [
  {
    src: "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Front elevation",
  },
  {
    src: "https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Living room",
  },
  {
    src: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/5563469/pexels-photo-5563469.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/5825538/pexels-photo-5825538.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/7163610/pexels-photo-7163610.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/3615182/pexels-photo-3615182.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/3615182/pexels-photo-3615182.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/5570226/pexels-photo-5570226.jpeg",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200",
    label: "Floor plan",
  },
  {
    src: "https://images.pexels.com/photos/2343465/pexels-photo-2343465.jpeg",
    label: "Floor plan",
  },
];
   

const PropertyPage = () => {
  const [activeNav, setActiveNav] = useState("About");
 const [activeBhk, setActiveBhk] = useState("2 BHK");
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

  
  const navRef = useRef(null);
   const { id } = useParams();
  const propertyId = Number(id);
    const property = initialProperties[0];

  
  const active = PROPERTY_OPTIONS.find((p) => p.bhk === activeBhk);
  


    
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!2m3...[long string]..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>


  const sections = [
    { id: "about", label: "About" },
    { id: "price", label: "Price" },
    { id: "property", label: "Property" },
    { id: "floorplan", label: "Floor Plan" },
    { id: "speciality", label: "Speciality" },
    { id: "map", label: "See on Map" },
    { id: "amenities", label: "Amenities" },
    { id: "surroundings", label: "Surrounding Amenities" },
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
    <div>
    <div className="bg-[#F8FAFC] max-w-7xl mx-auto min-h-screen font-sans text-slate-900 pb-20">
        <Navbar/>
        <div className="space mt-20"></div>
        <PropertyImageGallery  images={images}  title={property.title}/>
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
          {/* Section: About */}
          <section
            id="about"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Project Details
            </h3>
            <p className="text-slate-600 text-sm mb-4">
              Narwar Pride is a planned residential township designed for
              families and investors on Dewas Road, Ujjain.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 border border-slate-200">
              <div className="px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
                  Project Name
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Narwar Pride
                </p>
              </div>
              <div className="px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
                  Built‑up Area
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  800 – 1500 sq.ft
                </p>
              </div>
              <div className="px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200">
                <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
                  Market Value
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  ₹ 2,650 – 3,200 / sq.ft
                </p>
              </div>
              <div className="px-4 py-3 md:border-r border-slate-200">
                <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
                  Address
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  Dewas Road, near Ring Road Junction, Ujjain (M.P.)
                </p>
              </div>
              <div className="px-4 py-3 md:border-r border-slate-200">
                <p className="text-[11px] font-semibold text-slate-500 uppercase mb-1">
                  Total Apartments / Units
                </p>
                <p className="text-sm font-semibold text-slate-900">
                  220+ plotted units (multiple sizes)
                </p>
              </div>
            </div>
          </section>

          <section
            id="price"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Configuration & Price
            </h3>
            <div className="border border-slate-200">
              {[
                {
                  bhk: "2 BHK",
                  size: "800 – 950 sq.ft",
                  price: "₹ 32 – 38 Lac",
                },
                {
                  bhk: "3 BHK",
                  size: "1100 – 1350 sq.ft",
                  price: "₹ 44 – 55 Lac",
                },
                {
                  bhk: "4 BHK",
                  size: "1500 – 1800 sq.ft",
                  price: "₹ 62 – 75 Lac",
                },
              ].map((row, i) => (
                <div
                  key={row.bhk}
                  className="flex items-center justify-between px-4 py-3 border-b border-slate-200 last:border-b-0 bg-slate-50"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {row.bhk}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Built‑up {row.size}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-slate-900">
                    {row.price}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="floorplan"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Floor Plan
            </h3>
            <div className="border border-slate-200 divide-y divide-slate-200">
              {[
                { bhk: "2 BHK", img: "/images/2bhk.png" },
                { bhk: "3 BHK", img: "/images/2bhk.png" },
                { bhk: "4 BHK", img: "/images/4bhk.jpg" },
              ].map((item, i) => (
                <details key={item.bhk} className="group">
                  <summary className="flex cursor-pointer items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100">
                    <span className="text-sm font-semibold text-slate-900">
                      {item.bhk} Floor Plan
                    </span>
                    <span className="text-xs text-slate-500 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="px-4 py-4 bg-white">
                    <div className="border border-slate-200 h-56 md:h-72 flex items-center justify-center bg-slate-50">
                      
                      <img src={item.img} alt={`${item.bhk} floor plan`} className="h-full w-auto object-contain" />
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </section>


           <section className="bg-white border-y border-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-4 lg:px-6">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <div>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.22em] mb-1"
              style={{ color: ACCENT }}
            >
              Property
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Choose your preferred configuration
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm">
            Select 2, 3 or 4 BHK to view quick details and proceed to see the
            exact properties available in this project.
          </p>
        </div>

        {/* Button group */}
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 mb-6">
          {PROPERTY_OPTIONS.map((opt) => {
            const isActive = opt.bhk === activeBhk;
            return (
              <button
                key={opt.bhk}
                type="button"
                onClick={() => setActiveBhk(opt.bhk)}
                className={[
                  "px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all",
                  isActive
                    ? "bg-[#005596] text-white shadow-sm"
                    : "text-slate-600 hover:bg-white",
                ].join(" ")}
              >
                {opt.bhk}
              </button>
            );
          })}
        </div>

        {/* Active BHK summary + See Property */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-md border border-slate-200 bg-slate-50 px-5 py-4 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
          <div>
            <p className="text-sm font-semibold text-slate-900">
              {active.label}
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Built‑up area: <span className="font-semibold">{active.range}</span>
            </p>
            <p className="text-xs text-slate-500">
              Price range: <span className="font-semibold">{active.price}</span>
            </p>
          </div>

<NavLink to={'/property'}>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md px-5 py-2 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5"
            style={{ backgroundColor: ACCENT }}
          >
            See {active.bhk} Property
          </button>
</NavLink>
        </div>
      </div>
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
              {[
                "Brochure",
                "Floor Plans",
               
              ].map((doc, idx) => (
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

      // Replace the current Surrounding Amenities section with this:

<section
  id="surroundings"
  className="bg-white px-8 py-6 border-b border-slate-200"
>
  <h3 className="text-lg font-bold mb-4 text-slate-900">
    Surrounding Amenities
  </h3>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { icon: "🏥", name: "Hospital", distance: "2 km", note: "Multi‑speciality within 5 min drive" },
      { icon: "🎓", name: "School", distance: "1.5 km", note: "CBSE & local schools nearby" },
      { icon: "🛒", name: "Shopping", distance: "3 km", note: "Daily needs & groceries" },
      { icon: "🚊", name: "Transit", distance: "5 km", note: "Rail / bus connectivity" },
      { icon: "🏬", name: "Commercial Hub", distance: "4 km", note: "Markets & offices" },
      { icon: "🌳", name: "Garden / Park", distance: "1 km", note: "Public recreation zone" },
      { icon: "⛽", name: "Fuel Station", distance: "1.2 km", note: "24x7 petrol pump" },
      { icon: "🕌", name: "Temple / Worship", distance: "2.5 km", note: "Peaceful surroundings" },
    ].map((item) => (
      <div
        key={item.name}
        className="flex flex-col items-center justify-between rounded-md border border-slate-200 bg-slate-50 px-4 py-5 text-center shadow-sm hover:bg-white hover:shadow-md transition-all"
      >
        <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/5 text-3xl">
          {item.icon}
        </div>
        <p className="text-sm font-semibold text-slate-900">{item.name}</p>
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

          <section
            id="speciality"
            className="bg-white px-8 py-6 border-b border-slate-200"
          >
            <h3 className="text-lg font-bold mb-4 text-slate-900">
              Project Speciality
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200">
              {[
                "Underground water tank & planned water network",
                "24/7 security with gated entry and CCTV surveillance",
                "Wide internal roads with street lighting",
                "Dedicated kids play area and landscaped gardens",
                "Clear titles and RERA‑registered development",
                "Proposed commercial pockets within the township",
              ].map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 px-4 py-3 border-b md:border-b-0 md:border-r border-slate-200 last:border-r-0 bg-slate-50"
                >
                  <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-[#f58025]" />
                  <p className="text-xs text-slate-700">{point}</p>
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
    
      <Footer/>

      </div>
  );
};

export default PropertyPage;
