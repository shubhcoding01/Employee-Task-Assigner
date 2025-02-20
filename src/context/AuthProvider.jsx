import React, { createContext, useState } from 'react'


export const AuthContext = createContext() 

const AuthProvider = ({children}) => {

  const [userData, setuserData] = useState(null)

  return (
    <div>
        <AuthContext.Provider value={"SHUBH"}>
            {children}
        </AuthContext.Provider>
        
    </div>
  )
}

export default AuthProvider