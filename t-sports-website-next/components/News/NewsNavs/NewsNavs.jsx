import facebookIcon from '../../../assets/images/facebook.png'
import instaIcon from '../../../assets/images/instagram.png'
import youtubeIcon from '../../../assets/images/youtube.png'
import twitterIcon from '../../../assets/images/twitter.png'
import googleIcon from '../../../assets/images/gnews.png'

const NewsNavs = () => {
  return (
    <div className='container py-[80px]'>
      <div className='grid md:grid-cols-12 grid-cols-1 justify-between items-center'>
        <div className='col-span-12 md:col-span-9 '>
          <div className='grid grid-cols-1 justify-between items-center gap-4'>
            <h2 className='text-[40px] text-tsRed font-archivo font-semibold items-center'>Sports News</h2>
            <ul className='flex gap-[36px] list-disc ml-[18px] '>
              <li className='font-archivo font-normal text-tsLightGrey hover:text-tsBlueLight cursor-pointer'>Cricket</li>
              <li className='font-archivo font-normal text-tsLightGrey hover:text-tsBlueLight cursor-pointer'>Football</li>
              <li className='font-archivo font-normal text-tsLightGrey hover:text-tsBlueLight cursor-pointer'>Tenis</li>
              <li className='font-archivo font-normal text-tsLightGrey hover:text-tsBlueLight cursor-pointer'>Hocky</li>
            </ul>
          </div>
        </div>
        <div className='col-span-12 md:col-span-3 mt-4'>
          <div className='grid grid-cols-1 justify-between items-center gap-5'>
            <div className='flex justify-center md:justify-between items-center gap-5 py-4 md:py-0'>
              <a href=""><img className='w-[50px]' src={facebookIcon} alt=""/></a>
              <a href=""><img className='w-[50px]' src={twitterIcon} alt=""/></a>
              <a href=""><img className='w-[50px]' src={instaIcon} alt=""/></a>
              <a href=""><img className='w-[50px]' src={youtubeIcon} alt=""/></a>
              <a href=""><img className='w-[50px]' src={googleIcon} alt=""/></a>
            </div>

              <div
                className="flex items-center w-full h-[60px] rounded-lg shadow bg-white overflow-hidden">
                <input
                  className="peer h-full w-full outline-none text-[20px] text-gray-700 px-[30px]"
                  type="text"
                  id="search"
                  placeholder="Search something.."/>
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                  </svg>
                </div>
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNavs;