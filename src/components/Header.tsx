import IMG from "../assets/images/ketura_cropped.png";
import { Link } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

interface HeaderProps {
  openSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSidebar }) => {
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
            <Link
              to="/"
              className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
            >
              MINING
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 text-sm hover:text-customGreen px-3  rounded-md"
            >
              CONTACT
            </Link>
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
