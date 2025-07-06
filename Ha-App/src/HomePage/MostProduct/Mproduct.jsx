import React from 'react'
import Mpage from './Mpage';
const Mproduct = () => {
  return (
    <>
    <div className='mt-2 m-4 grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   gap-2 items-center justify-center'>
     
     <Mpage img="https://i.ibb.co/wF61n9ST/PMJ.png" heading="Learn About Us" title="Pick My Junk is a platform for efficient e-waste collection and recycling, promoting sustainability through technology and community engagement.
" />
     <Mpage img="https://i.ibb.co/Zz06F8jn/images-3.jpg" heading="Partner With Us" title="Collaboration is key to tackling e-waste effectively. We invite corporations, NGOs, and local businesses to join hands in creating a sustainable e-waste management system. Together, we can promote responsible disposal practices and build a greener future! 🌍♻
" />
     <Mpage img="https://i.ibb.co/Rpm37yCq/images-2.jpg" heading="Learn More About the E-Waste" title="E-waste management is crucial for reducing environmental hazards and conserving valuable resources. Our system focuses on proper collection, segregation, recycling, and safe disposal of electronic waste. By understanding how e-waste impacts our planet.
" />
   
 
    </div>
    </>
   )
}

export default Mproduct