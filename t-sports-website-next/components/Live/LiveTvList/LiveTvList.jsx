import LiveTv1 from '../../../assets/images/live/LiveTv1.png'
import LiveTv2 from '../../../assets/images/live/LiveTv2.png'
import LiveTv3 from '../../../assets/images/live/LiveTv3.png'

const LiveTvList = () => {
  return (
    <div className='container py-[80px]'>

      <div className='md:flex justify-center items-center gap-16'>
        <div className='mb-4 md:mb-0'>
          <img src={LiveTv1} alt="Live tv 1"/>
          <div className='pt-3'>
            <h1 className='text-[35px] font-archivo font-semibold text-tsBlack capitalize'>tsports Live 1</h1>
            <p className='text-[20px] font-archivo font-normal text-tsLightGrey'>Live TV</p>
          </div>
        </div>
        <div className='mb-4 md:mb-0'>
          <img src={LiveTv2} alt="Live tv 2"/>
          <div className='pt-3'>
            <h1 className='text-[35px] font-archivo font-semibold text-tsBlack capitalize'>tsports Live 2</h1>
            <p className='text-[20px] font-archivo font-normal text-tsLightGrey'>Bangladesh Premier League 2024</p>
          </div>
        </div>
        <div className='mb-4 md:mb-0'>
          <img src={LiveTv3} alt="Live tv 3"/>
          <div className='pt-3'>
            <h1 className='text-[35px] font-archivo font-semibold text-tsBlack capitalize'>tsports Live 3</h1>
            <p className='text-[20px] font-archivo font-normal text-tsLightGrey'>Big Bash League 2023-24</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default LiveTvList;