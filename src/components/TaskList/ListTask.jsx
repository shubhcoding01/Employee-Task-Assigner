import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const ListTask = ({data}) => {
  console.log(data)
  return (
    <div id='listtask' className='overflow-x-auto mt-7 h-[55%] w-full py-5 flex justify-start items-center gap-5 flex-nowrap'>
      {data.tasks.map((elem)=>{

        if(elem.active)
        {
          <AcceptTask />
        }
      })}
      {/* <AcceptTask /> */}
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
          <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        </div> */}
      {/* <NewTask />   */}
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        </div> */}
      {/* <CompleteTask />   */}
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        </div> */}
      {/* <FailedTask /> */}
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        </div> */}
        {/* <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-300 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-violet-950 text-2xl'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-300 rounded-xl'> */}
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-500 rounded px-3 py-1 text-black text-sm'>High</h3>
            <h4 className='text-black font-bold'>14Feb 2025</h4>
          </div>
          <h2 className='mt-5 font-semibold text-2xl text-violet-950'>Make A YouTube Video</h2>
          <p className='mt-2 text-sm text-blue-800'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Quae enim blanditiis id, perferendis aspernatur voluptatum?</p>
        {/* </div> */}
        
    </div>
  )
}

export default ListTask