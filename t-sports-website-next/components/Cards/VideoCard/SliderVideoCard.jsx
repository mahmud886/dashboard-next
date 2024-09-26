import card1 from "../../../assets/images/recent-series/cards/recent/card1.png";
import {Link, useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SliderVideoCard = ({title, content}) => {

  const location = useLocation();

  // Determine the link based on the current path
  const determineLink = () => {
    return location.pathname === '/recent-series' ? '/single-recent-series' : '/category-wise-videos';
  };

  return (

    <div className='pb-[50px] md:pb-[100px]'>
      <div className='flex justify-between items-center'>
        <h2
          className='inline-flex items-center gap-2 md:gap-4 text-[24px] md:text-[40px] font-archivo font-normal capitalize'>
          {title}
          <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0L0 9Z"
              fill="#333333"/>
          </svg>
        </h2>
        <Link  to={determineLink()} className='inline-flex items-center justify-center py-4 px-9 gap-2 bg-tsRed hover:bg-red-700 text-tsWhite text-[17px] transition-all duration-300'>
          Watch All
          <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.5943 4.5486C25.8067 4.33622 25.8067 3.9919 25.5943 3.77953L22.1335 0.318719C21.9211 0.106346 21.5768 0.106346 21.3644 0.318719C21.152 0.531091 21.152 0.875415 21.3644 1.08779L24.4407 4.16406L21.3644 7.24034C21.152 7.45271 21.152 7.79703 21.3644 8.00941C21.5768 8.22178 21.9211 8.22178 22.1335 8.00941L25.5943 4.5486ZM0.971191 4.70788H25.2097V3.62025H0.971191V4.70788Z"
              fill="white"/>
          </svg>
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-[40px]'>

        {/* eslint-disable-next-line react/prop-types */}
        {content?.map((item, index) => (
          <Link href='/content-play' className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md' key={index}>
            <div className='relative '>
              <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105"
                   src={item.imgUrl ? item.imgUrl : card1} alt="card1"/>
              {
                item.heading &&
                (<div className='absolute left-10 bottom-10 max-w-[80%] mx-auto'>
                  <h2
                    className='text-tsWhite font-archivo text-[24px] font-medium capitalize leading-[26px]'>{item.heading}</h2>
                </div>)
              }
              <div
                className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>

            </div>
          </Link>
        ))}

      </div>
    </div>
  )
    ;
};

export default SliderVideoCard;