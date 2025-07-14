import React from "react";
import assets, { userDummyData } from "../../../../../assets/assets";
import { useNavigate } from "react-router-dom";
import BottomNavs from "../../../../../components/common/Layouts/BottomNavs";
import type{ UserType } from '../../home_types'
// import { User, PhoneCall, MessageCircle, Settings } from "lucide-react";

interface SidebarProps {
  selectedUser: UserType | null;
  setSelectedUser: (user: UserType | null) => void;
}


const Sidebar: React.FC<SidebarProps> = ({ selectedUser, setSelectedUser }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`bg-[#8185B2]/10 h-full  flex flex-col text-white ${
        selectedUser ? "max-md:hidden" : ""
      }`}
    >

      
      <div className="p-5 rounded-r-xl">
        {/* Header and Search */}
        <div className="pb-5">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-violet-700 text-transparent bg-clip-text">
              Letschat
            </h1>
            <div className="relative py-2 group">
              <img
                src={assets.menu_icon}
                alt="menu icon"
                className="max-h-5 cursor-pointer"
              />
              <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block">
                <p
                  onClick={() => navigate("/profile")}
                  className="cursor-pointer text-sm"
                >
                  Edit Profile
                </p>
                <hr className="my-2 border-t border-gray-500" />
                <p className="cursor-pointer text-sm">Logout</p>
              </div>
            </div>
          </div>

          <div className="bg-[#282142] rounded-full flex items-center gap-2 py-3 px-4 mt-5">
            <img src={assets.search_icon} alt="search" className="w-3" />
            <input
              type="text"
              className="bg-transparent border-none outline-none text-white text-xs placeholder-[#c8c8c8] flex-1"
              placeholder="search users"
            />
          </div>
        </div>

        {/* Scrollable User List */}
        <div className="flex flex-col overflow-y-auto max-h-[calc(100vh-250px)] pr-1">
          {userDummyData.map((user, index) => (
            <div
              onClick={() => setSelectedUser(user)}
              key={index}
              className={`relative flex items-center gap-2 p-2 pl-4 rounded cursor-pointer ${
                selectedUser?._id === user._id ? "bg-[#282142]/50" : ""
              }`}
            >
              <img
                src={user?.profilePic || assets.avatar_icon}
                alt="loading"
                className="w-[35px] aspect-[1/1] rounded-full"
              />
              <div className="flex flex-col leading-4">
                <p>{user.fullName}</p>
                {index < 3 ? (
                  <span className="text-green-400">Online</span>
                ) : (
                  <span className="text-neutral-400">Offline</span>
                )}
              </div>
              {index > 2 && (
                <p className="absolute top-4 right-4 text-xs h-5 w-5 flex justify-center items-center rounded-full bg-violet-500/50">
                  {index}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation Icons */}
     <BottomNavs/>
    </div>
  );
};

export default Sidebar;
