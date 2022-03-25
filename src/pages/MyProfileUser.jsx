import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import NavbarCompany from '../components/NavbarCompany'
import MyProfileCompany from './MyProfileCompany'

function MyProfileUser() {
  return (
    <>
      <div className='container'>
      <NavbarCompany/>      
          <div className=' md:flex py-10 '>
            <span><img src={require('../img/user2.jpg')} className='rounded-full w-25  md:w-40' alt="" />
            <span className='text-gray-400 ml-32 cursor-pointer md:ml-8'><Link to='/update' ><i class="fa fa-pencil" aria-hidden="true"></i> Edit profile</Link></span></span>
            <div className='items-center sm:pl-0 pl-16'>
              <h2 className='md:text-3xl text-2xl font-roboto pt-10 px-9'> Chris brown </h2>
              <p className='sm:px-9  pt-3 text-sm w-c text-lightgrey font-roboto'> London-UK in <span className='font-bold font-Merienda text-Blue'>StuNearYou </span>   since 2 septembre 2022</p>
            </div>
          </div>
          <div className="py-2 px-2 grid  sm:w-12/12 font-roboto ">
            <p className=''>
              Charlotte has a Masters degree in intellectual property from the University of California, Berkeley.  Prior to joining LegalVision, Charlotte gained valuable experience in litigation, working on commercial,  intellectual property and succession disputes for diverse clients. In her current role,  Charlotte provides considered advice on regulatory frameworks and helps clients to resolve their disputes in the most pragmatic and effective way.
              In her spare time, Charlotte likes to sit down with a big bowl of pasta to watch a good thriller.</p>
          </div>
            <div className='flex'>
              <img src={require('../img/github.png')} className='w-15' alt="" />
              <p className='font-roboto font-black pt-5 px-1 '>My work : github.com/qsd54sq</p>
            </div>
             
              <h2 class="w-48 mx-auto pt-6 border-b-2 border-Blue text-center text-2xl ">PROJECTS</h2>
             <div className=' grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2'>
     
              <div class="flex justify-center flex-wrap p-10">
                <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
                  <div class="flex items-center w-48 h-20 bg-lightBlue">
                    <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
                  </div>
                  <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
                  <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                  
                </div>
                
              </div>
              <div class="flex justify-center flex-wrap p-10">
                <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
                  <div class="flex items-center w-48 h-20 bg-lightBlue">
                    <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
                  </div>
                  <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
                  <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                  
                </div>
                
              </div>
              <div class="flex justify-center flex-wrap p-10">
                <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
                  <div class="flex items-center w-48 h-20 bg-lightBlue">
                    <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
                  </div>
                  <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
                  <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                  
                </div>
                
              </div>
              <div class="flex justify-center flex-wrap p-10">
                <div class="relative w-48 h-64 m-5 bg-white shadow-lg">
                  <div class="flex items-center w-48 h-20 bg-lightBlue">
                    <i class="fas fa-bezier-curve fa-3x mx-auto text-white"></i>
                  </div>
                  <p class="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI Design</p>
                  <p class="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                  
                </div>
                
              </div>
              </div>
              
             
      </div>
      <Footer/>
    </>
    )
}

export default MyProfileUser