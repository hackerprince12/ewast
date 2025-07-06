// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AdminLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const response = await axios.post("http://localhost:3000/api/login", {
//         email,
//         password,
//       });

//       if (response.data.success) {
//         toast.success(response.data.message || "Login successful!");
//         setTimeout(() => {
//           navigate("/productup"); // Navigate to /productup
//         }, 2000); // Optional delay for better user experience
//       } else {
//         toast.error(response.data.message || "Invalid credentials!");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       toast.error("An error occurred. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <ToastContainer />
//       <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Admin Login</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-lg font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none border-gray-300"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="password" className="block text-lg font-medium text-gray-700">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none border-gray-300"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className={`w-full py-2 text-white font-semibold rounded-md shadow ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-500 hover:bg-blue-700 focus:ring focus:ring-blue-300 focus:outline-none"
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;



import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:3000/api/login', {
        email,
        password,
      });

      // Assuming the API returns a success message and possibly a token
      if (res.data) {
        toast.success(res.data.message || 'Logged in successfully');
        console.log('Token:', res.data.token); // Handle the token as needed
        setTimeout(() => {
          navigate('/productup'); // Navigate to the home page after successful login
        }, 2000);
      }
    } catch (error) {
      // Handle errors returned by the API
      if (error.response) {
        toast.error(error.response.data.message || 'Login failed');
      } else {
        toast.error('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6"> Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white rounded ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
            }`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{' '}
            <span
              onClick={() => navigate('/signup')}
              className="text-blue-500 underline cursor-pointer"
            >
              signup
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
