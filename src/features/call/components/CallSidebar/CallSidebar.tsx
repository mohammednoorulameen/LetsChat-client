// CallSidebar.tsx

import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaPlus, FaSearch } from "react-icons/fa";
import BottomNavs from "../../../../components/common/Layouts/BottomNavs";

interface CallSidebarProps {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallItems = [
  { name: "Incoming Calls", icon: FaUser, path: "/calls/defaultPage" },
  { name: "Incoming Calls", icon: FaUser, path: "/calls/incoming" },
  { name: "Outgoing Calls", icon: FaUser, path: "/calls/outgoing" },
];

const CallSidebar: React.FC<CallSidebarProps> = ({ showSidebar, setShowSidebar }) => {
  return (
    <aside
      className={`bg-[#8185B2]/10 shadow-md min-h-screen w-full flex flex-col ${
        showSidebar ? "max-md:hidden" : ""
      }`}
    >
      {/* Sidebar Heading */}
      <div className="flex items-center justify-between px-6 py-4">
        <h2 className="text-2xl font-semibold text-white">Call History</h2>

        {/* Create Call Icon */}
        <button
          className="p-2 bg-[#282142] text-white rounded-full hover:bg-[#3b3265] transition"
          title="Create Call"
        >
          <FaPlus />
        </button>
      </div>

      {/* Search Input */}
      <div className="px-4">
        <div className="flex items-center bg-[#282142] text-white rounded-full px-4 py-2">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search calls..."
            className="bg-transparent outline-none flex-1 text-white placeholder-gray-400"
          />
        </div>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-2 mt-4 px-4">
        {CallItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            onClick={() => setShowSidebar(false)}
            to={path}
            key={name}
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-2 text-white rounded-full hover:bg-[#282142] transition ${
                isActive ? "bg-[#282142] font-semibold" : ""
              }`
            }
          >
            <Icon className="text-lg" />
            <span>{name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Bottom Navigation */}
      <div className="mt-auto ">
        <BottomNavs />
      </div>
    </aside>
  );
};

export default CallSidebar;
