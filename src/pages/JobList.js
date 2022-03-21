import { useState } from "react";
import { Component } from "react";
import Navbar from "../components/Navbar";
import Modal from "react-modal/lib/components/Modal";

function JobList() {
    
    function Factiveli(){
        // function for to get the element active
        let for_u = document.querySelector('.f');
        let all = document.getElementById("a")
        if( for_u.classList.contains('activeli')){
            for_u.classList.remove('activeli')
            all.classList.add('activeli')
        }
        else{
            for_u.classList.add('activeli')
            all.classList.remove('activeli')
        }
    }
    const [OpenModal, setOpenModal] = useState(false)
  return (
    <div className="container  mx-auto">
   
      <div className="chercher mt-10 container mx-auto text-center">
        <input className="placeholder:text-gray-400 border-[1px] border-lightgrey2 px-5 rounded-sm mr-2 focus:border-gray-300" placeholder="Job" />
        <input className="placeholder:text-gray-400 border-[1px] border-lightgrey2 px-5 rounded-sm mr-2" placeholder="Tailwind, Css, html ..." />
        <input className="placeholder:text-gray-400 border-[1px] border-lightgrey2 px-5 rounded-sm mr-2" placeholder="Duration" />
        <button className="bg-green-700 px-1 text-white rounded-md ">Search</button>
      </div>
      <div className='w-[85%] container bg-lightgrey2 mt-6'>
        <ul className="nav flex border-b-[1px] border-gray-300 text-gray-400 font-bold">
          <li className="f w-20 px-1 text-center activeli cursor-pointer" onClick={()=>Factiveli()}>For You</li>
          <li id="a" className="w-20 px-6 text-center cursor-pointer " onClick={()=>Factiveli()}>All </li>
        </ul>  
      <table className='w-full' >
      <thead>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='border-gray-400 px-16 text-center'>Job</td>
          <td className='border-gray-400 px-16 text-center'>Skills Request</td>
          <td className='border-gray-400 px-16 text-center'>Dure</td>
          <td className='border-gray-400 px-16 text-center'>Price</td>
        </tr>
    </thead>
    <tbody>
        
        <tr className='px-10 border-b-[1px] border-gray-400 cursor-pointer' onClick={()=>setOpenModal(true)}>
          <td className='py-2 text-center border-gray-400 '>Front End </td>
          <td className='text-center border-gray-400  text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>Html</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>Tailwind</span><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>React</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>16 $</td>
        </tr>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='py-2 text-center border-gray-400 '>Backend </td>
          <td className='text-center border-gray-400 text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>Asp.net</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>API</span><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>MySql</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>30 $</td>
        </tr><tr className='px-10 border-b-[1px] border-gray-500'>
          <td className='py-2 text-center border-gray-400 '>Translate </td>
          <td className='text-center border-gray-400  text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>English</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>French</span></td>
          <td className='text-center border-gray-400'>1 Days</td>
          <td className='text-center border-gray-400'>10 $</td>
        </tr>   
        
    </tbody>
      </table>
    </div>
    <Modal isOpen={OpenModal}>
    <div className='container'>
         <div className="container  mx-auto relative bg-gray-200 rounded-xl  mt-20 p-6 pb-20">
         <nav className='flex flex-col md:flex-row  '>
         <img className='px-9 w-full md:w-44 border-[1px] rounded-md border-gray-400 md:p-2' src={require('../img/head.png')}/>
         <h1 className='text-black text-2xl text-center mt-5 md:mt-0 sm:ml-4 md:ml-16'>Front End Web Ecommerce</h1>
         <span className='flex flex-row absolute bottom-6 left-16 sm:left-36 md:left-60 xl:left-[80%] xl:top-10'>
            <button className='border-[1px] bg-blue-500 text-white border-slate-400 h-8 px-2 rounded-md mx-4'>Postule</button>
            <span><button className='text-slate-500' onClick={()=>setOpenModal(false)}> X </button></span>
            
            
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
    </Modal>
    </div>
  );
}

export default JobList;
