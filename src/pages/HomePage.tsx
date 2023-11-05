import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import IMG1 from "../assets/images/s01.jpg";

import COFFEE1 from "../assets/images/coffee.jpg";
import COFFEE2 from "../assets/images/coffee2.jpg";
import MEDICATION1 from "../assets/images/medicine.png";
import AGRICULTURE1 from "../assets/images/agriculture.jpg";
import SOCKS1 from "../assets/images/socks.jpg";
import SOCKS2 from "../assets/images/socks2.jpg";
import MEDICATION2 from "../assets/images/medication2.jpg";

import ex2 from "../assets/images/ex2.jpg";
import ex3 from "../assets/images/man2.jpg";
import ex1 from "../assets/images/importer.jpg";

import SliderComponent from "../components/SliderComponent";
import { AiOutlineMenu } from "react-icons/ai";

import Cards from "../components/Cards";
import Footer from "../components/Footer";

function HomePage() {
  const [activeTab, setActiveTab] = useState("SHOW ALL");
  type TabName = "SHOW ALL" | "IMPORT" | "EXPORT" | "MANUFACTURING";
  const openTab = (tabName: TabName): void => {
    setActiveTab(tabName);
  };
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
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

  // const CARDS = [
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 40 },
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 90 },
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 70 },
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 50 },
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 60 },
  //   { ImgUrl: IMG1, alt: "product", title: "", height: 60 },
  // ];

  return (
    <div className="flex">
      <div className={`  w-screen`}>
        <Header openSidebar={openSidebar} />
        <SliderComponent />

        <div className="flex flex-wrap justify-center gap-10 items-center my-10 mx-2 p-2 py-10">
          <div className="md:w-1/3 mx-4 mb-6 md:mb-0 text-sm rounded-md">
            <h1 className="text-3xl font-semibold mb-2">Welcome</h1>
            At Ketoean trading plc. Quality, ethics and client matters a lot!!
            We are committed to our mission of providing top quality and curable
            health care products. As we observe from the trend of the company,
            it is very clear that KT plc. Is visionary. Currently, in addition
            to the wholesaling and importing KT plc. Is engaged in cultivating
            coffee plantation to export specialty coffee and establish garment
            factory. In near future this company has the plan to establish
            different manufacturing and service companies. Ketoran Trading plc.
            Was established in august 23, 2016 G.C.
            <button
              onClick={openSidebar} // Invoke the openSidebar function
              className=" px-4 py-2 flex justify-between mt-4 mb-2 mx-2 rounded-md text-white text-sm bg-customPurple transform transition-transform hover:scale-105"
            >
              <AiOutlineMenu size={20} />
              <span className="ml-2">More</span>
            </button>
          </div>
          <div className="md:w-1/3 mx-4 flex justify-start rounded-lg min-w-80">
            <img
              src={IMG1}
              alt="Image 1"
              className="rounded-lg object-cover min-h-60"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center my-10 mx-auto  p-4">
          <div className="flex m-2 w-full md:w-1/4 ">
            <div className=" flex justify-center h-20   shadow-lg text-sm">
              <img src={ex1} alt="Image 1" className="object-cover " />
            </div>
            <div className="flex flex-col ml-[-20px] mt-10 px-10 shadow-lg md:w-3/4">
              <h1 className=" text-2xl font-semibold flex justify-center flex-wrap ">
                Import and distribution
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget sollicitudin pellentesque et non erat.
              <div className=" mx-[-40px] h-2 bg-customPurple border-t-10 border-indigo-500 mt-2"></div>
            </div>
          </div>
          <div className="flex m-2 w-full md:w-1/4 ">
            <div className=" flex justify-center h-20   shadow-lg text-sm">
              <img src={ex2} alt="Image 1" className="object-cover " />
            </div>
            <div className="flex flex-col ml-[-20px] mt-10 px-10 shadow-lg md:w-3/4">
              <h1 className=" text-2xl font-semibold items-center">Export</h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              <div className=" mx-[-40px] h-2 bg-customPurple border-t-10 border-indigo-500 mt-2"></div>
            </div>
          </div>
          <div className="flex m-2 w-full md:w-1/4 ">
            <div className=" flex justify-center h-20   shadow-lg text-sm">
              <img src={ex3} alt="Image 1" className="object-cover " />
            </div>
            <div className="flex flex-col ml-[-20px] mt-10 px-10 shadow-lg md:w-3/4">
              <h1 className=" text-2xl font-semibold items-center">
                Manufacturing
              </h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              adipiscing erat eget risus sollicitudin pellentesque et non erat.
              <div className=" mx-[-40px] h-2 bg-customPurple border-t-10 border-indigo-500 mt-2"></div>
            </div>
          </div>
        </div>

        <div className="mx-[-40px]  bg-gradient-to-b from-gradientTwo to-gradientOne border-t-10 border-indigo-500 ">
          <div className=" inset-0 bg-black bg-opacity-10"></div>
          <div className="text-white  flex flex-col items-center justify-center">
            <div className="p-4 text-center text-gray-900">
              <div className="text-2xl font-semibold  my-4 ">
                Import & Export
              </div>
              <div>All Our Import & Export Products ..</div>
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
          </div>
        </div>

        <div className=" flex justify-center items-center h-96 bg-gray-200">
          <div>
            <h1 className=" text-xl m-4">Oops! Something went wrong.</h1>
            <h3 className=" text-xs m-4">
              This page didn't load Google Maps correctly. See the JavaScript
              console for technical details.
            </h3>
          </div>
        </div>

        <div className="bg-contact-image bg-cover bg-center mt-10">
          <div className="bg-opacity-90 bg-white py-20">
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
      <div className="fixed top-0 bottom-0 right-0">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
}

export default HomePage;
