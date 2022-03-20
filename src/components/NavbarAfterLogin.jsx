import React from 'react'
import {  Link } from "react-router-dom"; 
import App from '../App';


function Navbar() {
  return (      
   <div className='md:flex py-3 bg-white '>
      <a href="" className='text-gray text-xl mr-10 font-Merienda font-bold'> StuNearYou</a>
      <div className='flex justify-between w-full'>
         <ul id="mobile" className='hidden md:flex  text-center font-roboto   gap-5'>
            <li>
               <Link to='/'> Home</Link>      
            </li>
            <li>
            <Link to='TalentL'> Talent list</Link>     
            </li>
            <li>
            <Link to='TalentL'> Manage</Link>     
            </li>
            <li>
               <Link to='pageb'> Meet The Team</Link>     
            </li>
         </ul>
         <ul className='md:ml-16 md:flex w-1/4 md:flex-row justify-between'>
            <li><button className='bg-blue mt-1 text-white px-2 rounded-sm'>Contact</button></li>
            <li><img className='w-8 h-8 cursor-pointer' src={require('../img/github.png')} alt="" /></li>
            <li className='mt-1'>hamza moudakir</li>
         </ul>
    </div>
    
    
    <button onClick={()=>{
      document.getElementById('mobile').style='block'
    }} className='sm:hidden  flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
         </svg>
      </button>
      </div>
      

    
  )
}
export default Navbar