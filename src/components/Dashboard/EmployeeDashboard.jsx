import React from 'react'
import Header from '../others/Header'
import NumberOfTask from '../others/NumberOfTask'
import ListTask from '../TaskList/ListTask'

const EmployeeDashboard = ({data}) => {
  // console.log(data)
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <h1>{data.id}</h1>
      <Header />
      <NumberOfTask />
      <ListTask />
    </div>
  )
}

export default EmployeeDashboard