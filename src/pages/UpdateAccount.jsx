function UpdateAccount() {
    return ( 
        <div className="bg-gray-100 h-full py-72">
            <div className="container mx-auto   w-1/2 rounded-md bg-gray-200 py-32 ">
            <h1 className="text-center mb-6 text-xl text-gray-500">Update your Profile</h1>
            <form action="">
                Picture : <input type="file" name="" id="" className="my-7 md:ml-10" /><br />
                Full Name : <input type="text" placeholder="Jhon Then" className=" md:ml-4 border-[1px] py-1 border-gray-300 rounded-md px-3 my-7 w-60"/><br />
                Address : <input type="text" placeholder="London-UK in " className=" md:ml-8 border-[1px] border-gray-300 rounded-md px-3 py-1 my-7 w-60"/><br />
                BirthDay : <input type="date" placeholder="London-UK in " className=" md:ml-7 border-[1px] border-gray-300 rounded-md px-3 py-1 my-7 w-60"/><br />
                Url Github : <input type="url" placeholder="github.com/qsd54sq" className=" md:ml-4 border-[1px] border-gray-300 rounded-md px-3 py-1 my-7 w-60"/><br /><br />
                <button className='bg-gray-500 py-1 px-16 w-80 font-roboto text-white rounded'>Save</button><br/>
            </form> 

        </div>
        </div>
     );
}

export default UpdateAccount;