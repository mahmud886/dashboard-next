import {useState} from "react";
import Modal from "./Modal.jsx";
import PopupModalSuccess from "./PopupModals/PopupModalSuccess.jsx";
import PopupModalFailure from "./PopupModals/PopupModalFailure.jsx";


const ModalPageIndex = () => {
  const [isModal1Open, setModal1Open] = useState(false);
  const [isModal2Open, setModal2Open] = useState(false);
  const [isModal3Open, setModal3Open] = useState(false);
  const [isModal4Open, setModal4Open] = useState(false);
  const [isModal5Open, setModal5Open] = useState(false);

  return (
    <div className="App">
      <button className="m-2 p-2 bg-blue-500 text-white" onClick={() => setModal1Open(true)}>Open Small Modal</button>
      <button className="m-2 p-2 bg-green-500 text-white" onClick={() => setModal2Open(true)}>Open Medium Modal</button>
      <button className="m-2 p-2 bg-red-500 text-white" onClick={() => setModal3Open(true)}>Open Large Modal</button>
      <button className="m-2 p-2 bg-teal-500 text-white" onClick={() => setModal4Open(true)}>Open Success Popup</button>
      <button className="m-2 p-2 bg-red-500 text-white" onClick={() => setModal5Open(true)}>Open Failure Popup</button>

      <Modal isOpen={isModal1Open} onClose={() => setModal1Open(false)} portalId="modal-root-1" size="small">
        <h1>Small Modal Content</h1>
      </Modal>

      <Modal isOpen={isModal2Open} onClose={() => setModal2Open(false)} portalId="modal-root-2" size="medium">
        <h1>Medium Modal Content</h1>
      </Modal>

      <Modal isOpen={isModal3Open} onClose={() => setModal3Open(false)} portalId="modal-root-3" size="large">
        <h1>Large Modal Content</h1>
      </Modal>


      <PopupModalSuccess isOpen={isModal4Open} onClose={()=> setModal4Open(false)}/>
      <PopupModalFailure isOpen={isModal5Open} onClose={()=> setModal5Open(false)}/>


    </div>
  );
};

export default ModalPageIndex;