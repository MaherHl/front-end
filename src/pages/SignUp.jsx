import { Link } from 'react-router-dom';

function LoginFreelancer() {
   return (
      <div className='flex flex-row w-full'>
         <img src={require('../img/img1.png')} alt='' className='w-[60%] mr-20  h-full' />
         <div className='mt-20 text-center'>
         <h1  className="s text-center mb-16 text-gray-700 font-[Merienda] text-2xl">StNearYou</h1>
         <h3>Create New Account </h3>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Full Name" type="text" name="fullname"/><br/>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="Email" type="email" name="email"/><br/>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="User Name..." type="text" name="username"/><br/>
         <input className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" placeholder="********" type="password" name="password"/><br/>
         <div className='text-left text-slate-400'>
   
         
         <span>Your field : </span>
         <select name="skills" id="" className='rounded-md text-black'>
            <option value="design">Design</option>
            <option value="fontend">Front End</option>
            <option value="backend">Back End</option>
            <option value="transtlation">Translation</option>
            <option value="blogging">Blogging</option>
         </select>
         </div>
         <button className='bg-Blue py-2 mt-6 px-16 w-80 font-roboto text-white rounded-[23px]'><Link to="/joblist">Sign Up</Link></button><br/>
         <span className='block m-10 text-[roboto]'>You have an acount? <Link to='/loginC' className='text-orange-600'> Log In</Link></span>
         </div>
      </div>
   );
}

export default LoginFreelancer;
