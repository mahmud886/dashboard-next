import Image from 'next/image';

const TopMoviesCard = ({ id, imgUrl }) => {
  return (
    <div className='w-full overflow-hidden bg-transparent rounded-md shadow-xl card bg-base-100 image-full before:hidden'>
      <div className='flex flex-row justify-end p-0 rounded-none card-body'>
        <div className='absolute left-0 z-0 -bottom-6 md:-bottom-10'>
          <h2 className='text-stroke-black text-[70px] md:text-[85px] lg:text-[110px]'>{id + 1}</h2>
        </div>
        <div className='max-w-[80%] min-w-[60%] z-10'>
          <figure className='rounded-0'>
            <Image src={imgUrl} width={172} height={256} alt='' className='w-full h-full rounded-md' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default TopMoviesCard;
