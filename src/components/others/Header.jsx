import React from 'react'

const Header = ({data}) => {
  // console.log(data)
  return (
    <div className='flex justify-between items-end  text-white'>
        <h1 className='text-2xl text-lime-500 '>Hello <br /><span className='text-3xl font-semibold text-lime-300'>{data.firstname}👋</span></h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header