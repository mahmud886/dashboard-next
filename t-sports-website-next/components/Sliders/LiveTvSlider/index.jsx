import styles from "./LiveMatchSlider.module.css";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import LiveMatchCard from "../../Cards/VideoCard/LiveMatchCard.jsx";

// eslint-disable-next-line react/prop-types
const VideoSlider = ({ slides }) => {
  const OPTIONS = { align: 'start', dragFree: true, loop: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);

  // const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {/* eslint-disable-next-line react/prop-types */}
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <LiveMatchCard imgUrl={slide.imgUrl}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSlider;