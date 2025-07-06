import React from 'react'
import Featurecompo from "../HomePage/Featurecompo"
const Feature = () => {
  return (
   <>
   <div className='mt-2 m-4 grid sm:grid-cols-2 mb-12 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5   gap-2 items-center justify-center'>
    <Featurecompo img="https://i.ibb.co/vCgx14sG/images-4.jpg" heading="Collaboration with Schools
" title="We believe in educating the next generation about responsible e-waste management. By partnering with schools, we conduct awareness campaigns, recycling drives, and interactive workshops to instill eco-friendly habits in students. Through hands-on learning and participation, we empower young minds to become environmental champions and contribute to a sustainable future." />
    <Featurecompo img="https://i.ibb.co/whJTnY1r/images-5.jpg" heading="Public Awareness Campaign
" title="Our public awareness campaigns aim to educate communities about the dangers of improper e-waste disposal and promote sustainable recycling practices. Through social media, workshops, and local events, we engage individuals in responsible e-waste management. By spreading knowledge and encouraging participation, we strive to build a conscious and eco-friendly society that actively contributes to a cleaner environment." />
    <Featurecompo img="https://i.ibb.co/xSygpc23/images-6.jpg" heading="Skill-Building Program
" title="Our skill-building program empowers individuals with hands-on training in e-waste management, recycling techniques, and sustainable practices. We collaborate with experts to provide certified workshops, upcycling projects, and technical education to enhance employment opportunities. By equipping people with the right skills, we aim to foster green entrepreneurship and create a . ♻🚀
" />
  

   </div>
   </>
  )
}

export default Feature