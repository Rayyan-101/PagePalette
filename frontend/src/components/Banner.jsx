import React from 'react'
import image from "../../public/image.jpg"
function Banner() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 mt-16'>
        <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32 '>
            <div className='space-y-12 '>
                <h1 className='text-4xl font-bold'>
                    The Store That Feeds Your Mind.
                    <span className='text-green-700'> Find A Book!!!</span>
                </h1>
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Modi magni adipisci, ipsum mollitia, nam vel iste quas asperiores ab 
                    voluptates quasi harum! Asperiores autem similique, necessitatibus nostrum obcaecati aspernatur consequatur!
                </p>
                <label className="input input-bordered flex items-center gap-2">
                <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-5 w-5 opacity-70  text-gray-700 ">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
  <input type="text" className="grow text-lg text-gray-700" placeholder="Find your book" />
</label>
            </div>
            <button className="btn mt-9 bg-green-700 px-7 hover:bg-green-900 border-none outline-none text-lg text-gray-100">Search</button>
            
        </div>
        <div className='order-1 w-full md:w-1/2 mt-8 ml-14 pb-10'>
            <img src={image} className='w-92 h-82' alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
