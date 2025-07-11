import React from "react";
import type{ DataStorageSection } from '../settings_types'



// 🔷 Data with types
const dataStorageData: DataStorageSection[] = [
  {
    section: "Storage Usage",
    items: [
      { label: "Storage Used", type: "info", value: "2.5 GB of 10 GB" },
      { label: "Manage Storage", type: "nav", value: "" },
    ],
  },
  {
    section: "Data Usage",
    items: [
      { label: "Use Less Data for Calls", type: "toggle", value: false },
      { label: "Auto-download Media", type: "toggle", value: true },
      { label: "Media Auto-download Settings", type: "nav", value: "" },
    ],
  },
  {
    section: "Backup",
    items: [
      { label: "Backup Frequency", type: "nav", value: "Weekly" },
      { label: "Include Videos in Backup", type: "toggle", value: false },
      { label: "Backup Now", type: "nav", value: "" },
    ],
  },
];

const DataAndStoragePage: React.FC = () => {
  return (
    <div className="min-h-screen py-6 px-4 text-white flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold mb-4">Data and Storage Settings</h2>

        {dataStorageData.map((section, idx) => (
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

export default DataAndStoragePage;
