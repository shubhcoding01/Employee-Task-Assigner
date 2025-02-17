import React from 'react'
import Header from '../others/Header'
import NumberOfTask from '../others/NumberOfTask'
import ListTask from '../TaskList/ListTask'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header />
      <NumberOfTask />
      <ListTask />
    </div>
  )
}

export default EmployeeDashboard