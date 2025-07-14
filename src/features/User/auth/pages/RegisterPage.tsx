import RegisterForm from '../components/RegisterForm/RegisterForm';
import Logo from '../../../../components/common/Logo/Logo';

const RegisterPage = () => {
  return (
    <div className="min-h-screen w-screen bg-black px-4 py-10 flex flex-col items-center">
      {/* Logo at the top */}
      <div className="mb-6">
        <Logo />
      </div>

      {/* Register form centered below logo */}
      <div className="flex-grow flex items-center justify-center w-full max-w-md">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;




// import React from 'react';
// import RegisterForm from '../components/RegisterForm/RegisterForm';
// import Logo from '../../../components/common/Logo/Logo';


// const RegisterPage: React.FC = () => {
//   return (
   

//      <div className="min-h-screen bg-cover bg-center flex items-center justify-center backdrop-blur-2xl">
//       <div className="flex flex-col items-center gap-2 max-w-md w-full p-4">
//         <Logo />
//         <RegisterForm />
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
