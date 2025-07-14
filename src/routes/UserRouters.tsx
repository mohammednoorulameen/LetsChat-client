import  { lazy } from 'react';
import ForgotPasswordPage from '../features/User/auth/pages/ForgotPasswordPage';
// import { Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../features/User/home/pages/HomePage'));
const LoginPage = lazy(() => import('../features/User/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/User/auth/pages/RegisterPage'));

// Settings
const SettingsSidebar = lazy(() => import('../features/User/settings/layout/SettingsLayout'));
const SettingsProfilePage = lazy(() => import('../features/User/settings/pages/ProfilePage'));
const SecurityAndPrivacyPage = lazy(() => import('../features/User/settings/pages/SecurityAndPrivacyPage'));
const NotificationsPage = lazy(() => import('../features/User/settings/pages/NotificationsPage'));
const LanguagePage = lazy(() => import('../features/User/settings/pages/LanguagePage'));
const DataAndStoragePage = lazy(() => import('../features/User/settings/pages/DataAndStoragePage'));
const GeneralPage = lazy(() => import('../features/User/settings/pages/GeneralPage'));
const ActiveSessionsPage = lazy(() => import('../features/User/settings/pages/ActiveSessionsPage'));
const EditProfilePage = lazy(() => import('../features/User/settings/pages/EditProfilePage'));

// Calls
const CallSidebar = lazy(() => import('../features/User/call/layout/CallLayout'));
const DefaultPage = lazy(() => import('../features/User/call/pages/DefaultPage'));

// componetn/common

const NotFoundPage = lazy(()=> import('../components/common/ NotFoundPage/ NotFoundPage'))


const UserRouters = [
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/register',
    element: <RegisterPage />
  },
    {
    path: '/forgotpassword',
    element: <ForgotPasswordPage />
  },
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/settings',
    element: <SettingsSidebar />,
    children: [
      { path: 'profile', element: <SettingsProfilePage /> },
      { path: 'security&privacy', element: <SecurityAndPrivacyPage /> },
      { path: 'notifications', element: <NotificationsPage /> },
      { path: 'language', element: <LanguagePage /> },
      { path: 'data&storage', element: <DataAndStoragePage /> },
      { path: 'general', element: <GeneralPage /> },
      { path: 'activesessions', element: <ActiveSessionsPage /> },
      { path: 'editprofile', element: <EditProfilePage /> }
    ]
  },
  {
    path: '/calls',
    element: <CallSidebar />,
    children: [
      { index: true, element: <DefaultPage /> },
      { path: 'defaultPage', element: <DefaultPage /> }
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
];


export default UserRouters;






