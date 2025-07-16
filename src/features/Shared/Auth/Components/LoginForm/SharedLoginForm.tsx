import React, { useState } from 'react'
import *  as Yup from 'yup'
// import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import { FiEye, FiEyeOff } from 'react-icons/fi';


interface SharedLoginProps {
  title  : string,
  onSubmit : (values:{email: string, password: string})=> void;
  onForgotPassword: () => void;
  onSignUp: () => void;
}

const SharedLoginForm :React.FC <SharedLoginProps>  = ({title, onSubmit, onForgotPassword, onSignUp}) => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues:{
      email : '',
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
      onSubmit(values);
    },
  })

  

  return (
    <div>
        <div className="h-full w-screen bg-black flex items-center justify-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md px-6 flex flex-col gap-6"
      >
        <h2 className="text-white text-center text-2xl font-semibold">
          {/* LETSCHAT LOGIN */}
          {title}
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
           onClick={onForgotPassword}
          className="text-xs text-end text-gray-400 hover:underline cursor-pointer">
            Reset your password!
          </p>
          
       </div>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          // onClick={() => navigate('/')}
          className="w-full bg-violet-600 text-white font-medium py-2 rounded-md hover:bg-violet-700 transition"
        >
          SUBMIT
        </button>

        {/* Sign Up */}
        <p className="text-center text-sm text-gray-400">
          Don't have an account?{' '}
          <span
            onClick={onSignUp}
            className="text-violet-400 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
    </div>
  )
}

export default SharedLoginForm