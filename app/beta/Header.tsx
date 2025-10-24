import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 z-10 bg-gradient-to-r from-blue-500 to-blue-300 md:px-10 px-8 mt-0 sticky top-0 text-white">
      <div className="md:text-2xl  font-bold ">
        Beta Global University
      </div>
      <nav className="space-x-4  hidden md:block text-white ">
        <a href="#overview" className="font-semibold">
          Overview
        </a>
        <a href="#courses" className="font-semibold">
          Courses
        </a>
        <a href="#placements" className="font-semibold">
          Placements
        </a>
        <a href="#facilities" className="font-semibold">
          Facilities
        </a>
      </nav>
    </header>
  );
};

export default Header;
