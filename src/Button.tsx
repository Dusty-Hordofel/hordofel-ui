import React from 'react'

type IButton = {
    children?: React.ReactNode
    showModal: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const modalStyle = {
    left: "50%",
    position: "fixed" as "fixed",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
};

export const Button = ({ children, showModal }: IButton) => {
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

