
import facebookIcon from "../../../assets/images/news/gallary/icons/facebook.png";
import twitterIcon from "../../../assets/images/news/gallary/icons/insta.png";
import plusIcon from "../../../assets/images/news/gallary/icons/plus.png";
import minusIcon from "../../../assets/images/news/gallary/icons/minus.png";
import shareIcon from "../../../assets/images/news/gallary/icons/share.png";



import {useState} from "react";
import ShareContent from "../../Modals/ShareContent/ShareContent.jsx";

const SocialShare = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  return (
    <div className="flex justify-center items-center gap-6 relative">
      <a href="#"><img src={facebookIcon} alt="Facebook"/></a>
      <a href="#"><img src={twitterIcon} alt="Twitter"/></a>
      <button onClick={togglePopup}>
        <img src={shareIcon} alt="Share"/>
      </button>
      <a href="#"><img src={plusIcon} alt="Plus"/></a>
      <a href="#"><img src={minusIcon} alt="Minus"/></a>

      {isPopupVisible && (
        <ShareContent/>
      )}
    </div>
  );
};

export default SocialShare;