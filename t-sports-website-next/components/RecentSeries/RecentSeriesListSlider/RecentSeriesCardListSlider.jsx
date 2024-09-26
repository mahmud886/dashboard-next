
import card1 from "../../../assets/images/recent-series/cards/recent/card1.png";
import card2 from "../../../assets/images/recent-series/cards/recent/card2.png";
import card3 from "../../../assets/images/recent-series/cards/recent/card3.png";
import card4 from "../../../assets/images/recent-series/cards/recent/card4.png";
import SliderVideoCard from "../../Cards/VideoCard/SliderVideoCard.jsx";


const videoSlides = [
  {
    "heading": "Man of the Series Tamim",
    "imgUrl": card1
  },
  {
    "heading": "World Cup 2023",
    "imgUrl": card2
  },
  {
    "heading": "Hopes for Shakib's Form",
    "imgUrl": card3
  },
  {
    "heading": "Mashrafe's Leadership",
    "imgUrl": card4
  },
  // {
  //   "heading": "IPL 2024",
  //   "imgUrl": card1
  // },
  // {
  //   "heading": "Taskin's Pace",
  //   "imgUrl": card2
  // },
  // {
  //   "heading": "New Rules in Cricket",
  //   "imgUrl": card3
  // },
  // {
  //   "heading": "Bangladesh's New Talent",
  //   "imgUrl": card3
  // },
  // {
  //   "heading": "BPL Final",
  //   "imgUrl": card4
  // },
  // {
  //   "heading": "Riyad's Batting Strategy",
  //   "imgUrl": card1
  // }
];

const RecentSeriesCardListSlider = () => {
  return (
    <div className='container py-[80px]'>
      <SliderVideoCard title='recent' content={videoSlides}/>
      <SliderVideoCard title='ICC Cricket World Cup 2023' content={videoSlides}/>
      <SliderVideoCard title='Big Bash League 2023-24' content={videoSlides}/>
      <SliderVideoCard title='La Liga' content={videoSlides}/>
      </div>
  );
};

export default RecentSeriesCardListSlider;