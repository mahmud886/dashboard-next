import React from 'react'
import fourZeroFourBanner from '../../../assets/images/error-404.svg'

const FourZeroFourTop = () => {
  return (
    <section className="fourzerofourarea h-screen flex justify-center items-center">
        <div className="fourzerofour text-center">
          <div className='w-full flex justify-center items-center'>
            <img className='w-[70%] md:w-[100%]' src={fourZeroFourBanner} alt="fourZeroFourBanner"/>
          </div>
          <h1 className='text-[28px] md:text-[36px] leading-none font-medium my-8 font-archivo'>Sorry, page not found</h1>
            <p className='mt-2 text-gray-700 text-[24px] md:text-[30px] leading-none font-normal font-archivo'>Unfortunately the page you are looking for does not exist</p>
            <button className="bg-red-700 text-white font-archivo font-normal text-2xl px-12 py-4 rounded-md mt-8 md:mt-16">Go back to home page</button>
        </div>
    </section>
  )
}

export default FourZeroFourTop