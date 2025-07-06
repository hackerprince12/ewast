import React from "react";
// import logo from "../assets/SN_logo.png";

//logo
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const footerA = () => {
  return (
    <>
      <footer className="footer bg-slate-800 text-white p-10  flex flex-row justify-between">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover"> Our Recycling Process</a>
          <a className="link link-hover">Recycling guarantee</a>
          <a className="link link-hover">Partner with us</a>
          <a className="link link-hover">Marketing</a>
        </nav>
        <nav>
          <h6 href="/home"  className="footer-title">Zero Waste Box™</h6>
          <a  href="/Services" className="link link-hover">services</a>
          <a href="/contact"  className="link link-hover">Contact</a>
          <a href="/portfolio"  className="link link-hover">Rewards</a>
          <a href="/blog"  className="link link-hover">Find a drop-off location</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <nav>
          <h className="footer-title">Email Us</h><h className="link link-hover">pickmyjunk@gmail.com</h>
          <h className="footer-title">Call Us</h><h className="link link-hover">+91 1234567890 </h>
        </nav>
     
      
       
      </footer>
      <div className="text-center bg-gray-900 flex justify-center item-center text-white p-4">  <p>
            
           
          &copy; 2025 - All right reserved
          </p></div>
   
    </>
  );
};

export default footerA;
