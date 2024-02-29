import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { MdCancel } from "react-icons/md";

function Modal({ children, onClose }) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        }
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div onClick={ onClose } className="modal__overlay__container"></div>
            <div className="modal__outer__container">
                <div className="modal__inner__container">
                    <button onClick={ onClose } className="btn-close"><MdCancel /></button>
                    { children }
                </div>
            </div>
        </div>,
        document.querySelector('.modal')
    )
}

export default Modal;