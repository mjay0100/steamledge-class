import React from "react";

const Navbar = () => {
  return (
    <section className="flex justify-between items-center ">
      <h1 className="text-2xl font-bold">
        <span className="text-blue-600">C</span>
        <span className="text-yellow-400">la</span>
        <span className="text-pink-300">ss.</span>
      </h1>
      <ul className="flex gap-[1.5rem] text-[#ccc]">
        <li>Buy a course</li>
        <li>success</li>
        <li>Categories</li>
        <li>Pricing</li>
      </ul>
      <button className="py-2 px-3 rounded-md border border-slate-200">
        Get started
      </button>
    </section>
  );
};

export default Navbar;
