/* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import styles from './NewsHeaderSliderOne.module.css'
import {DotButton, useDotButton} from "../Common/EmblaCarouselDotButton.jsx";
import NewsHeader from "../../Headers/NewsHeader.jsx";
import Fade from "embla-carousel-fade";

const NewsHeaderSliderOne = ({slides}) => {
  const OPTIONS = { loop: true, dragFree: true, duration: 50 }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS,  [Fade(), Autoplay()] );
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className={styles.embla}>

      <div className={`${styles.embla__viewport} relative`} ref={emblaRef}>

        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <NewsHeader heading={slide.heading} imgUrl={slide.imgUrl} category={slide.category}/>
            </div>
          ))}
        </div>

        <div className={`${styles.embla__controls} -rotate-90 absolute top-1/2 right-[-100px] md:right-[50px] flex justify-center items-center`}>
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

export default NewsHeaderSliderOne;
