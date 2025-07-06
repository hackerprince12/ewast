import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
import { useFormik } from "formik";
import { loginSchema } from '../Login/loginSchema';
import axios from 'axios'
 import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 const Login1= () => {

  const [err, seterr] = useState('');
  const navigate=useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginSchema,
      onSubmit: (values,action) => {
        try {
          const users = axios
            .post("http://localhost:3000/auth/login", values)
            .then((res) => {
              
              if(res.data.message ==='successfull'){
                toast.success(res.data.message)
                setTimeout(() => {
                  localStorage.setItem("users", res.data.user);
                  navigate("/courses");
                  window.location.reload();
                    // localStorage.setItem("users",res.data.users);
                }, 2000);
              
                console.log("res.data:",res.data)
              }
              if(res.data.message ==='norecord'){
                
                toast.error("res.data.message")
              }
              console.log("data",res.data);
              seterr(res.data);
              
            }) .catch((err) => {
              if (err.data) {
                console.log(err);
                toast.error("Error: " + err.data.message);
                setTimeout(() => {}, 2000);
              }
            });
        } catch (error) {
          console.log("signup data error:", error);
        }
        // toast.error("last toast");
        action.resetForm();
        // console.log(values);
      },
    });

  // console.log(errors);

  return (
    <>
    {
     
     
    }
    {/* {err   ? (
       
        // alert(err)
     
      
                // <p className="text-red-500 text-2xl flex mx-1  items-center">{err}</p>
              ) : null} */}
     <ToastContainer />
      <div>
        {/* <Navbar /> */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center dark:text-black justify-center h-screen ">
          {/* <dialog id="my_modal_3" className="modal"> */}
          <div className="modal-box">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/courses"
              className="btn text-red-400 btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Login!</h3>
            <div className="mt-4 space-y-2">
              <span>Email :</span>
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur}
                autoComplete="off"
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
                Login
              </button>
              <p>
                Not register{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  {" "}
                  SignUp
                </Link>
              </p>
            </div>
          </div>
          {/* </dialog> */}
        </div>
      </form>
    </>
  );
};

export default Login1;
