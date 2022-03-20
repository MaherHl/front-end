import { Component } from "react";
import Navbar from "../components/Navbar";

function JobList() {
  return (
    <div className="container  mx-auto">
   
      <div className="chercher mt-10 container mx-auto text-center">
        <input className="placeholder:text-gray border-[1px] border-lightgrey2 px-5 rounded-sm mr-2 focus:border-gray-300" placeholder="Job" />
        <input className="placeholder:text-gray border-[1px] border-lightgrey2 px-5 rounded-sm mr-2" placeholder="Tailwind, Css, html ..." />
        <input className="placeholder:text-gray border-[1px] border-lightgrey2 px-5 rounded-sm mr-2" placeholder="Duration" />
        <button className="bg-green-700 px-1 text-white rounded-md ">Search</button>
      </div>
      <div className='w-[85%] container bg-lightgrey2 mt-6'>
        <ul className="nav flex border-b-[1px] border-gray-300 text-gray font-bold">
          <li className="w-20 px-1 text-center activeli">For You</li>
          <li className="w-20 px-6 text-center ">All </li>
        </ul>  
      <table className='w-full' >
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='border-gray px-16 text-center'>Job</td>
          <td className='border-gray px-16 text-center'>Skills Request</td>
          <td className='border-gray px-16 text-center'>Dure</td>
          <td className='border-gray px-16 text-center'>Price</td>
        </tr>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='py-2 text-center border-gray '>Front End </td>
          <td className='text-center border-gray  text-white'><span className='px-4 py-1 ml-1 bg-blue rounded-[20px]'>Html</span><span className='px-4 ml-1 py-1 bg-blue rounded-[20px]'>Tailwind</span><span className='px-4 py-1 ml-1 bg-blue rounded-[20px]'>React</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>16 $</td>
        </tr>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='py-2 text-center border-gray '>Backend </td>
          <td className='text-center border-gray text-white'><span className='px-4 py-1 ml-1 bg-blue rounded-[20px]'>Asp.net</span><span className='px-4 ml-1 py-1 bg-blue rounded-[20px]'>API</span><span className='px-4 py-1 ml-1 bg-blue rounded-[20px]'>MySql</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>30 $</td>
        </tr><tr className='px-10 border-b-[1px] border-gray-500'>
          <td className='py-2 text-center border-gray '>Translate </td>
          <td className='text-center border-gray  text-white'><span className='px-4 py-1 ml-1 bg-blue rounded-[20px]'>English</span><span className='px-4 ml-1 py-1 bg-blue rounded-[20px]'>French</span></td>
          <td className='text-center border-gray-400'>1 Days</td>
          <td className='text-center border-gray-400'>10 $</td>
        </tr>   
      </table>
    </div>
    </div>
  );
}

export default JobList;
