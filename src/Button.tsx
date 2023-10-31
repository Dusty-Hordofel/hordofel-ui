import React from 'react'

type IButton = {
    text: string
    className?: string
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

export const Button = ({ text, className, children, showModal }: IButton) => {
    return (
        <>
            {showModal && (
                <div style={modalStyle} className='modal'>
                    <div className='modal-content'>
                        <p className={className}>Hello {text} !</p>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

