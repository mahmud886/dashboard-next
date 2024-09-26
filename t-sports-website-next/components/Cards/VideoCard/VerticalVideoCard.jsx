import card1 from "../../../assets/images/recent-series/cards/recent/card1.png";
import card2 from "../../../assets/images/recent-series/cards/recent/card2.png";
import card3 from "../../../assets/images/recent-series/cards/recent/card3.png";
import card4 from "../../../assets/images/recent-series/cards/recent/card4.png";

// eslint-disable-next-line react/prop-types
const VerticalVideoCard = ({title, heading, imgUrl}) => {
  return (
    <div className='pb-[50px] md:pb-[100px]'>
      <div className='flex justify-between items-center'>
        <h2 className='inline-flex items-center gap-2 md:gap-4 text-[24px] md:text-[40px] font-archivo font-normal capitalize'>
          {title}
          <svg width="41" height="16" viewBox="0 0 41 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M40.7071 8.70711C41.0976 8.31658 41.0976 7.68342 40.7071 7.29289L34.3431 0.928932C33.9526 0.538408 33.3195 0.538408 32.9289 0.928932C32.5384 1.31946 32.5384 1.95262 32.9289 2.34315L38.5858 8L32.9289 13.6569C32.5384 14.0474 32.5384 14.6805 32.9289 15.0711C33.3195 15.4616 33.9526 15.4616 34.3431 15.0711L40.7071 8.70711ZM0 9H40V7H0L0 9Z"
              fill="#333333"/>
          </svg>
        </h2>
        <button className='inline-flex items-center justify-center py-4 px-9 gap-2 bg-tsRed text-tsWhite text-[17px]'>
          Watch All
          <svg width="26" height="9" viewBox="0 0 26 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M25.5943 4.5486C25.8067 4.33622 25.8067 3.9919 25.5943 3.77953L22.1335 0.318719C21.9211 0.106346 21.5768 0.106346 21.3644 0.318719C21.152 0.531091 21.152 0.875415 21.3644 1.08779L24.4407 4.16406L21.3644 7.24034C21.152 7.45271 21.152 7.79703 21.3644 8.00941C21.5768 8.22178 21.9211 8.22178 22.1335 8.00941L25.5943 4.5486ZM0.971191 4.70788H25.2097V3.62025H0.971191V4.70788Z"
              fill="white"/>
          </svg>
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-10 my-[40px]'>
        <div className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md'>
          <div className='relative'>
            <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105"
                 src={imgUrl ? imgUrl : card1} alt="card1"/>
            {
              heading &&
              (<div className='absolute left-10 bottom-10 max-w-[80%] mx-auto'>
                <h2
                  className='text-tsWhite font-archivo text-[24px] font-medium capitalize leading-[26px]'>{heading}</h2>
              </div>)
            }
            <div
              className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
          </div>
        </div>
        <div className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md'>
          <div className='relative'>
            <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105" src={imgUrl ? imgUrl : card2} alt="card2"/>
            {
              heading &&
              (<div className='absolute left-10 bottom-10 max-w-[80%] mx-auto'>
                <h2
                  className='text-tsWhite font-archivo text-[24px] font-medium capitalize leading-[26px]'>{heading}</h2>
              </div>)
            }
            <div
              className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
          </div>
        </div>
        <div className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md'>
          <div className='relative'>
            <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105" src={imgUrl ? imgUrl : card3} alt="card3"/>
            {
              heading &&
              (<div className='absolute left-10 bottom-10 max-w-[80%] mx-auto'>
                <h2
                  className='text-tsWhite font-archivo text-[24px] font-medium capitalize leading-[26px]'>{heading}</h2>
              </div>)
            }
            <div
              className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
          </div>
        </div>
        <div className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md'>
          <div className='relative'>
            <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105" src={imgUrl ? imgUrl : card4} alt="card4"/>
            {
              heading &&
              (<div className='absolute left-10 bottom-10 max-w-[80%] mx-auto'>
                <h2
                  className='text-tsWhite font-archivo text-[24px] font-medium capitalize leading-[26px]'>{heading}</h2>
              </div>)
            }
            <div
              className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
          </div>
        </div>
      </div>
    </div>
  )
    ;
};

export default VerticalVideoCard;