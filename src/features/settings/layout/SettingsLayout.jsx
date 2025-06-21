// import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
// import React, { useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Menu, ArrowLeft } from "lucide-react"; // optional: install lucide-react icons

// const SettingsLayout = () => {
//   const [showSidebar, setShowSidebar] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="w-full h-screen p-4">
//       <div className="h-full w-full grid md:grid-cols-[0.8fr_2.5fr] rounded-2xl overflow-hidden relative">

//         {/* Mobile Top Bar */}
//         <div className="md:hidden flex justify-between items-center mb-4">
//           <button onClick={() => setShowSidebar(true)}>
//             <Menu className="text-white" />
//           </button>
// <button onClick={() => navigate(-1)}>
//   <ArrowLeft className="text-white" />
// </button>
//         </div>

//         {/* Sidebar for Desktop */}
//         <div className="hidden md:block h-full">
//           <SettingsSidebar />
//         </div>

//         {/* Sidebar for Mobile (Drawer style) */}
//         {showSidebar && (
//           <div className="fixed top-0 left-0 w-64 h-full bg-black z-50 shadow-lg p-4 md:hidden">
//             <button onClick={() => setShowSidebar(false)} className="mb-4">
//               Close
//             </button>
//             <SettingsSidebar />
//           </div>
//         )}

//         {/* Right Content */}
//         <main className="p-6 overflow-y-auto bg-white/10 w-full">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   );
// };

// export default SettingsLayout;

import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Outlet } from "react-router-dom";

const SettingsLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    // <div className="w-full h-screen p-4">
    <div className=" border w-full h-screen sm:px-[-1%] sm:py-[-1%]">
      <div
        className="h-full w-full grid 
        grid-cols-1 md:grid-cols-[0.8fr_2.5fr] 
        border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative"
      >
        {/* <button onClick={() => navigate('/settings')}>
            <ArrowLeft className="text-white" />
          </button> */}

        {/* Sidebar */}
        <SettingsSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        {/* Right Content */}
        <main className="p-6 overflow-y-auto bg-white/10  ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
