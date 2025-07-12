import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';
import Logo from '../../../components/common/Logo/Logo';

const LoginPage: React.FC = () => {
  return (
   <div className="min-h-screen w-screen bg-black px-4 py-10 flex flex-col items-center">
      {/* Logo at the top */}
      <div className="mb-6">
        <Logo />
      </div>

      {/* Register form centered below logo */}
      <div className="flex-grow flex items-center justify-center w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;



