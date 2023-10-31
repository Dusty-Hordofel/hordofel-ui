import React from 'react'

type ButtonProps = {
    text: string
    className?: string
    children?: React.ReactNode

} & React.ButtonHTMLAttributes<HTMLButtonElement>


// const buttonStyle = {
//     left: "50%",
//     position: "fixed",
//     bottom: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 1,
// };

const modalStyle = {
    left: "50%",
    position: "fixed" as "fixed", ,
    bottom: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1,
};

export const Button = ({ text, className, children }: ButtonProps) => {
    return (
        // <div style={{ left: "50%", position: "fixed", bottom: "50%", transform: "translate(-50%, -50%)", zIndex: 1, }} className='modal'>
        <div style={modalStyle} className='modal'>
            <div className='modal-content'>
                <p className={className}>Hello {text} !</p>
                {children}
            </div>
        </div>
    )
}

