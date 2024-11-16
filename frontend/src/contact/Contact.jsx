import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar/>
    
      <div  className='flex h-screen items-center justify-center'>
      <div className="w-[550px]">
      <h1 className='font-semibold text-center mb-5 text-xl'>Get in Touch</h1>
      <p className='mb-5 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptatem aperiam consequatur maiores reprehenderit iure ad quo dolorum tempora libero eligendi aliquam.
      
      </p>
      <form action="">
        {/* Name */}
        <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Username" />
</label>
    <br />
    {/* Email */}
    <label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
<br />
{/* subject */}
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="grow" placeholder="Subject" />
  
</label>
<br />
<label className="input input-bordered flex items-center gap-2 h-40">
  <input type="text" className="grow  h-40 " placeholder="Message" />
  
</label>
<br />
<button className="btn btn-active w-[40%] bg-green-700 outline-none border-none text-white">Submit</button>

      </form>
      
      </div>
   </div>
      <Footer/>
    </>
  )
}

export default Contact;
