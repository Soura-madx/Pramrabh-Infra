import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
const PROJECTS = [
  {
    id: 1,
    name: "Skyline Heights",
    city: "Indore",
    locality: "Vijay Nagar",
    bhk: "2 & 3 BHK",
    status: "Ongoing", // high-level status
    moved: "Under Construction", // moved filter
    authorization: "Pre-launch",
    type: "Residential",
    address: "Vijay Nagar, Indore, Madhya Pradesh",
    image: "project1.jpg",
  },
  {
    id: 2,
    name: "Capital Tower",
    city: "Indore",
    locality: "AB Road",
    bhk: "Office Spaces",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "AB Road, Indore, Madhya Pradesh",
    image: "project2.jpg",
  },
  {
    id: 3,
    name: "Riverfront Residency",
    city: "Ujjain",
    locality: "Mahakal Road",
    bhk: "2, 3 & 4 BHK",
    status: "Completed",
    moved: "Pre-launch",
    authorization: "RERA",
    type: "Residential",
    address: "Mahakal Road, Ujjain, Madhya Pradesh",
    image: "project3.jpg",
  },
  {
    id: 4,
    name: "Business Park One",
    city: "Ujjain",
    locality: "Dewas Road",
    bhk: "Retail & Offices",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "Dewas Road, Ujjain, Madhya Pradesh",
    image: "project4.jpg",
  },
  {
    id: 5,
    name: "Business Park One",
    city: "Ujjain",
    locality: "Dewas Road",
    bhk: "Retail & Offices",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "Dewas Road, Ujjain, Madhya Pradesh",
    image: "project5.jpg",
  },
  {
    id: 6,
    name: "Business Park One",
    city: "Ujjain",
    locality: "Dewas Road",
    bhk: "Retail & Offices",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "Dewas Road, Ujjain, Madhya Pradesh",
    image: "project6.jpg",
  },
  {
    id: 7,
    name: "Business Park One",
    city: "Ujjain",
    locality: "Dewas Road",
    bhk: "Retail & Offices",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "Dewas Road, Ujjain, Madhya Pradesh",
    image: "project7.jpg",
  },
  {
    id: 8,
    name: "Business Park One",
    city: "Ujjain",
    locality: "Dewas Road",
    bhk: "Retail & Offices",
    status: "Completed",
    moved: "Ready to Move",
    authorization: "RERA",
    type: "Commercial",
    address: "Dewas Road, Ujjain, Madhya Pradesh",
    image: "project8.jpg",
  },
];

const cityOptions = ["Indore", "Ujjain"];
const localityOptions = {
  Indore: ["Vijay Nagar", "AB Road", "Ring Road", "Rau"],
  Ujjain: ["Mahakal Road", "Dewas Road", "Freeganj", "Nanankheda"],
};
const statusOptions = ["Ongoing", "Ready to Move", "Completed"];
const typeOptions = ["Residential", "Commercial"];
const movedOptions = ["Ready to Move", "Under Construction"];
const authorizationOptions = ["Pre-launch", "RERA"];
const projectStatusOptions = ["Ongoing", "Completed", "Upcoming"];

const PRIMARY_BLUE = "#005596";
const ACCENT_ORANGE = "#f58025";

export default function ProjectGrid() {
  const [city, setCity] = useState("");
  const [locality, setLocality] = useState("");
  const [type, setType] = useState("");
  const [moved, setMoved] = useState("");
 
  const [projectStatus, setProjectStatus] = useState("");

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((p) => {
      if (city && p.city !== city) return false;
      if (locality && p.locality !== locality) return false;
      if (status && p.status !== status) return false; // optional old filter
      if (type && p.type !== type) return false;
      if (moved && p.moved !== moved) return false;
      if (projectStatus && p.status !== projectStatus) return false;
      return true;
    });
  }, [city, locality, status, type, moved, projectStatus]);

  const handleReset = () => {
    setCity("");
    setLocality("");
    setType("");
    setMoved("");
    setAuthorization("");
    setProjectStatus("");
  };

  return (
    <div>
      <section className="max-w-7xl mx-auto py-10 lg:py-12">
        {/* FILTER BAR – Prarambh style */}
        <div className="mb-8 border border-slate-200 bg-white px-5 py-4 shadow-md">
          <div className="flex flex-wrap items-center gap-4">
            {/* City */}
            <div className="flex flex-col min-w-[190px]">
              <label className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                City
              </label>
              <select
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  setLocality("");
                }}
                className="min-w-[170px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-[#005596] focus:ring-1 focus:ring-[#005596]/20"
              >
               
                {cityOptions.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>

            {/* Locality */}
            <div className="flex flex-col min-w-[190px]">
              <label className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Locality
              </label>
              <select
                value={locality}
                onChange={(e) => setLocality(e.target.value)}
                disabled={!city}
                className="min-w-[170px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#005596] focus:ring-1 focus:ring-[#005596]/20"
              >
                <option value="">
                  {city ? "All prime localities" : "Select city first"}
                </option>
                {city &&
                  localityOptions[city].map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
            </div>

           

            {/* Type */}
            <div className="flex flex-col min-w-[190px]">
              <label className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Type
              </label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="min-w-[170px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-[#005596] focus:ring-1 focus:ring-[#005596]/20"
              >
                
                {typeOptions.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Moved */}
            <div className="flex flex-col min-w-[190px]">
              <label className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Moved
              </label>
              <select
                value={moved}
                onChange={(e) => setMoved(e.target.value)}
                className="min-w-[170px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-[#005596] focus:ring-1 focus:ring-[#005596]/20"
              >
                
                {movedOptions.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

         
            {/* Status (Ongoing / Completed / Upcoming) */}
            <div className="flex flex-col min-w-[190px]">
              <label className="mb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-600">
                Status
              </label>
              <select
                value={projectStatus}
                onChange={(e) => setProjectStatus(e.target.value)}
                className="min-w-[170px] border border-slate-300 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-900 outline-none focus:border-[#005596] focus:ring-1 focus:ring-[#005596]/20"
              >
                
                {projectStatusOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Reset */}
            <button
              onClick={handleReset}
              className="ml-auto inline-flex items-center justify-center border border-slate-300 bg-white px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-800 hover:bg-slate-50"
            >
              Reset
            </button>
          </div>
        </div>

        {/* GRID – sharper, corporate cards */}
        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <article
                key={project.id}
                className="flex flex-col overflow-hidden border border-slate-200 bg-white shadow-md"
              >
                <div className="relative h-50 overflow-hidden border-b border-slate-200">
                  <img
                    src={`/images/${encodeURIComponent(project.image)}`}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-300 ease-out hover:scale-[1.03]"
                  />
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <h3 className="mb-1 text-sm font-semibold text-slate-900 line-clamp-1">
                    {project.name}
                  </h3>

                  <p className="mb-2 flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="border border-slate-200 bg-slate-50 px-2 py-0.5 font-semibold text-slate-800">
                      {project.bhk}
                    </span>
                  </p>

                  <p className="mb-1 text-[12px] text-slate-600 line-clamp-2">
                    {project.address}
                  </p>

                  <p className="mb-3 text-[11px] text-slate-500">
                    {project.city} • {project.locality}
                  </p>
                </div>
              </article>
            </Link>
          ))}

          {filteredProjects.length === 0 && (
            <p className="col-span-full text-center text-sm text-slate-500">
              No projects found for selected filters.
            </p>
          )}
        </div>
      </section>
     
    </div>
  );
}
