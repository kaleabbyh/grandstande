import { Link } from "react-router-dom";
import IMG from "../assets/images/ketura_cropped.png";

import { AiOutlineMenu } from "react-icons/ai";
interface HeaderProps {
  openSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ openSidebar }) => {
  return (
    <nav className="bg-white   container  ">
      <div className="mx-4 ">
        <div className="flex items-center justify-between m-0">
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
                className="text-gray-800 text-sm hover:text-gray-600 px-3  rounded-md"
              >
                HOME
              </Link>
              <Link
                to="/"
                className="text-gray-800 text-sm hover:text-gray-600 px-3  rounded-md"
              >
                ABOUT US
              </Link>
              <Link
                to="/"
                className="text-gray-800 text-sm hover:text-gray-600 px-3  rounded-md"
              >
                SERVICES
              </Link>
              <Link
                to="/"
                className="text-gray-800 text-sm hover:text-gray-600 px-3  rounded-md"
              >
                ADDED
              </Link>
              <Link
                to="/"
                className="text-gray-800 text-sm hover:text-gray-600 px-3  rounded-md"
              >
                CONTACT
              </Link>
            </div>
          </div>
          <button
            onClick={openSidebar} // Invoke the openSidebar function
            className="flex  items-center flex-wrap mt-4 mb-2 mx-2 rounded-full h-10 w-10 px-3  text-white text-sm bg-customGreen transform transition-transform hover:scale-105"
          >
            <AiOutlineMenu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
