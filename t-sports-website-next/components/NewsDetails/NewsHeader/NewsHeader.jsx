import DeskLogo from '../../../assets/images/news/gallary/desk-logo.png'
import SocialShare from "../SocialShare/SocialShare.jsx";

const NewsHeader = () => {
  return (
    <div className='grid grid-cols-12 gap-6'>
      <div className='col-span-9 border-b-2 border-tsGrey pb-[50px]'>
        <h2 className='text-[40px] text-tsRed font-archivo font-semibold mb-3'>Cricket </h2>
        <h2 className='text-[50px] text-tsBlack font-bengali2 font-semibold mb-2'>বিসিএলে খেলবেন এশিয়া কাপ জেতা যুব
          টাইগাররা</h2>
        <div className='flex justify-between items-end'>
          <div>
            <div className='flex gap-3 items-center py-2'>
              <img src={DeskLogo} alt=""/>
              <h6 className='font-bengali2 text-[30px] text-tsLightGrey'>ডেস্ক রিপোর্ট</h6>
            </div>
            <p className='flex gap-2 items-center font-bengali2 text-[26px] text-tsLightGrey mt-5'>
              <span>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14.6363 29.2727C11.7415 29.2727 8.91176 28.4143 6.50483 26.806C4.09789 25.1977 2.22192 22.9119 1.11413 20.2374C0.00634172 17.563 -0.283506 14.6201 0.28124 11.7809C0.845985 8.94176 2.23996 6.33381 4.28689 4.28689C6.33381 2.23996 8.94176 0.845985 11.7809 0.28124C14.6201 -0.283506 17.563 0.00634172 20.2374 1.11413C22.9119 2.22192 25.1977 4.09789 26.806 6.50483C28.4143 8.91176 29.2727 11.7415 29.2727 14.6363C29.2727 18.5181 27.7306 22.2409 24.9858 24.9858C22.2409 27.7306 18.5181 29.2727 14.6363 29.2727ZM14.6363 2.09091C12.1551 2.09091 9.72955 2.82669 7.66647 4.2052C5.60339 5.5837 3.99541 7.54303 3.04587 9.83541C2.09634 12.1278 1.8479 14.6503 2.33197 17.0838C2.81604 19.5174 4.01087 21.7528 5.76538 23.5073C7.51989 25.2618 9.75527 26.4566 12.1888 26.9407C14.6224 27.4248 17.1449 27.1763 19.4373 26.2268C21.7296 25.2773 23.689 23.6693 25.0675 21.6062C26.446 19.5431 27.1818 17.1176 27.1818 14.6363C27.1818 11.3091 25.86 8.1181 23.5073 5.76538C21.1546 3.41266 17.9636 2.09091 14.6363 2.09091Z"
                    fill="#808080"/>
                  <path d="M19.435 20.909L13.5909 15.065V5.22727H15.6818V14.1972L20.909 19.435L19.435 20.909Z"
                        fill="#808080"/>
                </svg>
              </span>19 Dec, 2023, 6.34 pm
            </p>
          </div>
          <div>
            <SocialShare/>
          </div>
        </div>
      </div>
      <div className='col-span-3 border border-red-500'>Adds</div>
    </div>
  );
};

export default NewsHeader;