"use client"
import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay  } from 'swiper/modules';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import MovieCard from "@/components/MovieCard";

import {movieData} from "@/utils/slider-data";

const MovieCardSlider = () => {
  const [moviesData] = useState(movieData);

  const fakeSliderData2 = [
    {
      id: 0,
      img: "http://103.68.104.71//Admin/main/images/tt14672882/screen//hYCqInu2vhRysytIyifA41iw2Ek.jpg",
      lThumb: "http://103.68.104.71//Admin/main/images/tt14672882/poster//Ah3pJ3iuX28PKHjGLyIrEsFVq5q.jpg",
      title: "The Tomorrow Job",
      videoId: "zeKp69CY47Y",
      titleImg: "http://103.68.104.71//Admin/main/images/tt14672882/logo/tt14672882.png",
      movieLink: "http://103.68.104.71/Data/movies/hollywood/2023/The Tomorrow Job (2023)/The.Tomorrow.Job.2023.720p.WEBRip.x264.AAC-[YTS.MX].mp4",
      rating: 4.85,
      year: 2023,
      genre: [],
      category: "Si-Fi",
      length: "2h 12m",
      isMuted: false,
    },
    {
      id: 1,
      img: "http://103.68.104.71//Admin/main/images/tt0830515/screen//3CqMIX3ZlrD0pU3fpBL6DM0Cneb.jpg",
      lThumb: "http://103.68.104.71//Admin/main/images/tt0830515/poster//e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
      title: "James Bond Quantum of Solace",
      titleImg: "http://103.68.104.71//Admin/main/images/tt0830515/logo/tt0830515.png",
      videoId: "BBqYaFEWBxI",
      movieLink: "http://103.68.104.71/Data/movies/hollywood/2008/James Bond Quantum of Solace (2008)/James.Bond.Quantum.of.Solace.2008.720p.BRrip.x264.YIFY.mp4",
      rating: 3.75,
      year: 2023,
      genre: [],
      category: "Action",
      length: "1h 39m",
      isMuted: false,
    },
    // Add more slider data as needed
  ];

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
    <div className="relative h-auto py-6 w-screen-full">
      <div className="slider-header px-2.5 md:px-16">
        <h3 className="flex justify-between mb-5 title">
          <span className="text-black dark:text-white text-[24px] md:text-[28px] font-semibold antialiased">Bollywood Movies</span>
          <a className="more-btn text-black dark:text-white text-[16px] md:text-[20px] font-500 antialiased">More <i className="fa fa-angles-right" aria-hidden="true"></i></a>
        </h3>
      </div>
      <div ref={swiperRef} className="swiper hollywoodMoviesSwiper pl-2.5 md:pl-16 swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden">
        {/*<div className="swiper-wrapper" id="BollywoodMoviesCards" aria-live="polite">*/}
        {/*  */}
        {/*</div>*/}

        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 5,
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
          className="mySwiper"
          >
          {moviesData.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard
                key={item.id}
                img={item.poster_path}
                title={item.original_title}
                imdbRating={item.vote_average}
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
