import { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import {getYouTubeVideoId} from "@/utils/utils";

const MovieCard = ({ id, title, img, imdbRating, youtubeUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [player, setPlayer] = useState(null);


  const videoId = getYouTubeVideoId(youtubeUrl);

  console.log(videoId);

  const playTrailer = () => {
    setIsVideoPlaying(true);
  };

  const pauseTrailer = () => {
    setIsVideoPlaying(false);
  };

  const toggleMute = () => {
    if (player) {
      const isMuted = player.isMuted();
      player.mute(!isMuted);
    }
  };

  const onPlayerReady = (event) => {
    setPlayer(event.target);
  };

  return (
    <div className='relative w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden'
         onMouseEnter={playTrailer}
         onMouseLeave={pauseTrailer}>
      <figure className='relative w-full h-full overflow-hidden rounded-md'>
        {img ? (
          <Image src={img} alt={title} width={210} height={320} className='w-full h-full rounded-md' />
        ) : (
          <Image src='/no-poster.jpg' alt={title} width={210} height={320} className='w-full h-full rounded-md' />
        )}
      </figure>
      <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between p-0 card-body'>
        {/* Top section */}
        <div className='p-2 md:p-4'>
          <div className='flex items-center justify-between gap-2 text-white'>
            <div className='flex items-center justify-center gap-1 bg-black bg-opacity-50 md:font-bold rounded-[5px] p-1 text-[12px] md:text-[15px]'>
              <div>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00]' />
              </div>
              <span>{parseFloat(imdbRating).toFixed(2)}</span>
            </div>
          </div>
        </div>
        {/* Bottom section */}
        <div className='flex items-end h-full'>
          <div className='w-full h-auto py-3 pl-2 md:px-4'>
            <div className='flex items-center h-full gap-2 text-white'>
              <div className='w-full'>
                <h3 className='mb-1 text-base font-bold md:text-lg'>{title}</h3>
                <p className='text-xs md:text-sm'>2023 | 720 Blu Ray</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Video Player */}
      {isVideoPlaying && (
        <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0`}  // Autoplay, mute, and hide controls
            width="100%"
            height="100%"
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            onLoad={onPlayerReady}>
          </iframe>
          <button onClick={toggleMute} className='absolute top-2 right-2 text-white'>
            Mute
          </button>
          <button onClick={pauseTrailer} className='absolute top-2 left-2 text-white'>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
