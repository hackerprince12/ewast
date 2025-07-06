import React, {  useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react';

export const auth= createContext([]);

export default function Context({ children }){
  const initialAuthUser = localStorage.getItem("users");
  console.log(initialAuthUser);

  const [users, setusers] = useState(  
    initialAuthUser ? initialAuthUser : undefined
  );
  return (
  <auth.Provider value={[users,setusers]}>
    {children}
  </auth.Provider>
  )
}

export const useAuth = () => useContext(auth);





// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export default function AuthProvider({ children }) {
//   const initialAuthUser = localStorage.getItem("Users");
//   const [authUser, setAuthUser] = useState(
//     initialAuthUser ? JSON.parse(initialAuthUser) : undefined
//   );
//   return (
//     <AuthContext.Provider value={[authUser, setAuthUser]}>
//       {children}
//     </AuthContext.Provider>
//   );
// }
// export const useAuth = () => useContext(AuthContext);
