import React from "react";
import Mihi from "../assets/Mihi.jpeg";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white h-screen flex flex-col-reverse md:flex-row justify-center items-center">
      <div className="m-auto w-full md:w-2/5 p-4 order-2 md:order-none">
        <p className="text-lg hover:text-red-500 hover:animate-rainbow hover:transform hover:scale-105">
          Sevgilim,
          <br />
          <br />
            Seni üzdüğüm için özür dilerimmm, o gün ki sen sinir eden hareklerimden de.
            <br /> 
            Bana sadece aramızda cinsel çekim var ve beni sevmiyorsun demen beni baya üzdü (baya baya).
            <br />
            Bilmiyorum elimden daha ne gelir ama şimdilik ne iyi özür dileme fikri bu geldi.

            
            

          <br />
          <br />
          Seni seven o insannnn
        </p>
      </div>

      <div className="m-auto w-full md:w-1/2 order-1 md:order-none">
        <img
          src={Mihi}
          alt="Sevgiliye"
          className="max-w-sm rounded-3xl mx-auto"
        />
      </div>
    </div>
  );
};

export default Home;
