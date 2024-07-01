import React,  from 'react';
import Image from "next/image";
// import React, { useState } from 'react';

const ParentalLockPage = () => {
  return (
      <div>
          <div className="container">
              <button
                  className="w-[200px] mt-4 text-2xl text-black bg-transparent dark:text-white hover:bg-white hover:bg-opacity-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                      <path d="M12 2L1 21h22L12 2zm0 5v3.5h-3v2h3V17h-3v2h3.5c.3 0 .5-.2.5-.5v-9c0-.3-.2-.5-.5-.5h-3z"/>
                  </svg>
                  Parental Lock
              </button>
          </div>
          <div className="mt-20 rounded-[40px] bg-zinc-300 h-screen"
               style={{boxShadow: '0px 8px 20px rgba(0,0,0,0.5) inset'}}>
              <div className="flex justify-center items-center">
                  <Image src="/images/parental-lock/parental-lock.png" alt="" width={130} height={124}
                         className="w-[130px] h-[124px] mt-[-60px] pb-[32px]"/>
              </div>
              <div className="flex justify-center items-center">
                  <div id="parentalLockContainer"
                       className="flex flex-col items-center gap-[1.5rem] w-full md:w-[40%] px-2 text-center">
                      <p className="text-[22px] text-black dark:text-white md:text-2xl font-bold">Lock Content with your
                          personal PIN</p>
                      <p className="text-[25px] text-black md:text-[16px] font-semibold dark:text-[#D1D1D1] py-[24px]">Will
                          anyone
                          under the age of 18 be watching restricted content?</p>
                      <button
                          className="btn rounded-[8px] uppercase bg-[#C1141E] h-[48px] px-14 text-white text-lg border-none hover:bg-[#b4111b]">Lock
                          Now
                      </button>
                      <p className="text-[14px] leading-5 text-center font-semibold text-black dark:text-[#D1D1D1] pt-[24px]">Click
                          Lock Now to set up Personal PIN</p>
                  </div>
              </div>

              <div className="flex flex-col items-center gap-19 w-full md:w-40% px-2 text-center">
                  <p className="text-lg font-bold text-black dark:text-white pb-[20px]">Set Your Parental Lock PIN</p>
                  <div className="w-380px">
                      <input type="password" defaultValue="PIN" placeholder="PIN"
                             className="w-full p-2 mb-[20px] text-center text-black bg-gray-500 rounded-md dark:text-white bg-opacity-20 placeholderColorWhite"/>
                      <button
                          className="rounded-md uppercase px-2 h-[48px] bg-[#C1141E] w-full text-white border-none hover:bg-[#b4111b]">Confirm
                      </button>
                  </div>
              </div>


              <div className="flex flex-col items-center w-full md:w-40% px-2 text-center">
                  <p className="text-lg font-bold text-black dark:text-white pb-[24px]">Set Your Email Address</p>
                  <div className="w-380px text-left">
                      <label htmlFor="email" className="text-black dark:text-white text-sm font-normal text-16px">Enter
                          E-mail Address</label>
                      <input type="email" placeholder="Enter your email"
                             className="w-full p-3 px-4 my-[24px] text-sm text-white bg-gray-500 rounded-md bg-opacity-20 placeholderColorWhite"/>
                      <button
                          className="rounded-md px-2 h-[48px] bg-[#C1141E] w-full text-white border-none hover:bg-[#b4111b]">Submit
                      </button>
                  </div>
              </div>


              <div className="flex flex-col items-center w-full md:w-40% px-2 text-center">
                  <p className="text-lg font-bold text-black dark:text-white">Set Your Email Address</p>
                  <div className="w-380px text-left">
                      <input type="email" placeholder="Enter your verification code"
                             className="w-full p-3 px-4 my-[24px] text-sm text-white bg-gray-500 rounded-md bg-opacity-20 placeholderColorWhite"/>
                      <button
                          className="rounded-md px-2 h-[48px] bg-[#C1141E] w-full text-white border-none hover:bg-[#b4111b]">Complete
                      </button>
                  </div>
              </div>


          </div>
      </div>

  )
      ;
};

export default ParentalLockPage;
