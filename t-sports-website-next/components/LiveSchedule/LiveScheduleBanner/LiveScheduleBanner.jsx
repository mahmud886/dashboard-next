
import liveScheduleBannerImg from '../../../assets/images/live-schedule-banner.png'

const LiveScheduleBanner = () => {
  return (
    <div className="live-schedule relative">
        <img src={liveScheduleBannerImg} alt="live-schedule-banner" className="w-full" />
        <div className="live-schedule-banner-text absolute inset-0 flex items-center justify-center text-center">
            <p className="text-white font-semibold text-[22px] md:text-[69px] font-archivo">টি স্পোর্টসে খেলার <br /> সময়সূচি</p>
        </div>
    </div>
  )
}

export default LiveScheduleBanner
