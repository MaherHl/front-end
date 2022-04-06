import { Link } from 'react-router-dom';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../features/users";

function LoginFreelancer() {
   const dispatch = useDispatch();

   const userList = useSelector((state) => state.users.value);
   
   const [user, setUser] = useState({
      fullname:"",
      email:"",
      username:"",
      password:"",
      field:""

   })
   function handleInputChange(e){
      // handle change inputs
      setUser({
         ...user ,
         [e.target.name] : e.target.value
      })
   }
   function handleSubmit(e){
      // get information user that are typing in inputs 
      e.preventDefault();
      console.log(user)
   }

   return (
      <div className='flex flex-row w-full'>
         <img src={require('../img/img1.png')} alt='' className='w-[60%] mr-20  h-full' />
         <div className='mt-20 text-center'>
         <h1  className="s text-center mb-16 text-gray-700 font-[Merienda] text-2xl">StNearYou</h1>
         <h3>Create New Account </h3>
         <form action="/" method="post" onSubmit={handleSubmit}>
            
         <input
            className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm" 
            placeholder="Full Name" 
            type="text" 
            name="fullname" 
            onChange={handleInputChange}
            value={user.fullname} 
            /><br/>
         <input 
            className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"  
            placeholder="Email" 
            type="email" 
            value={user.email}
            onChange={handleInputChange}
            name="email" required
            /><br/>
         <input 
            className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"  
            placeholder="User Name..." 
            type="text" 
            value={user.username}
            name="username" required
            onChange={handleInputChange}
            /><br/>
         <input 
            className=" placeholder:text-slate-400 block bg-white w-80 border border-slate-300 rounded-[23px] py-2 pl-6 pr-2 shadow-sm my-2 focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 sm:text-sm"   
            placeholder="********" 
            type="password" 
            name="password"required 
            onChange={handleInputChange}
            value={user.password}
            /><br/>
         <div className='text-left text-slate-400'>
   
         
         <span>Your field : </span>
         <select 
            name="field" id="" className='rounded-md text-black' value={user.field}  
            onChange={handleInputChange}
            required>
            <option value="design">Design</option>
            <option value="fontend">Front End</option>
            <option value="backend">Back End</option>
            <option value="transtlation">Translation</option>
            <option value="blogging">Blogging</option>
         </select>
         </div>
         <button
             
            type='submit' className='bg-Blue py-2 mt-6 px-16 w-80 font-roboto text-white rounded-[23px]'>
            <Link to="/job-list">Sign Up</Link>
         </button><br/>
         </form>
         <span className='block m-10 text-[roboto]'>You have an acount? <Link to='/login-company' className='text-orange-600'> Log In</Link></span>
         </div>
      </div>
   );
}

export default LoginFreelancer;
