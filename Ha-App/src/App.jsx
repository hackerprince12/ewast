// import { useState } from 'react'
import React from 'react';
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Home from './HomePage/Home';
import AProduct from "./AdminPage/Products/ProductPage";
import ProductUp from './AdminPage/ProductUpload/ProUpload';
// import ProductPage from './AdminPage/Products/ProductPage';
import Product from './Components/ProductPage/ProductPP';
// import Product from './Components/ProductPage/ProductPP'
import Adminproduct from './AdminPage/Products/ProductPage'
// import Login from "./Components/Login/Login";
// import Signup from './Components/Login/Signup';
import Signup from './Components/Login/LoginChat/Signupchat';
import Login from './Components/Login/LoginChat/Loginchat';
import Contact from "./Components/Contact/Contact";
import AdminLogin from './AdminPage/AdminLogin/Login';
function App() {

  return (
   <>
   
   <div>
   <Routes>
      <Route path='/home' element={<Home/>}/>

      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/product' element={<Product/>}/> 
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/admin/products' element={<AProduct/>}/>
      
      <Route path='/adminLogin' element={<AdminLogin/>}/> 
      <Route path='/productup' element={<ProductUp/>}/> 
      {/* <Route path='/admin/product' element={<Product/>}/> */}
      {/* <Route path='/admin/product' element={<Adminproduct/>}/> */}
    </Routes>

   </div>
   </>
  )
}

export default App
