import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from "../assets/aboutpic.jpeg";

const About = () => {
  return (
    <>
      <Navbar/>
      <div  className='flex h-screen'>
      <div className="w-[550px] mt-48 ml-16"> 
         <h1 className='font-semibold text-center text-xl'>About</h1>
         <br />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A possimus obcaecati ducimus maxime quam excepturi quae quas. Voluptatum aspernatur consectetur eaque accusantium recusandae commodi sint nemo labore ab? Quasi, doloribus!
         Enim sequi dolorum sunt voluptas qui optio excepturi harum officiis aliquid. Minus vitae, dolorem, perferendis temporibus omnis fugit quos iure expedita, hic at impedit debitis voluptatem beatae nihil obcaecati quisquam. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis voluptatem dolorum alias distinctio animi rem id? Id iure quibusdam animi, ducimus expedita qui, officia eveniet pariatur impedit non, velit quia!
         Veritatis minus nisi cumque quos, fugit tenetur, ipsam minima mollitia itaque, fugiat quo ullam numquam similique consequatur. Sit, atque. Modi tempore fuga nulla tenetur accusamus magni quo commodi ea nostrum. </p>
      </div>
      <div>
        <img src={Image} alt="Books" className='mt-48 ml-80 w-[80%]' />
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default About
