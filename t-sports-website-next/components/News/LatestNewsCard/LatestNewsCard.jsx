

// eslint-disable-next-line react/prop-types
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const LatestNewsCard = ({imgUrl, title, shortDescription}) => {
  return (
    <div className="group w-full bg-white hover:cursor-pointer overflow-hidden rounded-[20px] group-hover:shadow-md">
      <Link href='/news-details' className='relative'>
        <div className='overflow-hidden'>
          <img className="w-full transition-all ease-in-out duration-300 group-hover:scale-105" src={imgUrl} alt=""/>

        </div>
        <div className="absolute left-0 bottom-2">
          <div className='m-8'>
              <h5 className="mb-2 text-[22px] text-tsWhite font-bengali2 font-bold tracking-tight">{title}</h5>
            <p
              className="mt-4 mb-3 text-tsWhite font-bengali2 font-normal line-clamp-3 cursor-pointer">{shortDescription}
              {/*<button className='text-tsWhite ml-2'>...Read More</button>*/}
            </p>
          </div>
        </div>
        <div className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
      </Link>
    </div>
  );
};

export default LatestNewsCard;