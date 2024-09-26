import ProfileBg from '../../../assets/images/profile.png'

// eslint-disable-next-line react/prop-types
const Profile = ({onEditClick}) => {
  return (
    <div className='md:pb-[50px]'>


      <div className='w-full border border-tsGrey rounded-xl px-4  py-5 md:py-11 shadow mt-5 relative'>
        {/* Edit Icon */}
        <div className='absolute top-8 right-8 cursor-pointer group' onClick={onEditClick}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
               className="icon">
            <path d="M9.35788 29.1124L2.88867 22.6432L20.7707 4.76123L27.24 11.2304L9.35788 29.1124Z"
                  className="fill-current text-gray-500 group-hover:text-tsRed"/>
            <path
              d="M31.4082 4.02805L27.9714 0.591336C27.134 -0.246092 25.7173 -0.186949 24.8068 0.723479L21.5781 3.95226L28.0473 10.4214L31.276 7.19268C32.1863 6.28226 32.2455 4.8654 31.4082 4.02805Z"
              className="fill-current text-gray-500 group-hover:text-tsRed"/>
            <path d="M2.28721 23.6606L0 31.9998L8.33835 29.7126L2.28721 23.6606Z"
                  className="fill-current text-gray-500 group-hover:text-tsRed"/>
          </svg>
        </div>
        <div className='md:flex items-center gap-10'>
          <div className='border-2 border-tsGrey p-2 rounded-full mb-8 md:mb-0'>
            <img className="rounded-full w-full" src={ProfileBg}
                 alt="Extra large avatar"/>
          </div>

          <div>
            <div className=' inline-flex items-start gap-3'>
              <div className='mt-[2px]'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.3441 18.8352C21.5246 17.416 22.3456 15.7336 22.7378 13.9303C23.1299 12.127 23.0816 10.2559 22.597 8.47515C22.1123 6.69445 21.2055 5.05657 19.9533 3.70009C18.7012 2.3436 17.1404 1.30841 15.4032 0.682076C13.6659 0.0557455 11.8032 -0.143294 9.97267 0.101794C8.14213 0.346882 6.3976 1.02889 4.88665 2.09012C3.3757 3.15135 2.14279 4.56058 1.2922 6.1986C0.441618 7.83663 -0.00161328 9.65525 4.41229e-06 11.5006C0.000625177 14.1833 0.946757 16.78 2.67238 18.8352L2.65594 18.8492C2.71348 18.9182 2.77924 18.9773 2.83842 19.0455C2.91241 19.1301 2.99214 19.2097 3.06859 19.2919C3.29875 19.5416 3.53549 19.7814 3.78374 20.0064C3.85937 20.0754 3.93746 20.1395 4.01391 20.2052C4.27695 20.4319 4.5474 20.6471 4.8277 20.8475C4.86387 20.8721 4.89675 20.9042 4.93292 20.9296V20.9198C6.85817 22.2735 9.15488 23 11.509 23C13.8632 23 16.1599 22.2735 18.0852 20.9198V20.9296C18.1213 20.9042 18.1534 20.8721 18.1904 20.8475C18.4699 20.6463 18.7411 20.4319 19.0042 20.2052C19.0806 20.1395 19.1587 20.0746 19.2344 20.0064C19.4826 19.7806 19.7193 19.5416 19.9495 19.2919C20.026 19.2097 20.1049 19.1301 20.1797 19.0455C20.238 18.9773 20.3046 18.9182 20.3622 18.8483L20.3441 18.8352ZM11.5082 4.9299C12.2398 4.9299 12.955 5.14667 13.5633 5.55279C14.1716 5.95892 14.6457 6.53616 14.9257 7.21152C15.2057 7.88689 15.2789 8.63004 15.1362 9.347C14.9935 10.064 14.6412 10.7225 14.1239 11.2394C13.6065 11.7563 12.9474 12.1083 12.2299 12.251C11.5123 12.3936 10.7686 12.3204 10.0927 12.0406C9.41673 11.7609 8.83902 11.2872 8.43256 10.6793C8.0261 10.0715 7.80915 9.35694 7.80915 8.62594C7.80915 7.64569 8.19888 6.70559 8.89259 6.01244C9.5863 5.3193 10.5272 4.9299 11.5082 4.9299ZM4.93785 18.8352C4.95211 17.7568 5.39074 16.7273 6.15884 15.9695C6.92694 15.2117 7.96275 14.7865 9.04218 14.786H13.9743C15.0537 14.7865 16.0895 15.2117 16.8576 15.9695C17.6257 16.7273 18.0643 17.7568 18.0786 18.8352C16.2758 20.4585 13.935 21.3568 11.5082 21.3568C9.08142 21.3568 6.74066 20.4585 4.93785 18.8352Z"
                    fill="#333333"/>
                </svg>
              </div>
              <div>
                <h2 className='text-[18px] md:text-[24px] text-tsBlack font-normal leading-none'>
                  John Doe
                </h2>
                <p className='text-[14px] md:text-[16px] font-normal text-tsLightGrey'>johndoe007</p>
              </div>
            </div>
            <div className='py-[30px]'>
              <h2 className='inline-flex items-start gap-3 text-[18px] md:text-[24px] text-tsBlack font-normal leading-none'>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.3441 18.8352C21.5246 17.416 22.3456 15.7336 22.7378 13.9303C23.1299 12.127 23.0816 10.2559 22.597 8.47515C22.1123 6.69445 21.2055 5.05657 19.9533 3.70009C18.7012 2.3436 17.1404 1.30841 15.4032 0.682076C13.6659 0.0557455 11.8032 -0.143294 9.97267 0.101794C8.14213 0.346882 6.3976 1.02889 4.88665 2.09012C3.3757 3.15135 2.14279 4.56058 1.2922 6.1986C0.441618 7.83663 -0.00161328 9.65525 4.41229e-06 11.5006C0.000625177 14.1833 0.946757 16.78 2.67238 18.8352L2.65594 18.8492C2.71348 18.9182 2.77924 18.9773 2.83842 19.0455C2.91241 19.1301 2.99214 19.2097 3.06859 19.2919C3.29875 19.5416 3.53549 19.7814 3.78374 20.0064C3.85937 20.0754 3.93746 20.1395 4.01391 20.2052C4.27695 20.4319 4.5474 20.6471 4.8277 20.8475C4.86387 20.8721 4.89675 20.9042 4.93292 20.9296V20.9198C6.85817 22.2735 9.15488 23 11.509 23C13.8632 23 16.1599 22.2735 18.0852 20.9198V20.9296C18.1213 20.9042 18.1534 20.8721 18.1904 20.8475C18.4699 20.6463 18.7411 20.4319 19.0042 20.2052C19.0806 20.1395 19.1587 20.0746 19.2344 20.0064C19.4826 19.7806 19.7193 19.5416 19.9495 19.2919C20.026 19.2097 20.1049 19.1301 20.1797 19.0455C20.238 18.9773 20.3046 18.9182 20.3622 18.8483L20.3441 18.8352ZM11.5082 4.9299C12.2398 4.9299 12.955 5.14667 13.5633 5.55279C14.1716 5.95892 14.6457 6.53616 14.9257 7.21152C15.2057 7.88689 15.2789 8.63004 15.1362 9.347C14.9935 10.064 14.6412 10.7225 14.1239 11.2394C13.6065 11.7563 12.9474 12.1083 12.2299 12.251C11.5123 12.3936 10.7686 12.3204 10.0927 12.0406C9.41673 11.7609 8.83902 11.2872 8.43256 10.6793C8.0261 10.0715 7.80915 9.35694 7.80915 8.62594C7.80915 7.64569 8.19888 6.70559 8.89259 6.01244C9.5863 5.3193 10.5272 4.9299 11.5082 4.9299ZM4.93785 18.8352C4.95211 17.7568 5.39074 16.7273 6.15884 15.9695C6.92694 15.2117 7.96275 14.7865 9.04218 14.786H13.9743C15.0537 14.7865 16.0895 15.2117 16.8576 15.9695C17.6257 16.7273 18.0643 17.7568 18.0786 18.8352C16.2758 20.4585 13.935 21.3568 11.5082 21.3568C9.08142 21.3568 6.74066 20.4585 4.93785 18.8352Z"
                    fill="#333333"/>
                </svg>

                johndoe@gmail.com
              </h2>
            </div>

            <div className=''>
              <h2 className='inline-flex items-start gap-3 text-[18px] md:text-[24px] text-tsBlack font-normal leading-none'>
                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20.9508 15.8503C20.7061 15.5897 19.8422 14.819 18.254 13.7995C16.6542 12.771 15.4743 12.1298 15.1358 11.9802C15.106 11.967 15.0731 11.9622 15.0408 11.9662C15.0084 11.9702 14.9777 11.983 14.9521 12.0032C14.4069 12.4284 13.4891 13.2093 13.4399 13.2515C13.122 13.5239 13.122 13.5239 12.8619 13.439C12.4044 13.289 10.9831 12.5343 9.7446 11.293C8.50613 10.0518 7.71251 8.59533 7.56251 8.13829C7.47673 7.87766 7.47673 7.87766 7.75001 7.55984C7.7922 7.51062 8.57363 6.59279 8.9988 6.04809C9.01896 6.02244 9.03175 5.99178 9.0358 5.95941C9.03985 5.92703 9.035 5.89417 9.02177 5.86434C8.87223 5.52543 8.23096 4.34603 7.2025 2.74616C6.18153 1.15847 5.41183 0.294547 5.15119 0.0498546C5.12728 0.0272853 5.09772 0.0115848 5.06562 0.00440749C5.03353 -0.00276981 5.0001 -0.00115808 4.96885 0.00907265C4.05779 0.32215 3.17877 0.721632 2.34378 1.20206C1.5377 1.67065 0.774566 2.20947 0.0632476 2.81225C0.0384172 2.83336 0.0198012 2.86083 0.00939602 2.89172C-0.00100918 2.9226 -0.00281101 2.95574 0.00418364 2.98757C0.102155 3.44414 0.570449 5.35011 2.02361 7.99016C3.50631 10.6846 4.53383 12.0651 6.71124 14.235C8.88864 16.4049 10.3127 17.4942 13.01 18.9769C15.6501 20.4301 17.557 20.8988 18.0126 20.9959C18.0445 21.0028 18.0777 21.001 18.1087 20.9906C18.1396 20.9802 18.1672 20.9616 18.1884 20.9368C18.7911 20.2255 19.3298 19.4624 19.7981 18.6563C20.2785 17.8213 20.678 16.9423 20.9911 16.0313C21.0012 16.0002 21.0027 15.9671 20.9956 15.9353C20.9885 15.9035 20.9731 15.8741 20.9508 15.8503Z"
                    fill="#333333"/>
                </svg>

                +88 017 1234 1234
              </h2>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;