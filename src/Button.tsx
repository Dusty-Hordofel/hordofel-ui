import React from 'react'

type ButtonProps = {
    text: string
    className?: string

} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ text, className }: ButtonProps) => {
    return (
        <>
            <p className={className}>Hello {text} !</p>
        </>
    )
}

