import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useState } from "react";

function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
    console.log("clicked");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex ">
      <div className="container   mx-auto  ">
        <Header openSidebar={openSidebar} />

        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
        <div>holla</div>
      </div>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default HomePage;
