import React from "react";
import { FaSearch } from "react-icons/fa";

const InputSearch = () => {
  return (
    <div className="pt-12 pb-7 flex items-center justify-center">
      <div className="w-4/5 grid grid-cols-6 gap-4 border border-gray-300 p-4 rounded-md items-center">
        {/* Input */}
        <div className="col-span-4">
          <input className="border w-full p-2" placeholder="Search a user" />
        </div>
        {/* Button */}
        <div className="col-span-2 flex justify-center">
          <button className="btn btn-primary w-4/5 flex items-center justify-center">
            <span className="mr-2 hidden sm:inline text-white">Search</span>{" "}
            {/* Texte visible uniquement sur les écrans de taille moyenne ou plus */}
            <FaSearch className="text-xl" fill="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSearch;
