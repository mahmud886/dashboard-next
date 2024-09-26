import React from 'react';
import tsportsDownloadBanner from '../../../assets/images/messi.svg';
import googleQrCode from '../../../assets/images/googleqrcode.svg';
import appleQrCode from '../../../assets/images/appleqrcode.svg';
import downloadTsports from '../../../assets/images/download-tsports.svg';

const HomeDownloadBanner = () => {
  return (
    <section className="download-tsport-area">
        <div className="banner-image relative">
            <img src={tsportsDownloadBanner} alt="tsportsDownloadBanner" className='w-full bg-cover h-full'/>
            <div className="download-icons-area md:w-[21%] absolute md:top-[20%] md:left-[11%] top-[16%]">
                <div className='flex justify-center items-center'>
                <img src={downloadTsports} alt="downloadTsports" className='md:w-[399px] w-[40%]'/>
                </div>
                <div className="download-icons flex items-center justify-center md:justify-between md:pt-12 gap-4 pt-4">
                    <img src={googleQrCode} alt="googleQrCode" className="w-[40px] md:w-[181px] md:h-[250px]" />
                    <img src={appleQrCode} alt="appleQrCode" className="w-[40px] md:w-[181px]  md:h-[250px]" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default HomeDownloadBanner