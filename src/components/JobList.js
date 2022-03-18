


function JobList() {
  return (
    <div className='w-[70%] mx-36 bg-gray-200 mt-16'>
      <table className='w-full' >
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='border-gray-400 px-16 text-center'>Job</td>
          <td className='border-gray-400 px-16 text-center'>Skills Request</td>
          <td className='border-gray-400 px-16 text-center'>Dure</td>
          <td className='border-gray-400 px-16 text-center'>Price</td>
        </tr>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='py-2 text-center border-gray-400 '>Front End </td>
          <td className='text-center border-gray-400  text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>Html</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>Tailwind</span><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>React</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>16 $</td>
        </tr>
        <tr className='px-10 border-b-[1px] border-gray-400'>
          <td className='py-2 text-center border-gray-400 '>Backend </td>
          <td className='text-center border-gray-400 text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>Asp.net</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>API</span><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>MySql</span></td>
          <td className='text-center border-gray-400'>3 Days</td>
          <td className='text-center border-gray-400'>30 $</td>
        </tr><tr className='px-10 border-b-[1px] border-gray-500'>
          <td className='py-2 text-center border-gray-400 '>Translate </td>
          <td className='text-center border-gray-400  text-white'><span className='px-4 py-1 ml-1 bg-blue-500 rounded-[20px]'>English</span><span className='px-4 ml-1 py-1 bg-blue-500 rounded-[20px]'>French</span></td>
          <td className='text-center border-gray-400'>1 Days</td>
          <td className='text-center border-gray-400'>10 $</td>
        </tr>   
      </table>
    </div>
  );
}

export default JobList;
