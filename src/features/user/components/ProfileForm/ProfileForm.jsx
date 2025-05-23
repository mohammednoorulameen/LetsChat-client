import React, { useState } from "react";
import assets from "../../../../assets/assets";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const [selectedImage, setselectedImage] = useState(null);
  const navigate = useNavigate();
  const [name, setName] = useState("martin jhonson");
  const [bio, setBio] = useState("hello i am a software engineer");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div>
        <form onSubmit={handleSubmit} action="" className="flex flex-col gap-5 p-10 flex-1">
                  <h3>Profile Detailes</h3>
                  <label htmlFor="avatar"  className="flex item-center gap-3 cursor-pointer">
        
                  <input onChange={(e)=> {setselectedImage(e.target.files[0])}} type="file" name="" id="avatar" accept=".png, .jpg, .jpeg" hidden/>
                  <img src={selectedImage ? URL.createObjectURL( selectedImage) : assets.avatar_icon} alt=""
                    className={`w-12 h-12 ${selectedImage && 'rounded-full'}`}/>
                  Change Profile Picture
                    </label>
        
                    <input
                    onChange={(e) => setName(e.target.value)} value={name}
                     type="text"  placeholder="your name" className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-violet-500"/>
                    <textarea 
                    onChange={(e) => setBio(e.target.value)} value={bio}
                    placeholder="write profile bio" className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 
                    focus:ring-violet-500" rows={4} name="" id=""></textarea>
                    <button type="submit" className="bg-gradient-to-r from-purple-400 to-violet-600 text-white p-2 rounded-full text-lg cursor-pointer">Save</button>
                </form>
    </div>
  )
}

export default ProfileForm