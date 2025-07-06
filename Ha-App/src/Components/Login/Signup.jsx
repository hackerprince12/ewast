import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Login from './Login'
// import Navbar from "./Navbar";
import { signupSchema } from "./loginSchema";
import { useFormik } from "formik";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
 
  const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: signupSchema,
      onSubmit:  (values,action) => {
        // console.log(values);
        try {
          const users=  axios.post("http://localhost:3000/auth/signup",values)
          .then(res=>{
            if(res.data){
              console.log("res:",res.data.message);
              toast.success(res.data.message)
              setTimeout(()=>{
                navigate('/');
              },2000)
             
            }
            
          })
        } 
        catch (error) {
          if(error.response){
            console.log("signup data error:",error);
          }
          
        }
        action.resetForm();
      },
    });
  // console.log(errors);
  return (
    <>
     <ToastContainer />
      <div>
        {/* <Navbar /> */}
      </div>
      <form onSubmit={handleSubmit} method="div">
        <div className="flex items-center dark:text-black justify-center h-screen ">
          <div className="w-[600px]">
            <div className="modal-box">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>

              <div className="mt-4 space-y-2">
                <span>Name :</span>
                <br />
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={handleBlur}
                  className="w-80  px-3 py-2 border rounded-md outline-none"
                  placeholder="Enter your name"
                />
                {errors.name && touched.name ? (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                ) : null}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email :</span>
                <br />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={handleBlur}
                  className="w-80  px-3 py-2 border rounded-md outline-none"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email ? (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                ) : null}
              </div>

              <div className="mt-4 space-y-2">
                <span>Password :</span>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  onBlur={handleBlur}
                  className="w-80  px-3 py-2 border rounded-md outline-none"
                  placeholder="Enter your Password"
                />
                {errors.password && touched.password ? (
                  <p className="text-red-500 text-sm">{errors.password}</p>
                ) : null}
              </div>

              <div className="flex mt-4 justify-around">
                <button
                  type="submit"
                  className="bg-pink-500 px-3 py-1 rounded-sm text-white hover:bg-pink-700 duration-200"
                >
                  Signup
                </button>
                <p>
                  Have account?{" "}
                  <button
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                    className="underline text-blue-500 cursor-pointer"
                  >
                    {" "}
                    login
                  </button>
                  <Login />
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;

// import React from 'react';
// import { useFormik } from 'formik';

// const Signup= () => {
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       password: '',
//     },
//     onSubmit: values => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });
//   console.log(formik)
//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <label htmlFor="firstName">First Name</label>
//       <input
//         id="firstName"
//         name="firstName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.firstName}
//       />
//       <label htmlFor="lastName">Last Name</label>
//       <input
//         id="lastName"
//         name="lastName"
//         type="text"
//         onChange={formik.handleChange}
//         value={formik.values.lastName}
//       />
//       <label htmlFor="email">Email Address</label>
//       <input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         value={formik.values.email}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Signup
