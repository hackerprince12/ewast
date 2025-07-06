import React from "react";

const TerraCyclePage = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-gray-100 min-h-screen p-6">
      {" "}
      {/* Left Content Section */}{" "}
      <div className="md:w-1/2 p-6">
        {" "}
        <img src="https://i.ibb.co/wF61n9ST/PMJ.png" alt="TerraCycle Logo" className="w-40  mb-4 transform transition duration-300 hover:scale-110" />{" "}
        <h1 className="text-4xl font-bold text-green-500 mb-4">Pick My Junk Foundation</h1>{" "}
        <p className="text-gray-700 mb-6">
          {" "}
          The TerraCycle Foundation fights ocean plastic at the source. Working
          closely with local communities in regions with heavily-polluted
          waterways, we design river waste prevention, collection, and recycling
          solutions.{" "}
        </p>{" "}
        <button className="bg-green-600 text-white px-6 py-2 rounded-full text-lg hover:bg-green-700">
          {" "}
          Learn more{" "}
        </button>{" "}
      </div>
      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="https://media.istockphoto.com/id/1352362769/photo/male-and-female-recycling-coworkers-holding-digital-tablet-and-plastic-box-full-of-mother.jpg?s=1024x1024&w=is&k=20&c=ydRpdvABGMplZMg0IJ9VROfbYcB7vXFzoWJbamy9JDI="
          alt="Workers cleaning up plastic waste"
          className="rounded-lg shadow-lg w-full max-w-lg transform transition duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default TerraCyclePage;
