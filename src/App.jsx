import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

 const App = () => {

  // useEffect(() => {
    // setLocalStorage()
  //   getLocalStorage()
  
    
  // }, [])

  const [user, setUser] = useState(null)
  
  const handelLogin = (email,password) => {
    // console.log(email,password)
    if(email == 'admin12@mail.com' && password == '123'){
      console.log("This is Admin")
  }
  else if(email == 'user12@mail.com' && password =='123')
  {
    console.log("This is User")
  }
  else{
    alert("Invalid Email or Password")
  }
  }
  handelLogin("admin12@mail.com",123)

  return (
    <>
    {!user ? <Login /> :''}
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}
export default App