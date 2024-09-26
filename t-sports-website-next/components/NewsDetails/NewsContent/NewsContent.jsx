import NewsDetails from '../../../assets/images/news/gallary/news-detail1.png'
import SideContent1 from '../../../assets/images/news/gallary/side-content/side-content1.png'
import SideContent2 from '../../../assets/images/news/gallary/side-content/side-content2.png'
import SideContent3 from '../../../assets/images/news/gallary/side-content/side-content3.png'
import SideContent4 from '../../../assets/images/news/gallary/side-content/side-content4.png'
import SideContent5 from '../../../assets/images/news/gallary/side-content/side-content5.png'
import Link from "next/link";

const NewsContent = () => {
  return (
    <div className='py-[40px]'>
      <div className='grid grid-cols-12 gap-5'>
        <div className='col-span-8 ml-[15%]'>
          <div>
            <img src={NewsDetails} alt="news-details"/>
            <h5 className='font-bengali2 text-[16px] font-normal py-3 border-b-2 border-tsGrey'>বিসিএলে খেলবেন এশিয়া কাপ জেতা যুব টাইগাররা</h5>
            <div className='py-12'>
              <div className='flex justify-center'>
                  <div className='w-[728px] bg-[#D9D9D9] text-[#808080] font-archivo font-semibold text-[55px] text-center'>
                    <p>Hello</p>
                 </div>
              </div>
              <p className='mt-[60px] font-bengali2 font-normal text-[20px] text-[#333333]'>
                রীতিমতো নেচে গেয়ে এশিয়া কাপ নিয়ে ঘরে ফিরেছে এশিয়া কাপ জেতা বাংলাদেশ অনূর্ধ্ব-১৯ দল। তবে খুব বেশি আনন্দের সুযোগ পাচ্ছে না দলটা, ঘোষণা হয়েছে দলটার ক্রিকেটীয় নতুন ব্যস্ততা। মঙ্গলবার টুর্নামেন্টের চার দলের স্কোয়াড ও সূচি ঘোষণা করে বাংলাদেশ ক্রিকেট বোর্ড। </p>
              <p className='my-[60px] font-bengali2 font-normal text-[20px] text-[#333333]'>
                দুবাইয়ে যুব এশিয়া কাপজয়ী অধিনায়ক মাহফুজুর রহমান রাব্বির পাশাপাশি বিসিএলের ওয়ানডে সংস্করণে আছেন আরও বেশ কয়েকজন এশিয়া কাপজয়ী ক্রিকেটার। তারা হলেন - জিসান আলম, আশিকুর রহমান শিবলী, আরিফুল ইসলাম, ওয়াসি সিদ্দিকী ও চৌধুরী মোহাম্মদ রিজওয়ান।
              </p>
            </div>
          </div>
        </div>

        {/*Side bar*/}

        <div className='col-span-4 border'>
          <div className='p-[40px]'>
            <h5 className='border-b-2 border-tsGrey pb-2 font-archivo text-[15px] font-normal'>Recent Posts</h5>
            <div className='max-h-[600px] overflow-y-scroll'>

              <Link href='/news-details'>
                <div
                  className='group flex gap-10 py-7 border-b-2 border-tsGrey hover:cursor-pointer transition-all duration-300'>
                  <div className='overflow-hidden'><img src={SideContent1} alt="side-content1"
                                                        className='rounded-md group-hover:scale-105 transition-all duration-300'/>
                  </div>
                  <div className='w-[40%]'>
                    <h6
                      className='font-bengali2 text-[15px] font-semibold mb-4 group-hover:text-tsRed transition-all duration-300'>উয়েফাকে
                      টেক্কা দিয়ে শেষ হাসি
                      মাদ্রিদ-বার্সার</h6>
                    <p
                      className='flex gap-2 items-center font-bengali2 text-[10px] text-tsLightGrey mt-5 group-hover:text-tsBlack transition-all duration-300'>
                  <span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.60133 9.98782C3.69128 9.98782 2.80166 9.71796 2.04497 9.21236C1.28829 8.70676 0.698521 7.98813 0.350258 7.14734C0.00199369 6.30656 -0.089128 5.38139 0.0884154 4.48881C0.265959 3.59624 0.704193 2.77636 1.3477 2.13286C1.99121 1.48935 2.81109 1.05111 3.70366 0.873572C4.59623 0.696028 5.5214 0.78715 6.36219 1.13541C7.20297 1.48368 7.9216 2.07344 8.4272 2.83013C8.9328 3.58681 9.20266 4.47643 9.20266 5.38649C9.20266 6.60684 8.71788 7.7772 7.85497 8.64012C6.99205 9.50304 5.82168 9.98782 4.60133 9.98782ZM4.60133 1.44249C3.82128 1.44249 3.05875 1.6738 2.41017 2.10717C1.76158 2.54055 1.25607 3.15652 0.957554 3.87719C0.659042 4.59786 0.580938 5.39086 0.733118 6.15592C0.885298 6.92099 1.26093 7.62374 1.81251 8.17532C2.36408 8.72689 3.06684 9.10252 3.8319 9.2547C4.59696 9.40688 5.38996 9.32878 6.11064 9.03027C6.83131 8.73176 7.44728 8.22624 7.88065 7.57766C8.31402 6.92907 8.54533 6.16654 8.54533 5.38649C8.54533 4.34048 8.1298 3.3373 7.39016 2.59766C6.65052 1.85802 5.64735 1.44249 4.60133 1.44249Z"
                        fill="#808080"/>
                      <path d="M6.10991 7.35849L4.27267 5.52124V2.42849H4.93V5.24845L6.57333 6.89507L6.10991 7.35849Z"
                            fill="#808080"/>
                    </svg>
                  </span>১২ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </Link>

              <Link href='/news-details'>
                <div className='group flex gap-10 py-7 border-b-2 border-tsGrey hover:cursor-pointer'>
                  <div className='overflow-hidden'><img src={SideContent2} alt="side-content2"
                                                        className='rounded-md group-hover:scale-105 transition-all duration-300'/></div>
                  <div className='w-[40%]'>
                    <h6
                      className='font-bengali2 text-[15px] font-semibold mb-4 group-hover:text-tsRed transition-all duration-300'>আইপিএলে
                      এবার আসছে
                      বাউন্সারের নতুন নিয়ম</h6>
                    <p
                      className='flex gap-2 items-center font-bengali2 text-[10px] text-tsLightGrey mt-5 group-hover:text-tsBlack transition-all duration-300'>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.60133 9.98782C3.69128 9.98782 2.80166 9.71796 2.04497 9.21236C1.28829 8.70676 0.698521 7.98813 0.350258 7.14734C0.00199369 6.30656 -0.089128 5.38139 0.0884154 4.48881C0.265959 3.59624 0.704193 2.77636 1.3477 2.13286C1.99121 1.48935 2.81109 1.05111 3.70366 0.873572C4.59623 0.696028 5.5214 0.78715 6.36219 1.13541C7.20297 1.48368 7.9216 2.07344 8.4272 2.83013C8.9328 3.58681 9.20266 4.47643 9.20266 5.38649C9.20266 6.60684 8.71788 7.7772 7.85497 8.64012C6.99205 9.50304 5.82168 9.98782 4.60133 9.98782ZM4.60133 1.44249C3.82128 1.44249 3.05875 1.6738 2.41017 2.10717C1.76158 2.54055 1.25607 3.15652 0.957554 3.87719C0.659042 4.59786 0.580938 5.39086 0.733118 6.15592C0.885298 6.92099 1.26093 7.62374 1.81251 8.17532C2.36408 8.72689 3.06684 9.10252 3.8319 9.2547C4.59696 9.40688 5.38996 9.32878 6.11064 9.03027C6.83131 8.73176 7.44728 8.22624 7.88065 7.57766C8.31402 6.92907 8.54533 6.16654 8.54533 5.38649C8.54533 4.34048 8.1298 3.3373 7.39016 2.59766C6.65052 1.85802 5.64735 1.44249 4.60133 1.44249Z"
                          fill="#808080"/>
                        <path d="M6.10991 7.35849L4.27267 5.52124V2.42849H4.93V5.24845L6.57333 6.89507L6.10991 7.35849Z"
                              fill="#808080"/>
                      </svg>
                    </span>১২ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </Link>

              <Link href='/news-details'>
                <div className='group flex gap-10 py-7 border-b-2 border-tsGrey hover:cursor-pointer'>
                  <div className='overflow-hidden'><img src={SideContent3} alt="side-content2"
                                                        className='rounded-md group-hover:scale-105 transition-all duration-300'/></div>
                  <div className='w-[40%]'>
                    <h6 className='font-bengali2 text-[15px] font-semibold mb-4 group-hover:text-tsRed transition-all duration-300'>দ্বিতীয় আইপিএল’ নিয়ে আসছে সৌদি আরব</h6>
                    <p className='flex gap-2 items-center font-bengali2 text-[10px] text-tsLightGrey mt-5 group-hover:text-tsBlack transition-all duration-300'>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.60133 9.98782C3.69128 9.98782 2.80166 9.71796 2.04497 9.21236C1.28829 8.70676 0.698521 7.98813 0.350258 7.14734C0.00199369 6.30656 -0.089128 5.38139 0.0884154 4.48881C0.265959 3.59624 0.704193 2.77636 1.3477 2.13286C1.99121 1.48935 2.81109 1.05111 3.70366 0.873572C4.59623 0.696028 5.5214 0.78715 6.36219 1.13541C7.20297 1.48368 7.9216 2.07344 8.4272 2.83013C8.9328 3.58681 9.20266 4.47643 9.20266 5.38649C9.20266 6.60684 8.71788 7.7772 7.85497 8.64012C6.99205 9.50304 5.82168 9.98782 4.60133 9.98782ZM4.60133 1.44249C3.82128 1.44249 3.05875 1.6738 2.41017 2.10717C1.76158 2.54055 1.25607 3.15652 0.957554 3.87719C0.659042 4.59786 0.580938 5.39086 0.733118 6.15592C0.885298 6.92099 1.26093 7.62374 1.81251 8.17532C2.36408 8.72689 3.06684 9.10252 3.8319 9.2547C4.59696 9.40688 5.38996 9.32878 6.11064 9.03027C6.83131 8.73176 7.44728 8.22624 7.88065 7.57766C8.31402 6.92907 8.54533 6.16654 8.54533 5.38649C8.54533 4.34048 8.1298 3.3373 7.39016 2.59766C6.65052 1.85802 5.64735 1.44249 4.60133 1.44249Z"
                          fill="#808080"/>
                        <path d="M6.10991 7.35849L4.27267 5.52124V2.42849H4.93V5.24845L6.57333 6.89507L6.10991 7.35849Z"
                              fill="#808080"/>
                      </svg>
                    </span>১৩ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </Link>

              <Link href='/news-details'>
                <div className='group flex gap-10 py-7 border-b-2 border-tsGrey hover:cursor-pointer'>
                  <div className='overflow-hidden'><img src={SideContent4} alt="side-content2"
                                                        className='rounded-md group-hover:scale-105 transition-all duration-300'/></div>
                  <div className='w-[40%]'>
                    <h6 className='font-bengali2 text-[15px] font-semibold mb-4 group-hover:text-tsRed transition-all duration-300'>পাকিস্তান থেকে সরিয়ে নেওয়া হতে পারে
                      চ্যাম্পিয়নস ট্রফি</h6>
                    <p className='flex gap-2 items-center font-bengali2 text-[10px] text-tsLightGrey mt-5 group-hover:text-tsBlack transition-all duration-300'>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.60133 9.98782C3.69128 9.98782 2.80166 9.71796 2.04497 9.21236C1.28829 8.70676 0.698521 7.98813 0.350258 7.14734C0.00199369 6.30656 -0.089128 5.38139 0.0884154 4.48881C0.265959 3.59624 0.704193 2.77636 1.3477 2.13286C1.99121 1.48935 2.81109 1.05111 3.70366 0.873572C4.59623 0.696028 5.5214 0.78715 6.36219 1.13541C7.20297 1.48368 7.9216 2.07344 8.4272 2.83013C8.9328 3.58681 9.20266 4.47643 9.20266 5.38649C9.20266 6.60684 8.71788 7.7772 7.85497 8.64012C6.99205 9.50304 5.82168 9.98782 4.60133 9.98782ZM4.60133 1.44249C3.82128 1.44249 3.05875 1.6738 2.41017 2.10717C1.76158 2.54055 1.25607 3.15652 0.957554 3.87719C0.659042 4.59786 0.580938 5.39086 0.733118 6.15592C0.885298 6.92099 1.26093 7.62374 1.81251 8.17532C2.36408 8.72689 3.06684 9.10252 3.8319 9.2547C4.59696 9.40688 5.38996 9.32878 6.11064 9.03027C6.83131 8.73176 7.44728 8.22624 7.88065 7.57766C8.31402 6.92907 8.54533 6.16654 8.54533 5.38649C8.54533 4.34048 8.1298 3.3373 7.39016 2.59766C6.65052 1.85802 5.64735 1.44249 4.60133 1.44249Z"
                          fill="#808080"/>
                        <path d="M6.10991 7.35849L4.27267 5.52124V2.42849H4.93V5.24845L6.57333 6.89507L6.10991 7.35849Z"
                              fill="#808080"/>
                      </svg>
                    </span>১২ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </Link>

              <Link href='/news-details'>
                <div className='group flex gap-10 py-7 border-b-2 border-tsGrey hover:cursor-pointer'>
                  <div className='overflow-hidden'><img src={SideContent5} alt="side-content2"
                                                        className='rounded-md group-hover:scale-105 transition-all duration-300'/></div>
                  <div className='w-[40%]'>
                    <h6 className='font-bengali2 text-[15px] font-semibold mb-4 group-hover:text-tsRed transition-all duration-300'>অবসরে যাচ্ছেন ভিন এলগার</h6>
                    <p className='flex gap-2 items-center font-bengali2 text-[10px] text-tsLightGrey mt-5 group-hover:text-tsBlack transition-all duration-300'>
                    <span>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M4.60133 9.98782C3.69128 9.98782 2.80166 9.71796 2.04497 9.21236C1.28829 8.70676 0.698521 7.98813 0.350258 7.14734C0.00199369 6.30656 -0.089128 5.38139 0.0884154 4.48881C0.265959 3.59624 0.704193 2.77636 1.3477 2.13286C1.99121 1.48935 2.81109 1.05111 3.70366 0.873572C4.59623 0.696028 5.5214 0.78715 6.36219 1.13541C7.20297 1.48368 7.9216 2.07344 8.4272 2.83013C8.9328 3.58681 9.20266 4.47643 9.20266 5.38649C9.20266 6.60684 8.71788 7.7772 7.85497 8.64012C6.99205 9.50304 5.82168 9.98782 4.60133 9.98782ZM4.60133 1.44249C3.82128 1.44249 3.05875 1.6738 2.41017 2.10717C1.76158 2.54055 1.25607 3.15652 0.957554 3.87719C0.659042 4.59786 0.580938 5.39086 0.733118 6.15592C0.885298 6.92099 1.26093 7.62374 1.81251 8.17532C2.36408 8.72689 3.06684 9.10252 3.8319 9.2547C4.59696 9.40688 5.38996 9.32878 6.11064 9.03027C6.83131 8.73176 7.44728 8.22624 7.88065 7.57766C8.31402 6.92907 8.54533 6.16654 8.54533 5.38649C8.54533 4.34048 8.1298 3.3373 7.39016 2.59766C6.65052 1.85802 5.64735 1.44249 4.60133 1.44249Z"
                          fill="#808080"/>
                        <path d="M6.10991 7.35849L4.27267 5.52124V2.42849H4.93V5.24845L6.57333 6.89507L6.10991 7.35849Z"
                              fill="#808080"/>
                      </svg>
                    </span>১২ ঘণ্টা আগে
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>



      </div>
    </div>
  );
};

export default NewsContent;