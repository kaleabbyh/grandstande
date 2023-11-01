/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import DeleteConfirmation from "../components/DeleteConfirmation";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import SubHeader from "../components/Subheader";
const StudentsList: React.FC = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleDelete = () => {
    // Perform the deletion action here
    console.log("Deleting...");
    setShowConfirmation(false);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
  };

  const openConfirmation = () => {
    setShowConfirmation(true);
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const handleToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Perform additional actions or handle click event here
  };

  return (
    <div>
      <div className={`flex ${isSidebarOpen ? "overflow-hidden" : ""}`}>
        <div className={`${isSidebarOpen ? "w-64 " : "w-0"}`}>
          <Sidebar isOpen={isSidebarOpen} onToggle={setIsSidebarOpen} />
        </div>

        <div
          className={`bg-white shadow-md py-3 min-h-screen px-2 rounded-md  ${
            isSidebarOpen ? "transition-all duration-300 ease-in" : ""
          }`}
        >
          {!isSidebarOpen && (
            <button
              className="p-2 pl-4 pt-4 flex justify-center flex-wrap"
              onClick={handleToggle}
            >
              <AiOutlineMenu size={20} />
            </button>
          )}
        </div>
        <div className="container flex-1 mx-auto  ">
          <Header />
          <SubHeader />

          <div>
            <h1 className=" font-bold text-xl text-gray-600 text-center">
              Grade
            </h1>
            <div className="flex items-center justify-center text-center">
              <label className="flex items-center mx-4">
                <h2 className="p-2">10</h2>
                <button
                  className={`rounded-full border border-indigo-500 p-2 ${
                    isClicked ? "bg-indigo-500" : ""
                  }`}
                  onClick={handleClick}
                >
                  <span className="bg-indigo-500 w-10 h-10 rounded-full"></span>
                  <span className="sr-only">Click Me</span>
                </button>
              </label>
              <label className="flex items-center mx-4">
                <h2 className="p-2">5</h2>
                <button
                  className={`rounded-full border border-indigo-500 p-2 ${
                    isClicked ? "bg-indigo-500" : ""
                  }`}
                  onClick={handleClick}
                >
                  <span className="bg-indigo-500 w-10 h-10 rounded-full"></span>
                  <span className="sr-only">Click Me</span>
                </button>
              </label>
            </div>
          </div>
          <button
            className="px-2 py-1 text-sm flex items-center justify-center bg-red-500 text-white rounded hover:bg-red-600"
            onClick={openConfirmation}
          >
            Delete
          </button>
          {showConfirmation && (
            <DeleteConfirmation
              onDelete={handleDelete}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsList;
