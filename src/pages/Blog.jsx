import React, { useState } from "react";
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

const THEME = {
  primary: "#005596",
  secondary: "#f58025",
};

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

const CATEGORIES = [
  "All",
  "Market Analysis",
  "Selling Tips",
  "Finance",
  "Commercial",
  "Lifestyle",
];

const RealEstateBlogPro = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery.trim().length === 0 ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="min-h-screen bg-gray-50 font-sans text-slate-800">
        <Navbar />
        <div className="space mt-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Article */}
          <div className="mb-16 group cursor-pointer">
            <Link
              to={`/blog/${FEATURED_POST.id}`}
              target="_blank"
              
              className="block relative bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden lg:flex transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="lg:w-3/5 relative h-64 lg:h-auto overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#f58025] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wide">
                    Featured
                  </span>
                </div>
                <img
                  src={FEATURED_POST.image}
                  alt={FEATURED_POST.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="lg:w-2/5 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <span className="flex items-center text-[#005596] font-medium">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {FEATURED_POST.category}
                  </span>
                  <span>{FEATURED_POST.date}</span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#005596] mb-4 leading-tight group-hover:text-[#f58025] transition-colors">
                  {FEATURED_POST.title}
                </h3>

                <p className="text-gray-600 mb-6 line-clamp-3">
                  {FEATURED_POST.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-[#005596] font-bold border border-gray-200">
                      SJ
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        {FEATURED_POST.author}
                      </p>
                      <p className="text-xs text-gray-500">
                        {FEATURED_POST.readTime}
                      </p>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#005596] transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-[#005596] group-hover:text-white" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 border-b border-gray-200 pb-6 gap-6">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-md text-sm font-semibold transition-all duration-200 border ${
                    activeCategory === cat
                      ? "bg-[#005596] border-[#005596] text-white shadow-md"
                      : "bg-white border-gray-200 text-gray-600 hover:border-[#f58025] hover:text-[#f58025]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-4 pr-10 py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f58025] focus:border-transparent transition-shadow"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                 target="_blank"
                className="bg-white flex flex-col rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <article>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-0 right-0 bg-[#005596] text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-gray-500 mb-3 space-x-2">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                      <span className="text-gray-300">|</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#005596] transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="w-4 h-4 text-[#f58025] mr-2" />
                        <span className="text-sm font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <span className="text-[#f58025] font-semibold text-sm flex items-center group-hover:underline">
                        Read <ChevronRight className="w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RealEstateBlogPro;
