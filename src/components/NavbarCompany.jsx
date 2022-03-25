import React from 'react'
import { Link } from 'react-router-dom'

function NavbarCompany() {
  return (
    <div>
          <div className='md:flex py-3 bg-white '>
      <a href="" className='text-Gray text-xl mr-10 font-Merienda font-bold'> StuNearYou</a>
      <div className='flex justify-between w-full'>
         <ul id="mobile" className='hidden md:flex  mx-auto text-center font-roboto   gap-5'>
            <li className='hover:border-b-2 border-Blue'>
               <Link to='/company/my-profile'> Profile</Link>      
            </li>
            <li className='hover:border-b-2 border-Blue'>
            <Link to='/Talent'> Talent list</Link>     
            </li>
            <li className='hover:border-b-2 border-Blue'>
            <Link to='/companyP/postJ'> Post a Job</Link>     
            </li>
            <li className='hover:border-b-2 border-Blue' >
               <Link to='/Teams'> Meet The Team</Link>     
            </li>
         </ul>
            

    </div>
    <div className='hidden sm:block'><Link to="/" className=' hover:bg-lime border-2 border-lime text-lime hover:text-white font-roboto rounded  py-2 px-4'>LOGOUT</Link></div>
    
    
    <button onClick={()=>{
      document.getElementById('mobile').style='block'
    }} className='sm:hidden  flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
         <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
         </svg>
      </button>
      </div>
      
    </div>
  )
}

export default NavbarCompany