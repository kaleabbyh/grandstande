import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

interface NavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<NavbarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 right-0 bottom-0 w-60 pt-4 bg-indigo-700 text-white flex flex-col transition-transform transform ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <button className="p-3 ml-auto" onClick={toggleSidebar}>
        <IoMdCloseCircleOutline size={30} />
      </button>
      <div className="flex flex-col flex-grow overflow-y-auto">
        <Link to="#" className="p-2 text-sm hover:bg-indigo-800">
          HOME
        </Link>

        <Link to="#" className="p-2 my-4 text-sm hover:bg-indigo-800">
          ABOUT US
        </Link>

        <Link to="#" className="p-2 my-4 text-sm hover:bg-indigo-800">
          SERVICES
        </Link>

        <Link to="#" className="p-2 my-4 text-sm hover:bg-indigo-800">
          ADDED
        </Link>

        <Link to="#" className="p-2 my-4 text-sm hover:bg-indigo-800">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
