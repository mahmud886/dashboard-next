import {useState} from "react";
import Link from "next/link";


const OrderSummaryCards = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div className='container py-[80px]'>
      <h2 className='text-[24px] leading-[22px] md:leading-[40px] lg:leading-[40px] md:text-[40px] lg:text-[40px] font-archivo text-tsBlack font-normal capitalize'>Order Summary</h2>


      <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 mt-[40px]'>

        <div>
          <div className='w-full border border-tsGrey rounded-xl pt-8 px-7 pb-7 md:pb-14 shadow'>
            <div className='flex justify-between items-center'>
              <div className="relative">
              <span
                className="absolute -top-[1.5rem] md:-top-[1rem] -left-[2.5rem] bg-tsRed text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                Most Popular</span>
                <h1 className="font-bebas font-bold text-tsBlack tracking-wider text-[38px] md:text-[80px]">30 Days
                  Pack</h1>
              </div>
              <h1 className='font-bebas font-bold text-tsBlack text-[38px] md:text-[80px] mr-3'>99
                <span className="relative text-[24px] top-[-20px] md:top-[-40px]">৳</span>
              </h1>
            </div>

            <div className='flex justify-between items-center mt-[38px]'>
              <h6 className='font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>30 Days Premium
                Content
                Access</h6>
            </div>
          </div>

          <div className='mt-[50px]'>
            <h3
              className='inline-flex items-center gap-4 font-archivo text-[26px] font-normal text-tsLightGrey'>Continue
              Buying
              <svg width="32" height="12" viewBox="0 0 32 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M31.5998 6.54891C31.9029 6.24575 31.9029 5.75425 31.5998 5.45109L26.6596 0.510934C26.3564 0.207781 25.8649 0.207781 25.5618 0.510934C25.2586 0.814087 25.2586 1.30559 25.5618 1.60875L29.953 6L25.5618 10.3913C25.2586 10.6944 25.2586 11.1859 25.5618 11.4891C25.8649 11.7922 26.3564 11.7922 26.6596 11.4891L31.5998 6.54891ZM0 6.77627L31.0508 6.77627V5.22373L0 5.22373L0 6.77627Z"
                  fill="#808080"/>
              </svg>
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8 mt-[50px]'>
              <div className='w-full border border-tsGrey rounded-xl pt-16 px-7 pb-10 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
                <div className='items-center'>
                  <div className="relative">
                    <span
                      className="absolute -top-[2.5rem] md:-top-[2.5rem] -left-[2.5rem] bg-tsYellow text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                      Super Saver</span>
                  </div>
                  <h1
                    className='text-center font-bebas font-bold text-tsBlack text-[80px] leading-none md:text-[100px]'>19
                    <span className="relative text-[24px] top-[-20px] md:top-[-60px]">৳</span>
                  </h1>
                  <h1
                    className="text-center font-bebas font-bold text-tsBlack tracking-wider text-[36px] md:text-[36px]">1
                    Day
                    Pack</h1>
                </div>
                <h6 className='text-center font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>30 Days
                  Premium
                  Content
                  Access</h6>
                <div className='flex justify-center items-center mt-[38px]'>
                  <button
                    className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 tracking-wider text-white rounded-md text-[18px]'>Buy
                  </button>
                </div>
              </div>

              <div className='w-full border border-tsGrey rounded-xl pt-16 px-7 pb-10 shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-tsGreen/50 hover:border-tsGreen'>
                <div className='items-center'>
                  <div className="relative">
                    <span
                      className="absolute -top-[2.5rem] md:-top-[2.5rem] -left-[2.5rem] bg-tsBlue text-white px-6 py-1 rounded text-[11px] tracking-wider font-archivo font-normal capitalize">
                      Best Deal</span>
                  </div>
                  <h1
                    className='text-center font-bebas font-bold text-tsBlack text-[80px] leading-none md:text-[100px]'>69
                    <span className="relative text-[24px] top-[-20px] md:top-[-60px]">৳</span>
                  </h1>
                  <h1
                    className="text-center font-bebas font-bold text-tsBlack tracking-wider text-[36px] md:text-[36px]">15
                    Days
                    Pack</h1>
                </div>
                <h6 className='text-center font-archivo font-normal text-tsLightGrey leading-[20px] text-[18px]'>15 Days
                  Premium
                  Content
                  Access</h6>
                <div className='flex justify-center items-center mt-[38px]'>
                  <button
                    className='inline-flex items-center justify-center py-3 px-16 transition-colors duration-300 bg-tsGreen hover:bg-green-700 tracking-wider text-white rounded-md text-[18px]'>Buy
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='w-full border border-tsGrey rounded-xl p-6 md:p-10 shadow'>
          <div className='flex items-center justify-between pb-[12px] md:pb-[25px] gap-10'>
            <h2 className='font-archivo font-semibold text-[20px] md:text-[30px] text-tsBlack capitalize'>Price</h2>
            <h5 className='font-archivo font-semibold text-[16px] md:text-[25px] text-tsLightGrey capitalize tracking-wider'>BDT 99</h5>
          </div>

          <div className='flex items-center justify-between py-[12px] md:py-[25px] gap-10'>
            <h2 className='font-archivo font-semibold text-[20px] md:text-[30px] text-tsBlack capitalize'>Details</h2>
            <h5 className='font-archivo font-normal text-[16px] md:text-[25px] text-tsLightGrey capitalize tracking-wider'>30 Days Premium
              Content Access</h5>
          </div>

          <div className='flex items-center justify-between py-[25px] md:py-[25px]'>
            <h2 className='font-archivo font-semibold text-[20px] md:text-[30px] text-tsBlack capitalize'>Validity</h2>
            <h5 className='font-archivo font-normal text-[16px] md:text-[25px] text-tsLightGrey capitalize tracking-wider'>4th March
              2024, 11.59AM</h5>
          </div>

          <hr/>
          <div className='flex items-center justify-between py-[25px] md:py-[35px]'>
            <h2 className='font-archivo font-semibold text-[20px] md:text-[30px] text-tsBlack capitalize'>Grand Total: </h2>
            <h2 className='font-archivo font-semibold text-[20px] md:text-[30px] text-tsBlack capitalize'>BDT 99</h2>
          </div>


          <div>
            <label className='inline-flex items-center py-5 md:py-10 gap-3'>
              <input
                type="checkbox"
                className='w-6 h-6'
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className='text-tsLightGrey text-[14px] md:text-[18px] font-archivo'>
          I agree with the <span className='text-tsRed'>Refund Policy, Terms of Service</span> and <span
                className='text-tsRed'>Privacy Policy</span>.
        </span>
            </label>
            <div className='block'>
              <button
                className={`w-full-button transition-colors duration-300 ${!isChecked ? 'bg-tsLightGrey' : 'bg-tsGreen'}`}
                disabled={!isChecked}
              >
                Checkout Now
              </button>
              <Link href='/subscribe' className='w-full-button bg-tsLightGrey mt-6'>Cancel</Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default OrderSummaryCards;