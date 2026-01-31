import React from "react";
import { useParams, Link } from "react-router-dom";
import { MessageCircle, Clock, User, ArrowRight, Calendar } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./footer";

const PRIMARY = "#005596";
const ACCENT = "#f58025";

export const FEATURED_POST = {
  id: 99,
  title: "Q1 2026 Real Estate Market Report: The Shift to Suburbs",
  excerpt:
    "An in-depth analysis of how remote work policies are permanently altering property values in suburban districts versus downtown metropolitan areas.",
  category: "Market Analysis",
  author: "Sarah Jenkins",
  date: "Jan 15, 2026",
  image: "/images/blog1.jpg",
  readTime: "8 min read",
};

export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Renovation Mistakes That Kill Property Value",
    excerpt:
      "Before you knock down that wall, read this. We analyze which upgrades actually offer a return on investment.",
    category: "Selling Tips",
    author: "Mike Ross",
    date: "Jan 12, 2026",
    image: "/images/blog2.jpg",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Understanding Fixed vs. Adjustable Rate Mortgages",
    excerpt:
      "With fluctuating interest rates, choosing the right loan structure is more critical than ever.",
    category: "Finance",
    author: "David Chen",
    date: "Jan 10, 2026",
    image: "/images/blog3.jpg",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "The Ultimate Guide to Commercial Leasing",
    excerpt:
      "A step-by-step guide for business owners looking to secure their first office space.",
    category: "Commercial",
    author: "Sarah Jenkins",
    date: "Jan 05, 2026",
    image: "/images/blog4.jpg",
    readTime: "12 min read",
  },
];
const ALL_POSTS = [FEATURED_POST, ...BLOG_POSTS];

export default function BlogDetailsPage() {
  const { id } = useParams();
  const postId = Number(id);
  const post = ALL_POSTS.find((p) => p.id === postId) || FEATURED_POST;

  const comments = [
    {
      name: "Amit Sharma",
      date: "Jan 08, 2026",
      text: "Very helpful breakdown of how Prarambh Infra structures real estate campaigns.",
    },
    {
      name: "Neha Patel",
      date: "Jan 05, 2026",
      text: "Appreciated the clarity on advisor training and documentation.",
    },
  ];

  const related = ALL_POSTS.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <div className="space mt-20" />

      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          <article className="bg-white rounded-md border border-slate-200 shadow-[0_18px_45px_rgba(15,23,42,0.08)] overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-6 pb-4 border-b border-slate-200">
              <p
                className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white"
                style={{ backgroundColor: PRIMARY }}
              >
                {post.category || "Insights"}
                <MessageCircle size={14} />
              </p>
              <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
                {post.title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <User size={14} /> {post.author || "Editorial Team"}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock size={14} /> {post.readTime || "7 min read"}
                </span>
                {post.date && (
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={14} /> {post.date}
                  </span>
                )}
              </div>
            </div>

            {/* Thumbnail */}
            <div className="h-56 sm:h-72 w-full overflow-hidden">
              <img
                src={post.image || "/images/blog4.jpg"}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Body */}
            <div className="px-6 py-6 prose prose-sm max-w-none text-slate-700">
              <p>
                Real estate buyers today are more informed, but also more
                confused. Between approvals, pricing, location and builder
                reputation, it is easy for important details to get lost in the
                noise. Prarambh Infra was created to bring structure and
                transparency back to this process.
              </p>
              <br />
              <p>
                Every campaign begins with project due diligence, followed by a
                clear launch narrative and an advisor training plan. This
                ensures that what customers see online, hear on calls and
                experience on site is aligned and consistent.
              </p>
              <br />
              <h2>What makes a campaign work</h2>
              <ul>
                <li>Legally strong projects with documented approvals.</li>
                <li>
                  Positioning that matches actual location and product reality.
                </li>
                <li>Lead funnels that balance quantity with quality.</li>
                <li>Advisors who are trained to educate, not just sell.</li>
              </ul>
              <br />
              <p>
                When these pieces move together, customers feel respected and
                confident. That is when bookings truly scale without damaging
                the brand or customer trust.
              </p>
            </div>

            {/* Comments */}
            <section className="px-6 pb-6 border-t border-slate-200 ">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2 mt-4">
                <MessageCircle size={18} style={{ color: ACCENT }} />
                Comments ({comments.length})
              </h3>

              <div className="space-y-3 mb-6">
                {comments.map((c) => (
                  <div
                    key={c.date + c.name}
                    className="border border-slate-200 bg-slate-50 px-4 py-3 rounded-md"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {c.name}
                      </p>
                      <span className="text-[11px] text-slate-400">
                        {c.date}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {c.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Leave reply */}
              <div className="border border-slate-200 rounded-md bg-white p-4">
                <p className="text-sm font-semibold text-slate-900 mb-2">
                  Leave a reply
                </p>
                <p className="text-[11px] text-slate-500 mb-3">
                  Your email will not be published. Required fields are marked
                  *.
                </p>

                <form className="space-y-3">
                  <textarea
                    rows={4}
                    placeholder="Your comment*"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 p-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#005596]/20"
                  />
                  <div className="grid gap-3 sm:grid-cols-2">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      className="w-full rounded-md border border-slate-200 bg-slate-50 p-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#005596]/20"
                    />
                    <input
                      type="email"
                      placeholder="Email Address*"
                      className="w-full rounded-md border border-slate-200 bg-slate-50 p-2 text-xs focus:outline-none focus:ring-2 focus:ring-[#005596]/20"
                    />
                  </div>
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-xs font-semibold text-white shadow-md transition-all"
                    style={{ backgroundColor: ACCENT }}
                  >
                    Post Comment
                    <ArrowRight size={14} />
                  </button>
                </form>
              </div>
            </section>
          </article>
        </div>

        {/* Related blogs */}
        <section className="mt-10 border-t border-slate-200 bg-white/60">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Related Blogs
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-3 h-80">
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/blog/${r.id}`}
                   target="_blank"
                  className="rounded-md border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] hover:border-[#005596]/30 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] transition-all overflow-hidden flex flex-col"
                >
                  <div className="h-52 w-full overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="px-4 py-3 flex-1 flex flex-col">
                    <p className="text-sm font-semibold text-slate-900 mb-1">
                      {r.title}
                    </p>
                    <p className="mt-auto text-[11px] text-slate-500 flex items-center gap-1">
                      <Clock size={12} />
                      {r.readTime}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
