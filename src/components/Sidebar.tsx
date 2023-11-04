import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

interface NavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<NavbarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={` top-0 right-0  bottom-0 fixed w-60 pt-4 bg-customPurple text-white flex flex-col transition-transform transform ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <button className="p-3 ml-auto" onClick={toggleSidebar}>
        <IoMdCloseCircleOutline size={30} />
      </button>
      <div className="flex flex-col px-2 mr-2 flex-grow overflow-y-auto">
        <Link
          to="#"
          className="p-2 my-0 text-sm hover:bg-indigo-800 hover:bg-opacity-20"
        >
          HOME
        </Link>

        <Link
          to="#"
          className="p-2 my-0 text-sm hover:bg-indigo-800 hover:bg-opacity-20"
        >
          ABOUT US
        </Link>

        <Link
          to="#"
          className="p-2 my-0 text-sm hover:bg-indigo-800 hover:bg-opacity-20"
        >
          SERVICES
        </Link>

        <Link
          to="#"
          className="p-2 my-0 text-sm hover:bg-indigo-800 hover:bg-opacity-20"
        >
          ADDED
        </Link>

        <Link
          to="#"
          className="p-2 my-0 text-sm hover:bg-indigo-800 hover:bg-opacity-20"
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
