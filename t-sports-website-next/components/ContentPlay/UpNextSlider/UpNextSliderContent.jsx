
import play from "../../../assets/images/content-play/play.png";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const UpNextSliderContent = ({imgUrl, seriesName, heading, publishDate }) => {
  return (
    <>
      <div className='group bg-white p-6 m-3 border hover:cursor-pointer'>
        <Link href='/content-play'>
          <div className='md:flex items-center gap-10'>
            <div className='relative'>
              <img className="w-full group-hover:scale-105 transition-all" src={imgUrl} alt=""/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img src={play} alt=""/>
              </div>
            </div>
            <div>
              <h5
                className='group-hover:text-tsBlack transition-all duration-300 mt-4 md:mt-0 text-[14px] md:text-[22px] text-tsLightGrey font-archivo font-light'>
                {seriesName}
              </h5>
              <h1
                className='group-hover:text-tsRed transition-all duration-300 my-2 md:my-6 max-w-[70%] leading-[18px] md:leading-[34px] font-bebas font-bold text-[20px] md:text-[36px] text-tsBlack'>
                {heading}
              </h1>
              <p
                className='group-hover:text-tsBlack transition-all flex gap-2 items-center font-archivo text-[15px] text-tsLightGrey'>
                        <span>
                          <svg width="17" height="17" viewBox="0 0 17 17" fill="none"
                               xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M8.25254 16.5768C6.62092 16.5768 5.02594 16.093 3.6693 15.1865C2.31266 14.2801 1.25529 12.9916 0.630897 11.4842C0.00650413 9.97681 -0.156866 8.31809 0.161447 6.71783C0.47976 5.11756 1.26546 3.64762 2.41919 2.49389C3.57291 1.34017 5.04285 0.554467 6.64312 0.236154C8.24339 -0.0821585 9.90211 0.0812112 11.4095 0.705604C12.9169 1.33 14.2054 2.38737 15.1118 3.74401C16.0183 5.10065 16.5021 6.69563 16.5021 8.32724C16.5021 10.5152 15.633 12.6135 14.0859 14.1606C12.5388 15.7077 10.4405 16.5768 8.25254 16.5768ZM8.25254 1.25616C6.85401 1.25616 5.48689 1.67087 4.32405 2.44785C3.16122 3.22483 2.2549 4.32918 1.7197 5.62126C1.18451 6.91333 1.04448 8.33509 1.31732 9.70675C1.59016 11.0784 2.26361 12.3383 3.25252 13.3273C4.24143 14.3162 5.50138 14.9896 6.87304 15.2625C8.24469 15.5353 9.66645 15.3953 10.9585 14.8601C12.2506 14.3249 13.355 13.4186 14.1319 12.2557C14.9089 11.0929 15.3236 9.72577 15.3236 8.32724C15.3236 6.45187 14.5786 4.65332 13.2526 3.32723C11.9265 2.00114 10.1279 1.25616 8.25254 1.25616Z"
                              fill="#808080"/>
                            <path
                              d="M10.9572 11.8628L7.66328 8.56884V3.02393H8.84179V8.07976L11.7881 11.0319L10.9572 11.8628Z"
                              fill="#808080"/>
                          </svg>
                        </span>
                {publishDate}
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default UpNextSliderContent;