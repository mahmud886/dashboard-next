import Card1 from '../../../assets/images/news/gallary/card-1.png'
import Card2 from '../../../assets/images/news/gallary/card-2.png'
import Card3 from '../../../assets/images/news/gallary/card-3.png'
import Card4 from '../../../assets/images/news/gallary/card-4.png'
import SpotlightCardImage from '../../../assets/images/news/gallary/big-card.png'
import NewsCardCol from "../NewsCards/NewsCardCol.jsx";
import NewsSpotlightCard from "../NewsCards/NewsSpotlightCard.jsx";
import { Link } from 'react-router-dom'



const NewsGallary = () => {
  return (
    <div className='container pb-[80px]'>

      <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 md:gap-8 w-full '>
        <div className='col-span-1 md:col-span-9 lg:col-span-9 w-full'>
          <div className='grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-6 pb-2 w-full md:h-1/2 border-b-2 border-tsLightGrey' >
            <div className='my-3 gap-1 md:gap-8 col-span-1 md:col-span-8'>
            <Link href="/news-details" >
              <NewsSpotlightCard imgUrl={SpotlightCardImage} title='বরিশালের প্রথম বিপিএল জয়'/>
            </Link>
            </div>
            <div className='my-3 gap-1 md:gap-6 col-span-1 md:col-span-4'>
            <Link href="/news-details" >
              <NewsCardCol imgUrl={Card1} title='লা লিগা ভ্রমণে উচ্ছ্বসিত জামাল ভূঁইয়া' shortDescription='লা লিগায় জামাল ভূঁইয়ার উপস্থিতি নতুন কিছু নয়। ২০১৯ সালে স্প্যানিশ লিগটির ম্যাচে ধারাভাষ্য দিয়েছিলেন বাংলাদেশ ফুটবল দলের অধিনায়ক। এবার লা লিগার আমন্ত্রণে স্পেনে গিয়ে লিগের অন্দরমহলে ঘুরলেন জামাল' time='১০ ঘণ্টা আগে'/>
            </Link>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full pt-4 h-1/2 '>
            <div className='my-3'>
              <Link href="/news-details" >
                <NewsCardCol imgUrl={Card2} title='তিন ফরম্যাটেই অধিনায়ক নাজমুল' shortDescription='টেস্ট, ওয়ানডে ও টি-টোয়েন্টি ক্রিকেটের এই তিন ফরম্যাটের নেতৃত্ব ছাড়লে সাকিব আল হাসান। জাতীয় দলের নতুন অধিনায়ক নাজমুল হোসেন শান্ত।  আজ মিরপুরে বাংলাদেশ ক্রিকেট বোর্ডের (বিসিবি) বোর্ড মিটিংয়ে এ সিদ্ধান্ত হয়।' time='২০ ঘণ্টা আগে'/>
              </Link>
            </div>
            <div className='my-3'>
              <Link href="/news-details" >
                <NewsCardCol imgUrl={Card3} title='উয়েফাকে টেক্কা দিয়ে শেষ হাসি মাদ্রিদ-বার্সার' shortDescription='এক সুপার লিগ নিয়ে তো কম জল ঘোলা হয়নি। রিয়াল মাদ্রিদ, বার্সেলোনার মতো বড় ক্লাবগুলোকে নিষেধাজ্ঞার হুমকি পর্যন্ত দিয়েছিল উয়েফা। শেষ পর্যন্ত ঝামেলার রেশ গড়িয়েছে আদালত পর্যন্ত। আর আদালতে গিয়ে শেষ হাসি হেসেছে মাদ্রিদ সভাপতি ফ্লোরেন্তিনো পেরেজ।' time='৭ ঘণ্টা আগে'/>
              </Link>
            </div>
            <div className='my-3'>
              <Link href="/news-details" >
                <NewsCardCol imgUrl={Card3} title='উয়েফাকে টেক্কা দিয়ে শেষ হাসি মাদ্রিদ-বার্সার' shortDescription='এক সুপার লিগ নিয়ে তো কম জল ঘোলা হয়নি। রিয়াল মাদ্রিদ, বার্সেলোনার মতো বড় ক্লাবগুলোকে নিষেধাজ্ঞার হুমকি পর্যন্ত দিয়েছিল উয়েফা। শেষ পর্যন্ত ঝামেলার রেশ গড়িয়েছে আদালত পর্যন্ত। আর আদালতে গিয়ে শেষ হাসি হেসেছে মাদ্রিদ সভাপতি ফ্লোরেন্তিনো পেরেজ।' time='৭ ঘণ্টা আগে'/>
              </Link>
            </div>
          </div>
        </div>
        <div className='col-span-1 md:col-span-3 my-3'>
          <div className='grid grid-cols-1 gap-2 md:gap-8'>
            <div className='w-full h-[310px] bg-tsGrey '>1</div>
            <div className='w-full h-[610px] bg-tsGrey '>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsGallary;