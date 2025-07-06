import React, { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-scroll";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
// import Drawer from "./Drawer";
import Drawer from "./Drawer";
import logo from "../../images/PMJ.png";
// import Login from '../Login/Login';
// import Logout from '../Login/Logout';
// import { useAuth } from '.././Login/Context';

// import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    toast.success('You have successfully logged out'); // Toast message for logout
    setTimeout(() => {
      navigate('/'); // Navigate to the home page after showing toast
    }, 2000); // Optional: Delay for better user experience
  };
  // const [users,setusers] = useAuth();
  // const [users,setusers] = useAuth();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link className="font-semibold " to="/home">
          HOME
        </Link>
      </li>

      <li>
        <Link className="font-semibold " to="/product">
          PRODUCT
        </Link>
      </li>
      {/* <li>
        <Link
          className="font-semibold"
           to="/portfolio"
        >
          PORTFOLIO
        </Link>
      </li> */}

      <li>
        <Link className="font-semibold" to="/contact">
          CONTACT
        </Link>
      </li>
    </>
  );
  return (
    <>
    <ToastContainer />
      <div
        className={` max-w-screen-2xl container min-w-[100vw] mx-auto   text-black md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 shadow-md shadow-slate-500 ${
          sticky
            ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
        <div className="navbar ">
          {/* <Drawer /> */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar "
          >
            <div className="w-14 rounded-full ">
              <img alt="Tailwind CSS Navbar component " src={logo} />
            </div>
          </div>
          <div className=" h-12 w-24">
            <a className=" text-xl font-bold cursor-pointer  px-1"></a>
          </div>

          <div className="navbar-start">
            <div className="dropdown"></div>
          </div>

          <div>
              <label className="input ">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input type="search" className="grow" placeholder="Search" />
                {/* <kbd className="kbd kbd-sm">⌘</kbd>
                <kbd className="kbd kbd-sm">K</kbd> */}
              </label>
            </div>
            {/* <button
      onClick={handleLogout}
      className="btn btn-active btn-error mx-4 "
    >
      Logout
    </button> */}
          <div className="navbar-end space-x-3">
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">{navItems}</ul>
            </div>
           
            <div className="hidden md:block"></div>
            <button
      onClick={handleLogout}
      className="btn btn-active btn-error mx-2 "
    >
      Logout
    </button>
            {/* { users ? <Logout/>:
            <Link to="/login"> <a  onClick={()=>document.getElementById("my_modal_3").showModal()}
              className="bg-black text-white px-3 py-2 rounded-sm hover:bg-gray-700 cursor-pointer duration-100">
                Login
              </a></Link> } */}
           
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon 
              <svg
                className="swap-off fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon 
              <svg
                className="swap-on fill-current w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg> */}
              <Drawer />
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
