import Sidebar from "../components/Sidebar/Sidebar";
import ChatContainer from "../components/ChatContainer/ChatContainer";
import RightSidebar from "../components/RightSidebar/RightSidebar";
import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { UserType } from "../home_types";

const HomePage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [showRightSidebar, setShowRightSidebar] = useState<boolean>(false);

  const [isDragging, setIsDragging] = useState<"left" | "right" | null>(null);
  const [leftWidth, setLeftWidth] = useState<number>(430);
  const [rightWidth, setRightWidth] = useState<number>(300);
  const startXRef = useRef<number>(0);
  const startWidthRef = useRef<number>(0);

  const handleMouseDown = (e: React.MouseEvent, type: "left" | "right") => {
    setIsDragging(type);
    startXRef.current = e.clientX;
    startWidthRef.current = type === "left" ? leftWidth : rightWidth;
  };

  

  const handleMouseMove = useCallback(
  (e: MouseEvent) => {
    if (!isDragging) return;
    const delta = e.clientX - startXRef.current;

    if (isDragging === "left") {
      const newWidth = startWidthRef.current + delta;
      const clamped = Math.min(Math.max(newWidth, 440), 900); // Clamp between 240 and 600
      setLeftWidth(clamped);
    } else {
      const newWidth = startWidthRef.current - delta;
      const clamped = Math.min(Math.max(newWidth, 240), 700); // Clamp between 240 and 500
      setRightWidth(clamped);
    }
  },
  [isDragging]
);


  const handleMouseUp = useCallback(() => {
    setIsDragging(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    // <div className="border w-full h-screen sm:px-[-1%] sm:py-[-1%]">
    <div
  className={`border w-full h-screen sm:px-[-1%] sm:py-[-1%] ${
    isDragging ? "select-none" : ""
  }`}
>
      <div
        className={`backdrop-blur-xl overflow-hidden h-[100%] grid grid-cols-1 relative
          ${
            selectedUser
              ? showRightSidebar
                ? "md:grid-cols-[0.8fr_1.5fr_1fr]" // Show all three
                : "md:grid-cols-[0.8fr_2.5fr]"    // Sidebar + chat
              : "md:grid-cols-2"
          }
        `}
      >
        {/* Left Sidebar */}
        <div className="relative" style={{ width: selectedUser ? leftWidth : "100%" }}>
          <Sidebar
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
          {/* Drag handle */}
          {selectedUser && (
            <div
              onMouseDown={(e) => handleMouseDown(e, "left")}
              className="absolute top-0 right-0 w-1 h-full cursor-col-resize z-50"
            />
          )}
        </div>

        {/* Chat Container */}
        <AnimatePresence>
          <ChatContainer
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
            setShowRightSidebar={setShowRightSidebar}
          />
        </AnimatePresence>

        {/* Right Sidebar */}
        <AnimatePresence>
          {showRightSidebar && (
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: rightWidth }}
              exit={{ width: 0 }}
              transition={{ duration: 0.2 }}
              // className="relative h-full overflow-hidden border-l border-gray-600"
            >
              <RightSidebar
                selectedUser={selectedUser}
                setSelectedUser={setSelectedUser}
                onClose={() => setShowRightSidebar(false)}
              />

            </motion.div>
          )}
        </AnimatePresence>
       
      </div>
    </div>
  );
};

export default HomePage;


