/* eslint-disable react/prop-types */
import useEmblaCarousel from 'embla-carousel-react';
import { NextButton, PrevButton, usePrevNextButtons } from '../Common/EmblaCarouselArrowButtons.jsx';
// import {DotButton, useDotButton} from './EmblaCarouselDotButton';
import Autoplay from 'embla-carousel-autoplay'
import LatestNewsCard from "../../News/LatestNewsCard/LatestNewsCard.jsx";
import styles from './LatestNewsSliderOne.module.css'

const LatestNewsSliderOne = (props) => {
  const { slides } = props;
  const OPTIONS = { align: 'start', dragFree: true, loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  // ' md:mr-[5%]'
  return (
    <section className={styles.embla}>
      <div className={`${styles.embla__controls} md:mr-[5%]`}>
        <div className="slider__title flex items-center gap-5 ">
          <h2 className='text-tsBlack font-archivo font-normal text-[22px] md:text-[40px] capitalize'>Tsports News</h2>
          <svg
            width="42"
            height="16"
            viewBox="0 0 42 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.8126 8.70711C41.2031 8.31658 41.2031 7.68342 40.8126 7.29289L34.4486 0.928932C34.0581 0.538408 33.4249 0.538408 33.0344 0.928932C32.6439 1.31946 32.6439 1.95262 33.0344 2.34315L38.6913 8L33.0344 13.6569C32.6439 14.0474 32.6439 14.6805 33.0344 15.0711C33.4249 15.4616 34.0581 15.4616 34.4486 15.0711L40.8126 8.70711ZM0.105469 9H40.1055V7H0.105469V9Z"
              fill="#333333"
            />
          </svg>
        </div>
        <div className={styles.embla__buttons}>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
        </div>
      </div>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) =>(
            <div className={styles.embla__slide} key={index}>
              <LatestNewsCard title={slide?.title} imgUrl={slide?.imgUrl} shortDescription={slide?.shortDescription}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSliderOne;
