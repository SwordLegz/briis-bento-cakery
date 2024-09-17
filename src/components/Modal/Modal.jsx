// Modal.js
// Modal.js
import React from 'react';
import './Modal.css';
import CakeBiteDetails from "../CakeBiteItem/CakeBiteDetails";

const Modal = ({ isOpen, onClose, cakeBite }) => {
  if (!isOpen) return null;

  return (
    <div onClick={onClose} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-content">
        <button onClick={onClose} className="overlay"></button>
        {cakeBite && (
          <div className="modalRight"><CakeBiteDetails cakeBite={cakeBite} onClose={onClose} /> </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
