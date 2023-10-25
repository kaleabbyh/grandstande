/* eslint-disable @typescript-eslint/no-unused-vars */
// Header.js

import { AiOutlineSearch } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";

function Header() {
  return (
    <nav className="bg-white shadow-md py-3  w-full z-10 rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="ml-2">
            <button className=" font-bold text-xl border border-indigo-100 rounded-md py-2 px-6">
              Grandstand
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md">
              <AiOutlineSearch size={20} />
            </button>

            <button className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md">
              <GrAddCircle size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
