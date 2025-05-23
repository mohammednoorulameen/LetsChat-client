import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import assets from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";


const RegisterForm = () => {


     const navigate  = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      bio: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6, "Min 6 characters").required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
      bio: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
    },
  });


  return (
    <div>
        <form
        onSubmit={formik.handleSubmit}
        className="w-[90vw] max-w-lg border-2 bg-white/8 text-white border-gray-500 
        p-6 flex flex-col gap-6 rounded-lg shadow-lg"
      >
        <h2 className="font-medium text-2xl text-white">Sign up</h2>

        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className="p-2 border border-gray-500 rounded-md focus:outline-none"
        />
        {formik.touched.username && formik.errors.username && (
          <div className="text-red-400 text-sm">{formik.errors.username}</div>
        )}

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

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="p-2 border border-gray-500 rounded-md focus:outline-none"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-400 text-sm">{formik.errors.confirmPassword}</div>
        )}

        <textarea
          name="bio"
          rows={4}
          placeholder="Write a short bio"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.bio}
          className="p-2 border border-gray-500 rounded-md focus:outline-none"
        />
        {formik.touched.bio && formik.errors.bio && (
          <div className="text-red-400 text-sm">{formik.errors.bio}</div>
        )}

        <button
          type="submit"
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
        >
          Create Account
        </button>
         {/* Already have an account */}

         <p className="text-sm text-center text-gray-300 mt-4">
          Already have an account?{" "}
          <span
            onClick={() => {
              // Navigate to signup page
              navigate("/login");
            }}
            className="text-violet-400 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
        
      </form>
    </div>
  )
}

export default RegisterForm