import React from 'react'

const NumberOfTask = () => {
  return (
    <div className=' mt-10 flex justify-between screen gap-5'>
            <div class='div1' className='bg-red-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>0</h2>
                    <h3 className='text-xl font-medium text-black'>New Task</h3>
            </div>

            <div class='div1' className='bg-blue-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>0</h2>
                    <h3 className='text-xl font-medium text-black'>New Task</h3>
            </div>

            <div class='div1' className='bg-green-400 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>0</h2>
                    <h3 className='text-xl font-medium text-black'>New Task</h3>
            </div>

            <div class='div1' className='bg-yellow-200 py-6 px-9 rounded-xl w-[45%]'>
                    <h2 className='text-3xl font-semibold text-black'>0</h2>
                    <h3 className='text-xl font-medium text-black'>New Task</h3>
            </div>
    </div>
  )
}

export default NumberOfTask