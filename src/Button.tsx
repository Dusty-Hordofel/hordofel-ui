import React from 'react'

type ButtonProps = {
    text: string
    className?: string

} & React.ButtonHTMLAttributes<HTMLButtonElement>


// const buttonStyle = {
//     left: "50%",
//     position: "fixed",
//     bottom: "50%",
//     transform: "translate(-50%, -50%)",
//     zIndex: 1,
// };

export const Button = ({ text, className }: ButtonProps) => {
    return (
        <div style={{ left: "50%", position: "fixed", bottom: "50%", transform: "translate(-50%, -50%)", zIndex: 1, }}>
            <p className={className}>Hello {text} !</p>
        </div>
    )
}

