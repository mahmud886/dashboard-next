

const SupportForm = () => {
  return (
    <div className='container py-[80px]'>

      <div className='grid grid-cols-12'>


        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="" className='text-[24px] font-archivo font-normal '>
            Device Types :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className='w-full inline-flex items-center gap-2'>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="android" type="radio" name="radio1" className="hidden" checked/>
              <label htmlFor="android"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Android</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="ios" type="radio" name="radio1" className="hidden"/>
              <label htmlFor="ios"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                IOS</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="web" type="radio" name="radio1" className="hidden"/>
              <label htmlFor="web"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Web</label>
            </div>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="" className='text-[24px] font-archivo font-normal'>
            Login By :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className='w-full inline-flex items-center gap-2'>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="MSISDN" type="radio" name="radio2" className="hidden"/>
              <label htmlFor="MSISDN"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                MSISDN</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="gmail" type="radio" name="radio2" className="hidden" checked/>
              <label htmlFor="gmail"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Gmail</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="facebook" type="radio" name="radio2" className="hidden"/>
              <label htmlFor="facebook"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Facebook</label>
            </div>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="" className='text-[24px] font-archivo font-normal'>
            Premium Packs :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className='w-full inline-flex items-center gap-2 flex-wrap'>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="oneDayPack" type="radio" name="radio3" className="hidden"/>
              <label htmlFor="oneDayPack"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                One Day Pack</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="oneMonthPack" type="radio" name="radio3" className="hidden" checked/>
              <label htmlFor="oneMonthPack"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                One Month Pack</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="threeDaysPack" type="radio" name="radio3" className="hidden"/>
              <label htmlFor="threeDaysPack"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Three Days Pack</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="sevenDaysPack" type="radio" name="radio3" className="hidden"/>
              <label htmlFor="sevenDaysPack"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Seven Days Pack</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="fifteenDaysPack" type="radio" name="radio3" className="hidden"/>
              <label htmlFor="fifteenDaysPack"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Fifteen Days Pack</label>
            </div>

          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="" className='text-[24px] font-archivo font-normal'>
            Purchased By :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className='w-full inline-flex items-center gap-2'>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="bKash" type="radio" name="radio4" className="hidden" checked/>
              <label htmlFor="bKash"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                bKash</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="bankCard" type="radio" name="radio4" className="hidden"/>
              <label htmlFor="bankCard"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Bank Card</label>
            </div>
            <div className="flex items-center mr-4 mb-3 md:w-[250px]">
              <input id="others" type="radio" name="radio4" className="hidden"/>
              <label htmlFor="others"
                     className="inline-flex items-center cursor-pointer text-[24px] font-archivo font-normal">
                <span className="w-6 h-6 inline-block mr-4 rounded-full border border-tsRed flex-no-shrink"></span>
                Others</label>
            </div>
          </div>
        </div>


        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="paywithMSISDN" className='text-[24px] font-archivo font-normal'>
            Pay with MSISDN :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <input type="text" className="input-box" placeholder="ex: +8801 xxxxxxxxx"/>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="transactionID" className='text-[24px] font-archivo font-normal'>
            Transaction ID :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <input type="text" className="input-box" placeholder=""/>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="contactMSISDN" className='text-[24px] font-archivo font-normal'>
            Contact MSISDN :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <input type="text" className="input-box" placeholder="ex: +8801 xxxxxxxxx"/>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="contactEmail" className='text-[24px] font-archivo font-normal'>
            Contact Email :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <input type="text" className="input-box" placeholder=""/>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="problem" className='text-[24px] font-archivo font-normal'>
            Problem :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <select
              className="input-box">
              <option selected="" className='text-tsLightGrey font-archivo'>What problem you are facing?</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="problem" className='text-[24px] font-archivo font-normal mt-2'>
            Problem :
          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%]">
            <textarea id="textarea-label"
                      className="input-box"
                      rows="4" placeholder="Say hi..."></textarea>
          </div>
        </div>

        <div className='col-span-12 md:col-span-4 mt-2'>
          <label htmlFor="problem" className='text-[24px] font-archivo font-normal mt-2'>

          </label>
        </div>
        <div className='col-span-12 md:col-span-8 py-[10px]'>
          <div className="md:max-w-[75%] block md:flex items-center justify-center gap-5 md:gap-5">
            <button
              className='w-full inline-flex justify-center items-center py-3 bg-tsRed text-tsWhite rounded-md'>Accept
            </button>
            <button
              className='mt-5 md:mt-0 w-full inline-flex justify-center items-center py-3 bg-tsGrey text-tsBlack rounded-md'>Cancel
            </button>
          </div>
        </div>


      </div>
    </div>
  );
};

export default SupportForm;