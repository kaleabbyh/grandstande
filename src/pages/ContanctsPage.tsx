import { useState } from "react";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const ContanctsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="flex">
        <div className={`w-screen flex flex-col `}>
          {/* ${isOpen ? "mr-60" : ""} */}
          <Header openSidebar={openSidebar} />

          <div className="">
            <div className=" flex items-center justify-center py-12 pb-20">
              <p className="text-gray-700 font-semibold text-3xl">
                Contact Information
              </p>
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
          </div>
          <Footer />
        </div>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

export default ContanctsPage;
