
import support from "../../../assets/images/support.png";
import Breadcrumb from "../../Breadcumb.jsx";

const SupportHeader = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat py-[80px]"
             style={{backgroundImage: `url(${support})`, height: '34vh'}}>
      <div className="mx-auto max-w-[90%] h-full px-4 grid grid-cols-1 justify-between items-center">

        <div className="max-w-[50%] mx-auto text-center">
          <h1
            className="text-[20px] leading-[18px] md:leading-[72px] lg:leading-[72px] md:text-[72px] lg:text-[72px] font-bebas text-tsWhite font-normal uppercase">
            T Sports Support
          </h1>
          <div className='inline-flex items-center justify-center'>
            <Breadcrumb/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportHeader;