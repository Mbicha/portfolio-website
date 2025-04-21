import React from "react";
import profile from "../assets/images/profile.png"
import PButton from "./PButton";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const handleEditProfile = () => {
        navigate(`/signup/`);     
    }

    const handleAddProject = () => {
        navigate(`/add-project/`);
    }

    const handleLogout = () => {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userId');
        navigate(`/`);
    }

    return(
        <>
            <div className="flex flex-col justify-start p-4 bg-white w-full">
                <div className="flex flex-row justify-center mb-2 p-1 w-full">
                    <img src={profile}  alt="Profile" height={96} width={96} className="rounded-full"/>
                </div>

                {/* Actions */}
                <div className="flex flex-col shadow-md border p-3 justify-center w-full gap-1">
                    <PButton onClick={handleEditProfile} value="Edit Profile" />
                    <PButton onClick={handleAddProject} value="Add Project" />
                    <PButton onClick={handleLogout} value="Logout" />
                </div>
            </div>
        </>
    )
}

export default Profile;
