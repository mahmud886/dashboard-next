
import facebookIcon from "../../assets/images/facebook.png";
import twitterIcon from "../../assets/images/twitter.png";
import instaIcon from "../../assets/images/instagram.png";
import youtubeIcon from "../../assets/images/youtube.png";
import googleIcon from "../../assets/images/gnews.png";

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center gap-6'>
      <a href=""><img className='w-[50px]' src={facebookIcon} alt=""/></a>
      <a href=""><img className='w-[50px]' src={twitterIcon} alt=""/></a>
      <a href=""><img className='w-[50px]' src={instaIcon} alt=""/></a>
      <a href=""><img className='w-[50px]' src={youtubeIcon} alt=""/></a>
      <a href=""><img className='w-[50px]' src={googleIcon} alt=""/></a>
    </div>
  );
};

export default SocialIcons;