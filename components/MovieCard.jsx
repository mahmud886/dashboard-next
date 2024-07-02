import { getYouTubeVideoId } from '@/utils/utils';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

const MovieCard = ({ id, title, img, imdbRating, youtubeUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const videoId = getYouTubeVideoId(youtubeUrl);


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
    <div
      className='relative w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden'
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
        <div className='absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70 overflow-hidden'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&origin=http%3A%2F%2F103.68.104.71&playsinline=1&rel=0&iv_load_policy=3&modestbranding=1&vq=hd720&enablejsapi=1&widgetid=37`}
            width='100%'
            height='100%'
            title='YouTube Video Player'
            allow='accelerometer; autoplay; encrypted-media'
            allowFullScreen
            onLoad={onPlayerReady}
          className='scale-150 transition-all duration-300 ease-in-out'
          >
          </iframe>
          <button onClick={toggleMute} className='absolute text-white top-2 right-2'>
            Mute
          </button>
          <button onClick={pauseTrailer} className='absolute text-white top-2 left-2'>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
