import { useEffect, useRef, useState } from 'react';
import Logo from "../Logo.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import subscriptionNavIcon from "../../assets/images/subscription.svg";
import haederProfile from "../../assets/images/header-profile.png";
import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isHomePage }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({ sports: false, live: false, videos: false, profile:false });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRefs = {
    sports: useRef(null),
    live: useRef(null),
    videos: useRef(null),
  };

  const location = useLocation();

  const handleClickOutside = (event) => {
    Object.keys(dropdownRefs).forEach((key) => {
      if (dropdownRefs[key].current && !dropdownRefs[key].current.contains(event.target)) {
        setIsDropdownOpen((prevState) => ({ ...prevState, [key]: false }));
      }
    });
  };

  useEffect(() => {
    if (Object.values(isDropdownOpen).some((open) => open)) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const toggleDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({ ...prevState, [key]: !prevState[key] }));
  };

  const closeDropdown = (key) => {
    setIsDropdownOpen((prevState) => ({ ...prevState, [key]: false }));
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`w-full sticky md:fixed top-0 z-50 transition-all duration-1000 ${isScrolled ? 'bg-white shadow-md' : (isHomePage ? 'bg-transparent' : 'bg-white')}`}>
      <div className='container py-[30px]'>
        <div className='flex items-center justify-between h-16'>
          <Logo />

          <div className='hidden md:block'>
            <div className='flex items-baseline space-x-5'>
              <Link href='/'
                    className={`px-3 py-2 text-xl font-archivo font-semibold uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                Home
              </Link>
              <div className='relative' ref={dropdownRefs.sports}>
                <button
                  onClick={() => toggleDropdown('sports')}
                  className={`px-3 py-2 text-xl font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                  Sports News
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                </button>
                {isDropdownOpen.sports && (
                  <div className='absolute left-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                    <Link href='/sports-news'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('sports')}>
                      Cricket
                    </Link>
                    <Link href='/sports-news'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('sports')}>
                      Football
                    </Link>
                    <Link href='/sports-news'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('sports')}>
                      Tennis
                    </Link>
                    <Link href='/sports-news'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('sports')}>
                      Sports News
                    </Link>
                  </div>
                )}
              </div>
              <div className='relative' ref={dropdownRefs.live}>
                <button
                  onClick={() => toggleDropdown('live')}
                  className={`relative flex items-center px-3 py-2 text-xl font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                  <div className='absolute left-[-5px] w-3 h-3 bg-red-700 rounded-full blink'></div>
                  Live
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                </button>
                {isDropdownOpen.live && (
                  <div className='absolute left-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                    <Link href='/live-tv'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('live')}>
                      Live Match
                    </Link>
                    <Link href='/live-score'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('live')}>
                      Live Score
                    </Link>
                    <Link href='/live-schedule'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('live')}>
                      Live Schedule
                    </Link>
                  </div>
                )}
              </div>
              <div className='relative' ref={dropdownRefs.videos}>
                <button
                  onClick={() => toggleDropdown('videos')}
                  className={`px-3 py-2 text-xl font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                  Videos
                  <FontAwesomeIcon icon={faCaretDown} className='ml-2' />
                </button>
                {isDropdownOpen.videos && (
                  <div className='absolute left-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>

                    <Link href='/recent-series'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={() => closeDropdown('videos')}>
                      Recent Series
                    </Link>
                    <Link href='/category-wise-videos'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={() => closeDropdown('videos')}>
                      Highlights
                    </Link>
                    <Link href='/category-wise-videos'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={() => closeDropdown('videos')}>
                      Interviews
                    </Link>
                    <Link href='/category-wise-videos'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={() => closeDropdown('videos')}>
                      Magic Moments
                    </Link>
                    <Link href='/category-wise-videos'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={() => closeDropdown('videos')}>
                      Special Innings
                    </Link>
                    <Link href='/all-videos'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={() => closeDropdown('videos')}>
                      All videos
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to='/subscribe'
                className={`px-3 py-2 text-xl font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed flex items-center`}>
                <img src={subscriptionNavIcon} alt="subscriptionNavIcon" className="pr-1" />
                Subscribe
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>

            {
              !isLoggedIn ?
                <>
                  <Link
                      to='/login'
                      className='inline-flex px-8 py-3 font-archivo font-semibold text-white uppercase rounded-full bg-tsRed hover:bg-red-700 transition-all duration-300'>
                      Sign In
                    </Link>
                </> :
                <>
                   <div className='relative' ref={dropdownRefs.profile}>
                  <div
                    onClick={() => toggleDropdown('profile')}>
                    <img className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
                         src={haederProfile} alt="Bordered avatar"/>
                  </div>
                  {isDropdownOpen.profile && (
                    <div
                      className='absolute left-0 w-48 py-1 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                      <Link href='/profile'
                            className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                            onClick={() => closeDropdown('profile')}>
                        My Profile
                      </Link>

                      <Link href='/sign-out'
                            className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                            onClick={() => closeDropdown('profile')}>
                        Sign Out
                      </Link>
                    </div>
                  )}
                </div>
                </>
            }


          </div>

          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className= {`${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} focus:outline-none`}>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'
                   xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            <Link
              to='/'
              className={`block px-3 py-2 text-base font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}
              onClick={handleMenuItemClick}>
              Home
            </Link>
            <div className='relative' ref={dropdownRefs.sports}>
              <button
                onClick={() => toggleDropdown('sports')}
                className={`block px-3 py-2 text-base font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                Sports News
              </button>
              {isDropdownOpen.sports && (
                <div className='mt-2 space-y-1'>
                  <Link
                    to='/sports-news'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Cricket
                  </Link>
                  <Link
                    to='/sports-news'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Football
                  </Link>
                  <Link
                    to='/sports-news'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Tennis
                  </Link>
                  <Link
                    to='/sports-news'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Sports News
                  </Link>
                </div>
              )}
            </div>
            <div className='relative' ref={dropdownRefs.live}>
              <button
                onClick={() => toggleDropdown('live')}
                className={`block px-3 py-2 text-base font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                Live
              </button>
              {isDropdownOpen.live && (
                <div className='mt-2 space-y-1'>
                  <Link
                    to='/live-tv'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Live Match
                  </Link>
                  <Link
                    to='/live-score'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Live Score
                  </Link>
                  <Link
                    to='/live-schedule'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Live Schedule
                  </Link>

                </div>
              )}
            </div>
            <div className='relative' ref={dropdownRefs.videos}>
              <button
                onClick={() => toggleDropdown('videos')}
                className={`block px-3 py-2 text-base font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed`}>
                Videos
              </button>
              {isDropdownOpen.videos && (
                <div className='mt-2 space-y-1'>
                  <Link
                    to='/recent-series'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Recent Series
                  </Link>
                  <Link
                    to='/category-wise-videos'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Highlights
                  </Link>
                  <Link
                    to='/category-wise-videos'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Interviews
                  </Link>
                  <Link
                    to='/category-wise-videos'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Magic Moments
                  </Link>
                  <Link
                    to='/category-wise-videos'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    Special Innings
                  </Link>
                  <Link
                    to='/all-videos'
                    className={`leading-9 block px-4 py-2 text-base font-bebas font-normal uppercase ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-white hover:bg-red-700 hover:mx-2`}
                    onClick={handleMenuItemClick}>
                    All videos
                  </Link>
                </div>
              )}
            </div>
            <Link
              to='/subscribe'
              className={`block px-3 py-2 text-base font-archivo font-medium uppercase rounded-md ${isScrolled ? 'text-tsBlack' : (isHomePage ? 'text-white' : 'text-tsBlack')} hover:text-tsRed flex items-center`}
              onClick={handleMenuItemClick}>
              <img src={subscriptionNavIcon} alt="subscriptionNavIcon" className="pr-1"/>
              Subscribe
            </Link>

            {
              !isLoggedIn ?
              <>
                <Link
                  to='/login'
                  className='inline-flex px-8 py-3 font-archivo font-semibold text-white uppercase rounded-full bg-tsRed'
                  onClick={handleMenuItemClick}>
                  Sign In
                </Link>
              </>:
                <>
                  <div className='relative' ref={dropdownRefs.profile}>
                    <div
                      onClick={() => toggleDropdown('profile')}>
                      <img className="w-14 h-14 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 cursor-pointer"
                           src={haederProfile} alt="Bordered avatar"/>
                    </div>
                    {isDropdownOpen.profile && (
                      <div className='mt-2 space-y-1'>
                        <Link
                          to='/profile'
                          className='leading-9 block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2'
                          onClick={handleMenuItemClick}>
                          My Profile
                        </Link>
                        <Link
                          to='/sign-out'
                          className='block px-4 py-2 text-base font-bebas text-tsBlack font-normal uppercase hover:text-white hover:bg-red-700 hover:mx-2 leading-9'
                          onClick={handleMenuItemClick}>
                          Sign Out
                        </Link>
                      </div>
                    )}
                  </div>
                </>
            }

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
