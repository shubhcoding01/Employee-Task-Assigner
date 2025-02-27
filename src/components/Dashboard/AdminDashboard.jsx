import React, { useEffect, useState } from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashboard = (props) => {

  const [userData, setUserData] = useState(null)

  useEffect(()=>{
    const storedUserData = JSON.parse(localStorage.getItem('loggedInUser'));

    if(storedUserData)
    {
      setUserData(storedUserData)
    }
  },[])

  if(!userData)
  {
    return <div>Loading...</div>
  }
  return (
    <div className='h-screen w-full p-7'>
        <Header firstname={userData.firstname} changeUser={props.changeUser}/>
        <CreateTask />
        <AllTask />
        
    </div>
  )
}

export default AdminDashboard