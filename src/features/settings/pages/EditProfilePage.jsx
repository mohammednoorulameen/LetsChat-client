import React, { useState } from "react";

const editProfileData = [
  {
    section: "Profile Picture",
    items: [
      { label: "Upload New Picture", type: "file", value: "" },
    ],
  },
  {
    section: "Profile Info",
    items: [
      { label: "Full Name", type: "input", value: "John Doe" },
      { label: "Email Address", type: "input", value: "john.doe@example.com" },
      { label: "Phone Number", type: "input", value: "+1234567890" },
    ],
  },
  {
    section: "Privacy",
    items: [
      { label: "Show Online Status", type: "toggle", value: true },
      { label: "Share Profile Picture", type: "toggle", value: false },
    ],
  },
];

const EditProfilePage = () => {
  const [formState, setFormState] = useState(() => {
    const state = {};
    editProfileData.forEach((section) => {
      section.items.forEach((item) => {
        state[item.label] = item.value;
      });
    });
    return state;
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleInputChange = (label, value) => {
    if (label === "Upload New Picture" && value instanceof File) {
      setPreviewImage(URL.createObjectURL(value));
    }
    setFormState((prev) => ({ ...prev, [label]: value }));
  };

  return (
    <div className="min-h-screen py-6 px-4 text-white flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

        {editProfileData.map((section, idx) => (
          <div key={idx} className="space-y-2">
            <h3 className="text-xs font-semibold text-gray-400 uppercase">
              {section.section}
            </h3>
            <div className="bg-black rounded-md">
              <div className="bg-[#8185B2]/10 rounded-md shadow p-4 divide-y divide-gray-700">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row md:justify-between md:items-center py-3 px-2 hover:bg-[#1e2530] rounded-sm transition space-y-2 md:space-y-0"
                  >
                    <label className="text-sm md:w-1/3">{item.label}</label>

                    {item.type === "toggle" ? (
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formState[item.label]}
                          onChange={(e) =>
                            handleInputChange(item.label, e.target.checked)
                          }
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-gray-600 rounded-full peer peer-checked:bg-blue-600 transition-all duration-200" />
                        <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-200 peer-checked:translate-x-full" />
                      </label>
                    ) : item.type === "input" ? (
                      <input
                        type="text"
                        value={formState[item.label]}
                        onChange={(e) =>
                          handleInputChange(item.label, e.target.value)
                        }
                        className="w-full md:w-2/3 bg-transparent border border-gray-600 rounded-md px-2 py-1 text-white focus:outline-none focus:border-blue-500"
                      />
                    ) : item.type === "file" ? (
                      <div className="flex flex-col space-y-2 md:w-2/3">
                        {previewImage && (
                          <img
                            src={previewImage}
                            alt="Preview"
                            className="w-20 h-20 rounded-full object-cover border border-gray-500"
                          />
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleInputChange(item.label, e.target.files[0])
                          }
                          className="text-sm text-gray-400 file:bg-gray-700 file:border-none file:rounded file:px-3 file:py-1 file:text-white cursor-pointer"
                        />
                      </div>
                    ) : (
                      <span className="text-gray-400 text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-end pt-4">
          <button
            onClick={() => alert("Profile saved!")}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
