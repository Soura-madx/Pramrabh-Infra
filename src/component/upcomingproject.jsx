import React from "react";

const PRIMARY_BLUE = "#005596";
const ACCENT = "#f58025";

const UPCOMING_PROJECTS = [
  {
    id: 1,
    name: "Shivangan Valley",
    src: "/images/projectshivangan.png",
    location: "Dewas Road, Ujjain",
    apartments: ["2 BHK", "3 BHK"],
    plots: ["800 – 1200 sq.ft"],
  },
  {
    id: 2,
    name: "Prarambh City Greens",
    src: "/images/project3.jpg",
    location: "Rishi Nagar Extension, Ujjain",
    apartments: ["2 BHK", "3 BHK", "4 BHK"],
    plots: ["1000 – 1800 sq.ft"],
  },
  {
    id: 3,
    name: "Skyline Business Hub",
    src: "/images/project2.jpg",
    location: "Ring Road Junction, Ujjain",
    apartments: ["Studio", "1 BHK"],
    plots: ["Commercial units"],
  },
];

export default function UpcomingProjectsGrid() {
  return (
    <section className="border-t border-slate-200 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-[11px]  font-semibold uppercase tracking-[0.22em] text-[#f58025] mb-1">
              Upcoming Projects
            </p>
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Coming Soon ...
            </h2>
          </div>
        </div> 

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {UPCOMING_PROJECTS.map((p) => (
            
            <article
              key={p.id}
              className="bg-white rounded-md border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.08)] overflow-hidden flex flex-col hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)] hover:-translate-y-0.5 transition-all"
            >
              {/* Image */}
              <div className="h-70 w-full overflow-hidden">
                <img
                  src={p.src}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-4 py-3 flex-1 flex flex-col">
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-1">
                  {p.name}
                </h3>
                <p className="text-[11px] text-slate-500 mb-3">
                  {p.location}
                </p>

                <div className="space-y-2 text-[11px] text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-800">
                      Available apartments
                    </p>
                    <p>{p.apartments.join(" • ")}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">
                      Plot sizes
                    </p>
                    <p>{p.plots.join(" • ")}</p>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="inline-flex items-center rounded-full bg-[#005596]/5 px-3 py-1 text-[10px] font-semibold text-[#005596]">
                    Registrations opening soon
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
