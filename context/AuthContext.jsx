// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { io } from "socket.io-client";

// const BackentUrl = import.meta.env.VITE_BACKENT_URL;
// axios.default.baseURL = BackentUrl;

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token"));
//   const [authUser, setAuthUser] = useState(null);
//   const [onlineUser, setOnlineUser] = useState([]);
//   const [socket, setSocket] = useState(null);

//   /**
//    * check is user is authenticated and if so, set the user data and connect
//    * the socket
//    */

//   const checkAuth = async (req, res) => {
//     try {
//       const { data } = await axios.get("/api/auth/check");
//       if (data.success) {
//         setAuthUser(data.user);
//         connectSocket(data.user);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   // Login funciton to handle user authentication and socket connection

//   const Login = async (req, res) => {
//     try {
//       const { data } = await axios.post(`/api/auth/${state}`, Credentials);
//       if (data.success) {
//         setAuthUser(data.userData);
//         connectSocket(data.userData);
//         axios.defaults.headers.common["token"] = data.token;
//         setToken(data.token);
//         localStorage.setItem("token", data.token);
//         toast.success(data.message);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(data.message);
//     }
//   };

//   // logout function to handle user logout and socket disconnection

//   const Logout = async () => {
//     localStorage.removeItem("token");
//     setToken(null);
//     setAuthUser(null);
//     setOnlineUser([]);
//     axios.defaults.headers.common["token"] = null;
//     toast.success("Logout successfully");
//     socket.disconnect();
//   };


//   // update profile function to handle user profile updates

//   const UpdateProfile = async(body)=>{
//     try {
//       const {data} = await axios.put("/api/auth/update-profile", body);
//       if(data.success){
//         setAuthUser(data.user);
//         toast.success("Profile Update successfully")
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   // connect socket function to handle socket connection and online users updates

//   const connectSocket = (userData) => {
//     if (!userData || socket?.connected) return;
//     const newSocket = io(BackentUrl, {
//       query: {
//         userId: userData._id,
//       },
//     });
//     newSocket.connect();
//     setSocket(newSocket);

//     newSocket.on("getOnlineUsers", (userIds) => {
//       setOnlineUser(userIds);
//     });
//   };

//   useEffect(() => {
//     if (token) {
//       axios.defaults.headers.common["token"] = token;
//     }
//     checkAuth();
//   }, []);

//   const value = {
//     axios,
//     authUser,
//     onlineUser,
//     socket,
//     Login,
//     Logout,
//     UpdateProfile
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };
