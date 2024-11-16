import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Cards from './Cards';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Freebook = () => {
    const [book,setBook]=useState([]);
    useEffect(()=>{
    const getBook = async()=>{
     try {
      const res=await axios.get("http://localhost:4000/book");
      console.log(res.data.filter((data)=>data.category==="Free"));
      const info=res.data.filter((data)=>data.category==="Free");
      setBook(info);
     } catch (error) {
      console.log(error);
     }
    };
    getBook();
  },[])


  return (
    <>
      <Navbar/>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='pt-28 items-center justify-center text-center' >
      <h1 className='text-2xl md:text-4xl'>Free Offered Books</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
      Moi magni adipisci, ipsum mollitia, nam vel iste quas asperiores ab </p>
      <Link to='/'>
         <button className='mt-6 bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-900 duration-300'>Back</button>
         </Link>
      </div>
      
      <div>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
        book.map((item,index)=>(
            <Cards item={item} key={index} />
        ))
        }
      </div>
      </div>
      </div>
      <Footer/>
    </>
  );
}

export default Freebook
