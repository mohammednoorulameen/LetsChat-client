import React, { useState } from "react";
import assets, { imagesDummyData } from "../../../../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

interface RightSidebarProps {
  selectedUser: any; // Changed from boolean to `any` because you’re using `selectedUser.fullName`, `selectedUser.bio`, etc.
setSelectedUser: React.Dispatch<React.SetStateAction<any>>;
  onClose: () => void;
}



const RightSidebar:React.FC <RightSidebarProps>= ({ selectedUser,setSelectedUser, onClose }) => {
  return (
    selectedUser && (
      // <div
      //   className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${
      //     selectedUser ? "max-md:hidden" : ""
      //   }`}
      // >

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-full md:w-[25rem] bg-black text-white z-50 overflow-y-auto"
        // className="fixed top-0 right-0 h-full w-full md:w-[25rem] bg-[#8185B2]/10 text-white z-50 overflow-y-auto"
      >
        {/* Close Button */}
        

         <img
          onClick={onClose}
          src={assets.arrow_icon}
          alt="icon"
          className=" max-w-7 absolute top-4 right-4 text-white  hover:cursor-pointer  p-1"
        />

        {/* Profile section  */}

        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light  mx-auto">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt="icon"
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
            <p className="w-2 h-2 rounded-full bg-green-500"></p>
            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto">{selectedUser.bio}</p>
        </div>

        <hr className="border-[#ffffff50] my-4" />

        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {imagesDummyData.map((url, index) => (
              <div
                key={index}
                onClick={() => window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} alt="image" className="h-full rounded-md" />
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2
           bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none
         text-sm font-light py-2 px-20 rounded-full cursor-pointer "
        >
          Logout
        </button>
        {/* </div> */}
      </motion.div>
    )
  );
};

export default RightSidebar;
