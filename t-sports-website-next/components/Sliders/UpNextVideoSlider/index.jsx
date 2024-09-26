import styles from "./UpNextVideoSlider.module.css";
import {NextButton, PrevButton, usePrevNextButtons} from "../Common/EmblaCarouselArrowButtons.jsx";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import UpNextSliderContent from "../../ContentPlay/UpNextSlider/UpNextSliderContent.jsx";

// eslint-disable-next-line react/prop-types
const UpNextVideoSlider = ({ slides, title }) => {
  const OPTIONS = { align: 'start', dragFree: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, );

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
      <section className={styles.embla}>
        <div className='relative'>
          <div className='absolute inset-0 flex items-center justify-between'>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled}/>
            <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled}/>
          </div>
          <div className={styles.embla__viewport} ref={emblaRef}>
            <div className={styles.embla__container}>
              {slides?.map((slide, index) => (
                <div className={styles.embla__slide} key={index}>
                  <UpNextSliderContent imgUrl={slide?.imgUrl} heading={slide?.heading} seriesName={slide.seriesName} publishDate={slide.publishDate}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default UpNextVideoSlider;