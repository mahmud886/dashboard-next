import facebook from "../../../assets/images/social/social-popup/facebook.png";
import messenger from "../../../assets/images/social/social-popup/messenger.png";
import insta from "../../../assets/images/social/social-popup/instagram.png";
import twx from "../../../assets/images/social/social-popup/x.png";
import whatsapp from "../../../assets/images/social/social-popup/whatsapp.png";
import linked from "../../../assets/images/social/social-popup/linked.png";


const ShareContent = () => {
  return (
    <div
      className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 shadow-lg px-6 z-50 w-48 h-[170px] rounded-md">
      <h5 className='text-tsBlack text-[10px] font-normal py-3'>Share</h5>
      <div className="grid grid-cols-3 gap-3 justify-between items-center">
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={facebook}
                                                                             alt="Facebook"/></a>
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={messenger}
                                                                             alt="messenger"/></a>
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={insta}
                                                                             alt="insta"/></a>
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={twx}
                                                                             alt="x"/></a>
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={whatsapp}
                                                                             alt="whatsapp"/></a>
        <a href="#" className='inline-flex items-center justify-center'><img className='w-[30px]' src={linked}
                                                                             alt="linked"/></a>
      </div>
      <div className='mt-4'>
        <button
          className='inline-flex items-center justify-center w-full bg-[#D9D9D9] py-1 text-[10px] text-tsBlack rounded-sm'>Copy
          Link
        </button>
      </div>
    </div>
  );
};

export default ShareContent;