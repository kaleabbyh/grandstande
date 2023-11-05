import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

import COFFEE1 from "../assets/images/coffee.jpg";
import COFFEE2 from "../assets/images/coffee2.jpg";
import MEDICATION1 from "../assets/images/medicine.png";
import AGRICULTURE1 from "../assets/images/agriculture.jpg";
import SOCKS1 from "../assets/images/socks.jpg";
import SOCKS2 from "../assets/images/socks2.jpg";
import MEDICATION2 from "../assets/images/medication2.jpg";

import Cards from "../components/Cards";
import Footer from "../components/Footer";

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState("SHOW ALL");
  type TabName = "SHOW ALL" | "IMPORT" | "EXPORT" | "MANUFACTURING";
  const openTab = (tabName: TabName): void => {
    setActiveTab(tabName);
  };

  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const card1 = {
    ImgUrl: COFFEE1,
    alt: "product",
    title: "Coffee",
    height: 50,
  };
  const card2 = {
    ImgUrl: COFFEE2,
    alt: "product",
    title: "Ethiopian Coffee",
    height: 50,
  };
  const card3 = {
    ImgUrl: MEDICATION1,
    alt: "product",
    title: "Medication",
    height: 90,
  };
  const card4 = {
    ImgUrl: AGRICULTURE1,
    alt: "product",
    title: "sesame",
    height: 70,
  };
  const card5 = { ImgUrl: SOCKS1, alt: "product", title: "Socks", height: 70 };
  const card6 = { ImgUrl: SOCKS2, alt: "product", title: "Socks", height: 60 };
  const card7 = {
    ImgUrl: MEDICATION2,
    alt: "product",
    title: " Medication",
    height: 90,
  };

  return (
    <div className="flex">
      <div className={`w-screen flex flex-col `}>
        {/* ${isOpen ? "mr-60" : ""} */}
        <Header openSidebar={openSidebar} />
        <div className="  bg-gradient-to-r from-gradientTwo to-gradientThree border-t-10 border-indigo-500 ">
          <div className=" inset-0 bg-black bg-opacity-10"></div>
          <div className="text-gray-600  flex  items-center justify-between">
            <div className=" m-20 p-3 shadow-lg rounded-md bg-white w-full text-sm  font-semibold   ">
              <span className="px-1">You are here:</span>
              <span className=" text-gray-200 hover:text-customGreen px-1">
                <Link to="/">Home</Link>
              </span>
              <span className="px-1"> /Services</span>
            </div>
          </div>
        </div>
        <div className=" bg-gray-100 py-10 ">
          <div className="flex  items-center gap-2 my-10 m-4 justify-center">
            <button
              onClick={() => openTab("SHOW ALL")}
              className={`px-4 py-2   rounded-md text-white text-sm  ${
                activeTab === "SHOW ALL" ? "bg-customPurple" : "bg-gray-800"
              } `}
            >
              SHOW ALL
            </button>
            <button
              onClick={() => openTab("IMPORT")}
              className={`px-4 py-2   rounded-md text-white text-sm  ${
                activeTab === "IMPORT" ? "bg-customPurple" : "bg-gray-800"
              } `}
            >
              IMPORT
            </button>
            <button
              onClick={() => openTab("EXPORT")}
              className={`px-4 py-2   rounded-md text-white text-sm  ${
                activeTab === "EXPORT" ? "bg-customPurple" : "bg-gray-800"
              } `}
            >
              EXPORT
            </button>
            <button
              onClick={() => openTab("MANUFACTURING")}
              className={`px-4 py-2   rounded-md text-white text-sm  ${
                activeTab === "MANUFACTURING"
                  ? "bg-customPurple"
                  : "bg-gray-800"
              } `}
            >
              EXPORT
            </button>
          </div>
          <div className="mx-24 flex flex-wrap gap-6 items-start top-0">
            {activeTab == "SHOW ALL" && (
              <>
                <div className=" flex flex-col gap-6">
                  <Cards card={card1} />
                  <Cards card={card2} />
                </div>
                <div className=" flex flex-col gap-6">
                  <Cards card={card3} />
                  <Cards card={card4} />
                </div>
                <div className=" flex flex-col gap-6">
                  <Cards card={card5} />
                  <Cards card={card6} />
                </div>
                <div className=" flex flex-col gap-6">
                  <Cards card={card7} />
                </div>
              </>
            )}
            {activeTab == "IMPORT" && (
              <>
                <div className=" flex flex-col gap-6">
                  <Cards card={card3} />
                </div>

                <div className=" flex flex-col gap-6">
                  <Cards card={card7} />
                </div>
              </>
            )}
            {activeTab == "EXPORT" && (
              <>
                <Cards card={card1} />
                <Cards card={card2} />

                <Cards card={card4} />
              </>
            )}
            {activeTab == "MANUFACTURING" && (
              <>
                <Cards card={card5} />
                <Cards card={card6} />
              </>
            )}
          </div>
        </div>

        <div className="">
          <div className=" py-10 bg-gradient-to-t from-gray-100 to-gradientTwo border-t-10 border-indigo-500 ">
            <div className="container mx-20 px-4 grid md:grid-cols-2 gap-20">
              <div className="max-w-lg justify-start font-bold text-gray-700 h-full bg-white shadow-xl rounded-lg px-8 py-6">
                <p className="text-gray-700 font-semibold text-2xl">
                  Contact Information
                </p>
                <div className="mt-4">
                  <br />
                  <p>
                    <i className="fas fa-envelope"></i>Mobile(251-11)8279030
                  </p>

                  <p>
                    <i className="fas fa-phone"></i> Fax: (251-11)8279030
                  </p>
                  <br />
                  <p>
                    <i className=""></i> Email: info@ketorantradingplc.com
                  </p>
                  <br />
                  <p>
                    <i className=""></i> Address : Addis Ababa Mexico
                  </p>
                  <br />
                </div>
              </div>

              <div className="max-w-lg justify-end bg-white shadow-lg rounded-lg px-8 py-4">
                <form className="bg-white rounded-lg py-6 mb-2">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                    </label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Please enter your name"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Please enter your email"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Subject
                    </label>
                    <input
                      className="shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Please enter your email"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Message
                    </label>
                    <textarea
                      className="shadow appearance-none border rounded text-sm w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      placeholder="Please enter your message"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-end">
                    <button
                      className="bg-customPurple mr-20 hover:bg-customPurple text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default ServicesPage;
