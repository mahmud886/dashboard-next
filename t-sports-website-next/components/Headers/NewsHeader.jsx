

import Breadcrumb from "../Breadcumb.jsx";
import Link from "next/link";
// eslint-disable-next-line react/prop-types
const NewHeader = ({heading, imgUrl, category}) => {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-[80px]" style={{ backgroundImage: `url(${imgUrl})`, height: '650px'}}>
      <div className="container h-full grid grid-cols-1 justify-between items-center">
        <Breadcrumb/>
        <div className="max-w-[70%] md:max-w-[50%] text-left">
          <div className='py-5 md:py-10'>
            <button className='inline-flex justify-center items-center py-2 px-5 md:py-3 md:px-7 bg-tsBlack text-tsWhite text-[16px] md:text-[22px] font-archivo font-normal'>{category}</button>
          </div>

          <h1 className="sm:leading-6 md:leading-[70px] text-[36px] md:text-[62px] lg:text-[62px] font-bengali2 text-tsWhite font-normal">
            {heading}
          </h1>
          <div className="mt-5 md:mt-10 flex flex-wrap gap-4 text-center">
            <Link href='/news-details'
              className="bg-tsRed hover:bg-red-700 text-tsWhite font-normal py-4 px-7 inline-flex items-center gap-2">
              <span>Read More</span>
              <svg width="33" height="12" viewBox="0 0 33 12" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M32.3339 6.67697C32.6101 6.40071 32.6101 5.95281 32.3339 5.67655L27.832 1.17467C27.5557 0.898409 27.1078 0.898409 26.8316 1.17467C26.5553 1.45092 26.5553 1.89883 26.8316 2.17509L30.8332 6.17676L26.8316 10.1784C26.5553 10.4547 26.5553 10.9026 26.8316 11.1788C27.1078 11.4551 27.5557 11.4551 27.832 11.1788L32.3339 6.67697ZM0.303711 6.88416H31.8337V5.46936H0.303711V6.88416Z"
                  fill="white"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewHeader;