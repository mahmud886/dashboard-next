/* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay'
import LatestNewsCard from "../../News/LatestNewsCard/LatestNewsCard.jsx";
import styles from './LatestNewsSliderTwo.module.css'
import {DotButton, useDotButton} from "../Common/EmblaCarouselDotButton.jsx";

const LatestNewsSliderTwo = (props) => {
  const { slides } = props;
  const OPTIONS = { align: 'start', dragFree: true, loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className={styles.embla}>

      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <LatestNewsCard title={slide?.title} imgUrl={slide?.imgUrl} shortDescription={slide?.shortDescription}/>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.embla__controls} flex justify-center items-center mt-14`}>
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
    </section>
  );
};

export default LatestNewsSliderTwo;
