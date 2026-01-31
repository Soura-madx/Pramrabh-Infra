import React, { useState } from "react";
import Footer from "../component/footer";
import Navbar from "../component/Navbar";

const PRIMARY = "#034A91";
const ACCENT = "#f58025";

export default function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    youAre: "",
    iWant: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: send data to backend / email service
    console.log("Contact form submitted:", form);
  };

  return (
    <div>
      <Navbar/>
      <div className="space mt-20"></div>
    <section className="bg-[#F8FAFC] py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        {/* Heading */}
        <header className="mb-8 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[${ACCENT}] mb-1">
            Contact us
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Let&apos;s talk about your property plans
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            Share a few details and a Prarambh Infra advisor will get in touch
            to help you buy, rent or sell property in and around Ujjain.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Left: Form */}
          <div className="bg-white rounded-md border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 sm:p-6">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
              Share your requirement
            </h3>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    Full name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    Phone number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile"
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                />
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    Are you a*
                  </label>
                  <select
                    name="youAre"
                    value={form.youAre}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Developer">Developer</option>
                    <option value="Agent">Agent</option>
                    <option value="Buyer">Buyer / Investor</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-slate-600 mb-1">
                    I want to*
                  </label>
                  <select
                    name="iWant"
                    value={form.iWant}
                    onChange={handleChange}
                    className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Buy">Buy a property</option>
                    <option value="Rent">Rent a property</option>
                    <option value="Sell">Sell a property</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about location, budget, BHK or plot size you are looking for."
                  className="w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#034A91]/20"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-[#f58025] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-lg shadow-orange-900/20 transition-all hover:bg-[#d66716] hover:-translate-y-0.5"
              >
                Submit enquiry
              </button>

              <p className="mt-2 text-[10px] text-slate-400">
                By submitting this form, you agree to be contacted by Prarambh
                Infra via call / WhatsApp / SMS for your enquiry.
              </p>
            </form>
          </div>

          {/* Right: Company details + Map */}
          <div className="space-y-4">
            <div className="bg-white rounded-md border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.08)] p-5 sm:p-6">
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3">
                Prarambh Infra – Head Office
              </h3>

              <dl className="space-y-2 text-xs sm:text-sm text-slate-700">
                <div className="flex gap-2">
                  <dt className="w-28 text-slate-500">Contact person</dt>
                  <dd className="font-semibold">Nidhi Mam</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-28 text-slate-500">Call us</dt>
                  <dd>
                    <a
                      href="tel:+919876511122"
                      className="font-semibold text-[#034A91] hover:underline"
                    >
                      98765 11122
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-28 text-slate-500">Email</dt>
                  <dd>
                    <a
                      href="mailto:infoprarambhinfra@gmail.com"
                      className="font-semibold text-[#034A91] hover:underline break-all"
                    >
                      infoprarambhinfra@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-28 text-slate-500">Office time</dt>
                  <dd>Mon – Sat: 10:00 AM – 7:00 PM</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-28 text-slate-500">Address</dt>
                  <dd className="font-medium">
                    A-115, First Floor, Divine Valley, Rishi Nagar, Ujjain
                    456010
                  </dd>
                </div>
              </dl>
            </div>

            {/* Map */}
            <div className="bg-white rounded-md border border-slate-200 shadow-[0_18px_60px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="h-56 sm:h-64 w-full">
                <iframe
                  title="Prarambh Infra office location"
                  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE_HERE"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
