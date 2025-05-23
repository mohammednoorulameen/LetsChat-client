import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../features/home/pages/HomePage'
import LoginPage from '../features/auth/pages/LoginPage'
import ProfilePage from '../features/user/pages/ProfilePage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from '../features/auth/pages/RegisterPage'

const UserRouters = () => {
  return (
    <div>
         <>
      <div className='bg-black'>
      <Toaster/>
      <Routes>
        <Route path = '/' element={  <HomePage/> } />
        <Route path = '/login' element={  <LoginPage/> }/>
        <Route path = '/register' element={  <RegisterPage/> }/>
        <Route path = '/profile' element={  <ProfilePage/> } />
        
      </Routes>
        
      </div>
    </>
    </div>
  )
}

export default UserRouters