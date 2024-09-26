import React from 'react'

const LiveScheduleList = () => {
  return (
    <div className="match-schedule-area text-center py-24 overflow-hidden">
        <span className="bg-[#D00234] text-[#FAFAFA] py-6 px-12 w-[323px] rounded-full font-archivo font-semibold text-2xl">২ এপ্রিল, মঙ্গলবার</span>
        <div className="container mx-auto bg-white border border-1 border-[#D7D7D7] mt-12 rounded-md">
            <div className="match-schedule-list-item md:flex justify-between p-14 border-b border-1 border-[#D7D7D7]">
                <div className="schedule-time text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">সকাল ১২ টা</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">(টি স্পোর্টস টিভি, টি স্পোর্টস অ্যাপ)</span>
                </div>
                <div className="schedule-counties text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">বাংলাদেশ-শ্রীলঙ্কা</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">১ম টেস্ট ৪র্থ দিন</span>
                </div>
                <div className="schedule-venue text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">চট্টগ্রাম টেস্ট</h6>
                </div>
            </div>

            <div className="match-schedule-list-item md:flex justify-between p-14 border-b border-1 border-[#D7D7D7]">
                <div className="schedule-time text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">রাত ৮ টা</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">(টি স্পোর্টস টিভি, টি স্পোর্টস অ্যাপ)</span>
                </div>
                <div className="schedule-counties text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">রয়্যাল চ্যালেঞ্জার্স বেঙ্গালুরু-পাঞ্জাব কিংস</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">১ম টেস্ট ৪র্থ দিন</span>
                </div>
                <div className="schedule-venue text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">চট্টগ্রাম টেস্ট</h6>
                </div>
            </div>


            <div className="match-schedule-list-item md:flex justify-between p-14 border-b border-1 border-[#D7D7D7]">
                <div className="schedule-time text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">রাত ৮ টা</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">(টি স্পোর্টস টিভি, টি স্পোর্টস অ্যাপ)</span>
                </div>
                <div className="schedule-counties text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">রয়্যাল চ্যালেঞ্জার্স বেঙ্গালুরু-পাঞ্জাব কিংস</h6>
                    <span className="text-[#333333] font-normal font-archivo text-xl">১ম টেস্ট ৪র্থ দিন</span>
                </div>
                <div className="schedule-venue text-left md:w-[33.33%]">
                    <h6 className="text-[#333333] font-semibold font-archivo text-2xl">চট্টগ্রাম টেস্ট</h6>
                </div>
            </div>

        </div>
    </div>

  )
}

export default LiveScheduleList