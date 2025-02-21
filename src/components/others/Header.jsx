import React from 'react'

const Header = ({data}) => {
  // console.log(data)
  return (
    <div className='flex justify-between items-end bg-emerald-600 text-white'>
        <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>Shubham👋</span></h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded-lg text-lg font-medium'>Log out</button>
    </div>
  )
}

export default Header