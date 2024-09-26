import SocialIcons from "../SocialIcons/SocialIcons.jsx";
import GooglePlay from '../../assets/images/news/gallary/google-play.png'
import AppleStore from '../../assets/images/news/gallary/apple-store.png'


const FollowAndDownloadApp = () => {
  return (
    <div className='container pb-[60px] '>
      <div className='md:flex md:justify-between items-center border-y-2 border-tsGrey py-[50px]'>

        <div className='text-center'>
          <h5 className='text-[24px] font-bengali2 font-semibold pb-4'>ফলো করুন</h5>
          <SocialIcons />
        </div>

        <div className='text-center mt-8 md:mt-0'>
          <h5 className='text-[24px] font-bengali2 font-semibold pb-4'>লাইভ খেলা দেখতে টি স্পোর্টস <br/>মোবাইল অ্যাপ্স ডাউনলোড করুন</h5>
          <div className='flex justify-center items-center gap-6'>
            <a href=""><img src={GooglePlay} className='w-full' alt=""/></a>
            <a href=""><img src={AppleStore} className='w-full' alt=""/></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowAndDownloadApp;