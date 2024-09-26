import React, {useState} from 'react';
import footerBanner from '../../../assets/images/footerbg.png';
import Logo from '../../Logo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faYoutube, faInstagram, faTiktok, faXTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import ContentSearch from '../../Search/ContentSearch/ContentSearch.jsx';
import TermsAndConditionModal from "../../Modals/TermAndConditionModal/TermsAndConditionModal.jsx";
// import { faTelegram } from '@fortawesome/free-solid-svg-icons';



const FooterTop = () => {
  const [termsModal, setTermsModal] = useState(false)
  return (
    <section className="footer-area bg-cover bg-center h-full pt-32" style={{ backgroundImage: `url(${footerBanner})` }}>
        <div className='container pb-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b-2 border-[#AFAFAF] gap-4'>
            <div className='address-mail'>
                <div className="logo">
                   <Logo/>
                </div>
                <div className="address-mail">
                    <span className='text-white w-full flex items-center gap-8 font-archivo font-normal text-[18px] md:text-[27px] mt-12'>
                      <FontAwesomeIcon icon={faEnvelope} />
                      info@tsports.com
                    </span>
                    <div className='text-white w-full flex content-center gap-8 font-archivo font-normal text-[18px] md:text-[27px] mt-10'>
                        <FontAwesomeIcon icon={faTelegram} />
                        <span> Plot# 371/A, Block# D,
                        Bashundhara R/A, Dhaka,
                        Bangladesh</span>
                    </div>
                </div>
            </div>
            <div className='menu-list'>
               <div>
                    <h1 className='uppercase text-white text-[24px] md:text-[34px] font-medium font-bebas mb-4 md:mb-12'>Links</h1>
                    <ul>
                      <ul>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link href="/">Home</Link></li>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link href="/sports-news">Sports
                          News</Link></li>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link href="/live-tv">Live</Link>
                        </li>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link
                          to="/all-videos">Videos</Link></li>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link
                          to="/subscribe">Subscribe</Link></li>
                        <li className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'><Link
                          to="/advertisement">Advertisement</Link></li>
                      </ul>
                    </ul>
               </div>
            </div>
          <div className='menu-list'>
            <div>
              <h1 className='uppercase text-white text-[24px] md:text-[34px] font-medium font-bebas mb-4 md:mb-12'>About company</h1>
              <ul>
                {/* <li
                  className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'
                  onClick={() => setTermsModal(true)}
                >
                  Terms & Conditions
                </li> */}
                <li
                    className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'
                >
                    <Link href="/terms-condition">Privacy Policy</Link>
                </li>
                <li
                    className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'
                >
                    <Link href="/terms-condition">Terms & Conditions</Link>
                </li>
                <li
                  className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'>
                    <Link href="/refund-policy">Refund Policy</Link>
                </li>
                <li
                  className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer transition-all duration-500'>
                    <Link href="/support">Help Center</Link>
                </li>
                <li
                  className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer uppercase transition-all duration-500'>FAQ
                </li>
                <li
                  className='text-white font-archivo text-[18px] md:text-[27px] font-normal mb-6 hover:text-tsRed cursor-pointer uppercase transition-all duration-500'>
                  <Link href='/modals'>Modals</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='text-red-700'>
            <h1 className='uppercase text-white text-[24px] md:text-[34px] font-medium font-bebas mb-4 md:mb-12'>Support</h1>
                {/* <ContentSearch/> */}
                <h1 className='uppercase text-white text-2xl font-medium font-bebas mb-4'>Follow</h1>
                <div className='flex space-x-4'>
                    <a rel="stylesheet" href="#" className='text-white font-archivo font-medium w-12 h-12 flex items-center justify-center rounded-full border border-white hover:text-tsRed hover:border-tsRed' target='_blank'>
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <a rel="stylesheet" href="#" className='text-white font-archivo w-12 h-12 flex items-center justify-center rounded-full border border-white hover:text-tsRed hover:border-tsRed' target='_blank'>
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a rel="stylesheet" href="#" className='text-white font-archivo w-12 h-12 flex items-center justify-center rounded-full border border-white hover:text-tsRed hover:border-tsRed' target='_blank'>
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a rel="stylesheet" href="#" className='text-white font-archivo w-12 h-12 flex items-center justify-center rounded-full border border-white hover:text-tsRed hover:border-tsRed' target='_blank'>
                      <FontAwesomeIcon icon={faTiktok} />
                    </a>
                    <a rel="stylesheet" href="#" className='text-white font-archivo w-12 h-12 flex items-center justify-center rounded-full border border-white hover:text-tsRed hover:border-tsRed' target='_blank'>
                      <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                </div>
            </div>
        </div>
        <p className='text-center text-white font-archivo text-2xl font-noemal py-12'>© 2023 TSports | All Rights Reserved</p>

        <TermsAndConditionModal isOpen={termsModal} onClose={()=> setTermsModal(false)}/>

    </section>
  )
}

export default FooterTop