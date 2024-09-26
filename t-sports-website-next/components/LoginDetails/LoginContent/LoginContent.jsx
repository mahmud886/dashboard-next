import React, {useState} from 'react';
import loginPageHeaderImage from '../../../assets/images/field.png';
import loginWithGoogle from '../../../assets/images/google.png';
import loginWithFacebook from '../../../assets/images/facebook.png';
import Navbar from '../../Navbar/Navbar';
import TermsAndConditionModal from "../../Modals/TermAndConditionModal/TermsAndConditionModal.jsx";

const LoginContent = () => {
  const [termsModal, setTermsModal] = useState(false)
  return (
    <section className="login-sports-channel-banner bg-cover bg-center h-screen bg-no-repeat" style={{ backgroundImage: `url(${loginPageHeaderImage})` }}>
        <Navbar isHomePage={true}/>
        <div className="login-content-area mx-auto max-w-[70%] md:flex justify-between gap-10 items-center h-full">
            <div className="login-content-area-left md:w-[50%]">
                <span className='font-archivo font-normal text-[44px] text-[#FAFAFA]'>Welcome to</span>
                <h6 className='font-archivo font-bold text-[42px] md:text-[80px] text-[#FAFAFA]'>T sports</h6>
                <p className='font-archivo font-normal text-[21px] text-[#FAFAFA]'>First ever sports channel in Bangladesh</p>
            </div>
            <div className="login-content-area-right md:w-[50%]">
                <span className='font-archivo font-normal text-[15px] text-[#FAFAFA]'>Please enter your Mobile Number to get OTP(One Time Passwaord)</span>
                <form>
                    <div>
                        <div className="form-group">
                            <div className="flex gap-3 items-center py-[18px]">
                                <button className="btn bg-white text-black p-3 rounded-lg" type="button">
                                    BD
                                </button>
                                <input type="number" inputMode="numeric" maxLength={11} minLength={11} autoComplete="off" className="form-control phone-input-field p-3 rounded-lg w-full" id="phone" placeholder="0000 0000000" name="phone" pattern="^[0-9\b]+$" defaultValue />
                            </div>

                            <div className="delete-account-popup cursor-pointer" onClick={() => setTermsModal(true)}>
                               <input type="button" className="btn btn-lg btn-otp bg-[#D00234] text-white p-3 rounded-lg w-full cursor-pointer" defaultValue="Generate OTP" />
                            </div>
                        </div>
                        <div className="others-share-platform text-center">
                            <p className='text-white font-archivo font-medium text-[20px] py-3'>- Or -</p>
                            <button className="btn-lg btn-google mb-5 bg-white w-full text-[#808080] flex justify-center items-center py-3 rounded-lg"><img src={loginWithGoogle} alt="google" className='pr-3'/>sign in with Google</button>
                            <button className="btn-lg btn-facebook bg-white w-full text-[#808080] flex justify-center items-center py-3 rounded-lg"><img src={loginWithFacebook} alt="facebook" className='pr-3'/>sign in with Facebook</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      <TermsAndConditionModal isOpen={termsModal} onClose={()=> setTermsModal(false)}/>
    </section>
  );
}

export default LoginContent;
