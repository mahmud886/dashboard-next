import LiveHeaderImage from "../../../assets/images/live/live-header.png";
import Breadcrumb from "../../Breadcumb.jsx";


const LiveHeader = () => {
  return (

    <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${LiveHeaderImage})`, maxHeight: '394px', height: '394px'}}>
      <div className="container h-full px-4 grid grid-cols-1 justify-between items-center">

        <div className="w-[100%] text-center">
          <h1
            className="text-[126px] font-bebas font-bold text-white tracking-wide">
            Live <span className='text-tsRed'>Tv</span>
          </h1>
          <div className='flex justify-center items-center'>
            <Breadcrumb/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveHeader;