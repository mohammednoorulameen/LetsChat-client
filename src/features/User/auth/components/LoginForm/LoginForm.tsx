import  { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        // .min(6, 'Minimum 6 characters')
        .required('Password is required'),
    }),
    onSubmit: (values) => {
      console.log('Login Values:', values);
      // handle login here
    },
  });

  return (
    <div className="h-full w-screen bg-black flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md px-6 flex flex-col gap-6"
      >
        <h2 className="text-white text-center text-2xl font-semibold">
          LETSCHAT LOGIN
        </h2>

        {/* Email input */}
        
        <div className='flex flex-col'>
          <div
          className={`bg-transparent border ${
            formik.touched.email && formik.errors.email
              ? 'border-red-500'
              : 'border-gray-600'
          } rounded-md flex items-center px-4 py-3`}
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">🇮🇳</span>
            <span className="text-white">@</span>
          </div>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            className="ml-4 flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
        )}

        </div>
        {/* Password input */}
       <div className='flex flex-col'>
         <div
          className={`bg-transparent border ${
            formik.touched.password && formik.errors.password
              ? 'border-red-500'
              : 'border-gray-600'
          } rounded-md flex items-center px-4 py-3`}
        >
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none text-sm"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-white text-lg"
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </button>
        </div>

        {/* Inline error + Reset link */}
        <div className="flex justify-between items-center">
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-500 text-xs">{formik.errors.password}</p>
          )}
          <p
           onClick={() => navigate('/forgotpassword')} 
          className="text-xs text-end text-gray-400 hover:underline cursor-pointer">
            Reset your password!
          </p>
          
       </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          onClick={() => navigate('/')}
          className="w-full bg-violet-600 text-white font-medium py-2 rounded-md hover:bg-violet-700 transition"
        >
          SUBMIT
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <span
            onClick={() => navigate('/register')}
            className="text-violet-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default StudentLogin;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import type{  FormikHelpers } from 'formik';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import assets from '../../../../assets/assets';
// import type{ LoginFormValues } from '../../auth_types'


// const LoginForm: React.FC = () => {
//   const navigate = useNavigate();

//   const formik = useFormik<LoginFormValues>({
//     initialValues: {
//       email: '',
//       password: '',
//     },
//     validationSchema: Yup.object({
//       email: Yup.string().email('Invalid email').required('Required'),
//       password: Yup.string().min(6, 'Min 6 characters').required('Required'),
//     }),
//     onSubmit: async (
//       values: LoginFormValues,
//       _formikHelpers: FormikHelpers<LoginFormValues>
//     ) => {
//       console.log(values);
//     },
//   });

//   const handleGoogleLogin = () => {
//     console.log('Google login triggered');
//     // Add Google auth logic (e.g., Firebase auth or OAuth)
//   };

//   return (
//     <div>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="w-[90vw] max-w-lg border-2 bg-white/8 text-white border-gray-500 
//         p-6 flex flex-col gap-6 rounded-lg shadow-lg"
//       >
//         <h2 className="font-medium text-2xl text-white">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.email}
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//         />
//         {formik.touched.email && formik.errors.email && (
//           <div className="text-red-400 text-sm">{formik.errors.email}</div>
//         )}

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.password}
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//         />
//         {formik.touched.password && formik.errors.password && (
//           <div className="text-red-400 text-sm">{formik.errors.password}</div>
//         )}

//         <button
//           type="submit"
//           className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
//         >
//           Login
//         </button>

//         <div className="flex items-center justify-center text-sm text-gray-300">OR</div>

//         <button
//           type="button"
//           onClick={handleGoogleLogin}
//           className="flex items-center justify-center gap-3 py-2 border border-white text-white rounded-md hover:bg-white/10 transition"
//         >
//           <img src={assets.Settings_Icon} alt="Google" className="w-5 h-5" />
//           Sign in with Google
//         </button>

//         <p className="text-sm text-center text-gray-300 mt-4">
//           Don't have an account?{' '}
//           <span
//             onClick={() => {
//               navigate('/register');
//             }}
//             className="text-violet-400 cursor-pointer hover:underline"
//           >
//             Sign up
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
