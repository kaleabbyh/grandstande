import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

interface NavbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<NavbarProps> = ({ isOpen, toggleSidebar }) => {
  const [activeTab, setActiveTab] = useState("");
  type TabName = "contact" | "home" | "about" | "service";
  const openTab = (tabName: TabName): void => {
    setActiveTab(tabName);
  };
  return (
    <div
      className={`fixed  top-0 right-0 h-screen shadow-lg flex flex-col pr-10 w-60 pt-4 bg-customPurple text-white transition-transform transform ${
        !isOpen ? "hidden" : ""
      }`}
    >
      <button className="p-3 ml-auto" onClick={toggleSidebar}>
        <IoMdCloseCircleOutline size={30} />
      </button>
      <div className="flex flex-col px-2 mr-2 flex-grow overflow-y-auto">
        <Link
          to="/"
          onClick={() => openTab("home")}
          className={`px-4 rounded-xs  p-3 ${
            activeTab === "home" ? "bg-customGreen" : ""
          } `}
        >
          HOME
        </Link>

        <Link
          to="/aboutus"
          onClick={() => openTab("about")}
          className={`px-4 rounded-xs  p-3 ${
            activeTab === "about" ? "bg-customGreen" : ""
          } `}
        >
          ABOUT US
        </Link>

        <Link
          to="/services"
          onClick={() => openTab("service")}
          className={`px-4 rounded-xs  p-3 ${
            activeTab === "service" ? "bg-customGreen" : ""
          } `}
        >
          SERVICES
        </Link>

        <Link
          to="#"
          onClick={() => openTab("home")}
          className={`px-4 rounded-xs  p-3 ${
            activeTab === "added" ? "bg-customGreen" : ""
          } `}
        >
          MINING
        </Link>

        <Link
          to="/contact"
          onClick={() => openTab("contact")}
          className={`px-4 rounded-xs  p-3 ${
            activeTab === "contact" ? "bg-customGreen" : ""
          } `}
        >
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
