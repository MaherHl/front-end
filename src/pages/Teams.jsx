import React from "react";
import Footer from "../components/Footer";

function Teams() {
   return ( 
      <div>
         <div className="container mx-auto text-center mt-8 font-semibold pb-10 text-gray-600">
            <h1 className="text-3xl">The  Developpers Team</h1>
            <div className="first w-full  h-full bg-gray-200 mt-10 pb-10 text-center md:flex">
            <img src={require('../img/hamza.png')} alt="" className="mt-10 md:ml-10 w-36 h-36 rounded-full inline-block align-middle"/>
            <div className="info text-left ml-10">
            <h2 className="text-gray-500 text-3xl mt-6 ml-10">Hamza mouddakir</h2>
            <p className=" font-medium mt-6 pr-20">Hamza mouddakir étudiant de developpement informtaique en institue spesialisé technologie applique l'air el jadida de l'année 2020 à 2022 </p>
               <div className="s mt-5 mr-10">
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

         <div className="first w-full pb-6 h-full bg-gray-200 mt-10 md:flex pt-4 text-center">
            <div className="info text-left ml-10 mt-">
               <h2 className="text-gray-500 text-3xl mt-6 md:first-letter:ml-10">Maher Hilali</h2>
               <p className=" font-medium mt-6 pr-20">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum delectus ex ducimus doloremque accusantium dolorum similique odit ipsa deleniti aliquid sint exercitationem ad quo, velit quas sunt quidem recusandae quia.</p>
                  <div className="s mt-5 mr-8">
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
            <img src={require('../img/user2.jpg')} alt="" className="mt-10 md:mr-20 w-36 h-36 rounded-full inline-block align-middle"/>

         </div>
      </div>
      <Footer />
      </div>
   );
}

export default Teams;