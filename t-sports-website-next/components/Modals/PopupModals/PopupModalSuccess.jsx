
import Modal from "../Modal.jsx";
import PopupSuccess from '../../../assets/images/popups/popup-success.png'
import Link from "next/link";

// eslint-disable-next-line react/prop-types
const PopupModalSuccess = ({isOpen, onClose}) => {

  return (
    <Modal isOpen={isOpen} onClose={onClose} portalId="modal-sucess" width="11/12 md:w-[450px]" height="md:h-[540px]">
      <div className="bg-white p-4 rounded-lg flex flex-col items-center">
        <img src={PopupSuccess} alt="Congrats!" className="w-[201px] h-[201px] object-cover mt-3"/>
        <div className='mx-[20%] text-center my-[40px]'>
          <h1 className="text-[36px] font-archivo font-bold mb-[15px]">Congrats!</h1>
          <p className="text-center text-[16px] leading-[22px] font-archivo text-tsLightGrey my-[15px]">You can now Enjoy Unlimited sports content for
            30 days!</p>
          <Link href='/profile' className="inline-flex items-center mt-auto font-archivo py-3 px-10 bg-tsRed text-white rounded-lg hover:bg-red-700 uppercase tracking-wider">Go
            to Profile
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default PopupModalSuccess;