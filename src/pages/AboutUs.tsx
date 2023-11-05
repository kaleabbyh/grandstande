import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";

import ImageCard from "../assets/images/ImageCard.jpg";
import aboutImg from "../assets/images/aboutImg.jpg";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const [isVissionOpen, setIsVissionOpen] = useState(false);
  //   const [isMissionOpen, setIsMissionOpen] = useState(false);
  //   const [isValuesOpen, setIsValuesOpen] = useState(false);

  //   const openVission = () => {
  //     setIsMissionOpen(false);
  //     setIsVissionOpen(true);
  //     setIsValuesOpen(false);
  //   };
  //   const openMission = () => {
  //     setIsMissionOpen(true);
  //     setIsVissionOpen(false);
  //     setIsValuesOpen(false);
  //   };
  //   const openValues = () => {
  //     setIsMissionOpen(false);
  //     setIsVissionOpen(false);
  //     setIsValuesOpen(true);
  //   };

  const [activeTab, setActiveTab] = useState("mission");

  type TabName = "vission" | "mission" | "values";

  const openTab = (tabName: TabName): void => {
    setActiveTab(tabName);
  };

  const openSidebar = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="">
      <div className=" w-screen ">
        <Header openSidebar={openSidebar} />
        <div className="  bg-gradient-to-r from-gradientTwo to-gradientThree border-t-10 border-indigo-500 ">
          <div className=" inset-0 bg-black bg-opacity-10"></div>
          <div className="text-gray-600  flex  items-center justify-between">
            <div className=" m-20 p-3 shadow-lg rounded-md bg-white w-full text-sm  font-semibold   ">
              <span>You are here:</span>
              <span className=" text-gray-200 hover:text-customGreen">
                <Link to="/">Home</Link>
              </span>
              <span> /About Us</span>
            </div>
          </div>
        </div>

        <div className="container mx-16 px-4 grid md:grid-cols-2 bg-white py-20 ">
          <div className=" m-4 justify-start font-bold text-gray-700 h-full bg-white shadow-sm rounded-lg px-8 py-6">
            <p className="text-gray-700 font-semibold text-3xl">About US</p>
            <div className="mt-4 font-normal">
              Starting from 1998 G.C. By Me Nesibu tarfasa etana established
              kelem drug store and gamtessa drug store and bethel pharmaceutical
              prior to the establishment of ketoran trading plc. On august 23,
              2016 G.C. with two partners.
              <br />
              <br />
              Having 8 years’ experience in wholesaling gained from this drug
              stores and bethel pharmaceutical, ketoran treading plc.
              Established on august 23, 2016 G.C. To offer quality services in
              the four corners of Ethiopia. Now, our distribution covers the
              whole country and we are becoming one of the main line Company in
              importing and wholesaling. We are obliged to promote
              professionalism, moral and ethics in our noble duty of
              distributing medicine and associated equipment’s.
              <br />
              <br />
              At Ketoean trading plc. Quality, ethics and client matters a lot!!
              We are committed to our mission of providing top quality and
              curable health care products. As we observe from the trend of the
              company, it is very clear that KT plc. Is visionary.
              <br />
              <br />
              Currently, in addition to the wholesaling and importing KT plc. Is
              engaged in cultivating coffee plantation to export specialty
              coffee and establish garment factory. In near future this company
              has the plan to establish different manufacturing and service
              companies. Ketoran Trading plc. Was established in august 23, 2016
              G.C.
              <br />
              <br />
              In accordance with the commercial code of Ethiopia article 1960
              with the following main objectives:-
              <li>Export</li>
              <li>Import and distribution</li>
              <li>Manufacturing</li>
            </div>
          </div>

          <div className=" m-4 justify-end bg-white shadow-sm h-full rounded-lg px-8 py-6">
            <img src={ImageCard} alt="" className=" object-cover" />
          </div>
        </div>

        <div className="container mx-16 px-4 grid md:grid-cols-2 bg-white py-20 ">
          <div className=" m-4 justify-end bg-white shadow-sm h-full rounded-lg px-8 py-6">
            <img src={aboutImg} alt="" className=" object-cover" />
          </div>

          <div className=" my-4 justify-start font-bold text-gray-700 h-full bg-white shadow-sm rounded-lg  py-6">
            <div className="    rounded-md bg-white w-full text-sm  font-semibold   ">
              <span>
                <button
                  onClick={() => openTab("mission")}
                  className={`px-4 rounded-xs  border border-gray-300 p-3 ${
                    activeTab === "mission" ? "bg-white" : "bg-gray-100"
                  } `}
                >
                  Mission
                </button>
              </span>
              <span className=" ">
                <button
                  onClick={() => openTab("vission")}
                  className={`px-4 rounded-xs  border border-gray-300 p-3 ${
                    activeTab === "vission" ? "bg-white" : "bg-gray-100"
                  } `}
                >
                  Vision
                </button>
              </span>
              <span>
                <button
                  onClick={() => openTab("values")}
                  className={`px-4 rounded-xs  border border-gray-300 p-3 ${
                    activeTab === "values" ? "bg-white" : "bg-gray-100"
                  } `}
                >
                  Values
                </button>
              </span>
            </div>
            <hr />
            <div className="mt-4 font-normal">
              {activeTab === "mission" && (
                <h1>
                  To be one of the leading coffee exporter in the country.
                  <br />
                  <br />
                  To become an internationally recognized coffee export
                </h1>
              )}
              {activeTab === "vission" && (
                <h1>
                  Provide top quality and curable health care products
                  <br />
                  <br />
                  To prepare and export top quality Ethiopia green coffee bean
                  to the main stream and specialty coffee market.
                  <br />
                  <br />
                  Contribute for the foreign currency earnings of the country
                  and provide above average returns to shareholders
                </h1>
              )}
              {activeTab === "values" && (
                <h1>
                  Customer centered
                  <br />
                  <br />
                  Seek to understand and enhance the value our customers.
                  Relationship
                  <br />
                  <br />
                  We approach our customers and suppliers as equal, long term
                  partners seeking mutual benefit Trustworthy
                  <br />
                  <br />
                  Under a warm and open atmosphere, we approach our associate &
                  business partners with humility, honesty and enthusiasm.
                  Quality
                  <br />
                  <br />
                  We are committed to produce quality product and service.
                </h1>
              )}
            </div>
          </div>
        </div>

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
        <div className="h-20 bg-white gap-3 flex  items-center justify-center">
          <div className=" gap-3 flex   items-center justify-center">
            <Link
              to={"#"}
              className=" bg-customGreen text-white p-2 hover:bg-customPurple"
            >
              <BiLogoFacebook size={30} />
            </Link>
            <Link
              to={"#"}
              className=" bg-customGreen text-white p-2 hover:bg-customPurple"
            >
              <BiLogoTwitter size={30} />
            </Link>
            <Link
              to={"#"}
              className=" bg-customGreen text-white p-2 hover:bg-customPurple"
            >
              <BiLogoGooglePlus size={30} />
            </Link>
            <Link
              to={"#"}
              className=" bg-customGreen text-white p-2 hover:bg-customPurple"
            >
              <TfiYoutube size={30} />
            </Link>
            <Link
              to={"#"}
              className=" bg-customGreen text-white p-2 hover:bg-customPurple"
            >
              <FaLinkedinIn size={30} />
            </Link>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default AboutUs;
