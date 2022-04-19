import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import NavbarUser from '../components/NavbarUser'

function MyProfileCompany() {
  return (
      <>
    <div className='container'>
     <NavbarUser/>
          
            <div className=' flex justify-center py-10'>
                <span><img src={require('../img/netplus.jfif')} className='rounded-full w-25 md:w-40' alt="" />
                <span className='text-gray-400 ml-16 cursor-pointer md:ml-8'><Link to='/update' ><i class="fa fa-pencil" aria-hidden="true"></i> Edit profile</Link></span></span>
                <div className='pt-10 px-4'>
                <h1 className='text-2xl font-bold text-Blue font-roboto '>Net Plus</h1>
                <p className='pt-2 text-lg font-light'>PRO ACCOUNT </p>
                </div>    
                          
            </div>
            <div className='mx-auto sm:w-7/12 font-roboto'>
            <p> Composez votre pack internet, téléphonie et télévision selon vos besoins ! Avec BLI BLA BLO, offrez-vous le meilleur du multimédia.</p> 

            </div>
            <div className='flex pt-14 '>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>

            <p className='font-roboto font-black  px-1 border-b-2 border-Blue '>20 Jobs Posted</p>
            </div>
             <div className='grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-4 mb-6 gap-4'> 

        
          <div class="bg-gray-100 flex items-center">
            
              <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
              
            
              <p class="text-lg text-gray-800 font-semibold"> Front end</p>
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
              
            
                <p class="text-lg text-gray-800 font-semibold">Screens design</p>
                <p class="text-gray-600 font-light mt-5"> Starts At </p>
                <div class="flex flex-row mt-3 gap-2 place-items-end"> 
                    <p class="text-6xl font-bold"> $15 </p>
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
                    <p class="text-gray-500"> figma  </p>
                  </div>
                </div>

              
                <div class="grid grid-cols-12">
                  <div class="col-span-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div class="col-span-10">
                    <p class="text-gray-500">adobe xd </p>
                  </div>
                </div>
                
              </div>

            </a>
            
          </div>
          <div class="bg-gray-100 flex items-center">
            
            <a class="rounded-lg shadow-lg bg-white p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p class="text-lg text-gray-800 font-semibold">Picture ads</p>

            

            <p class="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div class="flex flex-row mt-3 gap-2 place-items-end"> 
              <p class="text-6xl font-bold"> $18 </p>
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
                  <p class="text-gray-500"> flimora </p>
                </div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> Canva  </p>
                </div>
              </div>

            
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500">Illustrator </p>
                </div>
              </div>
              
            </div>

          </a>
          
        </div>
        <div class="bg-gray-200 flex items-center">
            
            <a class="rounded-lg shadow-lg bg-gray-200 p-6 w-72 group hover:shadow-2xl" href="#">
            
          
            <p class="text-lg text-gray-800 font-semibold">vedio 30s</p>

            

            <p class="text-gray-600 font-light mt-5"> Starts At </p>
            

            <div class="flex flex-row mt-3 gap-2 place-items-end"> 
              <p class="text-6xl font-bold"> $15 </p>
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
                  <p class="text-gray-500">Adobe</p>
                </div>
              </div>
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> translation </p>
                </div>
              </div>

            
              <div class="grid grid-cols-12">
                <div class="col-span-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-3 stroke-green-500" fill="none" viewBox="0 0 24 24" stroke="#22c55e">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div class="col-span-10">
                  <p class="text-gray-500"> </p>
                </div>
              </div>
              
            </div>

          </a>
          
        </div>
        </div>
        
          
    </div>
    <Footer/>
      </>
  )
}
export default MyProfileCompany