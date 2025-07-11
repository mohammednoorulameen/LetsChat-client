// SettingsLayout.tsx

import React, { useState } from "react";
// import { ArrowLeft } from "lucide-react";
import { Outlet } from "react-router-dom";
import CallSidebar from "../components/CallSidebar/CallSidebar";

const SettingsLayout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <div className=" w-full h-screen sm:px-[-1%] sm:py-[-1%]">
      <div
        // className="h-full w-full grid 
        // grid-cols-1 md:grid-cols-[0.8fr_2.5fr] 
        // border-2 border-gray-600 rounded-2xl overflow-hidden relative"
         className="h-full w-full grid 
        grid-cols-1 md:grid-cols-[0.8fr_2.5fr] 
         overflow-hidden relative"
      >
        {/* <button onClick={() => navigate('/settings')}>
            <ArrowLeft className="text-white" />
          </button> */}

        {/* Sidebar */}
        <CallSidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />

        {/* Right Content */}
        <main className="p-6 overflow-y-auto bg-white/10">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default SettingsLayout;
