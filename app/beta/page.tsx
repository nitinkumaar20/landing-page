"use client";
import React, { useState } from "react";
import LeadForm from "../../components/LeadForm";
import FeeModal from "../../components/FeeModal";
import Header from "./Header";

export default function BetaPage() {
  const [showFees, setShowFees] = useState(false);
  const [showLead, setShowLead] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-slate-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section
        id="overview"
        className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 py-16 bg-gradient-to-r from-blue-500 to-blue-300 text-white rounded-b-[2rem] shadow-lg"
      >
        <div>
          <h1 className="text-4xl md:text-5xl text-black font-extrabold mb-4 leading-tight">
            Beta Global University
          </h1>
          <p className="text-lg  mb-6 max-w-lg text-black">
            Transforming students into future-ready professionals through
            cutting-edge programs in
            <span className="font-semibold text-white"> Technology</span> and
            <span className="font-semibold text-white"> Business.</span>
          </p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setShowLead(true)}
              className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-full hover:bg-blue-100 transition"
            >
              Apply Now
            </button>
            <button
              onClick={() => setShowFees(true)}
              className="border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              View Fees
            </button>
            <a
              href="/brochure-beta.pdf"
              download
              className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-blue-700 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl shadow-xl backdrop-blur-md">
          <h3 className="text-xl font-semibold text-black mb-4">Quick Info</h3>
          <ul className="space-y-2 text-blue-100">
            <li>
              <strong>Courses:</strong> BCA, MCA, BBA
            </li>
            <li>
              <strong>Placements:</strong> 90%+
            </li>
            <li>
              <strong>Average Package:</strong> ₹4.2 LPA
            </li>
            <li>
              <strong>Location:</strong> India
            </li>
          </ul>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-16 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-8 text-blue-800 text-center">
          Popular Courses
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "BCA", desc: "3 years • ₹70,000 - ₹1,00,000/year" },
            { name: "MCA", desc: "2 years • ₹1,20,000 - ₹1,60,000/year" },
            { name: "BBA", desc: "3 years • ₹80,000 - ₹1,20,000/year" },
          ].map((c) => (
            <div
              key={c.name}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 text-center"
            >
              <h4 className="text-xl font-semibold text-blue-700 mb-2">
                {c.name}
              </h4>
              <p className="text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Placements Section */}
      <section
        id="placements"
        className="py-16 px-8 md:px-20 bg-gradient-to-r from-green-50 to-green-100 text-center rounded-3xl mx-6"
      >
        <h2 className="text-3xl font-bold mb-4 text-green-800">Placements</h2>
        <p className="text-slate-700 max-w-2xl mx-auto leading-relaxed">
          Our students are placed in top MNCs and startups across the world.
          With strong corporate tie-ups and internship programs, Beta ensures
          real-world experience and career growth.
        </p>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-16 px-8 md:px-20">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 text-center">
          Campus Facilities
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {["Cafeteria", "Wi-Fi Campus", "Modern Labs", "Sports Complex"].map(
            (f) => (
              <li
                key={f}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition font-medium text-slate-700"
              >
                {f}
              </li>
            )
          )}
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center  text-sm text-white border-t bg-gradient-to-r from-blue-500 to-blue-300">
        © 2025 Beta Global University — All Rights Reserved
      </footer>

      {/* Modals */}
      {showFees && (
        <FeeModal
          uniName="Beta Global University"
          onClose={() => setShowFees(false)}
        />
      )}
      {showLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-4">
              Apply Now — Beta Global University
            </h3>
            <LeadForm
              universityName="Beta Global University"
              onSuccess={() => setShowLead(false)}
            />
            <div className="mt-4 text-center">
              <button
                onClick={() => setShowLead(false)}
                className="mt-3 text-blue-700 font-semibold hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
