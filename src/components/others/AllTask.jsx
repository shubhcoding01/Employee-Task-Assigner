import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    // console.log(authData.employees);
    

  return (
    <div id='allTask' className='p-5 bg-[#1c1c1c] rounded mt-5  h-50'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-slate-500'>Employee Name</h2>
            <h3 className='w-1/5 bg-slate-500'>New Task</h3>
            <h5 className='w-1/5 bg-slate-500'>Active Status</h5>
            <h5 className='w-1/5 bg-slate-500'>Completed</h5>
            <h5 className='w-1/5 bg-slate-500'>Failed</h5>

        </div>
        
        <div id='allTask' className='h-[80%] overflow-auto'>
        {authData.employees.map(function (elem) {
            return <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 bg-slate-500'>{elem.firstname}</h2>
            <h3 className='w-1/5 bg-slate-500'>Task</h3>
            <h5 className='w-1/5 bg-slate-500'>Status</h5>
            <h5 className='w-1/5 bg-slate-500'>Status</h5>
            <h5 className='w-1/5 bg-slate-500'>Failed</h5>

        </div>
        })}
        </div>
        
        {/* <div className='bg-green-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Shubham</h2>
            <h3>Make A Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-purple-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Shubham</h2>
            <h3>Make A Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-yellow-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Shubham</h2>
            <h3>Make A Design</h3>
            <h5>Status</h5>
        </div>
        <div className='bg-blue-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Shubham</h2>
            <h3>Make A Design</h3>
            <h5>Status</h5>
        </div> */}

    </div>
    
  )
}

export default AllTask