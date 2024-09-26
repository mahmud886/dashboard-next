
import FacebookIcon from '../../../assets/images/facebook.png'
import TwitterIcon from '../../../assets/images/twitter.png'
import YoutubeIcon from '../../../assets/images/youtube.png'
import InstagramIcon from '../../../assets/images/instagram.png'
import GoogleIcon from '../../../assets/images/google.png'
import GooglePlayStoreIcon from '../../../assets/images/gplaystore.png'
import ApplePlayStoreIcon from '../../../assets/images/aplaystore.png'
import { Link } from 'react-router-dom'

const FourZeroFourBottom = () => {
  return (
    <section className="footer-bottom-area mx-auto max-w-[90%] md:flex justify-between items-center border-t border-b border-1 border-[#D7D7D7] mb-36">
      <div className="footer-bottom-left md:w-[70%] py-14">
            <p className='pb-6 font-archivo text-2xl font-medium'>ফলো করুন</p>
            <div className="footer-bottom-right-iccon flex items-center gap-7">
                <Link href="https://www.facebook.com">
                <img src={FacebookIcon} alt="FacebookIcom" />
                </Link>
                <Link href="https://www.facebook.com">
                <img src={TwitterIcon} alt="TwitterIcon" />
                </Link>
                <Link href="https://www.facebook.com">
                <img src={YoutubeIcon} alt="YoutubeIcon" />
                </Link>
                <Link href="https://www.facebook.com">
                <img src={InstagramIcon} alt="InstagramIcon" />
                </Link>
                <Link href="https://www.facebook.com">
                <img src={GoogleIcon} alt="GoogleIcon" />
                </Link>
            </div>
      </div>
      <div className="footer-bottom-right md:w-[30%] py-14">
         <p className='md:text-center pb-6 font-archivo text-2xl font-medium'>লাইভ খেলা দেখতে টি স্পোর্টস <br/>মোবাইল অ্যাপ্স ডাউনলোড করুন</p>
         <div className="action-playstore-buttons grid grid-cols-2 gap-5">
            <Link href="facebook.com">
                <img src={GooglePlayStoreIcon} alt="GooglePlayStoreIcon" className='mb-4 md:mb-0' />
            </Link>
            <Link href="facebook.com">
                <img src={ApplePlayStoreIcon} alt="ApplePlayStoreIcon" />
            </Link>
         </div>
      </div>
    </section>
  )
}

export default FourZeroFourBottom