import React from 'react';
import card1 from "../../../assets/images/recent-series/cards/recent/card1.png";
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const SliderVideoCardHome = ({ imgUrl, heading}) => {
  return (
    <div className='group bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md'>
      <Link href='/content-play' className='relative '>
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

      </Link>
    </div>
  );
};

export default SliderVideoCardHome;