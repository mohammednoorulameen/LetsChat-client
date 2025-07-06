import React from "react";
import { User, PhoneCall, MessageCircle, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BottomNavs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="h-full flex flex-col text-white">
      {/* Bottom Navigation */}
      <div className="mt-auto bg-[#282142]/40 grid grid-cols-4 gap-0">
        <button className="py-3 hover:text-violet-400 transition-colors">
          <User className="mx-auto w-6 h-6" />
        </button>

        <button
          onClick={() => navigate("/calls")}
          className="py-3 hover:text-violet-400 transition-colors"
        >
          <PhoneCall className="mx-auto w-6 h-6" />
        </button>

        <button
          onClick={() => navigate("/")}
          className="py-3 hover:text-violet-400 transition-colors"
        >
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
