"use client"

import { faEllipsisVertical, faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

const ContinueWatchingCard = ({ imgUrl, title, imdbRating, remainingTime }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl image-full rounded-[5px] overflow-hidden bg-transparent before:hidden">
      <figure className="relative w-full h-full overflow-hidden rounded-md">
        <Image src={imgUrl} width={210} height={320} alt="" className="rounded-md" />
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 p-0 card-body flex flex-col justify-between">
        <div className="p-2 md:p-4 one">
          <div className="flex justify-between items-center text-white h-full gap-2">
            <div
              className="flex items-center justify-center gap-1 bg-black bg-opacity-50 md:font-bold rounded-[5px] p-1 text-[12px] md:text-[15px]">
              <div>
                <FontAwesomeIcon icon={faStar} className="text-[#FAFF00]"/>
              </div>
              <span>{parseFloat(imdbRating).toFixed(2)}</span>
            </div>
            <div>
              <button className="">
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-end two">
          <div
            className="bg-[#5F5F5F] opacity-95 w-full h-[50px] md:h-[80px] px-3 py-3"
            style={{ boxShadow: '0px 17px 6px -12px rgba(0,0,0,0.25) inset' }}
          >
            <div className="flex items-center text-white h-full gap-2">
              <div className="min-w-[75%] overflow-hidden">
                <h3 className="text-sm md:text-base truncate font-bold">{title}</h3>
                <div className="flex md:py-1.5 md:pb-3">
                  <div className="w-full pt-0.5 bg-[#6D6E6E]" />
                </div>
                <p className="text-[10px] md:text-xs truncate">{remainingTime} Remaining</p>
              </div>
              <div className="min-w-[25%]">
                <button className="w-[25px] h-[25px] md:w-[40px] md:h-[40px] rounded-full bg-[#DD192A] text-xs md:text-base pl-[2px] pt-[1px]">
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
'use client';


const ContinueWatchingCard = ({ imgUrl, title, imdbRating, remainingTime }) => {
  return (
    <div className='card w-full bg-base-100 shadow-xl image-full rounded-[5px] overflow-hidden bg-transparent before:hidden'>
      <figure className='relative w-full h-full overflow-hidden rounded-md'>
        <Image src={imgUrl} width={210} height={320} alt='' className='rounded-md' />
      </figure>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between p-0 card-body'>
        <div className='p-2 md:p-4 one'>
          <div className='flex items-center justify-between h-full gap-2 text-white'>
            <div className='flex items-center justify-center gap-1 bg-black bg-opacity-50 md:font-bold rounded-[5px] p-1 text-[12px] md:text-[15px]'>
              <div>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00]' />
              </div>
              <span>{parseFloat(imdbRating).toFixed(2)}</span>
            </div>
            <div>
              <button className=''>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex items-end two'>
          <div
            className='bg-[#5F5F5F] opacity-95 w-full h-[50px] md:h-[80px] px-3 py-3'
            style={{ boxShadow: '0px 17px 6px -12px rgba(0,0,0,0.25) inset' }}>
            <div className='flex items-center h-full gap-2 text-white'>
              <div className='min-w-[75%] overflow-hidden'>
                <h3 className='text-sm font-bold truncate md:text-base'>{title}</h3>
                <div className='flex md:py-1.5 md:pb-3'>
                  <div className='w-full pt-0.5 bg-[#6D6E6E]' />
                </div>
                <p className='text-[10px] md:text-xs truncate'>{remainingTime} Remaining</p>
              </div>
              <div className='min-w-[25%]'>
                <button className='w-[25px] h-[25px] md:w-[40px] md:h-[40px] rounded-full bg-[#DD192A] text-xs md:text-base pl-[2px] pt-[1px]'>
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinueWatchingCard;
