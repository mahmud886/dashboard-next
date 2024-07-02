'use client';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css/autoplay';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { fakeSliderData } from '@/utils/data';
import Image from 'next/image';

const CoverflowSlider = () => {
  const [content, setContent] = useState({});

  const dataIndex = useRef(-1);
  const defaultIndex = 2;
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
          // Check if swiperInstance.el and swiperInstance.el.getElementsByClassName are defined
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
            <img src={content.lThumb} alt='' className='w-full h-[100vh] object-cover' />
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
                className='text-sm text-center text-black  md:text-md md:text-start dark:text-white'
                id='coSliderMovieDescription'>
                Four women — a travel blogger, her friend's biker granny, a makeshift mechanic and a young girl set to
                be married — ride to the highest motorable
              </p>
              <div className='flex justify-center gap-4 my-2 actionButtonsWrap md:justify-start'>
                <button className='btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]'>
                  <i className='fa-regular fa-heart text-[16px] md:text-[20px]'></i>
                </button>
                <button className='btn rounded-[50%]  bg-[#C1141E] w-[48px] h-[48px] text-white border-none hover:bg-[#b4111b]'>
                  <i className='fa-solid fa-share-nodes text-[16px] md:text-[20px]'></i>
                </button>
                <button className='btn rounded-[8px]  bg-[#C1141E] h-[48px] px-14 text-white border-none hover:bg-[#b4111b]'>
                  <i className='fa-solid fa-play text-[16px] md:text-[20px] mr-3'></i> Play
                </button>
              </div>
            </div>
            <Swiper
              onSlideChange={(swiper) => handleSlideChange(swiper.activeIndex)}
              ref={swiperRef}
              effect='coverflow'
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={4}
              autoplay={{ delay: 5000 }}
              coverflowEffect={{
                rotate: -10,
                stretch: 45,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              initialSlide={2}
              loop={true}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className='swiper homepageCardSlider w-full md:w-[45%] pt-8 md:pt-12'>
              {fakeSliderData.map((item) => (
                <SwiperSlide
                  key={item.id}
                  data-index={item.id}
                  title={item.title}
                  className='swiper-slide w-[200px] rounded-[5px] overflow-hidden'>
                  <Image width={210} height={265} src={item.img} alt={item.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoverflowSlider;
