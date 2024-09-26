import LiveMatch from '../../../assets/images/live-match.png'
import LiveMatchLogo from '../../../assets/images/live-match-logo.png'
import LiveTvSlider from "../../Sliders/LiveTvSlider/index.jsx";
import img1 from '../../../assets/images/live/Live 1.png'
import img2 from '../../../assets/images/live/live 2.png'
import img3 from '../../../assets/images/live/Live 3.png'

const slides = [
  {
    "imgUrl": img1,
  },
  {
    "imgUrl": img2,
  },
  {
    "imgUrl": img3,
  }
]

const HomeLiveMatchSlider = () => {
  return (

      <div className='w-full bg-cover bg-no-repeat h-[80vh]' style={{ backgroundImage: `url(${LiveMatch})` }}>


        <div className='container py-[100px]'>
          <div className='flex justify-center items-center mb-10'>
            <img src={LiveMatchLogo} alt="Live Match Logo"/>
          </div>
            <LiveTvSlider slides={slides}/>
        </div>
      </div>
  );
};

export default HomeLiveMatchSlider;