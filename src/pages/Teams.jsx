import React from "react";
import Footer from "../components/Footer";

function Teams() {
   return ( 
      <div>
         <div className="container mx-auto text-center mt-8 font-semibold pb-10 text-gray-600">
            <h1 className="text-3xl">The Teams Developpers</h1>
            <div className="first w-full  h-60 bg-gray-200 mt-10 text-center flex">
            <img src={require('../img/user2.jpg')} alt="" className="mt-10 ml-10 w-36 h-36 rounded-full inline-block align-middle"/>
            <div className="info text-left ml-10">
            <h2 className="text-gray-500 text-3xl mt-6 ml-10">Hamza mouddakir</h2>
            <p className=" font-medium mt-6 pr-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus ex ducimus doloremque accusantium dolorum similique odit ipsa deleniti aliquid sint exercitationem ad quo, velit quas sunt quidem recusandae quia.</p>
               <div className="s mt-5">
                  <div className="flex ">
                     <a href="">
                        <img src={require('../img/Facebook.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                     </a>
                     <a href="https://github.com/microappstech">
                        <img src={require('../img/github.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                     </a>
                     <a href="">
                        <img src={require('../img/Instagram.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                     </a>
                     <a href="">
                        <img src={require('../img/Mail.ru.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                     </a>
                     <a href="https://www.linkedin.com/in/hamza-mouddakir-b4467a1b9/">
                        <img src={require('../img/LinkedIN.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                     </a>
                  </div>
               </div>
            </div>
            </div>

         <div className="first w-full  h-60 bg-gray-200 mt-10 text-center flex">
            <div className="info text-left ml-10">
               <h2 className="text-gray-500 text-3xl mt-6 ml-10">Maher Hilali</h2>
               <p className=" font-medium mt-6 pr-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus ex ducimus doloremque accusantium dolorum similique odit ipsa deleniti aliquid sint exercitationem ad quo, velit quas sunt quidem recusandae quia.</p>
                  <div className="s mt-5">
                     <div className="flex ">
                        <a href="https://www.facebook.com/mahir.hilali">
                           <img src={require('../img/Facebook.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                        </a>
                        <a href="https://github.com/MaherHl">
                           <img src={require('../img/github.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                        </a>
                        <a href="https://www.instagram.com/maher__hll__/?hl=fr">
                           <img src={require('../img/Instagram.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                        </a>
                        <a href="mailto:mailto:MaherHilali5@gmail.com">
                           <img src={require('../img/Mail.ru.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                        </a>
                        <a href="http://www.linkedin.com/in/maher-hilali-86a865203">
                           <img src={require('../img/LinkedIN.png')} alt="" className="w-10 ml-4 hover:scale-110 transition-all duration-500" />
                        </a>
                     </div>
                  </div>
            </div>
            <img src={require('../img/user2.jpg')} alt="" className="mt-10 mr-20 w-36 h-36 rounded-full inline-block align-middle"/>

         </div>
      </div>
      <Footer />
      </div>
   );
}

export default Teams;