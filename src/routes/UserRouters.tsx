import  { lazy } from 'react';
import ForgotPasswordPage from '../features/auth/pages/ForgotPasswordPage';
// import { Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('../features/home/pages/HomePage'));
const LoginPage = lazy(() => import('../features/auth/pages/LoginPage'));
const RegisterPage = lazy(() => import('../features/auth/pages/RegisterPage'));

// Settings
const SettingsSidebar = lazy(() => import('../features/settings/layout/SettingsLayout'));
const SettingsProfilePage = lazy(() => import('../features/settings/pages/ProfilePage'));
const SecurityAndPrivacyPage = lazy(() => import('../features/settings/pages/SecurityAndPrivacyPage'));
const NotificationsPage = lazy(() => import('../features/settings/pages/NotificationsPage'));
const LanguagePage = lazy(() => import('../features/settings/pages/LanguagePage'));
const DataAndStoragePage = lazy(() => import('../features/settings/pages/DataAndStoragePage'));
const GeneralPage = lazy(() => import('../features/settings/pages/GeneralPage'));
const ActiveSessionsPage = lazy(() => import('../features/settings/pages/ActiveSessionsPage'));
const EditProfilePage = lazy(() => import('../features/settings/pages/EditProfilePage'));

// Calls
const CallSidebar = lazy(() => import('../features/call/layout/CallLayout'));
const DefaultPage = lazy(() => import('../features/call/pages/DefaultPage'));

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






