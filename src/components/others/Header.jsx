import React, { useState } from 'react'

const Header = (props) => {
  // console.log(data)
  // const [username, setUsername] = useState('')
  // if(!data)
  // {
  //   setUsername('admin')

  // }
  // else{
  //   setUsername(data.firstname)
  // }
  
    const logoutUser = ()=>
    {
      localStorage.setItem('loggedInUser','')
      props.changeUser('')
      // window.location.reload()
    }

  return (
    <div className='flex justify-between items-end  text-white'>
        <h1 className='text-2xl text-lime-500 '>Hello <br /><span className='text-3xl font-semibold text-lime-300'>username👋</span></h1>
        <button onClick={logoutUser} className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header