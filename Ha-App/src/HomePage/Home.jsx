import React from 'react'
import Nav from "../Components/Nav/Navbar"
import Hero from "../HomePage/Hero"
// import Footer from '../Components/Footer/Footer'
import FooterA from '../Components/Footer/FooterA'
import Feature from './Feature'
import Mproduct from './MostProduct/Mproduct'
import Tradepage from './Tradepage/TradePage';

// import Td from './TD/Td';
const Home = () => {
  return (
   <>
   <div>
    <Nav />
<Hero/> 
{/* <Td/> */}
<Tradepage/>
{/* <Footer/> */}
{/* <h className='text-center  flex justify-center item-center text-2xl m-4  font-bold mt-4'>Most Popular</h> */}
<h className='text-center  flex justify-center item-center text-4xl m-4 text-green-500  font-semibold mt-4'>Get to know about PICK MY JUNK</h>
<p className='text-center mx-4 text-lg pb-8 max-h-[9rem] min-w-[50%]'>At PICK MY JUNK, we believe there should be no such thing as waste. We’ve been finding new solutions and new uses for our trash for over 20 years. Together, we’re keeping valuable materials out of our landfills and environment, and Eliminating the Idea of Waste.</p>
<Mproduct/>
<h className='text-center  flex justify-center item-center text-5xl m-4 mt-8 text-green-500  font-semibold mt-4'>Community Engagement</h>
<p className='text-center mx-4 text-lg pb-8 max-h-[9rem]'>Community involvement is at the heart of <span className='text-green-500'>PICK MY JUNK.</span> By engaging communities, we create a movement that encourages resposible e-waste management.</p>
<Feature/>
<FooterA/>
   </div>
   </>
  )
}

export default Home