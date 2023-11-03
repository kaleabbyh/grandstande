import NotFoundImg from "../assets/images/notfound.jpg";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
    <p className="text-xl text-gray-600">
      Oops! The page you are looking for does not exist.
    </p>
    <Link
      to="/"
      className=" rounded-md px-6 py-2 mt-2 border border-indigo-400 hover:text-white text-sm  hover:bg-indigo-500 transform transition-transform hover:scale-105"
    >
      Home
    </Link>
    <img className=" w-96 h-80 mt-4" src={NotFoundImg} alt="404 Not Found" />
  </div>
);

export default NotFound;
