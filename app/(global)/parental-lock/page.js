import React from 'react';
import Image from "next/image";

const ParentalLockPage = () => {
  return (
    <div className="container">
      <button className="w-[200px] mt-4 text-2xl text-black bg-transparent dark:text-white hover:bg-white hover:bg-opacity-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path d="M12 2L1 21h22L12 2zm0 5v3.5h-3v2h3V17h-3v2h3.5c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5h-3z"/>
        </svg>
        Parental Lock
      </button>

      <div className="mt-20 text-center">
        <Image src="/images/parental-lock/parental-lock.png" alt=""  width={120} height={114} className="w-[120px] h-[114px] mt-[-60px]" />
        <div id="parentalLockContainer" className="flex flex-col items-center gap-[1.5rem] w-full md:w-[40%] px-2 text-center">
          <p className="text-[22px] text-black dark:text-white md:text-2xl font-bold">Lock Content with your personal PIN</p>
          <p className="text-[25px] text-black md:text-[16px] font-semibold dark:text-[#D1D1D1]">Will anyone under the age of 18 be watching restricted content?</p>
          <button className="btn rounded-[8px] uppercase bg-[#C1141E] h-[48px] px-14 text-white text-lg border-none hover:bg-[#b4111b]">Lock Now</button>
          <p className="text-[14px] leading-5 text-center font-semibold text-black dark:text-[#D1D1D1]">Click Lock Now to set up Personal PIN</p>
        </div>
      </div>
    </div>
  );
};

export default ParentalLockPage;
