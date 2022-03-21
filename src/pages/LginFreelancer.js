import React from 'react';
import { Link } from 'react-router-dom';


function LoginFreelancer() {
   return (
      <div className='flex flex-row w-full'>
         <img src={require('../img/img1.png')} alt='' className='w-[60%] mr-20  h-full' />
         <div className='mt-20 text-center'>
         <h1  className="s text-center mb-16 text-gray-700 font-[Merienda] text-2xl">StNearYou</h1>
         <h3>Login to Your Account </h3>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="User Name..." type="text" name="username"/><br/>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="********" type="password" name="password"/><br/>
         <button className='bg-blue-500 py-1 px-16 w-80 font-roboto text-white rounded-[23px]'>
            <Link to="/joblist">Login</Link> 
            </button><br/>
         <span className='block m-10 text-[roboto]'>Dont have an acount?
          <Link to='/sign_up' className='text-orange-600'> Sign up</Link>
          </span>
         </div>
      </div>
   );
}

export default LoginFreelancer;
