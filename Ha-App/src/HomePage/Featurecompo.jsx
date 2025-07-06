import React from "react";

const InfoCard = ({img,heading,title}) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden  transform transition duration-300 hover:scale-110">
      {" "}
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Terracycle facility"
      />{" "}
      <div className="p-4">
        {" "}
        <h2 className="text-lg font-bold text-green-700">
          {heading}
        </h2>{" "}
        <p className="text-gray-600 mt-2">
          {" "}
          {title}{" "}
        </p>{" "}
      </div>{" "}
      <div className="bg-green-700 text-white text-center py-3 font-semibold cursor-pointer hover:bg-green-800">
        {" "}
        Learn more{" "}
      </div>{" "}
    </div>
  );
};

export default InfoCard;
