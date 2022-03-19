import React from 'react'

function Footer() {
  return (
    <div className='hidden sm:block bg-lightBlue px-28'>
        <div className=' grid grid-cols-2'>
            <div>
                <h1 className="text-white font-roboto text-4xl pt-10 ">Let's Talk</h1>
                <p className='text-white py-6'>
                You can consult us to help with anything you need <br />
                Tell us whatare you looking for we will help you <br />
                our team is always in you services  
                </p>
                <button className='bg-darkBlue text-white font-roboto rounded-sm w-38 py-3 px-6 my-2'>Tell us What You Need</button>

            </div>
            <div className='text-center  mt-32 sm:ml-20 sm:mr-10 mr-28'>
                
                <a href="" className='text-white  text-4xl  font-Merienda font-bold'> Student Near You</a>
        
                </div>
        </div>
       
        <h6 className='text-center pt-6 text-1xl pb-2 font-Merienda text-white'>© StuNearYou Maroc Ltd. 2022</h6>

    </div>
  )
}

export default Footer