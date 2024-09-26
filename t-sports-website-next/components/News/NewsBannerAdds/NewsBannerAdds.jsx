import NewsBannerImage from '../../../assets/images/news/gallary/add-banner.png'

const NewsBannerAdds = () => {
  return (
    <>
      <div className='container'>
        <div className='relative'>
          <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
            <h2 className='text-center text-[20px] md:text-[52px] font-bold font-bengali2 text-tsWhite mb-2'>টি
              স্পোর্টসে খেলার <br/> সময়সূচি জানতে </h2>
            <button
              className='bg-tsRed hover:bg-red-700 text-tsWhite text-[14px] md:text-[32px] font-bengali2 font-semibold py-1 px-[20px] md:px-[60px] inline-flex items-center gap-2 pt-3'>ক্লিক
              করুন
            </button>
          </div>
          <img src={NewsBannerImage} className='w-full h-full' alt="News banner Adds"/>

        </div>
      </div>
    </>
  );
};

export default NewsBannerAdds;