import React from 'react'

const NumberOfTask = ({data}) => {
  return (
    <div className=' mt-10 flex justify-between screen gap-5'>
            <div  className='bg-red-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>{data.task_numbers.new}</h2>
                    <h3 className='text-xl font-medium text-black'>New Task</h3>
            </div>

            <div  className='bg-blue-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>{data.task_numbers.completed}</h2>
                    <h3 className='text-xl font-medium text-black'>Completed Task</h3>
            </div>

            <div  className='bg-green-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>{data.task_numbers.active}</h2>
                    <h3 className='text-xl font-medium text-black'>Activeted Task</h3>
            </div>

            <div  className='bg-yellow-200 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>{data.task_numbers.failed}</h2>
                    <h3 className='text-xl font-medium text-black'>Failed Task</h3>
            </div>
    </div>
  )
}

export default NumberOfTask