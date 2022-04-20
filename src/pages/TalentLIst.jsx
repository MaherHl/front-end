import React from 'react'
import NavbarCompany from '../components/NavbarCompany'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

function TalentLIst() {
  return (
      <>
      
    <div className='container'>
      <NavbarCompany/>
      <div>
      <h1 className=' font-black font-roboto mt-16 ml-10  text-5xl'> Our Talent list</h1>
      <p className='py-3 text-Gray font-light font-roboto pl-10'>Complete your most pressing work with Our freelancers. Browse and Hire Great talents in just a few clicks.</p>
      <div className='flex ml-10'>
      <input type="text" className=' py-1 px-3  rounded-20 border-2 rounded-full focus:shadow-outline' placeholder='Try Tags like “Web developer”  or “animation”' />
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 mt-2 cursor-pointer ml-1 text-Blue  w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
      </div>
      <div className='flex mt-5 ml-12'>
        <h2 className=' text-1xl font-roboto  font-bold'> Popular :</h2>
        <p className='bg-gray-200 rounded-full px-5 ml-6 font-roboto'> Designe</p>
        <p className='bg-gray-200 rounded-full px-5 ml-6 font-roboto'> Web</p>
        <p className='bg-gray-200 rounded-full px-5 ml-6 font-roboto'> Mobile</p>

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-20">
      <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
      <div className="profile mx-auto  py-2 w-16 "> 
            <img src={require('../img/p8.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
        </div>

            <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                <p>Simp</p>
          </div>
            <div className="username text-gray-500">
                <p>@simpyy</p>
          </div>
            <div className="work text-gray-700 mt-4">
                <p>Front-end developer </p>
              </div>
         
            <div className="w-full mt-8">
            <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
              Hire
            </button>
            <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
              <Link to="/userP"> See Profile</Link></button>
              </div>

            </div>
            <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/P1.jpg')} alt="profile" className=' rounded-full  cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>niklaus</p>
              </div>
                <div className="username text-gray-500">
                    <p>@klaus</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>react  developer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p3.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>anastasia</p>
              </div>
                <div className="username text-gray-500">
                    <p>@anna</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>ux designer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p2.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>youness</p>
              </div>
                <div className="username text-gray-500">
                    <p>@yns</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>back-end developer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p4.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>Samuel</p>
              </div>
                <div className="username text-gray-500">
                    <p>@sam</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>translator </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p5.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>abigail</p>
              </div>
                <div className="username text-gray-500">
                    <p>@abby</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>Front-end developer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p6.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>alexander</p>
              </div>
                <div className="username text-gray-500">
                    <p>@alex</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>Front-end developer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
                <div className="main  grid shadow-lg border  w-64 place-items-center ">
          
          <div className="profile mx-auto  py-2 w-16 "> 
                <img src={require('../img/p7.jpg')} alt="profile" className=' rounded-full cursor-pointer' href='TalentL/userP'/>
            </div>
    
                <div className="name text-gray-800 text-2xl font-medium mt-4 ">
                    <p>wiiliam</p>
              </div>
                <div className="username text-gray-500">
                    <p>@will</p>
              </div>
                <div className="work text-gray-700 mt-4">
                    <p>Front-end developer </p>
                  </div>
             
                <div className="w-full mt-8">
                <button className="bg-blue-500 py-2 px-4 hover:bg-blue-600 text-white w-full font-semibold rounded-lg shadow-lg">
                  Hire
                </button>
                <button className='hover:bg-Blue border-2 rounded-lg w-full font-semibold py-2 px-4 border-Blue text-Blue hover:text-white  my-2'>
                  <Link to="/userP"> See Profile</Link></button>
                  </div>
    
                </div>
            
        </div>
    </div>
      </div>
      <Footer/>
      </>
     

  
  )
}

export default TalentLIst 