// DefaultPage.tsx

import React from 'react';
import { FaPhoneAlt, FaVideo, FaCommentDots } from "react-icons/fa";

const DefaultPage: React.FC = () => {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center">
        {/* <div className="min-h-screen flex items-center justify-center bg-[#0f0f1a]"> */}
        <div className="flex gap-12">
          {/* Phone Call - Round */}
          <button className="bg-[#1f2937] p-5 rounded-lg shadow-md hover:bg-[#374151] transition duration-300">
            <FaPhoneAlt className="text-[#10B981] text-2xl" />
          </button>

          {/* Video Call - Box shape with small curve */}
          <button className="bg-[#1f2937] px-6 py-5 rounded-lg shadow-md hover:bg-[#374151] transition duration-300">
            <FaVideo className="text-[#3B82F6] text-2xl" />
          </button>

          {/* Message - Round */}
          <button className="bg-[#1f2937] p-5 rounded-lg shadow-md hover:bg-[#374151] transition duration-300">
            <FaCommentDots className="text-[#8B5CF6] text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
