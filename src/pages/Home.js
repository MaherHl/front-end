import React from 'react' 
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
          <div className="container">
       <Navbar/>
      <div className='grid md:grid-cols-2 col-grid-cols-1 font-roboto py-16 gap-1'>
        <div className=''>

        <h1 className=' font-black text-blue text-4xl'>
        Find the best freelance jobs</h1>
        <p className='py-4 font-roboto2 '>
        Browse jobs posted on StNearYou, or jump right in and create a free profile to find the work that you love to do.
        </p>
        <button className='hover:bg-blue border-2 border-blue text-blue hover:text-white font-roboto rounded w-32 py-2 my-2'>
         <Link to="/sign_up"> Join us</Link></button>
        </div>

      <img className='px-9 w-72 md:pt-0 pt-3 pl-10 md:ml-16 md:mt-0 mt-4' src={require('../img/head.png')}/>
      </div>
      <div className='py-16 text-center  '> 
      <h1 className='text-4xl mb-10  text-blue font-roboto  font-black'> Lot of Jobs Waiting For You  </h1>
      <div className='grid sm:grid-cols-4 md:grid-cols-7 grid-cols-2 '>
      <button className='bg-lime focus:bg-blue mb-3  text-white ho font-roboto rounded-full w-28 py-4 '> Mobile</button>
      <button className='bg-lime focus:bg-blue mb-3  sm:mx-0 mx-4  text-white font-roboto rounded-full w-28 py-4 '> Web</button>
      <button className='bg-lime focus:bg-blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> UX</button>
      <button className='bg-lime focus:bg-blue mb-3 sm:mx-0 mx-4 text-white font-roboto rounded-full w-28 py-4 '> Design</button>
      <button className='bg-lime focus:bg-blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> Translation</button>
      <button className='bg-lime focus:bg-blue mb-3 sm:mx-0 mx-4 text-white font-roboto rounded-full w-28 py-4 '> Animation</button>
      <button className='bg-lime focus:bg-blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> Scripts</button>
        </div>  
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6 gap-4'> 

        
          <div class="bg-gray-100 flex items-center">
            
              <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
              
            
              <p class="text-lg text-gray-800 font-semibold"> Company Name</p>
              <p class="text-gray-600 font-light mt-5"> Starts At </p>
              

              <div class="flex flex-row mt-3 gap-2 place-items-end"> 
                <p class="text-6xl font-bold"> $10 </p>
                <p class="text-2xl font-light items-bottom pb-1"> /mo </p>
              </div>
              
              <div class="flex flex-col gap-2 mt-5">
              

                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500"> UX Designer</p>
                  </div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500"> ReactJs  </p>
                  </div>
                </div>

              
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500">Backend </p>
                  </div>
                </div>
                
              </div>

            </a>
            
          </div>
          <div class=" bg-gray-100 flex items-center ">
            
              <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
              
            
              <p class="text-lg text-gray-800 font-semibold"> Company Name</p>

              

              <p class="text-gray-600 font-light mt-5"> Starts At </p>
              

              <div class="flex flex-row mt-3 gap-2 place-items-end"> 
                <p class="text-6xl font-bold"> $10 </p>
                <p class="text-2xl font-light items-bottom pb-1"> /mo </p>
              </div>
              
              <div class="flex flex-col gap-2 mt-5">
              

                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500"> UX Designer</p>
                  </div>
                </div>
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500"> ReactJs  </p>
                  </div>
                </div>

              
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500">Backend </p>
                  </div>
                </div>
                
              </div>

            </a>
            
          </div>
          <div class="bg-gray-100 flex items-center">
            
            <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p class="text-lg text-gray-800 font-semibold"> Company Name</p>

            

            <p class="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div class="flex flex-row mt-3 gap-2 place-items-end"> 
              <p class="text-6xl font-bold"> $10 </p>
              <p class="text-2xl font-light items-bottom pb-1"> /mo </p>
            </div>
            
            <div class="flex flex-col gap-2 mt-5">
            

              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> UX Designer</p>
                </div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> ReactJs  </p>
                </div>
              </div>

            
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500">Backend </p>
                </div>
              </div>
              
            </div>

          </a>
          
        </div>
        <div class="bg-gray-100 flex items-center">
            
            <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p class="text-lg text-gray-800 font-semibold"> Company Name</p>

            

            <p class="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div class="flex flex-row mt-3 gap-2 place-items-end"> 
              <p class="text-6xl font-bold"> $10 </p>
              <p class="text-2xl font-light items-bottom pb-1"> /mo </p>
            </div>
            
            <div class="flex flex-col gap-2 mt-5">
            

              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> UX Designer</p>
                </div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> ReactJs  </p>
                </div>
              </div>

            
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500">Backend </p>
                </div>
              </div>
              
            </div>

          </a>
          
        </div>
        </div>
        

    </div>
    <Footer/>
    </div>
  )
}

export default Home