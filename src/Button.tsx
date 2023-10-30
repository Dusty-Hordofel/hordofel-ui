import React from 'react'

type ButtonProps = {
    text: string
    className?: string
    // onClick: () => void
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text/*, onClick*/, className, ...props }: ButtonProps) => {
    return (
        <>
            {/* <button {...props} >{text}</button> */}
            <p className={className}>Hello {text} !</p>
        </>
    )
}

