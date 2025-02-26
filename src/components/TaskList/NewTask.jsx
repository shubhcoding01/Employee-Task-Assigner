import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>{data.category}</h3>
            <h4 className='text-black font-bold'>{data.task_date}</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>{data.task_title}</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>

            <div className='mt-4'>
                <button>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask