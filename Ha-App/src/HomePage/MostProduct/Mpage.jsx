import React from "react";

const RecyclingCard = ({img,heading,title}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden  transform transition duration-300 hover:scale-110">
      {" "}
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Ferrero and Kinder recycling program"
      />{" "}
      <div className="p-4 text-center">
        {" "}
        <h3 className="text-lg  font-bold text-green-500">
         {heading}
        </h3>{" "}
        <p className="text-gray-800 font-semibold mt-2">
          {" "}
          {title}{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default RecyclingCard;
