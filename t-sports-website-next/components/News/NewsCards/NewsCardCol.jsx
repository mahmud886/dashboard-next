
// eslint-disable-next-line react/prop-types
const NewsCardCol = ({imgUrl, title, shortDescription, time}) => {
  return (
    <div className="group news-card-border w-full bg-white md:border-r border-1 border-tsLightGrey pr-5 hover: cursor-pointer">
      <div className='overflow-hidden'>
        <img className="w-full transition-all duration-300 ease-out group-hover:scale-105" src={imgUrl} alt=""/>
      </div>
      <div className="py-4 ">
          <h5 className="mb-2 transition-all duration-300 ease-out group-hover:text-tsRed text-[20px] font-bengali2 font-bold tracking-tight">{title}</h5>
        <p className="mt-4 mb-3 font-bengali2 font-normal line-clamp-4 transition-all duration-300 ease-out text-tsLightGrey group-hover:text-tsBlack">{shortDescription}</p>
        <p className='flex gap-2 items-center font-bengali2 text-[16px] transition-all duration-300 ease-out text-tsLightGrey group-hover:text-tsBlack'>
          <span>
            <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4.60547 9C3.71545 9 2.84543 8.73608 2.1054 8.24161C1.36538 7.74715 0.788607 7.04434 0.448013 6.22208C0.107419 5.39981 0.0183035 4.49501 0.191937 3.6221C0.36557 2.74918 0.794154 1.94736 1.42349 1.31802C2.05283 0.688685 2.85465 0.260102 3.72756 0.0864682C4.60048 -0.0871652 5.50528 0.00194979 6.32755 0.342544C7.14981 0.683138 7.85262 1.25991 8.34708 1.99994C8.84155 2.73996 9.10547 3.60999 9.10547 4.5C9.10547 5.69348 8.63136 6.83807 7.78745 7.68198C6.94354 8.52589 5.79894 9 4.60547 9ZM4.60547 0.642859C3.8426 0.642859 3.09686 0.869076 2.46256 1.2929C1.82825 1.71673 1.33387 2.31914 1.04194 3.02394C0.749997 3.72874 0.673613 4.50428 0.822442 5.25249C0.97127 6.0007 1.33863 6.68798 1.87806 7.22741C2.41749 7.76684 3.10477 8.1342 3.85298 8.28303C4.60119 8.43186 5.37673 8.35547 6.08153 8.06354C6.78633 7.7716 7.38874 7.27722 7.81257 6.64291C8.23639 6.00861 8.46261 5.26287 8.46261 4.5C8.46261 3.47702 8.05624 2.49594 7.33288 1.77259C6.60953 1.04924 5.62845 0.642859 4.60547 0.642859Z"
                fill="#808080"/>
              <path d="M6.08083 6.42857L4.28404 4.63179V1.60714H4.9269V4.365L6.53404 5.97536L6.08083 6.42857Z" fill="#808080"/>
            </svg>
          </span>{time}</p>
      </div>
    </div>
  );
};

export default NewsCardCol;