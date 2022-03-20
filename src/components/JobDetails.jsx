import React from 'react'

export default function JobDetails(){
   return(
      <div className='container'>
         <div className="container  mx-auto relative bg-gray-200 rounded-xl  mt-20 p-6 pb-20">
         <nav className='flex flex-col md:flex-row  '>
         <img className='px-9 w-full md:w-44 border-[1px] rounded-md border-gray-400 md:p-2' src={require('../img/head.png')}/>
         <h1 className='text-black text-2xl text-center mt-5 md:mt-0 sm:ml-4 md:ml-16'>Front End Web Ecommerce</h1>
         <span className='flex flex-row absolute bottom-6 left-16 sm:left-36 md:left-60 xl:left-[80%] xl:top-10'>
            <button className='border-[1px] bg-blue-500 text-white border-slate-400 h-8 px-2 rounded-md mx-4'>Postule</button>
            <span><button className='text-slate-500'> X </button></span>
            
            
         </span>
         </nav>

         <div className=' w-full md:mx-10 mt-6 '>
            <div className='text-gray-400 '>
               

            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 gap-4 '>
               {/* technoilogie */}
               <div className="">
                  <span className='text-gray-500'>Technologies</span>
                  <span className='w-1/2'>
                     <ul className='text-sm ml-4'>
                        <li>- Html and Css</li>
                        <li>- Php, laravel</li>
                        <li>- Python, Django</li>
                     </ul>
                  </span>
               </div>
               {/* duration */}
               <div className="">
               <span  className='text-gray-500'>Duration</span>
                  <span className=''>
                  <ul className='text-sm ml-4'>
                     <li>3 Days</li>
                     <li>10/11/2022</li>
                     <li>13/11/2022</li>
                  </ul>
               </span>
               </div>
               {/* info job */}
               <div className="info mt-6 md:mt-0">
                  <span  className='text-gray-500'>Info Job</span>
                  <p className='text-sm pl-4'>
                  Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor 
                  </p>
               </div>
               {/* price */}
               <div className=" mt-6 md:mt-0">
                  <span className='text-gray-500 '>Pricing</span>
                  <p className='text-sm ml-4'>
                     25 USD (negotiable)
                  </p>
               </div>
            </div>

         </div>
         <div className=" flex flex-row w-full text-sm mt-6">
            <span className='w-1/2 mr-4 md:w-1/6 text-gray-500'>Other Information </span>
            <span className='pr-6'>Dosen't matter what is you spesialite what is matter if have a good knowledge in these technologie and you can achieve this take with high performance</span>
         </div>
      </div>
     </div>
   )
}