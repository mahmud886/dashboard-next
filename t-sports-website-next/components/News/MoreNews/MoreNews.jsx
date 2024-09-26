
import ListImage1 from '../../../assets/images/news/gallary/list-image1.png'
import ListImage2 from '../../../assets/images/news/gallary/list-image2.png'
import ListImage3 from '../../../assets/images/news/gallary/list-image3.png'
import MoreNewsCard from "./MoreNewsCard/MoreNewsCard.jsx";
const MoreNews = () => {
  return (
    <div className='container py-[20px] '>
      <div className='border-t-2 border-tsGrey'>
        <h2 className='py-6 text-[40px] font-archivo font-semibold'>News</h2>
      </div>


      <div>
        <div className='grid grid-cols-12 gap-8 mb-4 '>
          <div className='col-span-3 border border-red-500'>Adds</div>
          <div className='col-span-12 md:col-span-6'>

            <MoreNewsCard time='১১ ঘণ্টা আগে' title='মোস্তাফিজের সঙ্গে পাতিরানাকেও একাদশে রেখেছে চেন্নাই'
                          shortDescription='মাতিশা পাতিরানা ফিরলেও মোস্তাফিজুর রহমানকে একাদশে ধরে রেখেছে চেন্নাই সুপার কিংস। গুজরাট টাইটানসের বিপক্ষে আজ ঘরের মাঠ এমএ চিদাম্বরমে মুখোমুখি হচ্ছে চেন্নাই চেন্নাই দলে...'
                          imgUrl={ListImage1}/>
            <MoreNewsCard time='১১ ঘণ্টা আগে' title='এক বছর পর টেস্ট দলে ফিরলেন সাকিব'
                          shortDescription='শ্রীলঙ্কার বিপক্ষে দ্বিতীয় টেস্টে বাংলাদেশ দলে ফিরেছেন সাকিব আল হাসান। তাওহিদ হৃদয়ের জায়গায় ফিরেছেন সাকিব। এ ছাড়া চোটের কারণে নেই পেসার মুশফিক হাসান, তাঁর জায়গায় চট্টগ্রাম টেস্টের দলে নেওয়া...'
                          imgUrl={ListImage2}/>
            <MoreNewsCard time='১১ ঘণ্টা আগে' title='‘ব্যাটসম্যান’ নাহিদ রানা যে বিশ্ব রেকর্ডের'
                          shortDescription='শ্রীলঙ্কার বিপক্ষে দ্বিতীয় টেস্টে বাংলাদেশ দলে ফিরেছেন সাকিব আল হাসান। তাওহিদ হৃদয়ের জায়গায় ফিরেছেন সাকিব। এ ছাড়া চোটের কারণে নেই পেসার মুশফিক হাসান, তাঁর জায়গায় চট্টগ্রাম টেস্টের দলে নেওয়া...'
                          imgUrl={ListImage3}/>

          </div>
          <div className='col-span-3 border border-red-500'>Adds</div>
        </div>
      </div>



      <div className='p-14'>
        <div className='flex justify-center items-center'>
          <button className='inline-flex py-3 px-14 bg-tsRed hover:bg-red-700 text-tsWhite text-[22px] font-normal font-archivo'>Show
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoreNews;