"use client";

import React, { useState } from "react";
import AlphaPage from "./alpha/page";
import BetaPage from "./beta/page";

const page = () => {
  const [selectedPage, setSelectedPage] = useState<"alpha" | "beta" | null>(null);

  if (selectedPage === "alpha") return <AlphaPage />;
  if (selectedPage === "beta") return <BetaPage />;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-4">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Choose Your Landing Page
      </h1>
      <div className="flex gap-8">
        <button
          onClick={() => setSelectedPage("alpha")}
          className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Alpha Page
        </button>
        <button
          onClick={() => setSelectedPage("beta")}
          className="bg-green-400 hover:bg-green-500 text-white px-8 py-4 rounded-lg shadow-lg transition transform hover:scale-105"
        >
          Beta Page
        </button>
      </div>
    </div>
  );
};

export default page;
