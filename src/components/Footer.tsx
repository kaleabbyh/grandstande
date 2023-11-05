import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { BiLogoGooglePlus } from "react-icons/bi";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="py-10 bg-white gap-3 flex  items-center justify-center">
        <div className=" gap-3 flex   items-center justify-center">
          <Link
            to={"#"}
            className=" bg-customGreen text-white p-2 hover:bg-customPurple"
          >
            <BiLogoFacebook size={30} />
          </Link>
          <Link
            to={"#"}
            className=" bg-customGreen text-white p-2 hover:bg-customPurple"
          >
            <BiLogoTwitter size={30} />
          </Link>
          <Link
            to={"#"}
            className=" bg-customGreen text-white p-2 hover:bg-customPurple"
          >
            <BiLogoGooglePlus size={30} />
          </Link>
          <Link
            to={"#"}
            className=" bg-customGreen text-white p-2 hover:bg-customPurple"
          >
            <TfiYoutube size={30} />
          </Link>
          <Link
            to={"#"}
            className=" bg-customGreen text-white p-2 hover:bg-customPurple"
          >
            <FaLinkedinIn size={30} />
          </Link>
        </div>
      </div>
      <div className=" p-4 mb-0 bg-gradient-to-b from-customPurple via-indigo-400 to-customPurple flex items-center justify-center text-sm text-white">
        <div>
          © 2023 Ketora Trading PLC . All Rights Reserved. Website By PRIME
          Software and Hosted by Realwebhosting.net
        </div>
      </div>
    </div>
  );
};

export default Footer;
