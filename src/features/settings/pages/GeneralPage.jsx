import React from "react";

const settingsData = [
  {
    section: "Power Saving",
    items: [{ label: "Power Saving Mode", type: "nav", value: "Disabled" }],
  },
  {
    section: "Spelling and Grammar",
    items: [
      { label: "Check Spelling While Typing", type: "toggle", value: false },
      { label: "Check Grammar With Spelling", type: "toggle", value: false },
      { label: "Correct Spelling Automatically", type: "toggle", value: false },
    ],
  },
  {
    section: "Emoji",
    items: [
      { label: "Show Sticker Sidebar", type: "toggle", value: false },
      { label: "Replace Emoji Automatically", type: "toggle", value: true },
      { label: "Large Emoji", type: "toggle", value: true },
    ],
  },
  {
    section: "Interface",
    items: [
      { label: "Show Calls Tab", type: "toggle", value: true },
      { label: "Show Icon in Menu Bar", type: "toggle", value: true },
      { label: "Preview Chats", type: "toggle", value: false },
    ],
  },
  {
    section: "Shortcuts",
    items: [{ label: "Keyboard Shortcuts", type: "info", value: "⌘ + ?" }],
  },
];

const GeneralPage = () => {
  return (
    <div className="min-h-screen py-6 px-4 text-white flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        {" "}
        {/* reduced width */}
        <h2 className="text-2xl font-bold mb-4">General Settings</h2>
        
        {settingsData.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              {section.section}
            </h3>
            <div className="bg-black rounded-md">
              <div className="bg-[#8185B2]/10 rounded-md shadow p-2 divide-y divide-gray-700">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 px-2 hover:bg-[#1e2530] rounded-sm transition"
                  >
                    <span className="text-sm">{item.label}</span>

                    {item.type === "toggle" ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          defaultChecked={item.value}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200" />
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-200 peer-checked:translate-x-full" />
                      </label>
                    ) : item.type === "nav" ? (
                      <span className="text-gray-400 text-sm">
                        {item.value} &rsaquo;
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm">
                        {item.value}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralPage;
