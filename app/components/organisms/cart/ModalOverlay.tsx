

// import React, { Children } from 'react';
// import PopupModal from "./ModalOverlay";

// const ModalOverlay = (
//   open: boolean,
//   onclose: boolean,
//   chidren: React.ReactElement
// ): React.JSX.Element | undefined => {
//   if (!open) return;

//   return (
//     <div className="modal-overlay">
//       <PopupModal onClose={onclose}>{Children} </PopupModal>
//     </div>
//   );
// };

// export default ModalOverlay;
import React from "react";
import ReactDOM, {createPortal} from "react-dom";


const Modal = ({ onClose, children, title }) => {
    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

   


    const modalContent = (
        <div className="modal-overlay">
            <div className="modal-wrapper">
                <div className="modal">
                    <div className="modal-header">
                        <a href="#" onClick={handleCloseClick}>
                            x
                        </a>
                    </div>
                    {title && <h1>{title}</h1>}
                    <div className="modal-body">{children}</div>
                </div>
            </div>
        </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
    );
};

export default Modal