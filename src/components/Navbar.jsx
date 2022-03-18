import React from 'react'

function Navbar() {
 
 
  return (
   <div className='flex   justify-between py-3 bg-white'>
     <a href="" className='text-gray text-xl  font-Merienda font-bold'> StuNearYou</a>
       <div >
     <ul id="mobile" className='hidden md:flex  text-center font-roboto  mx-end   gap-5'>
         
       <li>
         <a href="">Home</a>
       </li>
       <li>
         <a href="">Talent list</a>
       </li>
       <li>
         <a href=""> Meet the Team</a>
       </li>
       <li>
         <a href="" className=' hover:bg-lime border-2 border-lime text-lime hover:text-white font-roboto rounded  py-2 px-4'> 
         LOGIN</a>

       </li>
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