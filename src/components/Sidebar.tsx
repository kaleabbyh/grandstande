/* eslint-disable @typescript-eslint/no-unused-vars */
// Sidebar.js
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { TbDeviceIpadMinus } from "react-icons/tb";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import { MdOutlineExpandCircleDown } from "react-icons/md";

import { Link } from "react-router-dom";

// interface SidebarProps {
//   isOpen: boolean;
//   onToggle: (isOpen: boolean) => void;
//   items: string[];
// }

interface SidebarProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const handleToggle = () => {
    onToggle(!isOpen);
  };

  return (
    <div
      className={` mb-24 pl-2 pt-4 flex flex-col  w-64  h-screen fixed  top-0 left-0 transition-transform transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ transitionDuration: "0.5s" }}
    >
      <button className="p-2 pt-3 pl-4 mx-2 mb-4 mt-1 " onClick={handleToggle}>
        <AiOutlineMenu size={20} />
      </button>
      <div className="overflow-y-scroll">
        <style>
          {`.overflow-y-scroll::-webkit-scrollbar {
             display: none;
           }
         `}
        </style>
        <div className="p-2 mx-2 my-4  text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <TbDeviceIpadMinus /> <span className="px-1">Dashboard</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <CiHome /> <span className="px-1">Home</span>
          </Link>
        </div>
        <div className="flex justify-between items-center p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <AiOutlineUsergroupAdd size={20} />{" "}
            <span className="px-1">Manage User Groups</span>
          </Link>
          <button>
            <MdOutlineExpandCircleDown size={20} />
          </button>
        </div>
        <div className="flex justify-between items-center p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
          <button>
            <MdOutlineExpandCircleDown size={20} />
          </button>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
        <div className="p-2 mx-2 my-4 text-sm hover:bg-gray-50 hover:border border-indigo-200 rounded-md">
          <Link to="#" className="flex justify-left items-center ">
            <BiUserPlus size={20} /> <span className="px-1">Student(s)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
