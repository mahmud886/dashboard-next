import { getYouTubeVideoId } from '@/utils/utils';
import Image from 'next/image';
import { useState } from 'react';
import { faStar, faBookmark, faPlay, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieCard = ({ id, title, img, imdbRating, youtubeUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [player, setPlayer] = useState(null);

  const yourVideoId = 'https://www.youtube.com/watch?v=SAI263jUeao';
  const videoId = getYouTubeVideoId(yourVideoId);

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
      className='card relative w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden'
      onMouseEnter={playTrailer}
      onMouseLeave={pauseTrailer}>
      <figure className='relative w-full h-full overflow-hidden rounded-md'>
        {img ? (
          <Image src={img} alt={title} width={210} height={320} className='cardImg w-full h-full rounded-md'/>
        ) : (
          <Image src='/no-poster.jpg' alt={title} width={210} height={320} className='w-full h-full rounded-md'/>
        )}
      </figure>

      <div className='absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-between p-0 card-body'>
        {/* Top section */}
        <div className='p-2 md:p-4'>
          <div className='flex items-center justify-between gap-2 text-white'>
            <div
              className='flex items-center justify-center gap-1 bg-black bg-opacity-50 md:font-bold rounded-[5px] p-1 text-[12px] md:text-[15px]'>
              <div>
                <FontAwesomeIcon icon={faStar} className='text-[#FAFF00]'/>
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
        <div
          className='videoWrap absolute top-0 left-0 flex items-center justify-center w-full h-full overflow-hidden bg-black bg-opacity-70'>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&showinfo=0&origin=http%3A%2F%2F103.68.104.71&playsinline=1&rel=0&iv_load_policy=3&modestbranding=1&vq=hd720&enablejsapi=1&widgetid=37`}
            width='100%'
            height='100%'
            frameborder="0"
            title=" "
            allow='accelerometer; autoplay; encrypted-media'
            allowFullScreen
            onLoad={onPlayerReady}
            className='transition-all duration-300 ease-in-out scale-150'
          >
          </iframe>
          <div className=" absolute w-full h-full "
               style={{background: 'linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.9) 80%)'}}></div>

          <div className="wrapper">
            <div className="video-main">
              <div className="promo-video">
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </div>
              <a href="https://www.youtube.com/watch?v=BqI0Q7e4kbk"
                 className="playBtn flex justify-center items-center video video-popup mfp-iframe"
                 data-lity=""> <FontAwesomeIcon icon={faPlay}
                                                className='w-[25px] h-[25px] text-red-600 hover:text-white'/></a>
            </div>
          </div>

          <div className="actionWrap absolute text-white top-2 right-2 flex justify-self-end mt-4 mr-4 flex-col gap-4">
            <button className="actionBtn">
              <FontAwesomeIcon icon={faVolumeMute} className='text-white'/></button>
          </div>


          <div className="actionWrap absolute text-white top-20 right-2 flex justify-self-end mt-4 mr-4 flex-col gap-4">
            <button className="actionBtn">
              <FontAwesomeIcon icon={faBookmark} className='text-white'/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
