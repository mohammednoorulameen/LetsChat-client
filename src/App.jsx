import "./App.css";
import UserRouters from "./Routes/userRouters";


function App() {
  return (
    <>
      <div className="bg-black">
        <UserRouters />

      </div>
    </>
  );
}

export default App;







// import './App.css'
// import {Navigate, Route,Routes} from 'react-router-dom'
// import HomePage from './pages/HomePage'
// import LoginPage from './pages/LoginPage'
// import ProfilePage from './pages/ProfilePage'
// import { Toaster } from 'react-hot-toast'
// // import { useContext } from 'react'
// // import { AuthContext } from '../context/AuthContext'

// function App() {

// // const  { authUser } = useContext(AuthContext)
//   return (
//     <>
//       <div className='bg-black'>
//       <Toaster/>
//       <Routes>
//         {/* <Route path = '/' element={ authUser ? <HomePage/> : <Navigate to="/login" />} />
//         <Route path = '/login' element={ !authUser ? <LoginPage/> : <Navigate to="/login" />}/>
//         <Route path = '/profile' element={ authUser ? <ProfilePage/> : <Navigate to="/login" />} /> */}

//         <Route path = '/' element={  <HomePage/> } />
//         <Route path = '/login' element={  <LoginPage/> }/>
//         <Route path = '/profile' element={  <ProfilePage/> } />

//       </Routes>

//       </div>
//     </>
//   )
// }

// export default App
