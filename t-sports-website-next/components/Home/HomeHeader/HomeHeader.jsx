
import homeHeaderBanner from '../../../assets/images/field.png';
import homeBannerPlayerImage from '../../../assets/images/players.png';
import appleStore from '../../../assets/images/apple.png';
import googlePlayStoreIcon from '../../../assets/images/play.png';
import ContentSearch from '../../Search/ContentSearch/ContentSearch.jsx';
import Navbar from "../../Navbar/Navbar.jsx";



const HomeHeader = () => {
  return (
    <section className="home-header-area bg-cover bg-center h-screen relative" style={{ backgroundImage: `url(${homeHeaderBanner})` }}>
      <Navbar isHomePage={true}/>
      <div className="container h-[87vh] md:grid grid-cols-12 items-end">
        <div className="left-home-header-content md:col-span-4 flex items-center">
          <div>
            <h1 className='font-archivo text-[28px] md:text-[68px] text-white font-medium md:font-bold pb-5 border-b-2 border-[#74C169]'>
              First Ever Sports Channel In Bangladesh
            </h1>
            <p className='font-archivo text-[18px] md:text-[28px] font-normal text-white pt-8'>
              A Platform for Unlimited Sports Contents
            </p>
            <ContentSearch />
            <div className="playstore-buttons">
              <ul className='flex justify-between items-center gap-2 w-[100%] md:w-[550px]'>
                <li>
                  <img src={appleStore} alt="apple button" className=''/>
                </li>
                <li>
                  <img src={googlePlayStoreIcon} alt="playstore button" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-home-header-content md:col-span-8 flex items-center justify-end overflow-hidden">
          <img src={homeBannerPlayerImage} alt="player banner" className="max-w-full h-[35%] md:h-[80%] absolute bottom-0 right-0" />
        </div>
      </div>
    </section>
  );
};

export default HomeHeader;
