import React from 'react';
import Image from "next/image";

const MovieCard = ({id, title, img, imdbRating }) => {
  return (
    <div className="swiper-slide commonVideoCard swiper-slide-active"
         style={{width: '147.125px', marginRight: '20px'}}>
      <div
        className="w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden">
          <figure>
            <Image src={img} alt={title} width={172} height={256} className="w-full h-full rounded-none"/>
          </figure>
        <div className="p-0 card-body">
          <div className="p-2 md:p-4">
            <div className="flex items-center justify-between h-full gap-2 text-white">
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