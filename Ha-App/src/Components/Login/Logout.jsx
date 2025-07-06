import React from "react";
import { useAuth } from "../Login/Context";
import { toast } from 'react-toastify';

const Logout = () => {

  const [users,setusers] = useAuth();

  const handleLogout = () => {
    try {
      setusers({
        ...users,
        users: null,
      });
      localStorage.removeItem("users");
      
      toast.success("Logout successfully")

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(() => {}, 2000);
    }
  };

  return (
    <div>
    <button
      className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
      onClick={handleLogout}
    >
      Logout
    </button>
  </div>
  )
}

export default Logout