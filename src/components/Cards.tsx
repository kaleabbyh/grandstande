import { Link } from "react-router-dom";

import { useState } from "react";

type cardProps = {
  card: {
    ImgUrl: string;
    alt?: string;
    title: string;
    height: number;
  };
};

const Cards = ({ card }: cardProps) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className={`bg-white mx-2 rounded-sm h-${card.height} w-60 shadow-md overflow-hidden relative`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="group">
        <img
          src={card.ImgUrl}
          alt="recipe.title"
          className={`w-full h-${
            card.height - 10
          } object-cover overflow-hidden transform transition-transform duration-700 group-hover:brightness-50 
          0 group-hover:scale-110`}
        />
        <div className="p-4 h-12">
          <p className="text-gray-800 mb-1 text-md font-normal flex">
            {card.title}
          </p>
        </div>
        {isHover && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link
              to={"/"}
              className="hover:bg-gray-900 m-1 text-sm hover:text-white border border-white text-white px-2 py-1 rounded-xl shadow-md"
            >
              ZOOM
            </Link>
            <Link
              to={"/"}
              className="hover:bg-gray-900 text-sm hover:text-white border border-white text-white px-2 py-1 rounded-xl shadow-md"
            >
              VIEW
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
