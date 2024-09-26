/* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import styles from './VideoHeaderSlider.module.css'
import {DotButton, useDotButton} from "../Common/EmblaCarouselDotButton.jsx";
import Fade from "embla-carousel-fade";
import VideoHeader from "../../Headers/VideoHeader.jsx";

const VideoHeaderSlider = ({slides}) => {
  const OPTIONS = { loop: true, dragFree: true, duration: 50 }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS,  [Fade(), Autoplay()] );
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className={styles.embla}>

      <div className={`${styles.embla__viewport} relative`} ref={emblaRef}>

        <div className={styles.embla__container}>
          {slides?.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <VideoHeader imgUrl={slide.imgUrl} heading1={slide.heading1} heading2={slide.heading2}/>
            </div>
          ))}
        </div>

        <div className={`${styles.embla__controls} md:-rotate-90 absolute right-[60px] top-[485px] md:top-1/2 md:right-[50px] flex justify-center items-center`}>
          <div className={styles.embla__dots}>
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={`${styles.embla__dot} ${index === selectedIndex ? styles['embla__dot--selected'] : ''}`}
              />
            ))}
          </div>
          {/*<div className={styles.embla__dots}>*/}
          {/*  <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>*/}
          {/*  <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>*/}
          {/*</div>*/}
        </div>
      </div>

    </section>
  );
};

export default VideoHeaderSlider;
