'use client'
import React, {useState} from 'react';
import Image from "next/image";
import UserProfileForm from "@/components/UserProfileForm";

const UserProfile = () => {
    const [showUpdate, setShowUpdate] = useState(false)

    return (
        <div>
            <div className="container">
                <button
                    className="w-[200px] mt-4 text-2xl text-black bg-transparent dark:text-white hover:bg-white hover:bg-opacity-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path
                            d="M12 2L1 21h22L12 2zm0 5v3.5h-3v2h3V17h-3v2h3.5c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5h-3z"/>
                    </svg>
                    User Profile
                </button>
            </div>
            <UserProfileForm/>

        </div>
    );
};

export default UserProfile;