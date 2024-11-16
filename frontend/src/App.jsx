import React from 'react'
import Home from './home/Home'
import {Routes,Route, Navigate} from "react-router-dom"
import Courses from './courses/Courses'
import Signup from './components/Signup'
import {Toaster} from "react-hot-toast"
import {useAuth} from './context/AuthProvider'
import Contact from './contact/Contact'
import About from './components/About'
import Freebook from './components/Freebook'

function App() {
  const [authUser,setAuthUser]=useAuth();
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/course" element={authUser? <Courses/>: <Navigate to="/signup"/> } />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/freebook" element={<Freebook/>} />

    </Routes>
    <Toaster/>
    </div>
    </>
  )
}

export default App
