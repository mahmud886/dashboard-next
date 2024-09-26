import NewHeaderImg from '../../../assets/images/news-header.png';
import Breadcrumb from "../../Breadcumb.jsx";
import NewsHeaderSliderOne from "../../Sliders/NewsHeaderSliderOne/index.jsx";

const headerData = [
    {
      "heading": "ব্রেকিং নিউজ: শহরে বড় ঘটনা ঘটছে",
      "imgUrl": NewHeaderImg,
      "category": "Football"
    },
    {
      "heading": "প্রযুক্তি জায়ান্টরা সর্বশেষ গ্যাজেট প্রকাশ করেছে",
      "imgUrl": NewHeaderImg,
      "category": "Cricket"
    },
    {
      "heading": "স্বাস্থ্য কর্মকর্তারা নতুন নির্দেশিকা ঘোষণা করেছেন",
      "imgUrl": NewHeaderImg,
      "category": "Tennis"
    },
    {
      "heading": "স্টক মার্কেট সর্বকালের সর্বোচ্চ উচ্চতায় পৌঁছেছে",
      "imgUrl": NewHeaderImg,
      "category": "Hockey"
    },
    {
      "heading": "স্থানীয় স্পোর্টস দল চ্যাম্পিয়নশিপ জিতেছে",
      "imgUrl": NewHeaderImg,
      "category": "Football"
    }
  ]

// eslint-disable-next-line react/prop-types
const NewsHeaderSlider = () => {
  return (
  <>
    <NewsHeaderSliderOne slides={headerData}/>
  </>
  );
};

export default NewsHeaderSlider;