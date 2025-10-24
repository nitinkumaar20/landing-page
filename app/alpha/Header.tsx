import React from 'react'

const Header = () => {
  return (
     <header className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur border-b border-indigo-100 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-indigo-500 to-sky-600 bg-clip-text text-transparent">
            Alpha International University
          </h1>
          <nav className="hidden md:flex gap-6 text-slate-600 font-medium">
            <a href="#about" className="hover:text-sky-700 transition">About</a>
            <a href="#courses" className="hover:text-sky-700 transition">Courses</a>
            <a href="#highlights" className="hover:text-sky-700 transition">Highlights</a>
            <a href="#contact" className="hover:text-sky-700 transition">Contact</a>
          </nav>
        </div>
      </header>
  )
}

export default Header