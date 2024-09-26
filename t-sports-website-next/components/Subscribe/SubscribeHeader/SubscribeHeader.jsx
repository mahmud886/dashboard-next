import subscribe from "../../../assets/images/subscribe/subscribe.png";
import Breadcrumb from "../../Breadcumb.jsx";

const SubscribeHeader = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-[80px]"
             style={{backgroundImage: `url(${subscribe})`, height: '34vh'}}>
      <div className="container h-full px-4 grid grid-cols-1 justify-between items-center">

        <div className="max-w-[70%] mx-auto text-center">
          <h1
            className="block md:inline-flex justify-center items-center gap-2 text-[24px] leading-[22px] md:leading-[72px] lg:leading-[72px] md:text-[72px] lg:text-[72px] font-bebas text-tsWhite font-normal uppercase">
            <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.0214 0.857666L15.9043 7.29666L11.0107 0.857666L6.11704 7.29666L0 0.857666V17.599H22.0214V0.857666ZM2.44682 25.3258H19.5745C20.2235 25.3258 20.8458 25.0545 21.3047 24.5715C21.7636 24.0884 22.0214 23.4333 22.0214 22.7502V20.1746H0V22.7502C0 23.4333 0.257789 24.0884 0.716656 24.5715C1.17552 25.0545 1.79788 25.3258 2.44682 25.3258Z"
                fill="#F9B410"/>
            </svg>
            GET PREMIUM CONTENT ACCESS AT YOUR FINGERTIPS
          </h1>
          <div className='inline-flex items-center justify-center'>
            <Breadcrumb/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeHeader;