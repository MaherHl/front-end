import { Link } from 'react-router-dom';
import imgCompany from '../img/company.jfif'

function loginCompany() {
  
  

   return (
     
     <div className='flex flex-row w-full'>
       <img src={imgCompany} alt='' className='w-[60%] mt-10 object-fill mr-10 ml-5  h-full' />
       <div className='mt-20 text-center'>
         <h1  className="s text-center mb-16 text-gray font-Merienda text-2xl">StNearYou</h1>
         <h3>Login to Your Account </h3>
         <input id='name' className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="User Name..." type="text" name="username"/><br/>
         <input id='password' className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="********" type="password" name="password"/><br/>
         <button className='bg-blue-500 font-semibold hover:scale-110 transition-all duration-300 text-white py-1 px-16 w-80  rounded-[23px]'> 
         <Link  to='/talent'>Login</Link>
         </button> 
         <span className='block mt-10 font-roboto2'>Dont have an acount? <Link to='/company/sign-up' className='text-orange-600 pb-20 hover:text-orange-800 transition-all duration-300'> Sign up</Link></span>
         <span className='font-roboto2 '><Link to='/login-freelancer' className='text-orange-600 hover:text-orange-800 transition-all duration-300'>Login as Freelancer</Link></span>
       </div>
     </div>
   );
 }
 
 export default loginCompany;
 