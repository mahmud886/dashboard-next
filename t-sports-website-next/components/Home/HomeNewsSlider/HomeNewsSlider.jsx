import CardImage1 from "../../../assets/images/news/gallary/card-image1.png";
import latestLetter from "../../../assets/images/news/latest-letter.png";
import LatestNewsSliderOne from "../../Sliders/LatestNewsSliderOne/index.jsx";

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

const HomeNewsSlider = () => {
  return (
    <div className='container py-[80px]'>
      <div className='grid grid-cols-12'>

        <div className='col-span-2 flex justify-center align-middle items-center'>
          <div className=''>
            <img src={latestLetter} alt="Letter"/>
          </div>
        </div>
        <div className='col-span-10'>
          <LatestNewsSliderOne slides={latestNewsSlides}/>
        </div>
      </div>

    </div>
  );
};

export default HomeNewsSlider;