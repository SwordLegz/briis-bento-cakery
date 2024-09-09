import React from "react";
import { useSelector, useDispatch } from "react-redux";
import './Modal.css';

// const MODAL_STYLES = {
//     position: 'fixed',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     transition: '400ms ease-in',
//     backgroundColor: '#FFF',
//     padding: '50px',
//     zIndex: 1000
// }

// const OVERLAY_STYLE = {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, .7)',
//     zIndex: 1000,
// }

function Modal({ open, children, onClose }) {

    // const dispatch = useDispatch()
    // // let CakeBiteDetails = useSelector(store => store.currentCakeBite)

    // if (!open) return null
    
    // return (
        // <div className="modalDetails">
        //     <div style={OVERLAY_STYLE} />
        //     <div style={MODAL_STYLES}>
        //         {children}
        //         <br />
        //         <button className="closeModalBtn" onClick={onClose}>Close</button>
        //     </div>
        // </div>

    // )
}

export default Modal;

// import React from "react";
// import './Modal.css';
// // import cake from "./images/biscoff.jpg"

// const Modal = ({open, onClose}) => {
//     if (!open) return null;
//     return (
//         <div onClick={onClose} className="overlay">
//             <div onClick={(e) => {
//                 e.stopPropagation()
//             }} className="modalContainer">
//             <img src="./images/biscoff.jpg" alt="" />
//             <div className="modalRight">
//                 <p onClick={onClose} className="closeBtn">X</p>
//                 <div className="content">
//                     <p>Do you want a</p>
//                     <h1>$20 CREDT</h1>
//                     <p>for your first trade?</p>
//                 </div>
//                 <div className="btnContainer">
//                     <button className="btnPrimary">
//                         <span className="bold">YES</span>
//                     </button>
//                     <button className="btnOutline">
//                         <span className="bold">NO</span>
//                     </button>
//                 </div>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default Modal