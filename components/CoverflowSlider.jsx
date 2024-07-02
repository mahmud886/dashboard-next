'use client';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { fakeSliderData } from '@/utils/data';
import Image from 'next/image';
import LoadingSpinner from "@/components/LoadingSpinner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // Example regular icon
import { faShareAlt as fasShareAlt, faPlay as fasPlay } from '@fortawesome/free-solid-svg-icons'; // Solid icons


const CoverflowSlider = () => {
  const [content, setContent] = useState({});
  const [isImageLoading, setImageLoading] = useState(true)

  const dataIndex = useRef(-1);
  const defaultIndex = 0;
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    const content = fakeSliderData[index];
    setContent(content);
    dataIndex.current = index;
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper;
      handleSlideChange(defaultIndex);
      const slideChangeHandler = () => {
        setTimeout(() => {
          if (swiperInstance.el && swiperInstance.el.getElementsByClassName) {
            const activeSlideElement = swiperInstance.el.getElementsByClassName('swiper-slide-active');
            if (activeSlideElement && activeSlideElement.length > 0) {
              const activeSlide = activeSlideElement[0].getAttribute('data-index');
              console.log(activeSlide);
              if (dataIndex.current !== activeSlide) {
                handleSlideChange(activeSlide);
              }
            } else {
              console.log('No active slide found');
            }
          } else {
            console.log('Swiper instance or its DOM element not available.');
          }
        }, 300);
      };

      swiperInstance.on('slideChange', slideChangeHandler);
      return () => {
        swiperInstance.off('slideChange', slideChangeHandler);
      };
    } else {
      console.log('Swiper instance not initialized or missing.');
    }
  }, []);

  return (
    <>
      <div>
        <div className=' w-full h-[100vh] bg-gray-800 relative overflow-hidden'>
          <div className='trailerImage w-full h-[100vh] absolute'>
            {
              !content?.lThumb  ? (
                <div className='flex items-center justify-center h-full w-full'>
                  <LoadingSpinner/>
                </div>
              ) : (
                <Image
                  src={content.lThumb}
                  fill
                  sizes="(min-width: 3840px) 50vw, 100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                 alt='image'/>
              )
            }
          </div>

          <div className='w-full h-[40px] bottom-[0px] absolute z-[10] bg-[#f1f5f9] dark:bg-black'></div>
          <div className='w-full h-[300px] bottom-[40px] absolute z-[0] down-shadow'></div>
          <div className='relative flex flex-col-reverse items-center justify-around w-full h-full p-8 md:flex-row md:justify-between md:items-end md:p-16'>
            <div className='content w-[90%] sm:w-[70%] md:max-w-[50%] mx-auto md:m-0'>
              <p className='text-2xl font-bold text-center text-white sm:text-3xl md:text-4xl md:text-start'>
                {content.title}
              </p>
              <div className='flex justify-center gap-4 my-2 md:justify-start'>
                <a className='rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white'>
                  {content.year}
                </a>
                <a className='rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white'>
                  {content.category}
                </a>
                <a className='rounded-full px-[12px] py-[4px] text-sm md:text-md font-semibold bg-darkMenu text-black dark:text-white'>
                  {content.length}
                </a>
              </div>
              <p
                className='text-sm text-center text-black md:text-md md:text-start dark:text-white'
                id='coSliderMovieDescription'>
                Four women — a travel blogger, her friend biker granny, a makeshift mechanic and a young girl set to
                be married — ride to the highest motorable
              </p>
              <div className='flex justify-center gap-4 my-2 actionButtonsWrap md:justify-start'>
                <button
                  className='btn flex items-center justify-center rounded-[50%] bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]'>
                  <FontAwesomeIcon icon={farHeart} className='text-[16px] md:text-[20px]'/>
                </button>
                <button
                  className='btn flex items-center justify-center rounded-[50%] bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]'>
                  <FontAwesomeIcon icon={fasShareAlt} className='text-[16px] md:text-[20px]'/>
                </button>
                <button
                  className='btn flex items-center justify-center rounded-[8px] bg-[#C1141E] h-[48px] px-14 text-white border-none hover:bg-[#b4111b]'>
                  <FontAwesomeIcon icon={fasPlay} className='text-[16px] md:text-[20px] mr-3'/>
                  Play
                </button>
              </div>
            </div>
            <Swiper
              onReachEnd={(swiper) => handleSlideChange(swiper.activeIndex)}
              ref={swiperRef}

              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={4}
              autoplay={{delay: 5000}}
              coverflowEffect={{
                rotate: 0,
                stretch: 45,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                375: {
                  slidesPerView: 2,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 100,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  },
                },
                768: {
                  slidesPerView: 4,
                  coverflowEffect: {
                    rotate: 0,
                    stretch: 45,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                  },
                },
              }}
              // initialSlide={2}
              loop={true}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className='swiper homepageCardSlider w-full md:w-[45%] pt-8 md:pt-12'>
              {fakeSliderData.length > 0 ? (
                fakeSliderData.map((item) => (
                  <SwiperSlide
                    key={item.id}
                    data-index={item.id}
                    title={item.title}
                    className='swiper-slide w-[200px] rounded-[5px] overflow-hidden'>
                    <Image width={210} height={265} src={item.img} alt={item.title} />
                  </SwiperSlide>
                ))
              ) : (
                <LoadingSpinner/>
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverflowSlider;
