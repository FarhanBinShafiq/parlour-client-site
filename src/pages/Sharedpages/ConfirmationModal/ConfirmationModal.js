import React from 'react';

const ConfirmationModal = ({title,message,closeModal, successButtonName,modalData, successAction}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="">
                        <label htmlFor="confirmation-modal"
                         className="btn btn-primary"
                         onClick={()=>successAction(modalData)}
                         >{successButtonName}</label>
                        <button onClick={closeModal} className="btn mx-3 btn-outline">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;