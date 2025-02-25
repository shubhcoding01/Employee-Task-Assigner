import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
import { data } from 'autoprefixer'

 const App = () => {

  // useEffect(() => {
    // setLocalStorage()
  //   getLocalStorage()
  
    
  // }, [])

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext);

    useEffect(() => {
      const loggedInUser =localStorage.getItem('loggedInUser')
    

      if(loggedInUser)
      {
        const userData = JSON.parse(loggedInUser)
        setUser(userData.role)
        setLoggedInUserData(userData.data)
       
      }
    },[])

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
  else if(authData )
  {
    const employee = authData.employees.find((e) => email == e.email && e.password == password)
    if(employee)
    {
      setUser('employee')
      setLoggedInUserData(employee)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee',data:employee}))
    }
    
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
    {user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null) }
    {/* <Login /> */}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}
export default App