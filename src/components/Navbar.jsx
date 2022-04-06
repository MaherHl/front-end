import React from 'react'
import {  Link } from "react-router-dom";




function Navbar() {
  
  return (
    
      
      <div className='flex   justify-between py-3 bg-white'>
    <a href="" className='text-Gray text-xl  font-Merienda font-bold'> StuNearYou</a>
    <div className=' mx-auto'>
      <ul id="mobile" className='hidden md:flex  text-center font-roboto  mx-end   gap-5'>
        <li className='hover:border-b-2 border-Blue'>
          <Link to='/'> Home</Link>      
        </li>
        <li className='hover:border-b-2 border-Blue'>
        <Link to='/talent'> Talent list</Link>     
        </li>
        <li className='hover:border-b-2 border-Blue'>
          <Link to='/teams'> Meet The Team</Link>     
        </li>
      </ul>
    </div>
        <div className='hidden sm:block'>
        <Link to="/login-freelancer" className='hover:bg-lime border-2 border-lime text-lime hover:text-white font-roboto rounded  py-2 px-4' >Login</Link>
          {/* {islogged?<Link to="/login-freelancer" className=' hover:bg-lime border-2 border-lime text-lime hover:text-white font-roboto rounded  py-2 px-4' onClick={()=>dispatch(login())}>Log out</Link>:
          <Link to="/login-company" className=' hover:bg-lime border-2 border-lime text-lime hover:text-white font-roboto rounded  py-2 px-4' onClick={()=>dispatch(logout())}>Login</Link>} */}
          
        </div>
    
    
    <button onClick={()=>{
      document.getElementById('mobile').style='block'
    }} className='sm:hidden  flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      </div>
      
     

    
  )
}
export default Navbar