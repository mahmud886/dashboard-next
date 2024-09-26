
import Profile from "./Profile/Profile.jsx";
import ProfileEdit from "./ProfileEdit/ProfileEdit.jsx";
import SubscriptionCard from "./SubscriptionCard/SubscriptionCard.jsx";
import {useState} from "react";

const ProfileIndex = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className='container py-[80px]'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <h2 className='text-[28px] md:text-[40px] font-archivo font-semibold text-tsBlack pb-0 md:pb-8'>Profile</h2>
          {isEditing ? <ProfileEdit onCancel={handleCancel}/> : <Profile onEditClick={handleEditClick}/>}
        </div>
        <SubscriptionCard/>
      </div>
    </div>
  )
}

export default ProfileIndex;