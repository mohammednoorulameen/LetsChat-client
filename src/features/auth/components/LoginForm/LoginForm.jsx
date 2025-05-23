import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import * as Yup from "yup";
import assets from '../../../../assets/assets'

const LoginForm = () => {


    const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });


    /**
   * Google authentication function
   */

  const handleGoogleLogin = () => {
    console.log("Google login triggered");
    // Add Google auth logic (e.g., Firebase auth or OAuth)
  };


  return (
    <div>
        <form
                onSubmit={formik.handleSubmit}
                className="w-[90vw] max-w-lg border-2 bg-white/8 text-white border-gray-500 
                p-6 flex flex-col gap-6 rounded-lg shadow-lg"
              >
                <h2 className="font-medium text-2xl text-white">Login</h2>
        
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="p-2 border border-gray-500 rounded-md focus:outline-none"
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-red-400 text-sm">{formik.errors.email}</div>
                )}
        
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="p-2 border border-gray-500 rounded-md focus:outline-none"
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="text-red-400 text-sm">{formik.errors.password}</div>
                )}
                <button
                  type="submit"
                  className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
                >
                  Login
                </button>
        
                <div className="flex items-center justify-center text-sm text-gray-300">
                  OR
                </div>
        
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center gap-3 py-2 border border-white text-white rounded-md hover:bg-white/10 transition"
                >
                  <img src={assets.google_icon} alt="Google" className="w-5 h-5" />
                  Sign in with Google
                </button>
        
                <p className="text-sm text-center text-gray-300 mt-4">
                  Don't have an account?{" "}
                  <span
                    onClick={() => {
                      // Navigate to signup page
                      navigate("/register");
                    }}
                    className="text-violet-400 cursor-pointer hover:underline"
                  >
                    Sign up
                  </span>
                </p>
              </form>
    </div>
  )
}

export default LoginForm