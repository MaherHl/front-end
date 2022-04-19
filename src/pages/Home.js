import React from 'react' 
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import imgHead from "../img/head.png"
import { useEffect } from 'react'
// import axios from 'axios'

function Home() {
 /*
  useEffect(() => {
    axios.get('http://127.0.0.1:3030/user/talent')
    .then((res)=>{
      console.log(res)
    })
  }, [])
*/



 
  return (
    <div>
          <div className="container">
       <Navbar/>
      <div className='grid md:grid-cols-2 col-grid-cols-1 font-roboto py-16 gap-1'>
        <div className=''>

        <h1 className=' font-black text-Blue text-4xl'>Find the best freelance jobs</h1>
        <p className='py-4 font-roboto2 '>
        Browse jobs posted on StNearYou, or jump right in and create a free profile to find the work that you love to do.
        </p>
        <button className='hover:bg-Blue border-2 border-Blue text-Blue hover:text-white font-roboto rounded w-32 py-2 my-2'>
         <Link to="/freelancer/sign-up"> Join us</Link></button>
        </div>

      <img className='px-9 w-72 md:pt-0 pt-3 pl-10 md:ml-16 md:mt-0 mt-4' src={imgHead} alt=" header"/>
      </div>
      <div className='py-16 text-center  '> 
      <h1 className='text-4xl mb-10  text-Blue font-roboto  font-black'> Lot of Jobs Waiting For You  </h1>
      <div className='grid sm:grid-cols-4 md:grid-cols-7 grid-cols-2 '>
      <button className='bg-lime focus:bg-Blue mb-3  text-white ho font-roboto rounded-full w-28 py-4 '> Mobile</button>
      <button className='bg-lime focus:bg-Blue mb-3  sm:mx-0 mx-4  text-white font-roboto rounded-full w-28 py-4 '> Web</button>
      <button className='bg-lime focus:bg-Blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> UX</button>
      <button className='bg-lime focus:bg-Blue mb-3 sm:mx-0 mx-4 text-white font-roboto rounded-full w-28 py-4 '> Design</button>
      <button className='bg-lime focus:bg-Blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> Translation</button>
      <button className='bg-lime focus:bg-Blue mb-3 sm:mx-0 mx-4 text-white font-roboto rounded-full w-28 py-4 '> Animation</button>
      <button className='bg-lime focus:bg-Blue mb-3  text-white font-roboto rounded-full w-28 py-4 '> Scripts</button>
        </div>  
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6 gap-4'> 

        
          <div className="bg-gray-100 flex items-center">
            
              <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
              
            
              <p className="text-lg text-gray-800 font-semibold"> Orange</p>
              <p className="text-gray-600 font-light mt-5"> Starts At </p>
              

              <div className="flex flex-row mt-3 gap-2 place-items-end"> 
                <p className="text-6xl font-bold"> $05 </p>
                <p className="text-2xl font-light items-bottom pb-1"> /mo </p>
              </div>
              
              <div className="flex flex-col gap-2 mt-5">
              

                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500"> UX Adobe Xd</p>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500"> Bootstrap  </p>
                  </div>
                </div>

              
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500">NodJs </p>
                  </div>
                </div>
                
              </div>

            </a>
            
          </div>
          <div className=" bg-gray-100 flex items-center ">
            
              <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="/">
              
            
              <p className="text-lg text-gray-800 font-semibold"> NetPLus</p>

              

              <p className="text-gray-600 font-light mt-5"> Starts At </p>
              

              <div className="flex flex-row mt-3 gap-2 place-items-end"> 
                <p className="text-6xl font-bold"> $10 </p>
                <p className="text-2xl font-light items-bottom pb-1"> /mo </p>
              </div>
              
              <div className="flex flex-col gap-2 mt-5">
              

                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500"> PHP</p>
                  </div>
                </div>
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500"> Django  </p>
                  </div>
                </div>

              
                <div className="grid grid-cols-12">
                  <div className="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="col-span-10">
                    <p className="text-gray-500">API </p>
                  </div>
                </div>
                
              </div>

            </a>
            
          </div>
          <div className="bg-gray-100 flex items-center">
            
            <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p className="text-lg text-gray-800 font-semibold">VOSCH</p>

            

            <p className="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div className="flex flex-row mt-3 gap-2 place-items-end"> 
              <p className="text-6xl font-bold"> $20 </p>
              <p className="text-2xl font-light items-bottom pb-1"> /mo </p>
            </div>
            
            <div className="flex flex-col gap-2 mt-5">
            

              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500"> UX Designer</p>
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500"> ReactJs  </p>
                </div>
              </div>

            
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500">Backend </p>
                </div>
              </div>
              
            </div>

          </a>
          
        </div>
        <div className="bg-gray-100 flex items-center">
            
            <a className="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p className="text-lg text-gray-800 font-semibold">Inwi</p>

            

            <p className="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div className="flex flex-row mt-3 gap-2 place-items-end"> 
              <p className="text-6xl font-bold"> $15 </p>
              <p className="text-2xl font-light items-bottom pb-1"> /mo </p>
            </div>
            
            <div className="flex flex-col gap-2 mt-5">
            

              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500">SASS</p>
                </div>
              </div>
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500"> Falsk  </p>
                </div>
              </div>

            
              <div className="grid grid-cols-12">
                <div className="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="col-span-10">
                  <p className="text-gray-500">Angular </p>
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