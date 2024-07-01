import React from 'react';
import Image from "next/image";

const MovieCard = ({id, title, img, imdbRating }) => {
  return (
      <div
        className="relative w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden">
          <figure>
            <Image src={img} alt={title} width={210} height={320} className="w-full h-full rounded-md"/>
          </figure>
        <div className="absolute top-0 left-0 p-0 card-body w-full">
          <div className='flex flex-col'>
            <div className="p-2 md:p-4">
              <div className="flex items-center justify-between  gap-2 text-white">
                <div className="bg-black bg-opacity-50 md:font-bold rounded-[5px] px-1 text-[12px] md:text-[15px]">
                  <i className="fas fa-star text-[#FAFF00]" aria-hidden="true"></i>
                  <span>{imdbRating}</span>
                </div>
              </div>
            </div>
            <div className="flex items-end h-full">
              <div className="w-full h-auto md:h-[72px] pl-2 md:pl-4 py-3">
                <div className="flex items-center h-full gap-2 text-white">
                  <div className="w-full">
                    <h3 className="mb-1 text-base font-bold md:text-lg">{title}</h3>
                    {/*<p className="text-xs md:text-sm">{printType}</p>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
};

export default MovieCard;