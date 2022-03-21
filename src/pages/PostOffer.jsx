import React from "react";
import NavbarCompany from '../components/NavbarCompany'
import Footer from "../components/Footer";
function PostOffer() {
   return ( 
      <>

      <div className="container">
         <NavbarCompany/>
         <h1 className=' text-center pt-16  font-roboto font-bold text-Gray text-4xl'> What Service You looking for</h1>
         <form className="pt-9 ml-16" action="">
         <p  className="text-lg font-roboto">Title :<span className="text-red-700">*</span></p>
         <input type="text " className="border-2 rounded  py-1 px-2 ml-16 focus:shadow-Gray" required placeholder="EX: Design Animation" />
         <p className="font-roboto text-lg pt-5">Describe the service you're looking to purchase - please be as detailed as possible: <span className="text-red-700">*</span></p>
         <textarea className="w-50 border-2 focus-shadow-outline ml-16 rounded px-2 mt-4 w-2/3 "placeholder="Describe Your Offer ..." name="" id="" cols="30" rows="8"></textarea>
         <p  className="text-lg pt-3 font-roboto">Select Category :<span className="text-red-700">*</span></p>
         <select className="border-2 rounded bg-White my-2 py-1 px-2 ml-16 focus:shadow-Gray" name="" id="" placeholder="Category">
            <option value=""> UX</option>
            <option value=""> Web Developpement</option>
            <option value=""> Mobile</option>
            <option value=""> Translation</option>
            <option value=""> animation</option>
         </select>
         <p  className="text-lg font-roboto">Duration :<span className="text-red-700">*</span></p>
         <input type="text " className="border-2 rounded  py-1 px-2 ml-16 focus:shadow-Gray" required placeholder="EX: 24H" />
         <p  className="text-lg font-roboto">Price :<span className="text-red-700">*</span></p>
         <input type="text " className="border-2 rounded mb-10  py-1 px-2 ml-16 focus:shadow-Gray" required placeholder="USD" />

         </form>
      </div>
      <Footer/>
      </>
    );
}

export default PostOffer;