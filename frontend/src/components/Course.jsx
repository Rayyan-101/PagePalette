import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from "axios";

const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook = async()=>{
     try {
      const res=await axios.get("http://localhost:4000/book");
      console.log(res.data);
      const info=res.data.filter((data)=>data.category==="Paid");
      setBook(info);
     } catch (error) {
      console.log(error);
     }
    };
    getBook();
  },[])
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='pt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>Expand Your Mind,<br />
            <span className='text-pink-500'> By Reading a Book! :)</span>
             </h1>
             <p className='mt-12'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquam
               repellat harum accusantium eius odit deserunt atque commodi
               voluptates voluptas maxime, veniam nisi! Hic eaque recusandae culpa voluptates nam molestiae.
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi perferendis optio, aperiam tempora, necessitatibus libero reiciendis,
                dolorum amet delectus repellendus et architecto ex iusto error repudiandae quisquam quis officia eveniet.
             </p>
         <Link to='/'>
         <button className='mt-6 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-900 duration-300'>Back</button>
         </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {
            book.map((item)=>(
              <Cards key={item.id} item={item}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Course
