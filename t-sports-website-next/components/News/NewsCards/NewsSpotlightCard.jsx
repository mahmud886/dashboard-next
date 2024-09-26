

// eslint-disable-next-line react/prop-types
import Link from "next/link";

const NewsSpotlightCard = ({imgUrl, title}) => {
  return (
    <Link href='/news-details' className='group w-full bg-white md:border-r border-1 border-tsLightGrey pr-5 hover:cursor-pointer '>
      <div className='relative '>
        <div className='overflow-hidden'>
          <img src={imgUrl} className='object-fill w-full transition-all duration-300 ease-out group-hover:scale-105'
               alt=""/>
        </div>
        <h2
          className='absolute left-4 bottom-4 text-[24px] md:text-[45px] font-bengali2 font-bold text-tsWhite transition-all duration-300 ease-out group-hover:text-tsRed'>{title}</h2>

      </div>
    </Link>
  );
};

export default NewsSpotlightCard;