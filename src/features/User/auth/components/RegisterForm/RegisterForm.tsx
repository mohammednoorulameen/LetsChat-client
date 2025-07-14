import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
});

const LetsChatRegister = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Register data:', values);
      // Send to API if needed
    },
  });

  return (
    <div className="h-full w-screen bg-black flex items-center justify-center py-8 px-4 overflow-y-auto">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full max-w-md px-6 flex flex-col gap-4"
      >
        <h2 className="text-white text-center text-2xl font-semibold">LETSCHAT REGISTER</h2>

        {/* Name */}
        <div className="flex flex-col">
          <div
            className={`bg-transparent border ${
              formik.touched.name && formik.errors.name
                ? 'border-red-500'
                : 'border-gray-600'
            } rounded-md flex items-center px-4 py-3`}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <span className="text-red-500 text-sm mt-1">{formik.errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <div
            className={`bg-transparent border ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : 'border-gray-600'
            } rounded-md flex items-center px-4 py-3`}
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500 text-sm mt-1">{formik.errors.email}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
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
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
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
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500 text-sm mt-1">{formik.errors.password}</span>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <div
            className={`bg-transparent border ${
              formik.touched.confirmPassword && formik.errors.confirmPassword
                ? 'border-red-500'
                : 'border-gray-600'
            } rounded-md flex items-center px-4 py-3`}
          >
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              name="confirmPassword"
              placeholder="Confirm Password"
              className="flex-1 bg-transparent text-white placeholder-gray-400 focus:outline-none"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="text-white text-lg"
            >
              {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <span className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</span>
          )}
        </div>

        {/* Submit Button */} 
        {/* bg-teal-600 */}
        <button
          type="submit"
          className="w-full bg-violet-600 text-white font-medium py-2 rounded-md hover:bg-violet-700 transition"
        >
          REGISTER
        </button>

        {/* Navigation */}
        <p className="text-center text-sm text-gray-400">
          Already have an account?{' '}
          <span
            onClick={() => navigate("/login")}
            className="text-violet-400 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default LetsChatRegister;



// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// // import type { FormikHelpers } from "formik";
// import type{ RegisterFormValues } from '../../auth_types'


// const RegisterForm = () => {
//   const navigate = useNavigate();

//   const formik = useFormik<RegisterFormValues>({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//       bio: "",
//     },
//     validationSchema: Yup.object({
//       username: Yup.string().required("Required"),
//       email: Yup.string().email("Invalid email").required("Required"),
//       password: Yup.string().min(6, "Min 6 characters").required("Required"),
//       confirmPassword: Yup.string()
//         .oneOf([Yup.ref("password")], "Passwords must match")
//         .required("Required"),
//       bio: Yup.string().required("Required"),
//     }),
//     onSubmit: async (
//       values: RegisterFormValues,
//       // helpers: FormikHelpers<RegisterFormValues>
//     ) => {
//       console.log(values);
//       // helpers.resetForm(); // Optional
//     },
//   });

//   return (
//     <div>
//       <form
//         onSubmit={formik.handleSubmit}
//         className="w-[90vw] max-w-lg border-2 bg-white/8 text-white border-gray-500 
//         p-6 flex flex-col gap-6 rounded-lg shadow-lg"
//       >
//         <h2 className="font-medium text-2xl text-white">Sign up</h2>

//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.username}
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//         />
//         {formik.touched.username && formik.errors.username && (
//           <div className="text-red-400 text-sm">{formik.errors.username}</div>
//         )}

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

//         <input
//           type="password"
//           name="confirmPassword"
//           placeholder="Confirm Password"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.confirmPassword}
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//         />
//         {formik.touched.confirmPassword && formik.errors.confirmPassword && (
//           <div className="text-red-400 text-sm">
//             {formik.errors.confirmPassword}
//           </div>
//         )}

//         <textarea
//           name="bio"
//           rows={4}
//           placeholder="Write a short bio"
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           value={formik.values.bio}
//           className="p-2 border border-gray-500 rounded-md focus:outline-none"
//         />
//         {formik.touched.bio && formik.errors.bio && (
//           <div className="text-red-400 text-sm">{formik.errors.bio}</div>
//         )}

//         <button
//           type="submit"
//           className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer"
//         >
//           Create Account
//         </button>

//         <p className="text-sm text-center text-gray-300 mt-4">
//           Already have an account?{" "}
//           <span
//             onClick={() => navigate("/login")}
//             className="text-violet-400 cursor-pointer hover:underline"
//           >
//             Login
//           </span>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default RegisterForm;
