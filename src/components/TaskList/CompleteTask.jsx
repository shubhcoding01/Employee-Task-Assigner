import React from 'react'

const CompleteTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>

            <div className='mt-4'>
                <button className='w-full bg-purple-700 rounded-lg text-black py-1 px-2 opacity-50'>Completed Task</button>
            </div>
        </div>
  )
}

export default CompleteTask