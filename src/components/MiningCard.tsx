import React from "react";
import { Link } from "react-router-dom";

type cardProps = {
  card: {
    ImgUrl: string;
    title: string;
    description: string;
  };
};

const MiningCard = ({ card }: cardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
      <img
        src={card.ImgUrl}
        alt="mining.title"
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2"> {card.title}</h2>
        <p className="text-gray-600 mb-1">
          {card.description?.length > 100
            ? card.description?.slice(0, 100) + "..."
            : card.description}
          description
        </p>
        <div className="flex items-center justify-between">
          {card.description?.length > 100 && (
            <Link to={"#"} className="text-blue-500 hover:underline">
              Read More
            </Link>
          )}

          {card.description?.length <= 100 && (
            <Link to={"#"} className="text-blue-500 hover:underline">
              Details
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiningCard;
