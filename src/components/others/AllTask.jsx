import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    // console.log(authData.employees);
    

  return (
    <div id='allTask' className='p-5 bg-[#1c1c1c] rounded mt-5 overflow-auto h-48'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>Employee Name</h2>
            <h3>New Task</h3>
            <h5>Active Status</h5>
            <h5>Completed</h5>
            <h5>Failed</h5>

        </div>
        
        <div>
        {authData.employees.map(function (elem) {
            return <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2>{elem.firstname}</h2>
            <h3>Task</h3>
            <h5>Status</h5>
            <h5>Status</h5>
            <h5>Failed</h5>

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