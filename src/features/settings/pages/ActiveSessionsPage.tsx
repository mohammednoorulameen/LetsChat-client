
import React from "react";
import type{ SessionSection } from '../settings_types'

const activeSessionsData:SessionSection[] = [
  {
    section: "Active Sessions",
    items: [
      {
        label: "This Device",
        device: "MacBook Pro 2020",
        location: "New York, USA",
        lastActive: "Active now",
        current: true,
      },
      {
        label: "iPhone 12",
        device: "iPhone 12",
        location: "San Francisco, USA",
        lastActive: "2 hours ago",
        current: false,
      },
      {
        label: "Windows PC",
        device: "Windows 10 Desktop",
        location: "London, UK",
        lastActive: "Yesterday",
        current: false,
      },
    ],
  },
];

const ActiveSessionsPage:React.FC = () => {
  return (
    <div className="min-h-screen py-6 px-4 text-white flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold mb-4">Active Sessions</h2>

        {activeSessionsData.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              {section.section}
            </h3>
            <div className="bg-black rounded-md shadow divide-y divide-gray-700">
              {section.items.map((session, index) => (
                <div
                  key={index}
                  className={`flex flex-col py-3 px-4 hover:bg-[#1e2530] transition rounded-sm ${
                    session.current ? "bg-[#2a2f42]" : ""
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-sm">{session.label}</span>{" "}
                      <span className="text-gray-400 text-xs ml-1">
                        ({session.device})
                      </span>
                    </div>
                    {session.current && (
                      <span className="text-xs bg-blue-600 rounded px-2 py-0.5">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between text-gray-400 text-xs mt-1">
                    <span>{session.location}</span>
                    <span>{session.lastActive}</span>
                  </div>
                  {!session.current && (
                    <button
                      className="self-end mt-2 text-red-500 text-xs hover:underline"
                      onClick={() => alert(`Logging out from ${session.device}`)}
                    >
                      Log out
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveSessionsPage;
