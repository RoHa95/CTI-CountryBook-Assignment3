import React from "react";
import { FaSearch } from "react-icons/fa";
function Navbar({ region, setRegion, search, setSearch }) {
  return (
    <div className="bg-rose-400 w-full">
      <div className="max-w-4xl mx-auto flex gap-x-2 items-center justify-between p-2">
        <div className="text-red-900 font-bold">Contries</div>
        <div className="flex items-center gap-x-2">
          <div className="flex items-center text-rose-100 border px-2 rounded-lg border-rose-200">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              name="search"
              className=" outline-0 focus:outline-0"
            />
            <FaSearch />
          </div>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="rounded-lg border border-rose-200 text-rose-200"
            name="region"
          >
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
