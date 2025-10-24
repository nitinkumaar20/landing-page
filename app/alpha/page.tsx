'use client'
import React, { useState } from 'react'
import LeadForm from '../../components/LeadForm'
import FeeModal from '../../components/FeeModal'
import Header from './Header'

export default function AlphaPage() {
  const [showFees, setShowFees] = useState(false)
  const [showLead, setShowLead] = useState(false)

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-white text-slate-800">
      {/*  Navbar */}
    <Header />

      {/*  Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-between pt-32 pb-16 px-8 md:px-20 bg-gradient-to-r from-sky-100 via-indigo-100 to-white overflow-hidden">
        <div className="max-w-xl z-10">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-indigo-800">
            Building <span className="text-sky-600">Futures</span> <br /> through Excellence
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            A premier institution combining innovation, research, and global education standards to empower the next generation of leaders.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => setShowLead(true)}
              className="bg-sky-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-700 transition"
            >
              Apply Now
            </button>
            <button
              onClick={() => setShowFees(true)}
              className="border border-sky-600 text-sky-700 px-6 py-3 rounded-full hover:bg-sky-100 transition"
            >
              View Fees
            </button>
            <a
              href="/brochure-alpha.pdf"
              download
              className="border border-slate-300 text-slate-700 px-6 py-3 rounded-full hover:bg-indigo-50 transition"
            >
              Download Brochure
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/free-photo/young-woman-attend-courses-girl-student-studying-holding-notebooks-showing-thumb-up-approval-recommending-company-standing-blue-background_1258-70145.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Graduation"
            className="w-96 md:w-[450px] rounded-3xl drop-shadow-2xl"
          />
        </div>

        {/* Decorative elements */}
        <div className="absolute -left-20 top-10 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl"></div>
        <div className="absolute right-10 -bottom-32 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </section>

      {/*  About Section */}
      <section id="about" className="py-20 px-8 md:px-20 text-center bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">About Alpha University</h2>
        <p className="max-w-3xl mx-auto text-slate-700 leading-relaxed">
          Founded with a mission to advance knowledge and innovation, Alpha University offers globally recognized programs across engineering, management, and sciences — encouraging creativity and excellence in every student.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🎓', title: 'Expert Faculty', desc: 'Learn from top educators and industry professionals.' },
            { icon: '🌍', title: 'Global Opportunities', desc: 'Collaborations and exchange programs worldwide.' },
            { icon: '💡', title: 'Innovation Labs', desc: 'Hands-on learning with modern labs and research centers.' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-sky-400 hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-sky-700">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/*  Courses Section */}
      <section id="courses" className="py-20 px-8 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-8">Programs Offered</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'B.Tech', desc: 'Comprehensive engineering program with industry mentorship.' },
            { name: 'MBA', desc: 'Business education for the modern world.' },
            { name: 'BSc', desc: 'Science programs designed for innovation and inquiry.' },
          ].map((c) => (
            <div
              key={c.name}
              className="group bg-gradient-to-br from-indigo-50 to-sky-50 p-8 rounded-2xl border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition text-center"
            >
              <h4 className="text-2xl font-semibold text-sky-700 mb-3 group-hover:text-indigo-700 transition">{c.name}</h4>
              <p className="text-slate-600 mb-3">{c.desc}</p>
              <p className="text-sm text-indigo-600 font-medium">Fee: ₹1L - ₹3L / year</p>
            </div>
          ))}
        </div>
      </section>

      {/*  Highlights Section */}
      <section id="highlights" className="py-20 bg-gradient-to-r from-indigo-100 via-sky-100 to-white text-center">
        <h2 className="text-3xl font-bold mb-8 text-indigo-700">Campus Highlights</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
          {['Smart Classrooms', 'Digital Library', 'Sports Facilities', 'Research Centers'].map((h) => (
            <div
              key={h}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition border border-sky-100 text-sky-700 font-semibold"
            >
              {h}
            </div>
          ))}
        </div>
      </section>

      {/*  Contact / CTA */}
      <section id="contact" className="py-20 px-8 md:px-20 text-center bg-indigo-50">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4">Join Alpha Today</h2>
        <p className="text-slate-700 mb-8">
          Begin your journey at Alpha International University — where learning meets limitless opportunities.
        </p>
        <button
          onClick={() => setShowLead(true)}
          className="bg-sky-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-sky-700 transition"
        >
          Apply Now
        </button>
      </section>

      {/*  Footer */}
      <footer className="py-6 text-center text-sm text-slate-500 border-t">
        © 2025 Alpha International University — All Rights Reserved
      </footer>

      {/*  Modals */}
      {showFees && <FeeModal uniName="Alpha International University" onClose={() => setShowFees(false)} />}
      {showLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 animate-fadeIn">
            <h3 className="text-2xl font-bold text-sky-700 text-center mb-4">
              Apply Now — Alpha International University
            </h3>
            <LeadForm universityName="Alpha International University" onSuccess={() => setShowLead(false)} />
            <div className="mt-4 text-center">
              <button onClick={() => setShowLead(false)} className="mt-3 text-sky-700 font-semibold hover:underline">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
