import Link from "next/link";


const SubscriptionPlanLists = () => {
  return (
    <div className="container py-[80px]">
      <h2 className='pb-[40px] inline-flex justify-center items-center gap-4 text-[24px] leading-[22px] md:leading-[40px] lg:leading-[40px] md:text-[40px] lg:text-[40px] font-archivo text-tsBlack font-normal capitalize'><svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 0L18.7778 7.60234L13 0L7.22222 7.60234L0 0V19.7661H26V0ZM2.88889 28.8889H23.1111C23.8773 28.8889 24.6121 28.5685 25.1539 27.9982C25.6956 27.4279 26 26.6545 26 25.848V22.807H0V25.848C0 26.6545 0.304364 27.4279 0.846136 27.9982C1.38791 28.5685 2.12271 28.8889 2.88889 28.8889Z" fill="#F9B410"/>
      </svg>
        T Sports Subscription Plan
      </h2>


      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-16 mt-[40px]'>
        <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-6 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
          <div className='flex justify-between items-center'>
            <div className="relative">
              <span className="absolute -top-[1.5rem] -left-[2.5rem] bg-tsYellow text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                super saver</span>
              <h1 className="font-bebas font-bold text-tsBlack tracking-wider text-[38px]">1 Day Pack</h1>
            </div>
            <h1 className='font-bebas font-bold text-tsBlack text-[38px] mr-3'>19
              <span className="relative text-[25px]" style={{top: '-20px'}}>৳</span>
            </h1>
          </div>

          <div className='flex justify-between items-center mt-[38px]'>
            <h6 className='font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>1 Day Premium Content Access</h6>
            <Link href='/order-summary'
              className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 text-white rounded-md text-[18px]'>Buy
            </Link>
          </div>
        </div>

        <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-6 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bebas font-bold text-tsBlack tracking-wider text-[38px]'>3 Days Pack</h1>
            <h1 className='font-bebas font-bold text-tsBlack text-[38px] mr-3'>29
              <span className="relative text-[25px]" style={{top: '-20px'}}>৳</span>
            </h1>
          </div>

          <div className='flex justify-between items-center mt-[38px]'>
            <h6 className='font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>3 Days Premium Content Access</h6>
            <Link href='/order-summary'
              className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 text-white rounded-md text-[18px]'>Buy
            </Link>
          </div>
        </div>

        <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-6 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
          <div className='flex justify-between items-center'>
            <h1 className='font-bebas font-bold text-tsBlack tracking-wider text-[38px]'>7 Days Pack</h1>
            <h1 className='font-bebas font-bold text-tsBlack text-[38px] mr-3'>49
              <span className="relative text-[25px]" style={{top: '-20px'}}>৳</span>
            </h1>
          </div>

          <div className='flex justify-between items-center mt-[38px]'>
            <h6 className='font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>7 Days Premium Content Access</h6>
            <Link href='/order-summary'
              className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 text-white rounded-md text-[18px]'>Buy
            </Link>
          </div>
        </div>

        <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-6 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
          <div className='flex justify-between items-center'>
            <div className="relative">
              <span
                className="absolute -top-[1.5rem] -left-[2.5rem] bg-tsBlue text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                Best Deal</span>
              <h1 className="font-bebas font-bold text-tsBlack tracking-wider text-[38px]">15 Days Pack</h1>
            </div>
            <h1 className='font-bebas font-bold text-tsBlack text-[38px] mr-3'>69
              <span className="relative text-[25px]" style={{top: '-20px'}}>৳</span>
            </h1>
          </div>

          <div className='flex justify-between items-center mt-[38px]'>
            <h6 className='font-archivo font-normal text-tsLightGrey  leading-[20px] text-[18px]'>15 Days Premium Content Access</h6>
            <Link href='/order-summary'
              className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 text-white rounded-md text-[18px]'>Buy
            </Link>
          </div>
        </div>

        <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-6 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
          <div className='flex justify-between items-center'>
            <div className="relative">
              <span
                className="absolute -top-[1.5rem] -left-[2.5rem] bg-tsRed text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                Most Popular</span>
              <h1 className="font-bebas font-bold text-tsBlack tracking-wider text-[38px]">30 Days Pack</h1>
            </div>
            <h1 className='font-bebas font-bold text-tsBlack text-[38px] mr-3'>30
              <span className="relative text-[25px]" style={{top: '-20px'}}>৳</span>
            </h1>
          </div>

          <div className='flex justify-between items-center mt-[38px]'>
            <h6 className='font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>30 Days Premium Content Access</h6>
            <Link href='/order-summary'
              className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 text-white rounded-md text-[18px]'>Buy
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPlanLists;