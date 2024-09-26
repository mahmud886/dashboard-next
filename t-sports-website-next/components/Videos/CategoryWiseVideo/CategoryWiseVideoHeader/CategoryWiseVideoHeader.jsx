

import VideoHeaderSlider from "../../../Sliders/VideoHeaderSlider/index.jsx";
import Image1 from "../../../../assets/images/recent-series/series1.png";
import Image2 from "../../../../assets/images/recent-series/series2.png";
import Image3 from "../../../../assets/images/recent-series/series3.png";
import Image4 from "../../../../assets/images/recent-series/series4.png";
import Image5 from "../../../../assets/images/recent-series/series5.png";
import Image6 from "../../../../assets/images/recent-series/series6.png";

const headerContent = [
  {
    "imgUrl": Image1,
    "heading1": "Sidney Sixers vs Melbourne Stars",
    "heading2": "big bash league 2023-24"
  },
  {
    "imgUrl": Image2,
    "heading1": "FINAL : ARGENTINA VS FRANCE Highlights",
    "heading2": "fifa world cup 2022"
  },
  {
    "imgUrl": Image3,
    "heading1": "SEMI FINAL : IND VS PAK Match Highlights",
    "heading2": "icc cricket world cup 2023"
  },
  {
    "imgUrl": Image4,
    "heading1": "talk with  mr  alrounder sakib  al hasan",
    "heading2": "exclusive interview"
  },
  {
    "imgUrl": Image5,
    "heading1": "Tendulkar smacks Shoaib around",
    "heading2": "magic moments"
  },
  {
    "imgUrl": Image6,
    "heading1": "Glenn Maxwell's incredible double hundred",
    "heading2": "icc cricket world cup 2023"
  }
]

// eslint-disable-next-line react/prop-types
const CategoryWiseVideoHeader = () => {
  return (
    <VideoHeaderSlider slides={headerContent}/>
  );
};

export default CategoryWiseVideoHeader;

