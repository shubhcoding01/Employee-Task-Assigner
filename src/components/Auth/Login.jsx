import React, { useState } from 'react'

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('Your Email is: ', email)
        console.log('Your Password is: ', password)

        setEmail('')
        setPassword('')
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-3xl border-emerald-600 p-20'>
            <form 
            onSubmit={ (e)=>{submitHandler(e)}}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>
                    {setEmail(e.target.value)}
                        
                    }
                required className=' outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full'
                 type="email" 
                 placeholder='Enter Your Email'/>
                <input
                value={password}
                onChange={(e)=>
                {setPassword(e.target.value)}
                }
                 required className=' outline-none bg-transparent placeholder:text-grey-400 border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-5'
                type="password" placeholder='Enter Your Password'/>
                <button className='mt-7 text-white outline-none border-none placeholder:text-white  hover:bg-emerald-800 font-semibold bg-emerald-600 text-lg py-2 px-8  w-full rounded-full'>LogIn</button>
            </form>
        </div>
    </div>
  )
}
export default Login