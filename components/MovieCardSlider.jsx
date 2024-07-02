"use client"
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import MovieCard from "@/components/MovieCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { getContents } from '@/serivces/getContents';
import { movieData } from "@/utils/slider-data";

const MovieCardSlider = () => {
    const [contentData, setContentData] = useState([]);
    useEffect(() => {
    const fetchUser = async () => {
          try {
              let data = await getContents(); // Replace 'user-id' with actual user ID
              data = JSON.parse(data);
              setContentData(data?.data?.contents);
              console.log(data);
          } catch (error) {
              console.error('Error fetching user:', error);

          }
        };
        fetchUser();
    }, []);


  
  const [moviesData] = useState(movieData);



  const swiperRef = useRef(null);



  const playTrailerCommonVideoCard = (trailerId, playerId) => {
    // Implement your logic for playing the video here
    // Example: console.log(`Playing video for trailer ID ${trailerId} and player ID ${playerId}`);
  };

  const stopTrailerCommonVideoCard = (trailerId, playerId) => {
    // Implement your logic for stopping the video here
    // Example: console.log(`Stopping video for trailer ID ${trailerId} and player ID ${playerId}`);
  };

  const videoCardMuteToggle = (playerId) => {
    // Implement your logic for muting/unmuting the video here
    // Example: console.log(`Toggling mute for player ID ${playerId}`);
  };




  return (
    <div className="container relative h-auto w-screen-full py-5">
      <div className="slider-header">
        <h3 className="flex justify-between mb-5 title">
          <span className="text-black dark:text-white text-[24px] md:text-[28px] font-semibold antialiased">Bollywood Movies</span>
          <a className="more-btn text-black dark:text-white text-[16px] md:text-[20px] font-500 antialiased">More <i className="fa fa-angles-right" aria-hidden="true"></i></a>
        </h3>
      </div>


      
      <div ref={swiperRef} className="swiper hollywoodMoviesSwiper pl-2.5 md:pl-16 swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
        <Swiper
          slidesPerView="auto"
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper"
          >
          {contentData?.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide commonVideoCard swiper-slide-active"
                         style={{width: '147.125px', marginRight: '20px'}}>
              <MovieCard
                key={item.id}
                img={item?.poster}
                title={item.contentName}
                imdbRating={item.rating}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="hidden md:flex swiper-button-next" tabIndex="0" role="button" aria-label="Next slide" aria-controls="BollywoodMoviesCards" aria-disabled="false"></div>
        <div className="hidden md:flex swiper-button-prev swiper-button-disabled" tabIndex="-1" role="button" aria-label="Previous slide" aria-controls="BollywoodMoviesCards" aria-disabled="true"></div>
        <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
      </div>
    </div>
  );
};

export default MovieCardSlider;
