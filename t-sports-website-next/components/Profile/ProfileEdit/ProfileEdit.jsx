import ProfileBg from "../../../assets/images/profile.png";
import ProfileEditImg from "../../../assets/images/profile_edit.png";
import ProfileDownloadImg from "../../../assets/images/download-profile.png";


// eslint-disable-next-line react/prop-types
const ProfileEdit = ({onCancel}) => {
  return (
    <div className='pb-[60px]'>
      <div className='w-full border border-tsGrey rounded-xl px-4 md:px-[50px] py-5 md:py-11 shadow mt-5'>


          <form action="">
            <div className='pb-[30px]'>
              <div className='grid grid-cols-1 items-center justify-center'>
                <div className='relative w-1/2 mx-auto'>
                  <img className="border-2 border-tsGrey p-2 mx-auto rounded-full" src={ProfileBg}
                       alt="Extra large avatar"/>
                  <div className='absolute top-3/4 -right-3 transform -translate-x-1/2 -translate-y-1/2'>
                    <img src={ProfileEditImg} alt="sports-channel-mobile-image"
                         className='p-3 bg-white rounded-full shadow-md'/>
                  </div>
                </div>

                <div className="flex justify-center gap-2 items-center w-[100%] mt-4">
                  <img src={ProfileDownloadImg} alt="sports-channel-mobile-image"
                       className="w-[18px] md:w-[20px] h-[18px] md:h-[px]"/>
                  <p className="text-red-700 font-archivo text-[20px] font-medium hover:text-red-700">Replace</p>
                </div>
              </div>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <div className="max-w-full space-y-3">
                <div className="relative">
                  <label htmlFor="name" className='text-[22px] font-archivo font-normal'>Full Name</label>
                  <input type="name"
                         className="text-[18px] mt-4 py-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-tsRed transition-all duration-300 focus:ring-0 outline-0"
                         placeholder="John Doe"/>

                </div>
              </div>
              <div className="max-w-full space-y-3">
                <div className="relative">
                  <label htmlFor="phoneNumber" className='text-[22px] font-archivo font-normal'>Phone Number</label>
                  <input type="name"
                         className="text-[18px] mt-4 py-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-tsRed transition-all duration-300 focus:ring-0 outline-0"
                         placeholder="+88017 111 222 33"/>
                </div>
              </div>
            </div>

            <div className="max-w-full space-y-3 mt-6">
              <div className="relative">
                <label htmlFor="userName" className='text-[22px] font-archivo font-normal'>User Name</label>
                <input type="name"
                       className="text-[18px] mt-4 py-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-tsRed transition-all duration-300 focus:ring-0 outline-0"
                       placeholder="johndoe@gmail.com"/>
              </div>
            </div>

            <div className="max-w-full space-y-3 mt-6">
              <div className="relative">
                <label htmlFor="userEmail" className='text-[22px] font-archivo font-normal'>Email</label>
                <input type="email"
                       className="text-[18px] mt-4 py-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-tsRed transition-all duration-300 focus:ring-0 outline-0"
                       placeholder="johndoe@gmail.com"/>
              </div>
            </div>

            <div className="max-w-full space-y-3 mt-6">
              <div className="relative">
                <label htmlFor="password" className='text-[22px] font-archivo font-normal'>Password</label>
                <input type="name"
                       className="text-[18px] mt-4 py-3 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 focus:border-t-transparent focus:border-x-transparent focus:border-b-2 focus:border-b-tsRed transition-all duration-300 focus:ring-0 outline-0"
                       placeholder="********"/>
              </div>
            </div>

          </form>





        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-[50px] md:mt-[100px] mb-[20px] md:mb-[40px]'>
          <button
            className='w-full bg-tsLightGrey text-[18px]  md:text-[28px] font-archivo capitalize py-4 px-10 hover:bg-tsGrey hover:text-tsBlack text-tsWhite rounded-md transition-all duration-300'
            onClick={onCancel}>cancel
          </button>
          <button
            className='w-full bg-tsRed text-[18px] md:text-[28px] font-archivo capitalize py-4 px-10 text-tsWhite hover:bg-red-700 rounded-md transition-all duration-300'>Update
          </button>
        </div>
      </div>


    </div>
  );
};

export default ProfileEdit;