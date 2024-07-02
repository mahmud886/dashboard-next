'use client';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/autoplay';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import MovieCard from '@/components/MovieCard';
import { getContents } from '@/serivces/getContents';
import { movieData } from '@/utils/slider-data';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

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

  const swiperRef = useRef(null);

  console.log(contentData)


  return (
    <div className='container relative h-auto py-5 w-screen-full'>
      <div className='slider-header'>
        <h3 className='flex justify-between mb-5 title'>
          <span className='text-black dark:text-white text-[24px] md:text-[28px] font-semibold antialiased'>
            Bollywood Movies
          </span>
          <Link
            href='/'
            className='flex items-center justify-center gap-1 hover:text-red-700 dark:hover:text-red-700 more-btn text-black dark:text-white text-[16px] md:text-[20px] font-500 antialiased'>
            More{' '}
            <span className='inline-flex tracking-tight'>
              <FontAwesomeIcon icon={faAngleRight} /> <FontAwesomeIcon icon={faAngleRight} />
            </span>
          </Link>
        </h3>
      </div>

      <div
        ref={swiperRef}
        className='swiper hollywoodMoviesSwiper pl-2.5 md:pl-16 swiper-initialized swiper-horizontal swiper-free-mode swiper-backface-hidden'>
        <Swiper
          slidesPerView='auto'
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
          className='mySwiper'>
          {contentData?.map((item) => (
            <SwiperSlide
              key={item.id}
              className='swiper-slide commonVideoCard swiper-slide-active'
              style={{ width: '147.125px', marginRight: '20px' }}>
              <MovieCard key={item.id} img={item?.poster} title={item.contentName} imdbRating={item.rating} youtubeUrl={item?.trailerUri} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className='hidden md:flex swiper-button-next'
          tabIndex='0'
          role='button'
          aria-label='Next slide'
          aria-controls='BollywoodMoviesCards'
          aria-disabled='false'></div>
        <div
          className='hidden md:flex swiper-button-prev swiper-button-disabled'
          tabIndex='-1'
          role='button'
          aria-label='Previous slide'
          aria-controls='BollywoodMoviesCards'
          aria-disabled='true'></div>
        <span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
      </div>
    </div>
  );
};

export default MovieCardSlider;
