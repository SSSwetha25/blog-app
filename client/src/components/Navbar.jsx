import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32 ">
      <img
        onClick={() => navigate("/")}
        src={assets.blog}
        alt=""
        className="w-20 sm:w-15 cursor-pointer"
      />
      <button
        onClick={() => navigate('/admin')}
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-2.5"
      >
        Login
        <img src={assets.arrow} className="w-7" alt="arrows" />
      </button>
    </div>
  );
};

export default Navbar;
