import Player from '../../../assets/images/player/player.png'
import RadiantPlayer from '../../RadiantPlayer';

const VideoPlayer = () => {
  return (
    <div className=''>
      <div className='mt-[20px] md:mt-[10px]'>
        {/* <img className='w-full' src={Player} alt="Video player"/> */}
        <RadiantPlayer/>
      </div>
      <div className="py-[20px] md:py-[40px]">
        <h5 className='text-[16px] md:text-[25px] font-normal font-archivo text-tsLightGrey'>ICC Mens cricket world cup India 2023</h5>
        <h1 className='my-[10px] md:my-[20px] text-[34px] md:text-[74px] leading-[24px] md:leading-[72px] font-bold font-bebas text-tsBlack capitalize'>kNOCK OUT : nZ VS BAN Match Highlights</h1>
        <p className='text-[14px] md:text-[22px] font-normal font-archivo text-tsLightGrey pb-4'>19 Oct, 2023</p>
        <div className='shadow-md rounded-xl p-4 md:p-8'>
          <p className='text-[14px] md:text-[18px] font-normal font-archivo text-tsLightGrey line-clamp-2 hover:line-clamp-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable, If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;