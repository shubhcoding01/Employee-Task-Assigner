import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    // const authData = useContext(AuthContext)
    // console.log(authData.employees);
    

  return (
    <div id='allTask' className='p-5 bg-[#1c1c1c] rounded mt-5  h-60'>
        <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-black font-bold'>Employee Name</h2>
            <h3 className='w-1/5 text-black font-bold'>New Task</h3>
            <h5 className='w-1/5 text-black font-bold'>Active Status</h5>
            <h5 className='w-1/5 text-black font-bold'>Completed</h5>
            <h5 className='w-1/5 text-black font-bold'>Failed</h5>

        </div>
        
        <div id='allTask' className='h-[80%] overflow-auto'>
        {userData.employees.map(function (elem, idx) {
            return <div key={idx} className='border-2 border-purple-900 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='w-1/5 text-white'>{elem.firstname}</h2>
            <h3 className='w-1/5 text-blue-500'>{elem.task_numbers.new}</h3>
            <h5 className='w-1/5 text-yellow-500'>{elem.task_numbers.active}</h5>
            <h5 className='w-1/5 text-green-500'>{elem.task_numbers.completed}</h5>
            <h5 className='w-1/5 text-pink-500'>{elem.task_numbers.failed}</h5>

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