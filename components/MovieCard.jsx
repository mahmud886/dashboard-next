import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({ id, title, img, imdbRating }) => {
  return (
    <div className="relative w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden">
      <figure className="relative w-full h-full overflow-hidden rounded-md">
        {img ? (
          <Image src={img} alt={title} width={210} height={320} className="w-full h-full rounded-md" />
        ) : (
          <Image src="/no-poster.jpg" alt={title} width={210} height={320} className="w-full h-full rounded-md" />
        )}
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 p-0 card-body flex flex-col justify-between">
        {/* Top section */}
        <div className="p-2 md:p-4">
          <div className="flex items-center justify-between gap-2 text-white">
            <div className="flex items-center justify-center gap-1 bg-black bg-opacity-50 md:font-bold rounded-[5px] p-1 text-[12px] md:text-[15px]">
              <div>
                <FontAwesomeIcon icon={faStar} className="text-[#FAFF00]" />
              </div>
              <span>{parseFloat(imdbRating).toFixed(2)}</span>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className="flex items-end h-full">
          <div className="w-full h-auto pl-2 md:px-4 py-3">
            <div className="flex items-center h-full gap-2 text-white">
              <div className="w-full">
                <h3 className="mb-1 text-base font-bold md:text-lg">{title}</h3>
                <p className="text-xs md:text-sm">2023 | 720 Blu Ray</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
