import React from "react";
// import logo from "../Landingpage.jsx/ISRO_LOGO1.png";
// import { Link } from "react-scroll";
// import logo from "../assets/SKLOGO.png";
import { IoReorderThreeSharp } from "react-icons/io5";
// import { Links } from "react-router-dom";
import { Link } from "react-router-dom";
//logo
// import logo from "../assets/SN_logob.png";
import logo from "../../images/PMJ.png";
//icon
import { IoIosCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
//drawer
import { RiContactsFill } from "react-icons/ri";
import { TiHome } from "react-icons/ti";
import { FcAbout } from "react-icons/fc";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
const Drawer = () => {
  //calling fun
  function CallButton({ phoneNumber }) {
    const handleCall = () => {
      if (phoneNumber) {
        // Construct the tel: URI
        const telUri = `tel:${phoneNumber}`;

        window.location.href = telUri;
      } else {
        alert("Calling is not supported on this device. Please use a phone.");
      }

      // } else {
      //   alert("No phone number provided."); // Or a more user-friendly message
      // }
    };
    return (
      <button
        className="text-white rounded-full  text-xl bg-green-500 p-2"
        onClick={handleCall}
      >
        <IoIosCall />
      </button>
    );
  }
  const myPhoneNumber = "+918004643571";
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="flex mt-0 items-center h-[50px]"
          >
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <div className="flex items-start ">
                <div className="avatar">
                  {/* <div className="w-16 rounded-full">
                    <img src='/' />
                  </div> */}
                </div>
              </div>
            </div>

            <IoReorderThreeSharp className=" text-5xl" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* <div className="w-14 rounded-full ">
            hjhggy
            <img alt="Tailwind CSS Navbar component " src={logo} />
          </div> */}

          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}

            <div className="w-14 flex items-center  border-2 border-orange-400 rounded-full ">
              <img
                className="rounded-full "
                alt="Tailwind CSS Navbar component "
                src={logo}
              />
              <h1 className="text- mx-2">
                PICK MY JUNK<span className="text-orange-400"></span>
              </h1>
            </div>
            <hr className="border-2 border-white mt-2"></hr>
            <li className="hover:shadow-sm">
              <Link className="font-semibold text-black" to="/">
                <TiHome className="text-blue-500" />
                HOME
              </Link>
            </li>

            {/* <li>
              <Link className="font-semibold text-black" to="/services">
                <MdOutlineMiscellaneousServices className="text-blue-500" />{" "}
                SERVICE
              </Link>
            </li> */}
            {/* <li>
              <Link className="font-semibold text-black" to="/ourteam">
                <RiTeamFill className="text-blue-500" /> OUR TEAM
              </Link>
            </li> */}
            <li>
              <Link className="font-semibold text-black" to="/product">
                <FcAbout className="text-blue-500" />
                PRODUCT
              </Link>
            </li>
            {/* <li>
              <Link className="font-semibold text-black" to="/blog">
                <FaBloggerB className="text-blue-500" />
                BLOG
              </Link>
            </li> */}
            <li>
              <Link className="font-semibold text-black" to="/contact">
                <RiContactsFill className="text-blue-500" /> Contact
              </Link>
            </li>
            <li>
              <Link className="font-semibold text-black" to="/adminlogin">
                <RiContactsFill className="text-blue-500" /> Admin Login
              </Link>
            </li>
           
            <div className="flex gap-3 text-xl mx-2 mt-4 text-blue-600 ">
              <a href="#">
                <FaWhatsapp />
              </a>

              {/* <a><FaFacebook/></a> */}
              <a href="#">
                <FaLinkedin />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaSquareThreads />
              </a>
              <a href="#">
                <FaTelegram />
              </a>
            </div>

            {/* <div className="mx-2">
              <ul className="flex items-center pt-2">
                <CallButton phoneNumber={myPhoneNumber} />
                <li className="text-blue-500">+91 8004643571</li>
              </ul>
            </div> */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Drawer;
