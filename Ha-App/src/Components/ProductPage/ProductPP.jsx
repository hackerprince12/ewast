import React from 'react'
import Navbar from '../Nav/Navbar'
import FooterA from '../Footer/FooterA'
import Productp from './Productp';

const ProductPP = () => {
  return (
    <>
    <div className='mt-16'>
      <Navbar/>
      {/* <h className="flex justify-center item-center text-2xl font-bold">Products</h> */}
      
      <Productp/>
      <FooterA/>
    </div>
    </>
  )
}

export default ProductPP