import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>{data.category}</h3>
            <h4 className='text-black font-bold'>{data.task_date}</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>{data.task_title}</h2>
          <p className='mt-2 text-sm text-blue-800'>{data.task_description}</p>

            <div className='mt-2'>
                <button className='w-full bg-red-400 rounded-lg hover:bg-red-800 hover:scale-110 transition-all duration-300' >Failed Task</button>
            </div>
        </div>
  )
}

export default FailedTask