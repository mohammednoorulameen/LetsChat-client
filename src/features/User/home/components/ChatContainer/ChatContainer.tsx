import React, { useEffect, useRef } from "react";
import assets, { messagesDummyData } from "../../../../../assets/assets";
import { formatMassageTime, formatMassageDate } from "../../../../../lib/utils";
import { motion } from "framer-motion";
import { PhoneCall, Video } from "lucide-react";
import type { UserType,User,Message } from '../../home_types'

// ---------- Type Declarations ----------


interface ChatContainerProps {
  selectedUser: User | null;
  setSelectedUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  setShowRightSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

// ---------- Component ----------

const ChatContainer: React.FC<ChatContainerProps> = ({
  selectedUser,
  setSelectedUser,
  setShowRightSidebar,
}) => {
  const scrollEnd = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollEnd.current) {
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedUser]);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      {/* Header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img
          src={assets.profile_martin}
          onClick={() => setShowRightSidebar((prev) => !prev)}
          alt="profile"
          className="w-8 rounded-full cursor-pointer"
        />

        <div
          className="flex-1 text-lg text-white flex items-center gap-2 cursor-pointer"
          onClick={() => setShowRightSidebar((prev) => !prev)}
        >
          {selectedUser.fullName}
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        </div>

        <button className="flex items-center gap-1 px-1 py-1 text-white rounded-full hover:bg-green-700 transition">
          <PhoneCall size={18} />
        </button>

        <button className="flex items-center gap-2 px-4 py-2 text-white rounded-full hover:bg-green-700 transition">
          <Video size={18} />
        </button>

        <img
          src={assets.help_icon}
          alt="icon"
          className="max-md:hidden max-w-5 cursor-pointer"
        />
        <img
          onClick={() => setSelectedUser(null)}
          src={assets.arrow_icon}
          alt="icon"
          className="md:hidden max-w-7 cursor-pointer"
        />
      </div>

      {/* Chat Area */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
        className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6"
      >
        {messagesDummyData.map((msg: Message, index: number) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== "680f50e4f10f3cd28382ecf9" && "flex-row-reverse"
            }`}
          >
            <div className="w-full flex justify-center mb-2">
              <p className="bg-gray-600/30 text-gray-300 text-xs px-3 py-1 rounded-full">
                {formatMassageDate(msg.createdAt)}
              </p>
            </div>

            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}

            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === "680f50e4f10f3cd28382ecf9"
                    ? assets.avatar_icon
                    : assets.profile_martin
                }
                alt="icon"
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">
                {formatMassageTime(msg.createdAt)}
              </p>
            </div>
          </div>
        ))}
        <div ref={scrollEnd}></div>
      </motion.div>

      {/* Input Area */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center gap-2 bg-gray-100/12 px-3 rounded-full">
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-white placeholder-gray-400"
          />
          <input
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            hidden
          />
          <label htmlFor="image">
            <img
              src={assets.gallery_icon}
              alt="gallery icon"
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img
          src={assets.send_button}
          alt="send button"
          className="w-7 cursor-pointer"
        />
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <h1 className="text-2xl font-extrabold bg-gradient-to-r from-purple-500 to-violet-700 text-transparent bg-clip-text">
        Letschat
      </h1>
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;


