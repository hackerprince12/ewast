// import React, { useEffect, useState } from "react";
// // import { CrousalSchema } from "./CrousalSchema";
// // import ProductSchema from '../ProductUpload/ProductSChema';
// import { ProductSchema } from "./ProductSChema";

// import { useFormik } from "formik";
// import axios from "axios";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// import FooterA from "../../Components/Footer/FooterA";
// import Navbar from "../../Components/Nav/Navbar";

// const ProductUp = () => {
//   const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
//     useFormik({
//       initialValues: {
//         category: "",
//         name: "",
//         model: "",
//         discription:"",
//         image: "",
//       },
//       validationSchema: ProductSchema,
//       onSubmit: (values, action) => {
//         console.log(values);
//         try {
//           const users = axios.post("http://localhost:3000/api/create", values);
//         } catch (error) {
//           console.log("post crousal error:", error);
//         }
//         toast.success("Add crousal successed");
//         action.resetForm();
//       },
//     });

//   return (
//   <>
//   <Navbar/>
//        <ToastContainer />
//        <h className="text-2xl mt-24 font-extrabold flex justify-center items-center m-2">
//          Admin Panel
//        </h>
//        <div className=" flex justify-center items-center flex-col">
//          <form
//            onSubmit={handleSubmit}
//            className="m-2 flex flex-col gap-y-2  p-2"
//          >
//            <div className="  ">
//              <label className="px-2 font-semibold">Category:</label>
//              <input
//                type="text"
//                value={values.category}
//                onChange={handleChange}
//                onBlur={handleBlur}
//                name="category"
//                className="grow px-2 border-[1px] border-black"
//                placeholder="enter name.."
//              />
             
//            </div>
//            {errors.category && touched.category ? (
//                <p className="text-red-500 text-sm">{errors.category}</p>
//              ) : null}

//               <div className="  ">
//            <label className="px-2 font-semibold">Name:</label>
//            <input
//              type="text"
//              value={values.name}
//              onChange={handleChange}
//              onBlur={handleBlur}
//              name="name"
//              className="grow px-2 border-[1px] border-black"
//              placeholder="enter title"
//            />
//            </div>
//            {errors.name && touched.name ? (
//              <p className="text-red-500 text-sm">{errors.name}</p>
//            ) : null}
//            <div>
//            <label className="px-2 font-semibold">Model</label>
//            <input
//              type="text"
//              value={values.model}
//              onChange={handleChange}
//              onBlur={handleBlur}
//              name="model"
//              className="grow px-2 border-[1px] border-black"
//              placeholder="enter information.."
//            />
//            </div>
//            {errors.model && touched.model ? (
//              <p className="text-red-500 text-sm">{errors.model}</p>
//            ) : null}
//            <div>
//            <label className="px-2 font-semibold">Discription:</label>
//            <input
//              type="text"
//              value={values.discription}
//              onChange={handleChange}
//              onBlur={handleBlur}
//              name="discription"
//              className="grow px-2 border-[1px] border-black"
//              placeholder="enter image url.."
//            />
//            </div>
//            {errors.discription && touched.discription ? (
//              <p className="text-red-500 text-sm">{errors.discription}</p>
//            ) : null}
//            <div>
//            <label className="px-2 font-semibold">Image URL:</label>
//            <input
//              type="text"
//              value={values.image}
//              onChange={handleChange}
//              onBlur={handleBlur}
//              name="image"
//              className="grow px-2 border-[1px] border-black"
//              placeholder="enter image url.."
//            />
//            </div>
//            {errors.image && touched.image ? (
//              <p className="text-red-500 text-sm">{errors.image}</p>
//            ) : null}
//            <div>
//            <button type="submit" className="bg-green-400 mb-24  m-4 rounded-sm px-4 py-2">
//              submit
//            </button>
//            </div>
//          </form>
//        </div>
//        <FooterA/>
//      </>
//   )
// }

// export default ProductUp



import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterA from "../../Components/Footer/FooterA";
import Navbar from "../../Components/Nav/Navbar";
import { ProductSchema } from "./ProductSChema";

const ProductUp = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        category: "",
        name: "",
        model: "",
        discription: "",
        image: "",
      },
      validationSchema: ProductSchema,
      onSubmit: async (values, action) => {
        try {
          await axios.post("http://localhost:3000/api/create", values);
          toast.success("Product added successfully!");
          action.resetForm();
        } catch (error) {
          console.error("Error adding product:", error);
          toast.error("Failed to add product. Try again!");
        }
      },
    });

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="min-h-screen mt-18 bg-gray-100 flex flex-col items-center pb-8">
        <h1 className="text-3xl font-bold mt-10 mb-6 text-gray-800">Admin Panel</h1>
        <h2 className="text-xl text-green-600 font-semibold mb-4">Upload Product</h2>
<a className=" text-blue-500 text-sm p-2" href="/admin/products">Go to product management-</a>
        <div className="bg-white shadow-lg rounded-lg w-full max-w-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="category" className="block text-lg font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                id="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter category..."
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 ${
                  errors.category && touched.category ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.category && touched.category && (
                <p className="mt-2 text-sm text-red-500">{errors.category}</p>
              )}
            </div>

            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter product name..."
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 ${
                  errors.name && touched.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && touched.name && (
                <p className="mt-2 text-sm text-red-500">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="model" className="block text-lg font-medium text-gray-700">
                Model
              </label>
              <input
                type="text"
                name="model"
                id="model"
                value={values.model}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter model..."
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 ${
                  errors.model && touched.model ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.model && touched.model && (
                <p className="mt-2 text-sm text-red-500">{errors.model}</p>
              )}
            </div>

            <div>
              <label htmlFor="discription" className="block text-lg font-medium text-gray-700">
                Description
              </label>
              <textarea
                name="discription"
                id="discription"
                value={values.discription}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter product description..."
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 ${
                  errors.discription && touched.discription ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.discription && touched.discription && (
                <p className="mt-2 text-sm text-red-500">{errors.discription}</p>
              )}
            </div>

            <div>
              <label htmlFor="image" className="block text-lg font-medium text-gray-700">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                id="image"
                value={values.image}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter image URL..."
                className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 ${
                  errors.image && touched.image ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.image && touched.image && (
                <p className="mt-2 text-sm text-red-500">{errors.image}</p>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <FooterA />
    </>
  );
};

export default ProductUp;
