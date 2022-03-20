import React from 'react'




export default function JobDetails(){
   return(
      <div className='container'>
    
         <div className="container mx-auto relative bg-gray-200 rounded-xl  mt-20 p-10">
         <nav className='flex '>
         <img className='px-9 w-44 border-[1px] rounded-md border-gray-400 p-2' src={require('../img/head.png')}/>
         <h1 className='text-black text-2xl sm:ml-4 md:ml-16'>Front End Web Ecommerce</h1>
         <span className='flex flex-row  absolute right-10 top-10'>
            <button className='border-[1px] bg-blue-500 text-white border-slate-400 h-8 px-2 rounded-md mx-4'>Postule</button>
            <button className='text-slate-500'> X </button>
         </span>
         </nav>

         <table className=' w-full mx-10 mt-6'>
            <tr className='text-gray-400'>
               <td>Technologies</td>
               <td>Duration</td>
               <td>Company</td>
               <td>Pricing</td>
            </tr>
            <tr className='text-sm'>
               {/* technoilogie */}
               <td>
               <ul className='text-sm ml-4'>
                  <li>- Html and Css</li>
                  <li>- Php, laravel</li>
                  <li>- Python, Django</li>
               </ul>
               </td>
               {/* duration */}
               <td>
                  <ul className='text-sm'>
                     <li>3 Days</li>
                     <li>10/11/2022</li>
                     <li>13/11/2022</li>
                  </ul>
               </td>
               {/* info company */}
               <td className='w-1/4 text-sm'>
               Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
               </td>
               {/* price */}
               <td>
                  25 USD (negotiable)
               </td>
            </tr>
            <></>
         </table>
         <div className=" flex w-2/3 text-sm mx-10 mt-6">
            <span className='w-2/3'>Other Information : </span>
            <span>Dosen't matter what is you spesialite what is matter if have a good knowledge in these technologie and you can achieve this take with high performance</span>
         </div>
      </div>
     </div>
   )
}