import LatestNewsCard from "../LatestNewsCard/LatestNewsCard.jsx";
import CardImage1 from '../../../assets/images/news/gallary/card-image1.png'
import CardImage2 from '../../../assets/images/news/gallary/card-image2.png'
import CardImage3 from '../../../assets/images/news/gallary/card-image3.png'
import CardImage4 from '../../../assets/images/news/gallary/card-image4.png'
import LatestNewsSliderTwo from "../../Sliders/LatestNewsSliderTwo/index.jsx";

const latestNewsSlides = [
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  },
  {
    "title": "ম্যান অব দ্যা সিরিজ তামিম",
    "shortDescription": "আর কী চাই তামিম ইকবালের! বরিশালকে প্রথমবার বিপিএলের শিরোপা জিতিয়েছেন। ব্যাট হাতেও করেছেন টুর্নামেন্টের সর্বোচ্চ রান ৪৯২ রান",
    "imgUrl": CardImage1
  }
];

const NewsSlider = () => {
  return (
    <div className='container pt-[80px] '>
      <div className='border-t-[6px] border-tsGreen'>
        <h2 className='py-6 text-[40px] font-archivo font-semibold'>Latest</h2>
      </div>

      <LatestNewsSliderTwo slides={latestNewsSlides}/>
    </div>
  );
};

export default NewsSlider;