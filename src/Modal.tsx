import React from 'react'

interface IModal {
    children: React.ReactNode
    showModal: boolean
}

const modalStyle = {
    left: "50%",
    position: "fixed" as "fixed",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
};

export const Modal = ({ children, showModal }: IModal) => {
    return (
        <>
            {showModal && (
                <div style={modalStyle} className='modal relative'>
                    <div className='modal-content'>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

