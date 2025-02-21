import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

 const App = () => {

  // useEffect(() => {
    // setLocalStorage()
  //   getLocalStorage()
  
    
  // }, [])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);
    // console.log(authData)

    // useEffect(() => {
      
    // if(authData)
    // {
    //   const loggedInUser = localStorage.getItem('loggedInUser')
    //   if(loggedInUser)
    //   {
    //     setUser(loggedInUser.role)
    //   }
    // }
      
    // }, [authData])
    

  const handleLogin = (email,password) => {
    // console.log(email,password)
    if(email == 'admin12@mail.com' && password == '123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
      // console.log(user)
      // console.log("This is Admin")
  }
  else if(authData && authData.employees.find((e) => email == e.email && e.password == password))
  {
    
    setUser('employee')
    localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
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