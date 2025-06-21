import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from '../features/home/pages/HomePage'
import LoginPage from '../features/auth/pages/LoginPage'
import ProfilePage from '../features/user/pages/ProfilePage'
import { Toaster } from 'react-hot-toast'
import RegisterPage from '../features/auth/pages/RegisterPage'
import SettingsSidebar from '../features/settings/layout/SettingsLayout'
import SettingsProfilePage from '../features/settings/pages/ProfilePage'
import SecurityAndPrivacyPage from '../features/settings/pages/SecurityAndPrivacyPage'
import NotificationsPage from '../features/settings/pages/NotificationsPage'
import LanguagePage from '../features/settings/pages/LanguagePage'
import DataAndStoragePage from '../features/settings/pages/DataAndStoragePage'
import GeneralPage from '../features/settings/pages/GeneralPage'
import ActiveSessionsPage from '../features/settings/pages/ActiveSessionsPage'
import EditProfilePage from '../features/settings/pages/EditProfilePage'
import CallSidebar from '../features/call/layout/CallLayout'
import DefaultPage from '../features/call/pages/DefaultPage'

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

          {/* // settings paths */}
        <Route path = '/settings' element={  <SettingsSidebar/> } >
        
        <Route path="profile" element={<SettingsProfilePage />} />
        <Route path="security&privacy" element={<SecurityAndPrivacyPage />} />
        <Route path="notifications" element={<NotificationsPage />} />
        <Route path="language" element={<LanguagePage />} />
        <Route path="data&storage" element={<DataAndStoragePage />} />
        <Route path="general" element={<GeneralPage />} />
        <Route path="activesessions" element={<ActiveSessionsPage />} />
        <Route path="editprofile" element={<EditProfilePage />} />

        </Route>

          {/* // settings paths end */}

        {/* calls paths */}

        <Route path = '/calls' element={  <CallSidebar/> } >

        <Route path="defaultPage" element={<DefaultPage />} />

        </Route>
        
        {/* call path end  */}

      </Routes>
        
      </div>
    </>
    </div>
  )
}

export default UserRouters