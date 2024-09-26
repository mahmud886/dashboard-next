import React from 'react';
import sportsChannelBanner from '../../../assets/images/sports-channel.png';
import googleQrCode from '../../../assets/images/googleqrcode.svg';
import appleQrCode from '../../../assets/images/appleqrcode.svg';
import downloadTsports from '../../../assets/images/download-tsports.svg';
import mobileChannel from '../../../assets/images/mobile-channel.png'
import { Link } from 'react-router-dom';

const HomeSportsBanner = () => {
  return (
    <section className="home-sports-channel-banner bg-cover bg-center h-[100%] bg-no-repeat flex justify-center text-center py-8 md:py-20" style={{ backgroundImage: `url(${sportsChannelBanner})` }}>
        <div className="home-sports-channel-content w-[931px]">
            <h1 className='text-[20px] md:text-[75px] font-archivo font-bold text-[#333333] w-[900px] leading-[90px]'>First ever <span className='text-red-700'>sports channel</span> in Bangladesh</h1>
            <p className='text-[#808080] font-normal font-archivo text-[14px] md:text-[29px] py-4 md:py-10'>have the application at your fingertips to watch unlimited sports content <br/> with your iphone & android apps.</p>
            <div className='flex justify-center items-center'>
            <img src={mobileChannel} alt="sports-channel-mobile-image" className='w-[50%] md:w-full py-6 md:py-4'/>
            </div>
            <div className='w-[40%] mx-auto md:w-full flex space-x-2 md:space-x-8 items-center justify-between gap:2 md:gap:4 md:pt-11'>
                <Link href="#">
                    <img src={googleQrCode} alt="googleQrCode" className='md:w-full' />
                </Link>
                <Link href="#">
                    <img src={downloadTsports} alt="downloadTsports" className='md:w-full' />
                </Link>
                <Link href="#">
                    <img src={appleQrCode} alt="appleQrCode" className='md:w-full' />
                </Link>
            </div>
        </div>
      
    </section>
  )
}

export default HomeSportsBanner