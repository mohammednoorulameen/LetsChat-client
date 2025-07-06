
import React from "react";
import type{ ProfileSection } from '../settings_types'
// 🔷 Profile data with type
const profileData: ProfileSection[] = [
  {
    section: "User Info",
    items: [
      { label: "Username", type: "info", value: "noorulameen" },
      { label: "Email", type: "info", value: "noor@example.com" },
      { label: "Phone Number", type: "info", value: "+1 234 567 890" },
    ],
  },
  {
    section: "Privacy",
    items: [
      { label: "Show Profile Picture", type: "toggle", value: true },
      { label: "Show Last Seen", type: "toggle", value: false },
      { label: "Read Receipts", type: "toggle", value: true },
    ],
  },
  {
    section: "Notifications",
    items: [
      { label: "Email Notifications", type: "toggle", value: true },
      { label: "Push Notifications", type: "toggle", value: true },
      { label: "Do Not Disturb", type: "toggle", value: false },
    ],
  },
  {
    section: "Account",
    items: [
      { label: "Change Password", type: "nav", value: "" },
      { label: "Two-Factor Authentication", type: "nav", value: "Disabled" },
      { label: "Delete Account", type: "nav", value: "" },
    ],
  },
];

const SettingsProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 px-4 text-white flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold mb-4">Profile Settings</h2>

        {profileData.map((section, idx) => (
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
                      <span className="text-gray-400 text-sm">{item.value}</span>
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

export default SettingsProfilePage;
