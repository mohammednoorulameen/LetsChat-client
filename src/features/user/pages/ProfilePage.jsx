import React from 'react'
import ProfileForm from '../components/ProfileForm/ProfileForm'

const ProfilePage = () => {
  return (
        <div className="min-h-screen bg-cover bg-no-repeat flex justify-center items-center">
      <div
        className="w-5/6 max-w-2xl backdrop-blur-2xl  text-gray-300 border-2 border-gray-600 flex items-center
       justify-between max-sm:flex-col-reverse rounded-lg "
      >
        <ProfileForm/>
    </div>
    </div>
  )
}

export default ProfilePage