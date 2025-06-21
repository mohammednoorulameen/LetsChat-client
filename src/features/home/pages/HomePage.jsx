import Sidebar from "../components/Sidebar/Sidebar";
import ChatContainer from "../components/ChatContainer/ChatContainer";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HomePage = () => {
  const [selectedUser, setSelectedUser] = useState(false);
  const [showRightSidebar, setShowRightSidebar] = useState(false);

  return (
    <div className="border w-full h-screen sm:px-[-1%] sm:py-[-1%]">
      <div
        className={`backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden
    h-[100%] grid grid-cols-1 relative
    ${
      selectedUser
        ? showRightSidebar
          ? "md:grid-cols-[0.8fr_1.5fr_1fr]" // Show all three page
          : "md:grid-cols-[0.8fr_2.5fr]" // Only sidebar and  chat
        : "md:grid-cols-2"
    }
  `}
      >
        {/* left sidebar */}
        <Sidebar
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
        />

        {/* chat container */}

        <AnimatePresence>
          <ChatContainer
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setShowRightSidebar={setShowRightSidebar}
          />
        </AnimatePresence>

        {/* right sidebar */}

        <AnimatePresence>
          {showRightSidebar && (
            <RightSidebar
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
              onClose={() => setShowRightSidebar(false)}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomePage;
