import { Link } from "react-router-dom";
import SOCKS1 from "../assets/images/socks.jpg";
import SOCKS2 from "../assets/images/socks2.jpg";
import MEDICATION2 from "../assets/images/medication2.jpg";
import MiningCard from "../components/MiningCard";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";

const MiningPage = () => {
  const cards = [
    {
      ImgUrl: SOCKS1,
      title: "sock one",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatem ut in fugiat libero voluptatum beatae consequuntur sapiente unde dolore odio. 
      Atque culpa doloribus consectetur harum alias quidem dolorem odio repellat.`,
    },
    {
      ImgUrl: SOCKS2,
      title: "sock two",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatem ut in fugiat libero voluptatum beatae consequuntur sapiente unde dolore odio. 
        Atque culpa doloribus consectetur harum alias quidem dolorem odio repellat.`,
    },
    {
      ImgUrl: MEDICATION2,
      title: "medication",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatem ut in fugiat libero voluptatum beatae consequuntur sapiente unde dolore odio. 
        Atque culpa doloribus consectetur harum alias quidem dolorem odio repellat.`,
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const openSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      <div className="">
        <Header openSidebar={openSidebar} />

        <div className="bg-gray-100 p-10 bg-opacity-90">
          <h1 className="text-2xl font-semibold mb-4 flex items-center justify-center">
            WELCOME TO KETORAN MININGS
          </h1>
          <p className="text-gray-600 mb-8 flex items-center justify-center">
            Discover our latest minings
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5 py-5 md:px-20 gap-5">
            {cards.map((card, index) => (
              <MiningCard card={card} key={index} />
            ))}
          </div>
          <div className="border rounded-md flex  items-center justify-center text-gray-900 text-2xl mt-10 font-semibold capitalize p-5">
            <p className=" ">{cards[0].title}</p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center shadow-lg rounded-lg">
            <div className="w-full md:w-1/2 p-4 rounded-lg">
              <Link to="/">
                <img
                  src={cards[0].ImgUrl}
                  className="w-full rounded-lg p-2 transition-transform duration-300 hover:scale-110 m-5"
                  alt=""
                />
              </Link>
            </div>
            <div className="rounded-lg  w-full md:w-1/2 p-4">
              {cards[0].description}
            </div>
          </div>
        </div>

        <Footer />
      </div>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default MiningPage;
