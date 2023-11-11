import React, { useState } from 'react'
import { useCreateUser } from '../../services/auth/register_user'

export const Register = () => {
    const[Username, setUsername] = useState("");
    const[Password, setPassword] = useState("");
    const[Email, setEmail] = useState("");

    const {mutate : registerUser , isSuccess, error} = useCreateUser()
    
    const handleInput = (e) => {
        if (e) {
            if (e.target.id === "username") {
                setUsername(e.target.value);
            }
            if (e.target.id === "email") {
                setEmail(e.target.value);
            }
            if (e.target.id === "password") {
                setPassword(e.target.value);
            }
        };

    }

    // console.log(Username, "Username")
    // console.log(Password, "Password")
    // console.log(Email, "Email")
    // console.log(isSuccess, "isSuccess")
    // console.log(error, "error")

    if (error){
        console.log(error.response.data.message , "Error ada yang salah dalam inputan"
            )
    }

    const handleRegister = () => {
        registerUser=()=>({
            "email": Email,
            "name": Username,
            "password": Password
        }); 
        if (isSuccess){
            setEmail("");
            setUsername("");
            setPassword("");
        }             
    }
    
  return (
    <div className='flex flex-col justify-center items-center bg-neutral-200 h-screen'>
        <div className='flex flex-col items-center space-y-4 relative'>
            <input
            placeholder='Masukkan Email'
            onChange={handleInput}
            className='border border-black w-[25rem] py-2 px-2 rounded'
            value={Email}
            id='email'
            type='email'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute right-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>

            <input
            placeholder='Masukkan Username'
            onChange={handleInput}
            className='border border-black w-[25rem] py-2 px-2 rounded'
            value={Username}
            id='username'
            type='username'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          
            <input
            placeholder='Masukkan Password'
            onChange={handleInput}
            className='border border-black w-[25rem] py-2 px-2 rounded'
            value={Password}
            id='password'
            type='password'/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute right-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
        </div>

        <div className='py-4 flex space-x-52'>
            <button 
            type='button' 
            className='px-9 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 border border-white'
            onClick={() => {handleRegister()}}>Register
            </button>
        </div>
        </div>

    // <div>
    //   <input onChange={handleInput} id='username' className='border' type='text'/>
    //   <input onChange={handleInput} id='email' className='border' type='text'/>
    //   <input onChange={handleInput} id='password' className='border' type='password'/>
    //   <button onClick={() => {registerUser() }}>Login</button>
    // </div>
  )
}


