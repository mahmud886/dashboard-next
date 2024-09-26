import React from 'react'
import TermsConHeaderImage from "../../../assets/images/termsconheader.png";
import Breadcrumb from "../../Breadcumb.jsx";

const PrivacyPolicyTop = () => {
  return (
    <section className="bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${TermsConHeaderImage})`, maxHeight: '320px', height: '320px'}}>
      <div className="container h-full px-4 grid grid-cols-1 justify-between items-center">

        <div className="w-[100%] text-center">
          <h1
            className="text-[70px] font-bebas font-medim text-white tracking-wide">
            Privacy <span className='text-tsRed'>Policy</span>
          </h1>
          <div className='flex justify-center items-center'>
            <Breadcrumb/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyTop