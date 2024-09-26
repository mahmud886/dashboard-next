import React from 'react'
import liveScoreBannerImg from '../../../assets/images/live-score.png'
import BoradCastIcon from '../../../assets/images/broadcast-icon.png'
import LiveScoreFlagIcon from '../../../assets/images/flag.png'

const LiveScoreBanner = () => {
  return (
    <div className="Live-score-area pt-[80px]">
        <h1 className='font-archivo font-medium text-[25px] md:text-[58px] pb-11'>Live Cricket Score</h1>
        <div className='relative'>
            <img src={liveScoreBannerImg} alt="LiveScoreBanner" className='w-screen md:w-full h-screen md:h-full'/>
            <div className="live-score-banner-content mx-6 md:mx-24 my-14 absolute inset-y-1 md:w-[89%]">
                <div className="live-score-banner-content-top md:flex justify-between w-full">
                    <p className='font-archivo font-medium text-[16px] md:text-[34px] text-[#FAFAFA] mb-4 md:mb-0'><span>IND vs NED</span>,   3rd ODI, Kolkata, May 02,2024</p>
                    <button className='bg-red-700 text-[#FAFAFA] font-archivo font-normal text-[20px] md:text-[30px] flex gap-2 items-center py-[8px] md:py-[20px] px-[15px] md:px-[38px] rounded-full'>
                        <img src={BoradCastIcon} alt="BoradCastIcon" />
                        live
                    </button>
                </div>

                <div className="live-score-banner-content-middle md:flex justify-between w-full py-12">
                    <div className="flag-score">
                        <img src={LiveScoreFlagIcon} alt="LiveScoreFlagIcon"/>
                        <h1 className='font-archivo text-[#FAFAFA] font-semibold text-5xl pt-[52px]'>218/3 <span className='font-light'>(31.4)</span></h1>
                    </div>
                    <div className="live-score-over flex items-end gap-4">
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>6</span>
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>W</span>
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>0</span>
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>0</span>
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>1</span>
                        <span className='bg-[#D9D9D9] text-[#333333] font-archivo font-normal text-[20px] md:text-[30px] flex items-center justify-center w-[35px] md:w-[65px] h-[35px] md:h-[65px] rounded-lg'>1</span>
                    </div>
                </div>

                <div className="live-score-banner-content-bottom text-[#D7D7D7] font-archivo font-normal text-[34px] flex justify-between">
                    <p><span>CRR :</span> 6.88</p>
                    <p><span>Balls left :</span>109</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveScoreBanner
