import React, { useState } from "react";
import DeleteConfirmation from "../components/DeleteConfirmation";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
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

          <div className="flex px-2 border-b border-indigo-100 rounded-md my-4">
            <Link
              to="/managesubject"
              className={` rounded-md px-4 py-2 text-indigo-600 text-sm border border-indigo-200 `}
            >
              Manage Subject
            </Link>
            <Link
              to="/mergedsubject"
              className={` rounded-md px-4 py-2 text-indigo-600 text-sm `}
            >
              Merged Subject
            </Link>

            <Link
              to="/studentlist"
              className={` rounded-md px-4 py-2 text-indigo-600 text-sm `}
            >
              Sub Subject
            </Link>
          </div>

          <div>
            <h1 className=" font-bold text-xl text-gray-600 text-center">
              Grade
            </h1>
          </div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
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
