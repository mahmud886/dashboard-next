import React from 'react';

const SingleMovie = () => {
  return (
    <div className="w-full h-[100vh] bg-gray-500 relative md:overflow-hidden text-white mb-44 md:mb-8">
      <div className="w-full h-[100vh] absolute z-0">
        <img src="http://103.68.104.71//Admin/main/images/tt22041854/screen//pGuxXuTPmpEtzEkRrYQ0rLgEJnI.jpg" alt
             className="w-full h-[100vh] object-cover"/>
      </div>
      <div className="w-full h-full absolute z-1"
           style={{background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1))'}}/>
      <div className="w-full h-full flex flex-col justify-between items-start absolute z-2 px-2.5 md:px-16 py-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row justify-start gap-2 md:gap-8">
            <figure className="mx-auto my-auto md:ml-0 ">
              <img className="rounded-[5px]"
                   src="http://103.68.104.71//Admin/main/images/tt22203026/poster//xkbL9BliHIZN4hjoyQeWt9v1rLY.jpg" alt
                   srcSet/>
            </figure>
            <a href="#"
               className="btn rounded-[8px]  bg-[#C1141E] h-[40px] px-10 text-white border-none hover:bg-[#b4111b] flex items-center flex md:hidden">
              <span>Play Now</span>
              <i className="video-controle-button fas fa-play pt-1"/>
            </a>
            <div className="text-white">
              <div className=" hideable flex items-center gap-x-2 md:gap-x-4 mt-1 text-[10px] md:text-[12px]">
                <a
                  className="bg-[rgba(250,251,255,.2)] border border-white rounded-[60px] px-[12px] md:px-[14px] py-[2px] md:py-[4px] hover:bg-[#e83566]"
                  href="#"><i className="fas fa-tags"/></a>
                <a
                  className="bg-[rgba(250,251,255,.2)] border border-white rounded-[60px] px-[12px] md:px-[14px] py-[2px] md:py-[4px] hover:bg-[#e83566]"
                  href="#">Thriller</a>
                <a
                  className="bg-[rgba(250,251,255,.2)] border border-white rounded-[60px] px-[12px] md:px-[14px] py-[2px] md:py-[4px] hover:bg-[#e83566]"
                  href="#">Crime</a>
              </div>
              <h3 className="my-1.5 md:my-4 text-[12px] md:text-[14px]"><i
                className="fas fa-clock me-2"/><span>1h 34m</span></h3>
              <h2 className="movie-title text-base md:text-4xl font-bold">Englemageren (2023)</h2>
              <div className=" hideable flex items-center gap-x-2 md:gap-x-4 text-[10px] md:text-[12px] my-1.5 md:my-4">
                <a
                  className="border border-white rounded-[4px] px-[10px] md:px-[12px] py-[2px] md:py-[4px] bg-[rgba(246,140,31,.5)]"
                  href="#">Hindi Dubbed</a>
                <a
                  className="border border-white rounded-[4px] px-[10px] md:px-[12px] py-[2px] md:py-[4px] bg-[rgba(246,140,31,.5)]"
                  href="#">2023</a>
                <a
                  className="border border-white rounded-[4px] px-[10px] md:px-[12px] py-[2px] md:py-[4px] bg-[rgba(246,140,31,.5)]"
                  href="#">HD-RIP</a>
                <span
                  className="border border-white rounded-[4px] px-[10px] md:px-[12px] py-[2px] md:py-[4px] bg-[rgba(246,140,31,.5)]">1h 34m</span>
              </div>
              <p className="text-xs tracking-[0.8px] text-ellipsis w-full md:w-[50%]">
                'The Angel Maker' is a psychological crime thriller following Laura, a cyber crimes detective pursuing a
                brutal serial killer.
              </p>
              <div className=" hideable flex items-center gap-x-2 md:gap-x-4  text-[12px] mt-2 md:mt-4">
                <a
                  className="bg-[#f68c1f] rounded-full w-[34px] md:w-[40px] h-[34px] md:h-[40px] flex items-center justify-center text-lg font-bold hover:bg-[#d97209]"
                  href="#"><i className="fa-regular fa-heart"/></a>
                <a
                  className="bg-[#f68c1f] rounded-full w-[34px] md:w-[40px] h-[34px] md:h-[40px] flex items-center justify-center text-lg font-bold hover:bg-[#d97209]"
                  href="#"><i className="fa-solid fa-copy"/></a>
                <a
                  className="bg-[#ca0a14] rounded-full w-[34px] md:w-[40px] h-[34px] md:h-[40px] flex items-center justify-center text-lg font-bold hover:bg-[#69050a]"
                  href="#"><i className="fa-solid fa-download"/></a>
              </div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center justify-evenly gap-8">
            <div
              className="vieo-controle-box w-[110px] h-[110px] bg-[#e70101] rounded-full flex justify-center items-center relative">
              <a className="player-rounded-Button text-white text-[30px]" title="Play Now" href="#"><i
                className="video-controle-button fas fa-play"/><span className="before"/><span className="after"/>
              </a>
            </div>
            <a
              className="w-[80px] h-[80px] bg-[hsla(0,0%,100%,.3)] rounded-full flex justify-center items-center text-white text-[20px]"
              href="#"><i className="fa-solid fa-volume-xmark"/></a>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col justify-between">
            <div className="flex justify-between items-center relative mt-2 ">
              <h3 className="text-white text-base md:text-xl leading-5 md:leading-7">People</h3>
              <div className>
                <div
                  className="swiper-button-next w-[10px] bg-transparent hover:bg-transparent hover:font-bold hover:text-[#ca0a14]"/>
                <div
                  className="swiper-button-prev left-[90%] md:left-[95%] w-[10px] bg-transparent hover:bg-transparent hover:font-bold hover:text-[#ca0a14]"/>
              </div>
            </div>
            <div className="w-[350px] md:w-[650px] lg:w-[800px]">
              {/* Swiper */}
              <div className="swiper mySwiper ">
                <div className="swiper-wrapper">
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">S. D. Vijay Milton</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                  <a href="#" className="swiper-slide card w-auto bg-transparent shadow-xl">
                    <div className="flex flex-col items-center gap-x-6">
                      <img
                        className="h-20 md:h-28 w-20 md:w-28 rounded-full border-4 border-transparent hover:border-4 hover:border-[hsla(0,0%,80%,.7)] object-cover transition-all duration-300 ease-in-out"
                        src="https://image.tmdb.org/t/p/w185//zDedofqLD0OQtRVbxr04KPytr2R.jpg" alt/>
                      <div>
                        <h3 className="text-sm leading-6 text-white">Karthi</h3>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-end items-center gap-4 md:gap-8">
            <div className="text-center">
              <p>IMDB</p>
              <h2 className="text-white text-stroke-2 text-5xl text-orange-500" style={{fontFamily: 'arial'}}>2</h2>
            </div>
            <div className="text-center">
              <p>Run Time</p>
              <h2 className="text-white text-stroke-2 text-5xl text-orange-500" style={{fontFamily: 'arial'}}>2h
                34m</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default SingleMovie;