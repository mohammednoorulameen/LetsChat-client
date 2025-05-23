import React from 'react'
import RegisterForm from '../components/RegisterForm/RegisterForm'

const RegisterPage = () => {
  return (
     <div className="min-h-screen bg-cover bg-center flex items-center justify-center 
      gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl"
    >
      <div className="flex justify-center">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-violet-700 text-transparent bg-clip-text">
          Letschat
        </h1>
      </div>
        <RegisterForm/>
    </div>
  )
}

export default RegisterPage