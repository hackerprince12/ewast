import axios from "axios";
import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
const Table = ({ item }) => {
  const handleDelete = (id) => {
    // e.preventDefault();

    axios.delete(`http://localhost:3000/api/delete/${id}`).then((res) => {
      console.log(res);
      toast.success("Rating id Delete successfull");
    });
  };
  return (
    <div className="mt-2 flex flex-col justify-start items-start ">
      <ul className="">
        <img
          src={item.image}
          className="w-52 h-52 object-cover object-center"
          alt="images"
        />
        <li className="text-2xl font-medium">{item.name}</li>
        <li className="text-xl text-green-600 font-medium">{item.model}</li>
        {/* <li className="text-xl text-green-600 font-medium">{item.category}</li> */}
        {/* <li> ID :{item._id}</li> */}
        <button
          onClick={() => handleDelete(item._id)}
          className="  px-2 bg-red-500 rounded-sm text-white m-1"
        >
          Delete
        </button>
      </ul>
    </div>
  );
};

export default Table;
