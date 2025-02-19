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
  
  const handleLogin = (email,password) => {
    // console.log(email,password)
    if(email == 'admin12@mail.com' && password == '123'){
      setUser('admin')
      // console.log(user)
      // console.log("This is Admin")
  }
  else if(email == 'user12@mail.com' && password =='123')
  {
    setUser('employee')
    // console.log(user)
    // console.log("This is User")
  }
  else{
    alert("Invalid Email or Password")
  }
  }
  // handelLogin("user12@mail.com",123)

  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}
export default App