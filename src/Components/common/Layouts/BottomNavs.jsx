import React from "react";
import { User, PhoneCall, MessageCircle, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNavs = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col text-white ">

      {/* Bottom Navigation */}
      <div className="mt-auto bg-[#282142]/40 grid grid-cols-4 gap-0">
        <button className="py-3 hover:text-violet-400 transition-colors">
          <User className="mx-auto w-6 h-6" />
        </button>

        <button  onClick={() => navigate("/calls")} className="py-3 hover:text-violet-400 transition-colors">
          <PhoneCall className="mx-auto w-6 h-6" />
        </button>

        <button 
         onClick={() => navigate("/")}
        className="py-3 hover:text-violet-400 transition-colors">
          <MessageCircle className="mx-auto w-6 h-6" />
        </button>

        <button
          onClick={() => navigate("/settings/profile")}
          className="py-3 hover:text-violet-400 transition-colors"
        >
          <Settings className="mx-auto w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default BottomNavs;








// import React from 'react'
// import { User, PhoneCall, MessageCircle, Settings } from "lucide-react";
// const BottomNavs = () => {
//   return (
//      <div
//       className={`bg-[#8185B2]/10 h-full  flex flex-col text-white `}
//     >
//       {/* Bottom Navigation Icons */}
//        <div className="mt-auto bg-[#282142]/40 py-0 px-0 flex justify-between items-center">
//               <button className="text-white hover:text-violet-400 w-full py-3">
//                 {/* <img src={assets.avatar_icon} alt="Home" className="mx-auto w-6 h-6" /> */}
//                 <User className="mx-auto w-6 h-6"/>
//               </button>
      
//               <button className="text-white hover:text-violet-400 w-full py-3">
//                 {/* , , ,  */}
//                 <PhoneCall className="mx-auto w-6 h-6 text-white"/>
//                 {/* <img
//                   src={assets.Call_Icons}
//                   alt="Messages"
//                   className="mx-auto w-6 h-6 text-white"
//                 /> */}
//               </button>
//               <button className="text-white hover:text-violet-400 w-full py-3">
//                   <MessageCircle className="mx-auto w-6 h-6"/>
//                 {/* <img
//                   src={assets.Chat_Icons}
//                   alt="Settings"
//                   className="mx-auto w-6 h-6"
//                 /> */}
//               </button>
//                <button onClick={()=> navigate('/settings/profile')} className="text-white hover:text-violet-400 w-full py-3">
//                 <Settings className="mx-auto w-6 h-6"/>
//                 {/* <img
//                   src={assets.Settings_Icon}
//                   alt="Settings"
//                   className="mx-auto w-6 h-6"
//                 /> */}
//               </button>
//             </div>
//     </div>
//   )
// }

// export default BottomNavs