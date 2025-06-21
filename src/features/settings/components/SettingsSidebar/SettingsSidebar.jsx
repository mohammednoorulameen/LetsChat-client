import React from "react";
import { Link, NavLink } from "react-router-dom";
import BottomNavs from "../../../../Components/common/Layouts/BottomNavs";
import {
  FaUser,
  FaLock,
  FaBell,
  FaCogs,
  FaGlobe,
  FaDatabase,
  FaDesktop,
} from "react-icons/fa"; // Importing required icons

const settingsItems = [
  { name: "Profile", icon: FaUser, path: "/settings/profile" },
  {
    name: "Pravacy & Security",
    icon: FaLock,
    path: "/settings/security&privacy",
  },
  { name: "Notifications", icon: FaBell, path: "/settings/notifications" },
  { name: "General", icon: FaCogs, path: "/settings/general" },
  { name: "Language", icon: FaGlobe, path: "/settings/language" },
  { name: "Data & Storage", icon: FaDatabase, path: "/settings/data&storage" },
  {
    name: "Active Sessions",
    icon: FaDesktop,
    path: "/settings/activesessions",
  },
];

const SettingsSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <aside
      className={`bg-[#8185B2]/10 shadow-md  min-h-screen w-full flex flex-col ${
        showSidebar ? "max-md:hidden" : ""
      }`}
    >
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-white text-center py-4">
        Settings
      </h2>

      {/* profile section */}

      <Link to="editprofile">
        <div className="px-4 pb-4 flex items-center gap-4 ml-6 mt-2 ">
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/60" // Replace with real user image
            alt="User"
            className="w-17 h-17 rounded-full border-2 border-white"
          />

          {/* Name and Email */}
          <div className="flex flex-col">
            <span className="text-white font-semibold">John Doe</span>
            <span className="text-gray-300 text-sm">john.doe@example.com</span>
          </div>
        </div>
      </Link>
      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-2 mt-3 px-4 ">
        {" "}
        {/* Add horizontal padding */}
        {settingsItems.map(({ name, icon: Icon, path }) => (
          <NavLink
            onClick={() => setShowSidebar(name)}
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
      <div className="mt-auto  pb-2">
        <BottomNavs />
      </div>
    </aside>
  );
};

export default SettingsSidebar;
