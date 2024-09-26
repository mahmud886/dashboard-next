

// eslint-disable-next-line react/prop-types
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const LiveMatchCard = ({imgUrl}) => {
  return (
    <Link href='content-play'>
      <div className='group relative cursor-pointer overflow-hidden rounded-[20px]'>
        <img className='w-full transition-all ease-in-out duration-300 group-hover:scale-105' src={imgUrl} alt=""/>
        <div
          className='absolute left-0 bottom-0 w-full h-4 bg-tsRed bg-opacity-0 transition-all ease-in-out duration-300 group-hover:bg-opacity-100'></div>
      </div>
    </Link>
  );
};

export default LiveMatchCard;