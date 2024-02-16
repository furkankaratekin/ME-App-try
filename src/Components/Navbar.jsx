import React from "react";
import { PiHeartStraightBreakLight } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex justify-center">
        <div className="text-xl font-semibold max-w-full">
          Mihriban Evren <PiHeartStraightBreakLight /> Furkan Karatekin
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
