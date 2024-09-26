import {useState} from "react";
import Link from "next/link";


const SubscriptionCard = () => {
  const [activeTab, setActiveTab] = useState('mySubscription');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-full mx-auto">
      <div className="border-b border-gray-200 mb-4">
        <ul className="flex justify-between items-center flex-wrap gap-4 md:gap-14 -mb-px" role="tablist">
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block py-4 px-4 text-[20px] md:text-[32px] font-medium text-center rounded-t-lg border-b-2 ${activeTab === 'mySubscription' ? 'text-tsBlack border-tsRed' : 'text-tsLightGrey border-transparent hover:text-tsBlack hover:border-tsRed'}`}
              onClick={() => handleTabClick('mySubscription')}
              type="button"
              role="tab"
              aria-controls="mySubscription"
              aria-selected={activeTab === 'mySubscription'}
            >
              My Subscription
            </button>
          </li>
          <li className="mr-2" role="presentation">
            <button
              className={`inline-block py-4 px-4 text-[20px] md:text-[32px] font-medium text-center rounded-t-lg border-b-2 ${activeTab === 'subscriptionHistory' ? 'text-tsBlack border-tsRed' : 'text-tsLightGrey border-transparent hover:text-tsBlack hover:border-tsRed'}`}
              onClick={() => handleTabClick('subscriptionHistory')}
              type="button"
              role="tab"
              aria-controls="subscriptionHistory"
              aria-selected={activeTab === 'subscriptionHistory'}
            >
              Subscription History
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div className={`rounded-lg mt-[30px] ${activeTab === 'mySubscription' ? '' : 'hidden'}`}
             id="mySubscription" role="tabpanel" aria-labelledby="mySubscription-tab">


          <div className='w-full border border-tsGrey rounded-xl px-4 md:px-10 py-5 md:py-16 shadow'>
            <div className='md:flex justify-between items-start gap-3'>
              <h1 className="font-bebas font-bold text-tsBlack leading-none tracking-wider text-[30px] md:text-[60px]">
                30 Days Pack</h1>
              <h6 className='mt-4 md:mt-0 font-archivo font-normal text-tsLightGrey leading-none text-[16px] md:text-[18px]'>
                30 Days Premium Content Access</h6>
            </div>
            <div className='flex justify-between items-end mt-[40px] md:mt-[100px]'>
              <h6 className='font-archivo font-normal text-tsLightGrey leading-none text-[16px] md:text-[20px]'>Validity: 4th March
                2024, 11.59PM</h6>
              <Link href='/'
                className='inline-flex items-center justify-center md:w-[unset] py-3 md:py-4 px-4 md:px-12 bg-tsRed tracking-wider text-white rounded-md text-[14px] md:text-[18px] uppercase hover:bg-red-700'>
                GO TO HOME
              </Link>
            </div>
          </div>


        </div>
        <div className={`rounded-lg mt-[30px] ${activeTab === 'subscriptionHistory' ? '' : 'hidden'}`}
             id="subscriptionHistory" role="tabpanel" aria-labelledby="subscriptionHistory-tab">
          <div className='grid grid-cols-1 gap-5'>
            <div className='w-full border border-tsGrey rounded-xl px-4 md:px-10 py-5 md:py-11 shadow'>
              <div className='flex justify-between items-center gap-3'>
                <div>
                  <h1
                    className="font-archivo font-bold text-tsBlack leading-none tracking-normal text-[22px] md:text-[30px] capitalize">
                    30 Days Pack</h1>
                  <h6
                    className='mt-4 md:mt-6 font-archivo font-normal text-tsLightGrey leading-none text-[16px] md:text-[20px]'>30
                    Days Premium Content Access</h6>
                </div>
                <h6
                  className='font-archivo font-normal text-tsLightGrey leading-none text-[14px] md:text-[18px]'>3rd Feb
                  2024</h6>
              </div>
            </div>

            <div className='w-full border border-tsGrey rounded-xl px-4 md:px-10 py-5 md:py-11 shadow'>
              <div className='flex justify-between items-center gap-3'>
                <div>
                  <h1
                    className="font-archivo font-bold text-tsBlack leading-none tracking-normal text-[22px] md:text-[30px] capitalize">
                    15 Days Pack</h1>
                  <h6
                    className='mt-4 md:mt-6 font-archivo font-normal text-tsLightGrey leading-none text-[16px] md:text-[20px]'>15
                    Days Premium Content Access</h6>
                </div>
                <h6
                  className='font-archivo font-normal text-tsLightGrey leading-none text-[14px] md:text-[18px]'>5th Feb
                  2024</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;