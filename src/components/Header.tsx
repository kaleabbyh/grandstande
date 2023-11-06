import IMG from "../assets/images/ketura_cropped.png";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";

import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  openSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSidebar }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  const [isDropdownLogoutOpen, setIsDropdownLogoutOpen] = useState(false);
  const dropdownLogoutRef = useRef<HTMLDivElement>(null);
  const handleDropdownLogoutToggle = () => {
    setIsDropdownLogoutOpen(!isDropdownLogoutOpen);
  };

  const handleOutsideLogoutClick = (event: MouseEvent) => {
    if (
      dropdownLogoutRef.current &&
      !dropdownLogoutRef.current.contains(event.target as Node)
    ) {
      setIsDropdownLogoutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("mousedown", handleOutsideLogoutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideLogoutClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideLogoutClick);
    };
  }, []);

  return (
    <div className="">
      <div className="  bg-gradient-to-b from-gradientTwo to-customPurple border-t-10 border-indigo-500 ">
        <div className=" inset-0 bg-black bg-opacity-10"></div>
        <div className="text-white  flex  items-center justify-between">
          <div className=" ml-20 text-sm p-2 font-semibold  my-auto ">
            <div className=" gap-3 flex  items-center justify-center">
              <div>
                <BiLogoFacebook size={18} />
              </div>
              <div>
                <BiLogoTwitter size={18} />
              </div>
              <div>
                <BiLogoGooglePlus size={18} />
              </div>
              <div>
                <TfiYoutube size={18} />
              </div>
              <div>
                <FaLinkedinIn size={18} />
              </div>
            </div>
          </div>
          <div className=" mr-20 text-xs p-2 font-semibold  my-auto ">
            <div className="flex  items-center gap-4 justify-center">
              <div className=" flex justify-center items-center gap-1">
                <BsFillTelephoneFill />

                <span>+251-118279030</span>
              </div>

              <div className=" flex justify-center items-center gap-1">
                <BsPhone />

                <span>+251-930076088</span>
              </div>
              <div className=" flex justify-center items-center gap-1">
                <GrMail />

                <span>info@ketorantradingplc.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-white   container my-0 mr-20 mx-4 flex items-center justify-between m-0">
        <div className=" hidden md:block  ">
          <Link to="/" className="ml-2">
            <img className=" md:h-20 md:w-60" src={IMG} alt="Logo" />
          </Link>
        </div>
        <div></div>
        <div></div>
        <div className="flex items-center">
          <div className="hidden md:flex items-center">
            <Link
              to="/"
              className="text-gray-800 hover:text-customGreen text-sm  px-3  rounded-md"
            >
              HOME
            </Link>
            <Link
              to="/aboutus"
              className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
            >
              ABOUT US
            </Link>
            <Link
              to="/services"
              className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
            >
              SERVICES
            </Link>
            <div ref={dropdownRef}>
              <button
                onClick={handleDropdownToggle}
                className="text-gray-800 text-sm hover:text-customGreen px-3 rounded-md"
              >
                <span className="flex justify-center items-center gap-1">
                  MINING <IoIosArrowDropdownCircle size={16} />
                </span>
              </button>
              {isDropdownOpen && (
                <div className=" absolute z-10 bg-gray-100 mt-1 py-2 px-4 shadow-xl rounded-md">
                  <Link
                    to="/mining"
                    className="block text-gray-800 text-sm hover:text-customGreen py-2"
                  >
                    Mining Page 1
                  </Link>
                  <Link
                    to="/mining-page-2"
                    className="block text-gray-800 text-sm hover:text-customGreen py-2"
                  >
                    Mining Page 2
                  </Link>
                  <Link
                    to="/mining-page-2"
                    className="block text-gray-800 text-sm hover:text-customGreen py-2"
                  >
                    Mining Page 2
                  </Link>
                  <Link
                    to="/mining-page-2"
                    className="block text-gray-800 text-sm hover:text-customGreen py-2"
                  >
                    Mining Page 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
            >
              CONTACT
            </Link>

            {token && (
              <div className="   " ref={dropdownLogoutRef}>
                <button
                  onClick={handleDropdownLogoutToggle}
                  className="text-gray-800 text-sm hover:text-customGreen px-3 rounded-md items-center"
                >
                  <IoPersonCircleSharp size={24} />
                </button>
                {isDropdownLogoutOpen && (
                  <div className=" absolute z-10 bg-gray-100 mt-1 py-2 px-4 shadow-xl rounded-md">
                    <button
                      onClick={logout}
                      className="block text-gray-800 text-sm hover:text-customGreen py-2"
                    >
                      Logout
                    </button>
                    <Link
                      to="/addmining"
                      className="block text-gray-800 text-sm hover:text-customGreen py-2"
                    >
                      add mining
                    </Link>
                  </div>
                )}
              </div>
            )}
            {!token && (
              <Link
                to="/login"
                className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
              >
                <IoPersonCircleSharp size={24} />
              </Link>
            )}
          </div>
        </div>
        <button
          onClick={openSidebar} // Invoke the openSidebar function
          className="flex  items-center flex-wrap mt-4 mb-2 mx-2 mr-20 rounded-full h-10 w-10 px-3  text-white text-sm bg-customGreen transform transition-transform hover:scale-105"
        >
          <AiOutlineMenu size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
