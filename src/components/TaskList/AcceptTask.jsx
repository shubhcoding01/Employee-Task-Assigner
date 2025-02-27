import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>{data.category}</h3>
            <h4 className='text-black font-bold'>{data.task_date}</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>{data.task_title}</h2>
          <p className='mt-2 text-sm text-blue-800'>{data.task_description}</p>

          <div className='flex justify-between mt-4'>
            <button className='rounded-lg bg-green-500 py-1 px-2 text-sm hover:bg-green-800 hover:scale-110 transition-all duration-300'>Mark As Completed</button>
            <button className='rounded-lg bg-red-500 py-1 px-2 text-sm hover:bg-red-800 hover:scale-110 transition-all duration-300'>Mark As Failed</button>
            </div>  
        </div>
  )
}

export default AcceptTask