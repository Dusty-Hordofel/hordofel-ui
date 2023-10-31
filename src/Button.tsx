import React from 'react'

type ButtonProps = {
    text: string
    className?: string
    children?: React.ReactNode

} & React.ButtonHTMLAttributes<HTMLButtonElement>

const modalStyle = {
    left: "50%",
    position: "fixed" as "fixed",
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
};

export const Button = ({ text, className, children }: ButtonProps) => {
    return (
        <div style={modalStyle} className='modal'>
            <div className='modal-content'>
                <p className={className}>Hello {text} !</p>
                {children}
            </div>
        </div>
    )
}

